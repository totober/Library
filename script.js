let btn = document.querySelector(".btn-add");
let dialog = document.querySelector("dialog");
let add = document.querySelector(".add-book");
let cancel = document.querySelector(".cancel-book");
let main = document.querySelector("main");

let title = document.getElementById("title");
let writer = document.getElementById("author");
let date = document.getElementById("date");
let page = document.getElementById("page");
let read = document.getElementsByName("user_read")



btn.addEventListener("click", displayModal);
cancel.addEventListener("click", closeModal);
add.addEventListener("click", addBook);




const myLibrary = [];


function Book (name, author, pages, year, readIt) {

    this.name = name,
    this.author = author,
    this.year = year,
    this.pages = pages,
    this.readIt = readIt
}

function displayModal (e) {
    dialog.showModal();
}

function closeModal (e) {
    dialog.close();
} 

function addBook (e) {

    e.preventDefault();

    let name = title.value.trim().toLowerCase();
    console.log(name)
    let author = writer.value.trim().toLowerCase();
    console.log(author)
    let year = date.value.trim().toLowerCase();
    console.log(year)
    let pages = page.value.trim().toLowerCase();
    console.log(pages)
    let readIt = () => {
        for (let i = 0; i < read.length; i++){
           if(read[i].checked) {
              return read[i].value
           }
        }
    }
    console.log(readIt())

    let obj = new Book(name, author, pages, year, readIt())
    console.log(obj)

    myLibrary.push(obj);

    createCard(name, author, pages, year);

    dialog.close();

} 

function createCard (name, author, pages, year) {

    let article = document.createElement("article");
    let btnCard = document.createElement("button");
    let btnToggle = document.createElement("button");
    let title = document.createElement("h3");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");

    article.className = "card";
    btnCard.className = "btn-card";
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

/* function readOrNot (e) {

    e.preventDefault();

    for (let val of read){
        console.log(val.value)
       if(val.checked) {
          return val.value
       }
    }
}
     */



