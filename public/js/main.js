function showCreateNoteForm() {
  const createNoteButton = document.
    querySelector("#create-note-button");
  const noteForm = document.querySelector("#note_form");
  createNoteButton?.addEventListener("click",
    (e) => {
      toggle(".collapsible");
      noteForm?.scrollIntoView();
      createNoteButton.classList.toggle("is-invisible");
    })
}


function toggle(className) {
  const elements = document.
    querySelectorAll(className);
  elements?.forEach(
    element => {
      element.classList.toggle("is-active");
    }
  );
}

function disable(className) {
  const elements = document.
    querySelectorAll(className);
  elements?.forEach(
    element => {
      element.classList.remove("is-active");
    }
  );
}

function showModals() {
  const modalTrigger = document.
    querySelector(".modal-trigger");
  modalTrigger?.addEventListener("click",
    (e) => {
      toggle(".modal");
    })
}

function hideModals() {
  const modalCloseButton = document.
    querySelector(".modal-cancel");
  modalCloseButton?.addEventListener("click",
    (e) => {
      disable(".modal");
    })
}

function showDeleteModal() {
  const deleteModalTrigger = document.
    querySelector(".delete-modal-trigger");
  deleteModalTrigger?.addEventListener("click",
    (e) => {
      toggle(".delete-modal");
    });
}

document.addEventListener('DOMContentLoaded', () => {
  showCreateNoteForm();
  showDeleteModal();
  showModals();
  hideModals();

})
