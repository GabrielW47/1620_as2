let clone = false

const button = document.querySelector('.icons');

button.addEventListener('click', addNotepad);

function addNotepad(){
  const newNote = document.createElement("div")
  document.body.appendChild(newNote)
}