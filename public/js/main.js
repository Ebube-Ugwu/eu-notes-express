function addEventToElements(el, className, func) {
  const elements = document.
    querySelectorAll(el);
  elements?.forEach(
    (element) => {
      func(className);
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

function focusNavbar() {
  document.
    querySelector(".navbar")
    .scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
}

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

function showModals() {
  const modalTrigger = document.
    querySelector(".modal-trigger");
  modalTrigger?.addEventListener("click",
    (e) => {
      toggle(".modal");
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

function closeNotification() {
  (document
    .querySelectorAll(
      ".notification .delete") || [])
    .forEach(($delete) => {
      const $notification = $delete.parentNode;

      $delete.addEventListener("click",
        () => {
          $notification?.parentNode?.removeChild($notification);
        }
      );
    });
  focusNavbar();
}

document.addEventListener(
  'DOMContentLoaded', () => {
    focusNavbar();
    closeNotification();
    hideModals();
    showCreateNoteForm();
    showDeleteModal();
    showModals();
    toggleMenu();
  })
