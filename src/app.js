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

    saveButton = document.createElement("button");           //makes a button
    saveButton.classList.add('save')                         //gives the button a class
    saveButton.innerHTML = "Save";                           //makes the button say Save
    noteDiv.appendChild(saveButton);                         //puts the button in the note div

    deletebutton = document.createElement("button");         //makes a button
    deletebutton.classList.add('delete')                     //gives the button a class
    deletebutton.innerHTML = "Delete";                       //makes the button say Delete
    noteDiv.appendChild(deletebutton);                       //puts the button in the note div

  }
}
document.addEventListener('click', e =>{
  if (noteInProgress  === true){
    const Deletebutton = document.querySelector('.delete');
    Deletebutton.addEventListener('click', Delete);
  
    function Delete(){
      console.log("woked")
      const noteDiv = document.getElementsByClassName("Notediv")[0]
      //noteDiv.removeChild("Notepad");
      //noteDiv.removeChild("save");
      //noteDiv.removeChild("delete");
      noteDiv.remove();
    }
  
  }

}, capture = true);


