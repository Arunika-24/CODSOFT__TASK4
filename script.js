function applyJob(){
    alert("Application Submitted Successfully!");
}

const search = document.getElementById("search");

if(search){

search.addEventListener("keyup", () => {

let value = search.value.toLowerCase();

let cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.style.display =
card.innerText.toLowerCase().includes(value)
? "block"
: "none";

});

});
}
