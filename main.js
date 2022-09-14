const ratingState = document.querySelector("#rating-state");
const thankState = document.querySelector("#thank-you-state");
const submitBtn = document.querySelector(".submit-btn");
const selected = document.getElementById("selected");
const ratings = document.querySelectorAll(".ratings");
var rates = 0;

ratings.forEach(num =>{
    num.addEventListener('click', function () {
        ratings.forEach(btn => 
         btn.classList.remove('active')
        );
      rates = this.innerHTML;
      this.classList.add('active');
    });
})

submitBtn.addEventListener('click', rateHandler)

function rateHandler() {
    if(rates === 0){
            alert("Please rate us")
    }
    else {
      selected.innerText = rates;
      ratingState.classList.toggle("hide");
      thankState.classList.toggle("show")
      
    }
}

