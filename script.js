function displayNav() {
    var links = document.getElementById("links");
    if (links.style.display === 'block') {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }

    var searchLink = document.getElementById("search-link");
    searchLink.innerHTML = "Search";
    searchLink.classList.add("hover");
}

function displaySearch() {
    var links = document.getElementById("links");

    links.innerHTML = "<div class='searchbar'><label for='search'>Search</label><input type='text' id='search'> <button type='button'>Search</button>  <button type='button' onclick='cancelSearch()'>Cancel</button><div>"
}

function cancelSearch() {
    var links = document.getElementById("links");
    var icon = document.getElementsByClassName("icon")[0];

    links.innerHTML = "<li><a class='hover active' href='index.html'>Home</a></li><li><a class='hover' href='logding.html'>Lodging</a></li><li><a class='hover' href='enter.html'>Entertainment</a></li><li><a class='hover' href='food.html'>Food</a></li><li><a class='hover' href='transportation.html'>Transportation</a></li>"

    var iconDisplay = icon ? window.getComputedStyle(icon).display : 'none';
    if (iconDisplay === 'block') {
        links.innerHTML += "<li><a class='hover' id='search-link' href='#' onclick='displaySearch()'>Search</a></li>";
    } else {
        links.innerHTML += "<li><a class='hover' id='search-link' href='#' onclick='displaySearch()'><img src='assets/searchIcon.svg'></a></li>";
    }
}