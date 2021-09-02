function queryHandler(query) {
    if (query.startsWith("+")) {
        filterTags(query);
    } else {
        filterTools(query);
    }
}


function filterTools(query) {
    var filter, table, i, toolName, tr;

    filter = query.toUpperCase();
    table = document.getElementById('toolTime');

    tr = table.getElementsByTagName('tr');
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[1];
        if (td) {
            toolName = td.getContent || td.innerText;
            if (toolName.toUpperCase().indexOf(filter) > -1) {
                tr[i].classList.remove('hidden');
            } else {
                tr[i].classList.add('hidden');

            }
        }
    }
}

function filterTags(query) {
    var filter, table, i, tagName, tr, searchBar;
    filter = query.slice(1,).toUpperCase();
    table = document.getElementById('toolTime');
    searchBar = document.getElementById('searchTools');
    searchBar.value = '+' + filter.toLowerCase();

    tr = table.getElementsByTagName('tr');
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[2];
        if (td) {
            tagName = td.getContent || td.innerHTML
            if (tagName.toUpperCase().indexOf(filter) > -1) {
                tr[i].classList.remove('hidden');
            } else {
                tr[i].classList.add('hidden');
            }
        }
    }
}

function resetFilter() {
    var table, searchbox;

    table = document.getElementById('toolTime');
    tr = table.getElementsByTagName('tr');
    for (i = 0; i < tr.length; i++) {
        tr[i].classList.remove('hidden');
    }
    searchbox = document.getElementById('searchTools');
    searchbox.value = '';
}

function clickSearch() {
    var searchquery = window.location.hash.substr(1);
    if (searchquery != null && searchquery != undefined) {
        var src = document.getElementById('searchTools');
        src.value = searchquery;
        queryHandler(searchquery);
    }
}

// bulma navbar toggle
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });