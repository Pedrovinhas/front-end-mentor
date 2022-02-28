const popUp = document.querySelector('#share-img');
const modal = document.querySelector('.desktop-share');

popUp.addEventListener("click", () => {
    console.log("Click")
    modal.classList.add("active");
})