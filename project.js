document.getElementById("searchButton").addEventListener("click", function() {
    let query = document.getElementById("search").value;

    if (query.trim() !== "") {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
});

document.getElementById("search").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("searchButton").click();
    }
});

document.getElementById("luckyButton").addEventListener("click", function() {
window.location.href = "https://doodles.google";
});