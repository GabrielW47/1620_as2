let clone = false
const button = document.querySelector('.icons');
button.addEventListener('click', addNotepad);
let noteContainer = document.getElementsByClassName("write-note-area")[0]

function addNotepad(){
  const newNote = document.createElement("div")
  newNote.classList.add('Note')
  noteContainer.appendChild(newNote)

}