const ratingComponent = document.querySelector('.rating-component');
const thankyouComponent = document.querySelector('.rating-thankyou-state');
const selectionText = document.querySelector('.selection-text');
const ratingButton = document.querySelectorAll('.rating-button');
const submitButton = document.querySelector('.submit-button');
let submitRating;

ratingButton.forEach(btn => {
  btn.addEventListener('click', (event) => {
    ratingButton.forEach(b => {
      b.style.backgroundColor = 'hsla(213, 9%, 24%, 0.5)';
      b.style.color = 'white';
    });

    event.target.style.backgroundColor = 'white';
    event.target.style.color='black';
    submitRating = event.target.value;
    console.log(submitRating);
  });
});

submitButton.addEventListener('click', (e)=>{
  if(submitRating){
    ratingComponent.classList.add('hidden');
    selectionText.innerHTML = `You Selected ${submitRating} out of 5`
    thankyouComponent.classList.remove('hidden');
  }
})