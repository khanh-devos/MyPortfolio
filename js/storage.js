function handleChange(event) {
  event.preventDefault();

  // call out all form values and save them to sessionStorage
  const form = document.querySelector('#form');
  const formData = {
    fullname: form.elements.fullname.value,
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  sessionStorage.setItem('formData', JSON.stringify(formData));
}

function handleRefresh() {
  // call out form data from session storage
  const formData = JSON.parse(sessionStorage.getItem('formData'));
  if (!formData) return;

  const form = document.querySelector('#form');
  form.elements.fullname.value = formData.fullname;
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

window.addEventListener('load', () => {
  document.querySelector('#form').addEventListener('input', (event) => handleChange(event));

  // reinput latest values to form from sessionStorage
  handleRefresh();
});