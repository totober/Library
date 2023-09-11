let btn = document.querySelector(".btn-add");
let dialog = document.querySelector("dialog");
let dialog2 = document.querySelector(".modal-delete");
let add = document.querySelector(".add-book");
let cancel = document.querySelector(".cancel-book");
let cancel2 = document.querySelector(".cancel-book2");
let main = document.querySelector("main");
let deleteBook = document.querySelector(".btn-card");
let deleteBookConfirm = document.querySelector(".delete-book-confirm");


let title = document.getElementById("title");
let writer = document.getElementById("author");
let date = document.getElementById("date");
let page = document.getElementById("page");
let read = document.getElementsByName("user_read")



btn.addEventListener("click", displayModal);
cancel.addEventListener("click", closeModal);
cancel2.addEventListener("click", closeModal2);
add.addEventListener("click", addBook);
deleteBook.addEventListener("click", bookDelete);



const myLibrary = [];


function Book (name, author, pages, year, readIt) {

    this.name = name,
    this.author = author,
    this.year = year,
    this.pages = pages,
    this.readIt = readIt

}

Book.prototype.deleteFromArray = function() {
    let arrIndex = myLibrary.indexOf(this);
    myLibrary.splice(arrIndex, 1);
    console.log(this);
}

// if i want the "this" to be te card created //
//Book.prototype.createCard = createCard


function displayModal (e) {
    dialog.showModal();
}

function closeModal (e) {
    dialog.close();
} 

function closeModal2 (e) {
    dialog2.close();
}

function deleteOf (e) {

    dialog2.showModal();
}

function bookDelete (e) {

    console.log(e.target.parentElement);

    let titleOf = e.target.parentElement.querySelector("h3")

    for(i=0; i < myLibrary.length; i++){
        if(titleOf.textContent === myLibrary[i].name) {
            myLibrary[i].deleteFromArray()

             // SAME BUT WITHOUT THE METHOD //

           /*  let arrIndex = myLibrary.indexOf(myLibrary[i]);
            console.log(arrIndex)
            myLibrary.splice(arrIndex, 1); */
        }
    }
    

   e.target.parentElement.remove()
    
} 

function addBook (e) {

    e.preventDefault();

    let name = title.value.trim().toUpperCase();
    //console.log(name)
    let author = writer.value.trim().toLowerCase();
    //console.log(author)
    let year = date.value.trim().toLowerCase();
    //console.log(year)
    let pages = page.value.trim().toLowerCase();
    //console.log(pages)
    let readIt = () => {
        for (let i = 0; i < read.length; i++){
           if(read[i].checked) {
              return read[i].value
           }
        }
    }

    let obj = new Book(name, author, pages, year, readIt());

    myLibrary.push(obj);

    createCard(name, author, pages, year);

    // obj. createCard(name, author, pages, year); // if i want the "this" to be the card created

    dialog.close();

} 


function createCard (name, author, pages, year) {

    console.log(this)
    
    let article = document.createElement("article");
    let btnCard = document.createElement("button");
    let btnToggle = document.createElement("button");
    let title = document.createElement("h3");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");

    article.className = "card";
    btnCard.className = "btn-card";
    btnCard.addEventListener("click", bookDelete);
    btnToggle.className = "btn-toggle";
    btnCard.textContent = "X";
    title.textContent = name;
    p1.textContent = `Author: ${author}`;
    p2.textContent =  `Published: ${year}`;
    p3.textContent =  `Number of pages: ${pages}`; 

    main.appendChild(article);
    article.appendChild(title);
    article.appendChild(btnCard);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(btnToggle);

}




