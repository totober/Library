let btn = document.querySelector(".btn-add");
let dialog = document.querySelector("dialog");
let dialog2 = document.querySelector(".modal-delete");
let add = document.querySelector(".add-book");
let cancel = document.querySelector(".cancel-book");
let cancel2 = document.querySelector(".cancel-book2");
let main = document.querySelector("main");
let deleteBook = document.querySelector(".btn-card");
let deleteBookConfirm = document.querySelector(".delete-book-confirm");
let btnToggle = document.querySelector(".btn-toggle");


let title = document.getElementById("title");
let writer = document.getElementById("author");
let date = document.getElementById("date");
let page = document.getElementById("page");
let read = document.getElementsByName("user_read");
console.log(read)




btn.addEventListener("click", displayModal);
cancel.addEventListener("click", closeModal);
cancel2.addEventListener("click", closeModal2);
add.addEventListener("click", addBook);
deleteBook.addEventListener("click", bookDelete);
btnToggle.addEventListener("click", readOrNot);


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

Book.prototype.dataIndex = function() {
    let arrIndex = myLibrary.indexOf(this);
    console.log(arrIndex);
    return arrIndex;
}

// if i want the "this" to be te card created //
Book.prototype.createCard = createCard




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

    let titleOf = e.target.parentElement.querySelector("h3");

    for(i=0; i < myLibrary.length; i++){
        if(titleOf.textContent === myLibrary[i].name) {
            myLibrary[i].deleteFromArray()

             // SAME BUT WITHOUT THE METHOD //

           /*  let arrIndex = myLibrary.indexOf(myLibrary[i]);
            console.log(arrIndex)
            myLibrary.splice(arrIndex, 1); */
        }
    }
    

   e.target.parentElement.remove();
   
} 



function addBook (e) {

    e.preventDefault();

    let nameOf = () => {
       let name = title.value.trim().toUpperCase();
       let counter = 0;

        for(i=0; i < myLibrary.length; i++){ 
            if(name === myLibrary[i].name){ 
                counter ++
                name = title.value.trim().toUpperCase() + " " + `${counter}`
            }
        } 
       return name
    }

    let name = nameOf();
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
              console.log(read[i].value)
              return read[i].value
           }
        }
    } 

    let readItValue = readIt()
    console.log(readItValue)

    let obj = new Book(name, author, pages, year, readItValue);

    myLibrary.push(obj);

    //createCard(name, author, pages, year, readIt);

     obj.createCard(name, author, pages, year, readItValue); // if i want the "this" to be the card 
    
    let inputs = document.querySelectorAll("input");
    inputs.forEach(input => input.value = "" )
    inputs.forEach(input => input.checked = false )


    dialog.close();

} 


function createCard (name, author, pages, year, readItValue ) {

    console.log(this)
    
    let article = document.createElement("article");
    let btnCard = document.createElement("button");
    let btnToggle = document.createElement("button");
    let title = document.createElement("h3");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");

    article.className = "card";
    article.setAttribute("data-index", this.dataIndex())
    btnCard.className = "btn-card";
    btnCard.addEventListener("click", bookDelete);
    btnToggle.classList.add("btn-toggle");
    btnToggle.classList.add(btnToggleDisplay());
    btnToggle.addEventListener("click", readOrNot);
    btnCard.textContent = "X";
    btnToggle.textContent = "Wishlist";
    title.textContent = name;
    p1.textContent = `Author: ${author}`;
    p2.textContent =  `Published: ${year}`;
    p3.textContent =  `Number of pages: ${pages}`; 
    p4.className = "toggle-para";
    p4.textContent = "toggle if you already read the book";

    main.appendChild(article);
    article.appendChild(title);
    article.appendChild(btnCard);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(btnToggle)
    article.appendChild(p4);

    function btnToggleDisplay () {
        if(readItValue === "no"){
            return "not-read"
        } else {
            return "read"
        }
    }
    console.log(btnToggleDisplay())

}


function readOrNot (e) {

    let para = e.target.parentElement.querySelector(".toggle-para");
    console.log(para)

    if(e.target.textContent === "Wishlist") {
        e.target.textContent = "Read It"
        //e.target.classList.toggle("read")
        e.target.classList.remove("not-read")
        e.target.classList.add("read")
        para.textContent = "toggle if you didn`t read the book yet"
    
    } else {
        e.target.textContent = "Wishlist"
       // e.target.classList.toggle("not-read")
       e.target.classList.add("not-read")
       e.target.classList.remove("read")
       para.textContent = "toggle if you already read the book"

    }



}




