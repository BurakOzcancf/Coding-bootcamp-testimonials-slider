let index=0
let card = document.querySelectorAll(".card")
    
function slider(n) {   
    for (i = 0; i < card.length; i++) {
        card[i].classList.add("inactive")
    }
    index += n
    if (index > card.length - 1) {
        index = 0
        card[index].classList.add("active")
        card[index].classList.remove("inactive")
    }
    if (index < 0) {
        index = card.length - 1
        card[index].classList.add("active")
        card[index].classList.remove("inactive")
    }
    else {
        card[index].classList.add("active")
        card[index].classList.remove("inactive")
    }    
}