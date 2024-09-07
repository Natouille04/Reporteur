const round = document.querySelector(".color-round");

document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let tab = tabs[0];
    let url = new URL(tab.url);
    let domain = url.hostname;

    console.log('Current domain:', domain); // Debugging

    document.getElementById('domain').textContent = domain;

    fetch('https://api.npoint.io/c70a348be555e6c62200')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log('JSON data loaded:', data); // Debugging
        let site = data.site.find(site => site.domain === domain);
        if (site) {
          if (site.submited < 25) {
            round.style.backgroundColor = "green";
            document.getElementById('notation').textContent = "Ok";
          } 

          else if (site.submited >= 25 && site.submited < 50) {
            round.style.backgroundColor = "orange";
            document.getElementById('notation').textContent = "A risque";
          } 
          
          else if (site.submited >= 50) {
            round.style.backgroundColor = "red";
            document.getElementById('notation').textContent = "Dangereux";
          }
        }
        
        else {
          document.getElementById('notation').textContent = "Inconnu";
        }
      })
      .catch(error => console.error('Erreur lors du chargement du fichier JSON:', error));
  });
});
