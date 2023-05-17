var BookName
let BookList = {};
localStorage.clear();

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
      let Book = [];
      Book['Title'] = document.getElementById("Title").value;
      document.getElementById("Title").value = "";
      Book['Author'] = document.getElementById("Author").value;
      document.getElementById("Author").value = "";
      Book['Age'] = document.getElementById("Age").value;
      Book['Category'] = document.getElementById("Category").value;
      Book['Language'] = document.getElementById("Language").value;
      Book['Section'] = document.getElementById("Section").value;
      return Book
}

function Home() {

      window.open("BookList.html");



}

function AllBooks() {

      document.getElementById("BookList").innerHTML = BookList;
}