function fetchBooks() {
  fetch("data.json")
    .then((response) => response.json())
    .then((jsonData) => {
      const container = document.getElementById("books");
      console.log(jsonData);
      jsonData.map((book) => {
        const bookCard = document.createElement("div");
        bookCard.className = "bookCard";
        bookCard.textContent = `
        Автор: ${book.author}`;
        container.append(bookCard);

        const bookTitle = document.createElement("h3");
        bookTitle.textContent = `Название: ${book.title}`;
        bookCard.appendChild(bookTitle);

        const bookYear = document.createElement("p");
        bookYear.textContent = `Год: ${book.year}`;
        bookTitle.appendChild(bookYear);

        const bookCover = document.createElement("img");
        bookCover.src = book.imageLink;
        bookCover.className = "img";
        bookCard.prepend(bookCover);
      });
    });
}

fetchBooks();
