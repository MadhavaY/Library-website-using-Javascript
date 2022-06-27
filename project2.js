console.log("Javascript file");


// Constructor 
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Construcotr to display 
function Display() {

}

// Add methods to display prototypes 

Display.prototype.add = function (book) {

    console.log("Adding to UI");
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                       <td>${book.name}</td>
                       <td>${book.author}</td>
                       <td>${book.type}</td>
                     </tr>`;

    tableBody.innerHTML += uiString;


};

// implementing clear function 
Display.prototype.clear = function () {
    let libraryform = document.getElementById('libraryform');

    libraryform.reset();

};


// Implementing the validate function 
Display.prototype.validate = function (book) {

    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}

Display.prototype.show = function (type, displaymessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message! :</strong> ${displaymessage}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    
    </div>`

    setTimeout(() => {
        message.innerHTML = '';
    }, 2000);
}

Display.prototype.saveData = function(){
    let bookname = document.getElementById('bookname');
    let author = document.getElementById('author');
    let fiction = document.getElementById('fiction');
    let selfhelp = document.getElementById('selfhelp');
    let nonfiction = document.getElementById('nonfiction');
    let history = document.getElementById('history');

    let Name = localStorage.getItem("Name");
    let Author = localStorage.getItem("Author");
    let Type = localStorage.getItem("Type");


    if(Name == null && Author==null && Type==null ){
        Nameobj=[];
        Authorobj=[];
        Typeobj=[];
    }
    else{
        Nameobj=JSON.parse(Name);
        Authorobj=JSON.parse(Author);
        Typeobj=JSON.parse(Type);
    }


    Nameobj.push(bookname.value);
    Authorbj.push(author.value);
    // Typeobj.push(.value);

    localStorage.setItem();
    localStorage.setItem();
    localStorage.setItem();

}



// Add Submit even listener to form libraryform

let libraryform = document.getElementById('libraryform');

libraryform = addEventListener('submit', libraryformsubmit);

function libraryformsubmit(e) {

    console.log("You have submitted library form.");
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;
    let type;

    let fiction = document.getElementById('fiction');
    let selfhelp = document.getElementById('selfhelp');
    let nonfiction = document.getElementById('nonfiction');
    let history = document.getElementById('history');

    if (fiction.checked) {
        type = fiction.value;
    }

    else if (selfhelp.checked) {
        type = selfhelp.value;
    }
    else if (nonfiction.checked) {
        type = nonfiction.value;
    }
    else if (history.checked) {
        type = history.value;
    }









    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();



    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('Success', 'Your book has been added successfuly');
    }
    else {
        // show error to the user 
        display.show('Danger', 'Sorry you cannot add this book');

    }

    e.preventDefault();

}