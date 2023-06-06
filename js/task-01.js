
const listEl = document.querySelector("#categories");

console.log("Number of categories :", listEl.children.length);


const titleEl = document.querySelectorAll("li.item");
titleEl.forEach(elem => {
    console.log( `Category: ${elem.firstElementChild.textContent}`)
    console.log( "Elements:", elem.lastElementChild.children.length)
});



