
// Flashcard Constructor
class NewFlashCard{
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
}

// UI Constructor
class UI{

  addNewCard(flashcard){

    console.log(flashcard.question)
    console.log(flashcard.answer)

    const flashcards = document.querySelector('.flashcards');
    

    let output = `
    <div class="flash-card">
      <h3 class="display-question">${flashcard.question}</h3>
      <a class="show-hide" href="#">Show/hide Answer</a>
      <p class="answer">${flashcard.answer}</p>
      <button class="delete-card">Delete</button>
    </div>
    `;

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

  showError(){
    const error = document.querySelector('.error');

    error.style.display = 'block';

    setTimeout(function () {
      error.style.display = 'none';
    },
      3000)

  }

  deleteCard(e){
    console.log('test')
  }
}

// adding a card
document.querySelector('.save').addEventListener('click', () => {
  
  const question = document.querySelector('.input-question').value
        answer = document.querySelector('.input-answer').value
        
        
  const flashcard = new NewFlashCard(question, answer);

  const ui = new UI();

  if(question === '' || answer === '') {
    ui.showError();
  }
  else{
    ui.addNewCard(flashcard);
  }

})
