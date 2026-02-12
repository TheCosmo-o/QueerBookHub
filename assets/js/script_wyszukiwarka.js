const searchInput = document.getElementById("searchInput");
const books = document.querySelectorAll(".book");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();

  books.forEach(book => {
    const title = book.querySelector("h3")?.textContent.toLowerCase() || "";
    const author = book.querySelector(".author")?.textContent.toLowerCase() || "";

    if (title.includes(query) || author.includes(query)) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
});
