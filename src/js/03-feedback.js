import throttle from 'lodash.throttle';
const refs = {
  formEl: document.querySelector('.feedback-form'),
  inputEl: document.querySelector('.feedback-form input'),
  textareaEl: document.querySelector('.feedback-form textarea'),
};
const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const currentInput = function (e) {
  formData[e.target.name] = e.target.value;
  const formJSON = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, formJSON);
};

refs.formEl.addEventListener('input', throttle(currentInput, 500));
getSaveInput();

function onFormSubmit(event) {
  event.preventDefault();
  if (refs.inputEl.value === '' || refs.textareaEl.value === '') {
    return alert('Please fill in all the fields!');
  }
  localStorage.removeItem(STORAGE_KEY);
  refs.formEl.reset();
  
}
refs.formEl.addEventListener('submit', onFormSubmit);
console.log({email: refs.inputEl.value, message: refs.textareaEl.value});

function getSaveInput() {
  let saveMessage = localStorage.getItem(STORAGE_KEY);
  if (saveMessage) {
    saveMessage = JSON.parse(saveMessage);
    Object.entries(saveMessage).forEach(([key, value]) => {
      formData[key] = value;
      refs.formEl.elements[key].value = value;
    });
  }
}