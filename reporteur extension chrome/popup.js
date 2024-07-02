document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      let tab = tabs[0];
      let url = new URL(tab.url);
      let domain = url.hostname;
  
      document.getElementById('domain').textContent = domain;
    });
  });