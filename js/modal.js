const modal = document.querySelector(".backdrop");
const modalBtnOpenList = document.querySelectorAll(".modal-btn-open");
const modalBtnClose = document.querySelector(".modal-btn-close");

const toggleModal = () => modal.classList.toggle("is-hidden");

// Добавляем обработчик для каждой кнопки с классом .modal-btn-open
modalBtnOpenList.forEach((btn) => {
  btn.addEventListener("click", toggleModal);
});

modalBtnClose.addEventListener("click", toggleModal);
