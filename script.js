let colors = ["#CBF1FE", "#D4E2FF", "#DBC8FF", "#EFCAFE", "#FBD2E0"];
let colorNum = 0;

let note = document.querySelector(".note");
let container = document.querySelector(".note-gallery");

let create = document.querySelector(".create");
create.addEventListener("click", () => {
  appendNote();
});

function appendNote() {
  let newNote = createNote()
  container.appendChild(newNote);
  
  let deleteBtn = newNote.querySelector(".delete");
  deleteBtn.addEventListener("click", () => deleteNote(newNote));
  
  let colorBtn = newNote.querySelector(".color");
  colorBtn.addEventListener("click", () => changeColorOfNote(newNote));
}

function createNote() {
  let randomColorNum = getRandomNumberBetweenTwoGivenNumbers(colors.length, 0);
  let newNote = note.cloneNode(true);
  
  newNote.classList.remove("prototype");
  newNote.style.backgroundColor = colors[randomColorNum];
  return newNote
}

function getRandomNumberBetweenTwoGivenNumbers(max, min) {
  return Math.floor(Math.random() * (+max - +min)) + +min;
}

const deleteNote = (newNote) => {
  container.removeChild(newNote);
};

const changeColorOfNote = (newNote) => {
  if (colorNum != colors.length) {
    newNote.style.backgroundColor = colors[colorNum];
    console.log(colorNum)
    colorNum++
  } else {
    colorNum = 1;
    newNote.style.backgroundColor = colors[0];
  }
};
