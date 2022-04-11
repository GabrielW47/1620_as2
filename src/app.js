let noteInProgress = false
const button = document.querySelector('.icons');
button.addEventListener('click', addNotepad);
const noteContainer = document.getElementsByClassName("write-note-area")[0]

function addNotepad(){
  if (noteInProgress === false){      //looks to see if there is a note being worked on.
    noteInProgress = true
    const newNote = document.createElement("div")      //makes the div
    newNote.classList.add('Notediv')                    //gives the div a class
    noteContainer.appendChild(newNote)                  //makes the div go where its sapost to

    const noteDiv = document.getElementsByClassName("Notediv")[0]  //finds the note div 

    const textpad = document.createElement("textarea")     //makes the textarea
    textpad.classList.add('Notepad')                      //gives the textarea a class
    noteDiv.appendChild(textpad)                         //makes it go into the note div

    saveButton = document.createElement("button");
    saveButton.classList.add('save')
    saveButton.innerHTML = "Save";
    noteDiv.appendChild(saveButton);

    deletebutton = document.createElement("button");
    deletebutton.classList.add('delete')
    deletebutton.innerHTML = "Delete";
    noteDiv.appendChild(deletebutton);

  }
}