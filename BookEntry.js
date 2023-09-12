class Library {
      constructor(Title, Author, Age, Category, Language, Section, Image) {
            this.Title = Title;
            this.Author = Author;
            this.Age = Age;
            this.Category = Category;
            this.Language = Language;
            this.Section = Section;
      }
}

class Display {
      add(bookoflibrary) {
            console.log("Adding to UI");
            let tableBody = document.getElementById('tableBody');
            let uiString = `<tr>
                            <td>${bookoflibrary.Title}</td>
                            <td>${bookoflibrary.Author}</td>
                            <td>${bookoflibrary.Age}</td>
                            <td>${bookoflibrary.Category}</td>
                            <td>${bookoflibrary.Language}</td>
                            <td>${bookoflibrary.Section}</td>
                        </tr>`;
            tableBody.innerHTML += uiString;
      }

      clear() {
            let libraryForm = document.getElementById('libraryForm');
            libraryForm.reset();
      }

      validate(bookoflibrary) {
            if (bookoflibrary.Title.length < 2 || bookoflibrary.Author.length < 2) {
                  return false
            }
            else {
                  return true;
            }
      }

      show(type, displayMessage) {
            let message = document.getElementById('message');
            let boldText;
            if (type === 'success') {
                  boldText = 'Success';
            }
            else {
                  boldText = 'Error!';
            }
            message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${boldText}:</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>`;
            setTimeout(function () {
                  message.innerHTML = ''
            }, 5000);

      }
}

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {

      console.log('You have submitted library form');

      let Title = document.getElementById('Title').value;
      let Author = document.getElementById('Author').value;
      let Age = document.getElementById('Age').value;
      let Category = document.getElementById('Category').value;
      let Language = document.getElementById('Language').value;
      let Section = document.getElementById('Section').value;



      let bookoflibrary = new Library(Title, Author, Age, Category, Language, Section);
      console.log(bookoflibrary);
      localStorage.setItem("BookList", bookoflibrary);
      window.open("BookList.html")
      localStorage.getItem("BookList", bookoflibrary);
      let display = new Display();

      if (display.validate(bookoflibrary)) {

            display.add(bookoflibrary);
            display.clear();
            display.show('success', 'Your book has been successfully added')
      }
      else {
            // Show error to the user
            display.show('danger', 'Sorry you cannot add this book');
      }

      e.preventDefault();
}




/*
function Submit() {
      BookName = document.getElementById("Title").value;
      console.log(BookName);
      let $BookName = {};
      console.log($BookName);
      $BookName = NewBook($BookName);
      console.log($BookName["Author"]);
      console.log(BookName)
      BookList[0] = '<br><a id="' + BookName + '" href="SellBook.html">' + BookName + ' ' + $BookName["Author"] + '</a> <br>';
      BookList.sort;
      localStorage.setItem("BookList", BookList);

}

function NewBook(array) {
      document.getElementById("Title").value = "";
      document.getElementById("Author").value = "";
      document.getElementById("Age").value = "";
      document.getElementById("Category").value = "";
      document.getElementById("Language").value = "";
      document.getElementById("Section").value = "";
      document.getElementById("Image").value = "";
}

function Home() {
      window.open("BookList.html");
}

function AllBooks() {
      document.getElementById("BookList").innerHTML = BookList;
}
*/