// Don't delete code bellow and this code must be at the bottom of the file
type Book = {
    title : string,
    author : string,
    publicationYear: number
}

let books: Book[] = []

function addBook(title : string,author : string,publicationYear: number): void {
    let newBook: Book = {title, author,publicationYear}
    books.push(newBook)
    console.log(`Book added: "${title}" by ${author} (${publicationYear})`)
}

function listBooks():void {
    console.log("All Books:")
    books.forEach((book) => {
        console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`)
    } )
}

function searchBook(title?: string): void {
    console.log(`Search Results for "${title}":`)
    if(!title) {
        console.log(`Please provide a title to search.`)
        return
    }

    let bookFilter = books.filter((book)=>
        book.title.includes(title)
    )

    if(bookFilter.length == 0){
        console.log(`No books found with title containing "${title}".`)
    }

    bookFilter.forEach((book) => {
        console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`)
    })

    
}


export { addBook, listBooks, searchBook };
