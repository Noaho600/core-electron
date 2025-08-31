const input = document.getElementById("search-box");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let query = input.value.trim();
    if (!query) return;

    // If it looks like a URL, navigate directly
    if (query.startsWith("http")) {
      window.location.href = query;
    } else if (query.includes(".")) {
      window.location.href = "https://" + query;
    } else {
      // Otherwise, search Google
      window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query);
    }
  }
});
