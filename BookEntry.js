let books = [];

function addBook(book) {
  let table = $("#BookTable tbody");
  table.append(
    `<tr id="${book.id}">
                  <td>${book.Title}</td>  
                  <td>${book.Author}</td>
                  <td>${book.Age}</td>
                  <td>${book.Genre}</td>
                  <td>${book.Language}</td>
                  <td>${book.Section}</td>
                  <td>
                  <button class="btn btn-primary editBtn" data-id="${book.id}">
                  <span class="glyphicon glyphicon-edit"</span></button>
                  <button class="btn btn-sm btn-danger deleteBtn" data-id="${book.id}">
                  <span class="glyphicon glyphicon-trash"></span></button> 
                  </td>
            `)
}

function clearForm() {
  $("#Title").val("");
  $("#Author").val("");
  $("#Age").val("");
  $("#Genre").val("");
  $("#Language").val("");
  $("#Section").val("");
}

function generateID() {
  return Math.floor(Math.random() * 100000);
}

$(document).on("click", "#clearBtn", function () {
  clearForm();
});

$("#libraryForm").submit(function (e) {
  e.preventDefault();
  let book = {
    id: generateID(),
    Title: $("#Title").val(),
    Author: $("#Author").val(),
    Age: $("#Age").val(),
    Genre: $("#Genre").val(),
    Language: $("#Language").val(),
    Section: $("#Section").val(),

  };
  books.push(book);
  addBook(book);
  setTimeout(clearForm, 5000);
});

$("editForm").submit(function (e) {
  e.preventDefault();

  let bookId = $("#editBookId").val();
  let bookIndex = books.findIndex((book) => book.id == bookId);
  let book = book[bookIndex];

  book.Title = $("editBookTitle").val();
  book.Author = $("editAuthor").val();
  book.Age = $("editAge").val();
  book.Language = $("editLanguage").val();
  book.Genre = $("editGenre").val();
  book.Section = $("editSection ").val();

  let row = $(`#${book.id}`);
  row.find("td:eq(0)").text(book.Title);
  row.find("td:eq(0)").text(book.Author);
  row.find("td:eq(0)").text(book.Genre);
  row.find("td:eq(0)").text(book.Age);
  row.find("td:eq(0)").text(book.Language);
  row.find("td:eq(0)").text(book.Section);

  $("#editModal").modal("hide");
});

$(document).on("click", "#editBtn", function () {
  let bookId = $(this).data("id");
  let bookIndex = books.findIndex((book) => b00k.id == bookId);
  let book = books[bookIndex];

  $("#editBookTitle").val(book.Title);
  $("#editAuthor").val(book.Author);
  $("#editAge").val(book.Age);
  $("#editGenre").val(book.Genre);
  $("#editLanguage").val(book.Language);
  $("#editSection").val(book.Section);
  $("#editBookId").val(book.id);

  $("#editModal").modal("show");

});

$(document).on("click", "#clsBtn", function () {

  $("#editModal").modal("hide");
});

$(document).on("click", "#deleteBtn", function () {
  let bookId = $(this).data("id");
  let bookIndex = books.findIndex((book) => b00k.id == bookId);
  let book = books[bookIndex];

  if (confirm(`Are you sure you want to delete ${book.title}`)) {
    book.splice(bookIndex, 1);
    $(`#${book.id}`).remove();
  }
});