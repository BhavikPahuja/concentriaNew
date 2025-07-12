const script = document.createElement('script');
script.src = chrome.runtime.getURL('utils/apiHooks.js');
(document.head || document.documentElement).appendChild(script);
script.onload = () => script.remove();

window.addEventListener('apiMonitor', (event) => {
  const { type, extra } = event.detail;

  const emojiMap = {
    geolocation: '📍',
    clipboard: '📋',
    deviceOrientation: '🎮',
    permissions: '🔐',
    cut: '✂️',
    copy: '📋',
    paste: '📥',
    microphone: '🎙️',
    camera: '📷',
    download: '📁'
  };
  const emoji = emojiMap[type] || '🛡️';

  showOverlay(emoji);

  const log = {
    type,
    timestamp: new Date().toISOString(),
    url: location.href,
    ...(extra || {})
  };

  try {
    if (chrome && chrome.runtime && chrome.runtime.id) {
      chrome.runtime.sendMessage({ action: 'logEvent', log })
        .then(response => {
          // Optionally log success
        })
        .catch(err => {
          console.warn('[content] Failed to send message to background:', err);
        });
    }
  } catch (e) {
    console.warn('[content] Extension context invalidated or unavailable:', e);
  }
});

function showOverlay(emoji) {
  let el = document.getElementById('api-monitor-emoji');
  if (!el) {
    el = document.createElement('div');
    el.id = 'api-monitor-emoji';
    Object.assign(el.style, {
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      fontSize: '24px',
      background: 'white',
      padding: '5px',
      zIndex: 9999,
      borderRadius: '8px',
      boxShadow: '0 0 6px rgba(0,0,0,0.2)'
    });
    document.body.appendChild(el);
  }
  el.textContent = emoji;

  // Remove after 1.5 seconds
  clearTimeout(window._apiMonitorEmojiTimeout);
  window._apiMonitorEmojiTimeout = setTimeout(() => {
    if (el && el.parentNode) el.parentNode.removeChild(el);
  }, 1500);
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message && message.action === 'showDownloadEmoji') {
    showOverlay('📁');
  }
});