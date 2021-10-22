const openForm = document.querySelector('.question-btn'),
      questionForm = document.querySelector('.question-form');

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