import { config } from "./config.js";

const API_URL = config.API_URL;

chrome.downloads.onCreated.addListener((downloadItem) => {
  chrome.storage.local.get({ logs: [] }, (data) => {
    const log = {
      type: "download",
      timestamp: new Date().toISOString(),
      url: downloadItem.url,
      filename: downloadItem.filename,
    };
    const updated = [...data.logs, log];
    chrome.storage.local.set({ logs: updated });
  });
});

chrome.downloads.onCreated.addListener((downloadItem) => {
  chrome.storage.local.get({ logs: [] }, (data) => {
    const log = {
      type: "download",
      timestamp: new Date().toISOString(),
      url: downloadItem.url,
      filename: downloadItem.filename,
    };
    const updated = [...data.logs, log];
    chrome.storage.local.set({ logs: updated }, () => {
      console.log("[background] Download log stored:", log);

      // NEW: Notify content script in the active tab to show emoji
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0] && tabs[0].id) {
          chrome.tabs.sendMessage(tabs[0].id, { action: "showDownloadEmoji" });
        }
      });
    });
  });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Log receipt for debugging
  console.log("[background] Received message:", message);

  if (message.action === "logEvent" || message.type) {
    const log = message.log || message; // Accept both formats

    chrome.storage.local.get({ logs: [] }, (data) => {
      const updated = [...data.logs, log];
      chrome.storage.local.set({ logs: updated }, () => {
        // Optional: confirm storage
        console.log("[background] Log stored:", log);
        sendResponse({ status: "ok" });
      });
    });

    // Optional: send to backend
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(log),
    }).catch((e) => console.error("[background] Backend error:", e));

    return true; // Keep service worker alive for async sendResponse
  }
});
