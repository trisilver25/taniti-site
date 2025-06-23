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

    links.innerHTML = "<div class='searchbar'><label for='search'>Search</label><input type='text' id='search'> <button type='submit'>Submit</button>  <button type='button' onclick='cancelSearch()'>Cancel</button><div>"
}

function cancelSearch() {
    var links = document.getElementById("links");
    var icon = document.getElementsByClassName("icon")[0];

    links.innerHTML = "<li><a class='hover active' href='index.html'>Home</a></li><li><a class='hover' href='lodging.html'>Lodging</a></li><li><a class='hover' href='enter.html'>Entertainment</a></li><li><a class='hover' href='food.html'>Food</a></li><li><a class='hover' href='trans.html'>Transportation</a></li>"

    var iconDisplay = icon ? window.getComputedStyle(icon).display : 'none';
    if (iconDisplay === 'block') {
        links.innerHTML += "<li><a class='hover' id='search-link' href='#' onclick='displaySearch()'>Search</a></li>";
    } else {
        links.innerHTML += "<li><a class='hover' id='search-link' href='#' onclick='displaySearch()'><img src='assets/searchIcon.svg'></a></li>";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const myDiv = document.getElementById('title');
    const checkScreenSize = () => {
        if (!myDiv) return;
        if (window.innerWidth < 601) {
            myDiv.classList.add('centered');
            myDiv.classList.remove('top-left');
        } else {
            myDiv.classList.add('top-left');
            myDiv.classList.remove('centered');
        }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
});