var BookName
function Submit() {
      BookName = document.getElementById("Title").value;
      console.log(BookName);
      let $BookName = {};
      console.log($BookName);
      $BookName = NewBook($BookName);
      console.log(BookName, $BookName);
    
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

