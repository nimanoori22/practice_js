class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addToList(book) {

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${book['title']}</td>
        <td>${book['author']}</td>
        <td>${book['isbn']}</td>
        <td><a href="#" class="delete">X</a></td>`;

        const books = document.querySelector('.books');
        books.appendChild(tr);

    }

    clearFields() {

        const title = document.getElementById('title'),
        author = document.getElementById('author'),
        isbn = document.getElementById('isbn');

        title.value = '';
        author.value = '';
        isbn.value = '';

    }

    removeBook(target) {
        target.parentElement.parentElement.remove();
    }

    showMessage(message, className) {

        const div = document.createElement('div');
        div.className = className;
        const text = document.createTextNode(message);
        div.appendChild(text);
        const form = document.querySelector('#form-book');
        const title = document.querySelector('.title');
        form.insertBefore(div, title);

        setTimeout(function(){
            div.remove();
        }, 3000);
    }
}


class Store {

    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
            localStorage.setItem('books', JSON.stringify(books));
        }else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static showBooks() {
        const books = this.getBooks();

        const ui = new UI();

        books.forEach(function(book){
            ui.addToList(book);
        });
    }

    static addToStorage(book) {

        const books = this.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeFromStorage(isbn) {

        const books = this.getBooks()

        books.forEach((book, index) => {
            if(book['isbn'] === isbn){
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }

    
}


const   form = document.getElementById('form-book'),
        title = document.getElementById('title'),
        author = document.getElementById('author'),
        table = document.querySelector('.table'),
        isbn = document.getElementById('isbn');

form.addEventListener('submit', function(e){

    ui = new UI()

    if(title.value === '' || author.value === '' || isbn.value === '') {
        ui.showMessage('please check you inputs', 'alert');
    }else {
        book = new Book(title.value, author.value, isbn.value);

        ui.addToList(book);
        Store.addToStorage(book);
        ui.showMessage('book added', 'success');

        ui.clearFields();

        
    }
    e.preventDefault();
});

table.addEventListener('click', function(e) {
    if(e.target.classList.contains('delete')) {

        ui = new UI();

        ui.removeBook(e.target);

        Store.removeFromStorage(e.target.parentNode.previousElementSibling.innerText);

        ui.showMessage('book deleted', 'success');
    }
});


window.addEventListener('DOMContentLoaded', () => {

    Store.showBooks();
});