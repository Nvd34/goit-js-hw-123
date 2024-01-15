document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');

  // Check local storage for saved data on page load
  const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  form.email.value = savedFormData.email || '';
  form.message.value = savedFormData.message || '';

  // Event delegation to handle input events on the form
  form.addEventListener('input', function (event) {
    if (event.target.name === 'email' || event.target.name === 'message') {
      // Save the current form state to local storage
      const currentState = {
        email: form.email.value.trim(),
        message: form.message.value.trim()
      };
      localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
    }
  });

  // Form submission
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Check if both email and message fields are filled
    if (form.email.value.trim() !== '' && form.message.value.trim() !== '') {
      // Output data to the console
      const formData = {
        email: form.email.value.trim(),
        message: form.message.value.trim()
      };
      console.log(formData);

      // Clear local storage and form fields
      localStorage.removeItem('feedback-form-state');
      form.reset();
    }
  });
});
