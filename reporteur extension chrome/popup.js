document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let tab = tabs[0];
    let url = new URL(tab.url);
    let domain = url.hostname;
    
    document.getElementById('domain').textContent = domain;

    fetch('../assets/data/data.json')
      .then(response => response.json())
      .then(data => {
        let siteExists = data.site.some(site => site.domain === domain);
        if (siteExists) {
          document.getElementById('message').textContent = 'Le site existe dans la base de données.';
        } else {
          document.getElementById('message').textContent = 'Le site n\'existe pas dans la base de données.';
        }
      })
      .catch(error => console.error('Erreur lors du chargement du fichier JSON:', error));
  });
});