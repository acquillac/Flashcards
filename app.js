const openForm = document.querySelector('.question-btn'),
      questionForm = document.querySelector('.question-form'),
      showAnswer = document.querySelectorAll('.show-hide'),
      deleteCard = document.querySelector('.delete-card');
      

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

// show/hide answer
showAnswer.forEach((question) => {

  question.addEventListener('click', (e) => {
    const answer = e.target.nextElementSibling;
  
    if ( answer.style.display === 'block' ){
        answer.style.display = 'none';
    }
    else{
        answer.style.display = 'block';
    }
  })
})
