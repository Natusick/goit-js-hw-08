import throttle from "lodash.throttle";

const refs = { 
  formEl: document.querySelector('.feedback-form'),
  inputEl: document.querySelector('input'),
  textareaEl: document.querySelector('textarea'),
};
const STORAGE_KEY = "feedback-form-state";

getSaveInput();

const formData = {};

const currentInput = function (e) {
  formData[e.target.name] = e.target.value;
  const formJSON = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, formJSON);
};
refs.formEl.addEventListener('input', throttle(currentInput, 500));

function getSaveInput(event){
  const saveMessage = localStorage.getItem(STORAGE_KEY);
  const saveMessageJson = JSON.parse(saveMessage);
  
  if(saveMessageJson){
    refs.inputEl.value = saveMessageJson.email || '';
    refs.textareaEl.value = saveMessageJson.message || '';
  };
};

function onFormSubmit(event){
  event.preventDefault();
  refs.formEl.reset();
  localStorage.removeItem(STORAGE_KEY);
};
refs.formEl.addEventListener('submit', onFormSubmit);



