const fontSizeControlEl = document.querySelector("#font-size-control");

const textSpanEl = document.querySelector("#text");

// console.dir(fontSizeControlEl + "px");
// console.log(textSpanEl);
// console.log(textSpanEl.style.fontSize = "30px");

fontSizeControlEl.addEventListener("change", (event) => {
    console.log(event.target.valueAsNumber)
    textSpanEl.style.fontSize = event.target.valueAsNumber + "px";
} )

