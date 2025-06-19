function showCreateNoteForm() {
  const createNoteButton = document.
    querySelector("#create-note-button");
  const noteForm = document.querySelector("#note_form");
  createNoteButton?.addEventListener("click",
    (e) => {
      toggle(".collapsible", "collapsed");
      noteForm?.scrollIntoView();
      createNoteButton.classList.toggle("is-invisible");
    })
}


function toggle(className, targetClass = "is-active") {
  const elements = document.
    querySelectorAll(className);
  elements?.forEach(
    element => {
      element.classList.toggle(targetClass);
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
    querySelectorAll(".modal-cancel");
  modalCloseButton?.forEach(
    (el) => {
      el.addEventListener("click",
        (e) => {
          disable(".modal");
        })
    }
  );
}

function showDeleteModal() {
  const deleteModalTrigger = document.
    querySelector(".delete-modal-trigger");
  deleteModalTrigger?.addEventListener("click",
    (e) => {
      toggle(".delete-modal");
    });
}

function toggleMenu() {
  const navbarBurger = document.
    querySelector(".navbar-burger");
  navbarBurger?.addEventListener("click",
    (e) => {
      toggle(".navbar-menu");
      toggle(".navbar-burger");
    });
}

document.addEventListener('DOMContentLoaded', () => {

  hideModals();
  showCreateNoteForm();
  showDeleteModal();
  showModals();
  toggleMenu();

})
