const searchBar = document.querySelector("#search");
const outputSearch = document.querySelector(".search-output");

function fetchSearch() {
    console.log(searchBar.value);

    fetch('https://api.npoint.io/c70a348be555e6c62200')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('JSON data loaded:', data); // Debugging

            if (document.querySelector(".div-output")) {
                document.querySelector(".div-output").remove();
            }

            let div = document.createElement("div");
            div.classList.add("div-output");
            outputSearch.appendChild(div);

            for (let i = 0; i < data.site.length; i++) {
                if (data.site[i].name.toLowerCase().includes(searchBar.value.toString().toLowerCase())) {
                    console.log(data.site[i].name)
                    console.log(data.site[i].domain)
                    console.log(data.site[i].submited)

                    let site = document.createElement("article");
                    let name = document.createElement("p");
                    let domain = document.createElement("p");
                    let submit = document.createElement("p");

                    div.appendChild(site);
                    site.appendChild(name);
                    site.appendChild(domain);
                    site.appendChild(submit);

                    name.textContent = data.site[i].name;
                    domain.textContent = data.site[i].domain;
                    submit.textContent = data.site[i].submited;
                }
            }
        })
        .catch(error => console.error('Erreur lors du chargement du fichier JSON:', error));

}

searchBar.addEventListener("change", fetchSearch);
fetchSearch()