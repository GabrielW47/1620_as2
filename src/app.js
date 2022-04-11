let noteInProgress = false
const button = document.querySelector('.icons');
button.addEventListener('click', addNotepad);
const noteContainer = document.getElementsByClassName("write-note-area")[0]

function addNotepad(){
  if (noteInProgress === false){      //looks to see if there is a note being worked on.
    let newNote = document.createElement("div")      //makes the div
    newNote.classList.add('Notediv')                    //gives the div a class
    noteContainer.appendChild(newNote)                  //makes the div go where its sapost to

    const noteDiv = document.getElementsByClassName("Notediv")[0]  //finds the note div 

    newNote = document.createElement("textarea")
    newNote.classList.add('Notepad')
    noteDiv.appendChild(newNote)

    newNote = document.createElement("button");
    newNote.classid.add('save')
    btn.innerHTML = "Save";
    noteDiv.appendChild(newNote);

    newNote = document.createElement("button");
    newNote.classid.add('delete')
    btn.innerHTML = "Delete";
    noteDiv.appendChild(newNote);

  }
}