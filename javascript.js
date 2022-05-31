let myLibrary = [];

function Book() {
    this.title = document.getElementById('title').value
    this.author = document.getElementById('author').value
    this.page = document.getElementById('page').value
    this.read = document.querySelector('input[name="read"]:checked').value
}

let btn = document.getElementById('add')
    btn.addEventListener('click', addRow);

document.addEventListener('click', function(e){
    if(e.target && e.target.id== 'delBtn'){
        console.log('Delete')
    }
})

document.addEventListener('click', function(e){ 
    if(e.target && e.target.id== 'readBtn'){
        console.log('Change Read Status')
    }
})

function deleteRow(){
    console.log('Hello')
}

function addBookToLibrary(){
    newBook = new Book
    myLibrary.push(newBook)
    return myLibrary
}

function clearForm() {
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('page').value = ''
}

function addRow() {
    addBookToLibrary()
    clearForm()
    let table = document.getElementById('table')
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1)
    let cell3 = row.insertCell(2)
    let cell4 = row.insertCell(3)
    let cell5 = row.insertCell(4)
    let cell6 = row.insertCell(5)
    cell1.innerText = `${newBook.title}`;
    cell2.innerText = `${newBook.author}`
    cell3.innerText = `${newBook.page}`
    cell4.innerText = `${newBook.read}`
    const del = document.createElement("button")
    del.innerText = 'Delete'
    del.setAttribute('id', 'delBtn')
    cell5.appendChild(del)
    const change = document.createElement('button')
    change.innerText = 'Change Read Status'
    change.setAttribute('id', 'readBtn')
    cell6.appendChild(change)
}

function clearScreen() {
    let element = document.getElementById('table') 
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}


/*function createTable() {
    addBookToLibrary()
    myLibrary.forEach(function(number) {
        const para = document.createElement('p');
        const title = document.createTextNode(myLibrary[title])
        para.appendChild(title)
        const element = document.getElementById('table')
        element.style.display = 'grid'
        const card = document.createElement('div')
        element.appendChild(card)
        card.appendChild(para)
        card.appendChild(del)
        card.appendChild(change)
        card.setAttribute('style', 'background-color: #000080; color: white;')
        console.log(myLibrary.join(' '))  
    })
}

/*let delBtn = document.getElementById('delBtn')
delBtn.addEventListener('click', removeCard())


/*
    myLibrary.splice(0, 4, title, author, page, read)
    return myLibrary.join(' ')*/