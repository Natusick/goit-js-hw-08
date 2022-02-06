import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";

// getSaveInput();

const formData = {};



const currentInput = function (e) {
  formData[e.target.name] = e.target.value;
  const formJSON = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, formJSON);
};
formEl.addEventListener('input', throttle(currentInput, 500));




function getSaveInput(event){
  const saveMessageJson = JSON.parse(formData);
  const saveMessage = localStorage.getItem(STORAGE_KEY, saveMessageJson);

  if(saveMessage){
    formEl.value = saveMessage;
  };
};



function onFormSubmit(event){
  event.preventDefault();
  formEl.reset();
  localStorage.removeItem(STORAGE_KEY);
};
formEl.addEventListener('submit', onFormSubmit);



