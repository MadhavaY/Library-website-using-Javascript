console.log('Es 6 version');

class Book {


    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;

    }
}


class Display {
    add(book) {

        console.log("Adding to UI");
       let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                           <td>${book.name}</td>
                           <td>${book.author}</td>
                           <td>${book.type}</td>
                         </tr>`;
    
        tableBody.innerHTML += uiString;
    
    
    };
    clear() {
        let libraryform = document.getElementById('libraryform');
    
        libraryform.reset();
    
    };

    validate(book) {

        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }


    show(type, displaymessage) {
        let message = document.getElementById('message');

        let boldText;
        if (type === 'Success'){

            boldText = 'Success';
        }
        else{
            boldText = 'Error!';
        }


        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>${boldText} :</strong> ${displaymessage}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        
        </div>`
    
        setTimeout(() => {
            message.innerHTML = '';
        }, 4000);
    }
    
}


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
        display.show('Danger', 'The name of book and author must be greater 2 characters');

    }

    e.preventDefault();

}