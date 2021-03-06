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
        td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            toolName = td.getContent || td.innerText;
            if ( toolName.toUpperCase().indexOf(filter) > -1 ) {
                tr[i].classList.remove('hidden');
            } else {
                tr[i].classList.add('hidden');

            }
        }
    }
}

function filterTags(query) {
    var filter, table, i, tagName, tr;
    filter = query.slice(1,).toUpperCase();
    table = document.getElementById('toolTime');

    tr = table.getElementsByTagName('tr');
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[1];
        if (td) {
            tagName = td.getContent || td.innerHTML
            if ( tagName.toUpperCase().indexOf(filter) > -1 ) {
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