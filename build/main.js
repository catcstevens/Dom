// EXAMINE THE DOCUMENT OBJECT
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.head);
// console.log(document.all);//array(actually an HTML collection) of every element in the DOM - access all of these by their index number!

let headerTitle = document.getElementById('header-title');
console.log(headerTitle.innerText);

//QuerySelector - only one item(grabs the first one)
let header = document.querySelector('#main-box');
header.style.borderBottom = 'solid 4px #ccc';

let input = document.querySelector('input');
input.value = 'Hello World'

