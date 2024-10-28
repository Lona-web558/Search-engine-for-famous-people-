// script.js

// List of famous people
const famousPeople = [
    { name: "Albert Einstein", info: "Theoretical physicist known for the theory of relativity." },
    { name: "Marie Curie", info: "Renowned physicist and chemist who conducted pioneering research on radioactivity." },
    { name: "Nelson Mandela", info: "Anti-apartheid revolutionary and political leader who served as President of South Africa." },
    { name: "Leonardo da Vinci", info: "Renaissance artist and polymath known for masterpieces like the Mona Lisa." },
    { name: "William Shakespeare", info: "Considered one of the greatest writers in the English language." },
    { name: "Henry Ford", info: "Founder of the Ford Motor Company and the pioneer of modern assembly lines." }
];

// Function to filter and display results
function searchFamousPeople() {
    const query = document.getElementById('searchBox').value.toLowerCase();
    const resultsContainer = document.getElementById('results');

    // Clear previous results
    resultsContainer.innerHTML = '';

    // Filter famous people based on the search query
    const results = famousPeople.filter(person => person.name.toLowerCase().includes(query));

    // Display results
    if (results.length > 0) {
        results.forEach(person => {
            const div = document.createElement('div');
            div.className = 'card mt-2';
            div.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${person.name}</h5>
                    <p class="card-text">${person.info}</p>
                </div>
            `;
            resultsContainer.appendChild(div);
        });
    } else {
        const noResults = document.createElement('div');
        noResults.className = 'alert alert-warning';
        noResults.innerText = 'No results found.';
        resultsContainer.appendChild(noResults);
    }
}

// Add event listener to the search box
document.getElementById('searchBox').addEventListener('input', searchFamousPeople);