var BookName
var BookList
function Submit() {
      BookName = document.getElementById("Title").value;
      console.log(BookName);
      let $BookName = {};
      console.log($BookName);
      $BookName = NewBook($BookName);
      console.log(BookName, $BookName);
      BookList[0] = "<br> <a id='" + BookName + "'href='SelBook.html'>" + Bookname + " - " + $BookName[Author] + " </a> <br>;
      BookList.sort();

}

function NewBook(array) {
      let Book = [];
      Book['Title'] = document.getElementById("Title").value;
      Book['Author'] = document.getElementById("Author").value;
      Book['Age'] = document.getElementById("Age").value;
      Book['Category'] = document.getElementById("Category").value;
      Book['Language'] = document.getElementById("Language").value;
      Book['Section'] = document.getElementById("Section").value;
      return Book
}

function Home() {
      window.open("Booklist.html")
}

function AllBooks() {
      document.getElementById("BookList").innerHTML = BookList;
}