import throttle from "lodash.throttle";

const refs = { 
  formEl: document.querySelector('.feedback-form'),
  inputEl: document.querySelector('.feedback-form input'),
  textareaEl: document.querySelector('.feedback-form textarea'),
};
const STORAGE_KEY = "feedback-form-state";

getSaveInput();

const formData = {};
refs.formEl.addEventListener('input', throttle(currentInput, 500));
refs.formEl.addEventListener('submit', onFormSubmit);

const currentInput = function (e) {
  formData[e.target.name] = e.target.value;
  const formJSON = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, formJSON);
};


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
  if (refs.inputEl.value === "" || refs.textareaEl.value === "") {
    return (alert ("Please fill in all the fields!"));
  };
  localStorage.removeItem(STORAGE_KEY);
  event.target.reset();
};
