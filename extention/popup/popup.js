import {
  getCookies,
  setCookie,
  deleteCookie,
  deleteAllCookies
} from '../utils/cookieUtils.js';

document.getElementById('logsTab').onclick = () => switchTab('logs');
document.getElementById('cookiesTab').onclick = () => switchTab('cookies');

function switchTab(tab) {
  document.getElementById('logsTab').classList.toggle('active', tab === 'logs');
  document.getElementById('cookiesTab').classList.toggle('active', tab === 'cookies');
  document.getElementById('logsSection').classList.toggle('hidden', tab !== 'logs');
  document.getElementById('cookiesSection').classList.toggle('hidden', tab !== 'cookies');
  if (tab === 'cookies') loadCookies();
}

// Render logs: newest first
function renderLogs() {
  chrome.storage.local.get('logs', (data) => {
    const logs = data.logs || [];
    const tbody = document.getElementById('logsContent');
    tbody.innerHTML = '';
    logs.slice().reverse().forEach(log => {
      const row = document.createElement('tr');
      // Truncate URL to 25 characters for display, show full URL in tooltip
      const displayUrl = log.url.length > 25 ? log.url.slice(0, 25) + '...' : log.url;
      row.innerHTML = `
        <td>${new Date(log.timestamp).toLocaleString()}</td>
        <td>${log.type}</td>
        <td class="url-scroll" title="${log.url}">${displayUrl}</td>`;
      tbody.appendChild(row);
    });
  });
}
renderLogs();

document.getElementById('downloadLogs').onclick = async () => {
  const { logs = [] } = await chrome.storage.local.get('logs');
  downloadJSON(logs, 'logs.json');
};

document.getElementById('downloadCookies').onclick = async () => {
  const cookies = await getDomainCookies();
  downloadJSON(cookies, 'cookies.json');
};

document.getElementById('deleteAllCookies').onclick = async () => {
  const cookies = await getDomainCookies();
  await deleteAllCookies(cookies);
  loadCookies();
};

// NEW: Clear all logs button
document.getElementById('clearAllLogs').onclick = async () => {
  await chrome.storage.local.set({ logs: [] });
  renderLogs();
  alert('All logs cleared!');
};

// NEW: Open dashboard button
document.getElementById('openDashboard').onclick = () => {
  // Replace with your actual dashboard URL
  chrome.tabs.create({ url: 'https://your-frontend-dashboard.com/' });
};

async function loadCookies() {
  const cookies = await getDomainCookies();
  const tbody = document.getElementById('cookiesContent');
  tbody.innerHTML = '';
  cookies.forEach(cookie => {
    const row = document.createElement('tr');
    const url = (cookie.secure ? 'https://' : 'http://') + cookie.domain.replace(/^\./, '') + cookie.path;
    row.innerHTML = `
      <td>${cookie.name}</td>
      <td><input value="${cookie.value}" id="v-${cookie.name}"></td>
      <td>${cookie.domain}</td>
      <td>${cookie.path}</td>
      <td>
        <button onclick="update('${cookie.name}', '${url}')">Save</button>
        <button onclick="remove('${cookie.name}', '${url}')">Del</button>
      </td>`;
    tbody.appendChild(row);
  });
}

async function getDomainCookies() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const url = new URL(tab.url);
  return getCookies(url.hostname);
}

window.update = async (name, url) => {
  const val = document.getElementById(`v-${name}`).value;
  await setCookie({ url, name, value: val });
  alert('Updated');
};

window.remove = async (name, url) => {
  await deleteCookie(url, name);
  loadCookies();
};

function downloadJSON(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}