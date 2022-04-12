let noteInProgress = false
let note = 1
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

    const saveButton = document.createElement("button");           //makes a button
    saveButton.classList.add('save')                         //gives the button a class
    saveButton.innerHTML = "Save";                           //makes the button say Save
    noteDiv.appendChild(saveButton);                         //puts the button in the note div

    const deletebutton = document.createElement("button");         //makes a button
    deletebutton.classList.add('delete')                     //gives the button a class
    deletebutton.innerHTML = "Delete";                       //makes the button say Delete
    noteDiv.appendChild(deletebutton);                       //puts the button in the note div

  }
}
let noteBody = []
document.addEventListener('click', e =>{                            // will triger if anything is cliked
  if (noteInProgress  === true){                                    
    const Deletebutton = document.querySelector('.delete');         //looks for delete button
    Deletebutton.addEventListener('click', Delete);                 //triger if  delete button is kliked
  
    function Delete(){                                              
      const noteDiv = document.getElementsByClassName("Notediv")[0] //finds the Note div
      noteDiv.remove();
      noteInProgress  = false
    }
    
    const Savebutton = document.querySelector('.save');         //looks for save button
    Savebutton.addEventListener('click', save);                 //triger if save button is kliked
    

    function save(){                                        
      const saveText = document.createElement("ul");                          //makes a ul
      saveText.setAttribute('id',"note" + note);                                  //gives the ul a id
      note ++;
      saveText.classList.add('noteName')
      const sidelist = document.querySelector('.notes-list');
      sidelist.appendChild(saveText);
      
      
      let notes = [];
      const textarea = document.querySelector('.Notepad');
      const textareaValue = textarea.value;
      notes = textareaValue.split('\n');
      console.log(notes);

      saveText.innerText = notes[0];
      notes.pop;
      noteBody.push(notes);
      Delete()
    }

    const list = document.querySelector('.side-note-menu');
    list.addEventListener('click', e =>{

      const notename = document.querySelector('.noteName');         //looks for save button
      notename.addEventListener('click', display);

      function display(){
        for (let note in noteBody){
          const notediv = document.createElement("div")
          const readnoteContainer = document.getElementsByClassName("read-note-area")[0]
          readnoteContainer.appendChild(notediv)

          const noteh = document.createElement("h2")
          noteh.innerText = note[0]
          noteh.appendChild(notediv)

          const notebody = document.createElement("p")
          notebody.innerText = note
          notebody.appendChild(notediv)
        }
      }

    }, capture = true);
  }
}, capture = true);


