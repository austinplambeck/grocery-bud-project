// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery'); // input item
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
// SUBMIT FORM
form.addEventListener('submit', addItem);

// ****** FUNCTIONS **********
function addItem(e) {
    e.preventDefault(); //prevents default behavior of submitting form
    const value = grocery.value;
    const id = new Date().getTime().toString();
    // Three conditions:
    // 1) empty input value and not editing
    // 2) empty input and editing
    // 3) empty value...?
    if (value !== '' && editFlag === false) {
        console.log('add item to the list');
    } else if (value !== '' && editFlag === true) {
        console.log('editing');
    } else {
        console.log('empty value');
    }
}
// CURRENT TIME ON VIDEO -- 6:36:20 ********************************


// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
