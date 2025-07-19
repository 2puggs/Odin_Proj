const myLibrary = [];
// [ {tite, author, pages, id}, {title, author, pages, id} .... ]

function Book(title, author, pages,id) {
    //object onstructor, book objects should have unique is crypto.randomUUID()
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
}// end Book

function getDialog(){
    const dialog = document.createElement('dialog');
    dialog.classList.add('custom-dialog');
    const dialogTitle = document.createElement("h2");
    dialogTitle.textContent = "Welcome to the Library";
    dialog.append(dialogTitle); // add the title to the dialog box
    // add book button
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('button-group');
    let addBookBtn = document.createElement('button');
    addBookBtn.textContent = "Add Book";
    addBookBtn.id = 'add-book'; 
    buttonDiv.append(addBookBtn);
    // add cancel -> just show the current library button
    let addCancle = document.createElement('button');
    addCancle.textContent = "Cancle";
    addCancle.id = 'cancle'; 
    buttonDiv.append(addCancle); // add buttons to the button group
    dialog.append(buttonDiv); // add button group to dialog
    // append dialog to the card-container
    const container = document.getElementById("card-container");
    container.append(dialog);
    dialog.showModal();
}
function addBookToLibrary(book) { // add functionality to the add book button
    myLibrary.push(book);
    displayBook(book); // after adding book to library display updated lib and call it passing the new book prototype
}

function getform() {
    const dialog = document.getElementsByClassName('custom-dialog')[0];
    dialog.classList.add('hidden');
    console.log('in get form');
    const form = document.createElement('form');
    form.classList.add('book-form');
    //const card = document.getElementById('card-container');
    //1. title input 
    const titleLabel = document.createElement('label');
    titleLabel.htmlFor= 'bookTitle';
    titleLabel.textContent = 'Title';
    form.append(titleLabel);

    const titleInput = document.createElement("input"); // Create the input field for the title
    titleInput.type = "text";
    titleInput.id = "bookTitle";
    titleInput.name = "title";
    titleInput.required = true; // Make it a required field
    form.appendChild(titleInput);
    form.appendChild(document.createElement("br")); 

    // 2. Author Input
    const authorLabel = document.createElement("label");
    authorLabel.htmlFor = "bookAuthor";
    authorLabel.textContent = "Author:";
    form.appendChild(authorLabel);

    const authorInput = document.createElement("input");
    authorInput.type = "text";
    authorInput.id = "bookAuthor";
    authorInput.name = "author";
    authorInput.required = true;
    form.appendChild(authorInput);
    form.appendChild(document.createElement("br"));

    // 3. Pages Input
    const pagesLabel = document.createElement("label");
    pagesLabel.htmlFor = "bookPages";
    pagesLabel.textContent = "Pages:";
    form.appendChild(pagesLabel);

    const pagesInput = document.createElement("input");
    pagesInput.type = "number"; // Set type to "number" for numerical input
    pagesInput.id = "bookPages";
    pagesInput.name = "pages";
    pagesInput.required = true;
    form.appendChild(pagesInput);
    form.appendChild(document.createElement("br"));

    // 4. Submit Button
    const submitButton = document.createElement("button"); // Create the submit button
    submitButton.type = "submit";
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);

    const container = document.getElementById("card-container"); // Or your dialog element
    container.appendChild(form); // Or dialog.appendChild(form)
    return form; // Return the created form element if you need to reference it later
}

function cancleButton(){ //add functionality to cancle button
    const myDialog = document.querySelector('dialog');
    myDialog.classList.add('hidden');
    console.log(myDialog);
    myDialog.close();
    displayBook();
    //call displayBook to show the current library
}
function displayBook(book) {

} /*{ loop throguh array and displays each book on the page 
    //console.log("in displayBook function");
    // render the html 
    /*const card = document.getElementById("card-container");
    console.log(card);
    const individual = document.createElement('div');
    individual.classList.add('cards');
    card.append(individual);
    //console.log(book);
    for (b in book) { // populate the card !!! 
        const bookCard = document.createElement('div');
        bookCard.id = book.title;
        const tit = document.createElement('h3');
        tit.textContent = book.title;
        bookCard.append(tit);
        const auth = document.createElement('p');
        auth.textContent= book.author;
        bookCard.append(auth);
        const pg = document.createElement('p');
        pg.textContent = book.pages;
        bookCard.append(pg);
        //append info to the card container
        individual.append(bookCard);

        return `${book.title} , ${book.author}, ${book.pages}, ${book.id}`; 

    }

}
*/
// ok now how do i cal this all??? 
//var book = new Book("Sunrise on the Reaping", "Suzanne Collins", "700", crypto.randomUUID());
//var book1 = new Book("Twilight", "Sephanie Meyer", "950", crypto.randomUUID());
//addBookToLibrary(book);
//addBookToLibrary(book1);'
//step 1 render the dialog -> trigger new book submission form
getDialog(); //call function
const closeButton = document.getElementById('cancle');
closeButton.addEventListener('click', cancleButton);

const addBook = document.getElementById('add-book');
addBook.addEventListener('click', getform);