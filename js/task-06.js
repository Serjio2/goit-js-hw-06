const  textInputEl = document.querySelector("#validation-input");


textInputEl.addEventListener("blur", (event) => {
if (Number(event.target.dataset.length) !== event.target.value.length) {
    event.target.classList.add("invalid");
    return;
}
    event.target.classList.remove("invalid");
    event.target.classList.add("valid");

        // console.log(event.target.value.length);
        // console.log(Number(event.target.dataset.length));
        // console.log(Number(event.target.dataset.length) === event.target.value.length);

} );