const myLibrary = [];
// [ {tite, author, pages, id}, {title, author, pages, id} .... ]

function Book(title, author, pages,id) {
    //object onstructor, book objects should have unique is crypto.randomUUID()
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
}// end Book
function addBookButton(){
    
}
function addBookToLibrary(book) { // take parameters, create book then store into array
    myLibrary.push(book);
    displayBook(book); // after adding book to library display updated lib and call it passing the new book prototype
}

function displayBook(book) {// loop throguh array and displays each book on the page 
    //console.log("in displayBook function");
    // render the html 
    const card = document.getElementById("card-container");
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

// ok now how do i cal this all??? 
var book = new Book("Sunrise on the Reaping", "Suzanne Collins", "700", crypto.randomUUID());
var book1 = new Book("Twilight", "Sephanie Meyer", "950", crypto.randomUUID());
addBookToLibrary(book);
addBookToLibrary(book1);
