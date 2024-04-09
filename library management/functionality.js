let serarchInputEl = document.getElementById('searchInput');

let searchResultsContainer = document.getElementById('searchResults');
const spinner = document.getElementById('spinner');


function createandappendresults(results) {
    spinner.classList.add('d-block');
    let {
        imageLink,
        author
    } = results;

    let imageel = document.createElement('img');
    imageel.src = imageLink;
    searchResultsContainer.appendChild(imageel);

    let headingauthor = document.createElement('p');
    headingauthor.textContent = author;
    searchResultsContainer.appendChild(headingauthor);
}


function displayresults(search_results) {
    for (let results of search_results) {
        createandappendresults(results);
    }
}

function searchresultvalue(event) {
    if (event.key === 'Enter') {
        let title = serarchInputEl.value;
        console.log(title);
        let options = {
            method: "GET"
        };
        let url = "https://apis.ccbp.in/book-store?title=" + title;
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayresults(search_results);
                spinner.classList.remove('d-block');
            });
    }
}
serarchInputEl.addEventListener('keydown', searchresultvalue);