const openForm = document.querySelector('.question-btn'),
      questionForm = document.querySelector('.question-form'),
      submitCard = document.querySelector('.save'),
      questionContent = document.querySelector('.input-question'),
      answerContent = document.querySelector('.input-answer'),
      flashcards = document.querySelector('.flashcards'),
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


// submit new card
submitCard.addEventListener('click', () => {

  if ( questionContent.value === '' || answerContent.value === '' ){
    showError();
  }else{
    addNewFlashCard();
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

// adding new card
function addNewFlashCard() {
  
  let output = `
    <div class="flash-card">
      <h3 class="display-question">${questionContent.value}</h3>
      <a class="show-hide" href="#">Show/hide Answer</a>
      <p class="answer">${answerContent.value}</p>
      <button class="delete-card">Delete</button>
    </div>
    `;

  flashcards.innerHTML += output;
  questionContent.value = '';
  answerContent.value = '';

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