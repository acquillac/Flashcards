const openForm = document.querySelector('.question-btn'),
      questionForm = document.querySelector('.question-form'),
      addNewCard = document.querySelector('.save'),
      questionContent = document.querySelector('.input-question'),
      answerContent = document.querySelector('.input-answer'),
      error = document.querySelector('.error');
      

// open/close question form
openForm.addEventListener('click', (e) => {

  if ( questionForm.style.display === 'flex' ) {
      questionForm.style.display = 'none';
      e.target.innerHTML = 'Add Question';
  }
  else {
      questionForm.style.display = 'flex';
      e.target.innerHTML = 'Close Form';
  }
  
})


// add new card
addNewCard.addEventListener('click', () => {
  
  if ( questionContent.value === '' || answerContent.value === '' ){
    showError();
  }else{

    const questionInput = questionContent.value;
    const answerInput = answerContent.value;

    let output = `
    <div class="flash-card">
      <h3 class="display-question">${questionInput}</h3>
      <a class="show-hide" href="#">Show/hide Answer</a>
      <p class="answer">${answerInput}</p>
      <button class="delete-card">Delete</button>
    </div>
    `;

    const flashcards = document.querySelector('.flashcards');
    flashcards.innerHTML += output;


    // showing/hiding answer
    const allShowHide = document.querySelectorAll('.show-hide');

    allShowHide.forEach((question) => {

      question.addEventListener('click', (e) => {
        const answer = e.target.nextElementSibling;

        if (answer.style.display === 'block') {
          answer.style.display = 'none';
        }
        else {
          answer.style.display = 'block';
        }
      })
    })

    // adding delete button
    const allDeleteButons = document.querySelectorAll('.delete-card');

    allDeleteButons.forEach((question) => {
      question.addEventListener('click', (e) => {
        e.target.parentElement.remove();
      })
    })
  }
})


// show error
function showError() {
  error.style.display = 'block';

  setTimeout( function () {
    error.style.display = 'none';
  },
  3000)
}