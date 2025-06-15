function showCreateNoteForm() {
  const createNoteButton = document.
    querySelector("#create-note-button");
  const noteForm = document.querySelector("#note_form");
  createNoteButton?.addEventListener("click",
    (e) => {
      showCollapsibles();
      noteForm?.scrollIntoView();
      createNoteButton.classList.toggle("is-invisible");
    })
}

function showCollapsibles() {
  const collapsibles = document.
    querySelectorAll(".collapsible");
  collapsibles?.forEach(
    collapsible => {
      collapsible.classList.toggle("collapsed");
    }
  );
}

showCreateNoteForm();
