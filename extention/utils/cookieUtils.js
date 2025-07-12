export function getCookies(domain) {
  return new Promise(res => {
    chrome.cookies.getAll({ domain }, res);
  });
}

export function setCookie(details) {
  return new Promise(res => {
    chrome.cookies.set(details, res);
  });
}

export function deleteCookie(url, name) {
  return new Promise(res => {
    chrome.cookies.remove({ url, name }, res);
  });
}

export async function deleteAllCookies(cookies) {
  for (const cookie of cookies) {
    const protocol = cookie.secure ? 'https://' : 'http://';
    const url = protocol + cookie.domain.replace(/^\./, '') + cookie.path;
    await deleteCookie(url, cookie.name);
  }
}
