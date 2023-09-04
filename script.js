let btn = document.querySelector(".btn-add");
console.log(btn)


btn.addEventListener("click", addBook)

const myLibrary = ["Lord of the rings: Fellowship of the ring", 
                    "Lord of the rings: The two towers",
                    "Lord of the rings: Return of the king",]


function Book (name, author, pages, year, readIt) {

    this.name = name,
    this.author = author,
    this.year = year,
    this.pages = pages,
    this.readIt = readIt
}

function addBook () {
    console.log("ola k ase")
}