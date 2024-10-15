// script.js
const searchBar = document.getElementById('search-bar');
const placeholders = [
    'Search here...',
    'Find what you need...',
    'Type to search...',
    'Looking for something?'
];

let currentPlaceholderIndex = 0;

function changePlaceholder() {
    currentPlaceholderIndex = (currentPlaceholderIndex + 1) % placeholders.length;
    searchBar.placeholder = placeholders[currentPlaceholderIndex];
}

setInterval(changePlaceholder, 2000); // Change every 2 seconds
