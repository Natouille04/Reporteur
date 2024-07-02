const searchBar = document.querySelector("#search");

function fetchSearch() {
    console.log(searchBar.value);
}

searchBar.addEventListener("change", fetchSearch);