// As we're in a simple HTML page structure, I'll use this
// workaround to act like a module importing
const formsModule = document.createElement('script');
formsModule.src = 'js/utils/forms.js';
document.head.appendChild(formsModule);

// Creating the phone mask
const phoneMask = IMask(
  document.getElementById('phone'),
  { mask: '(00) 00000-0000'},
);

/* 
 * An array containing all the necessary information to
 * validate the fields contained inside the page.
 */
const formFields = [
  {
    id: 'first-name',
    label: 'First Name',
    required: true,
    format: /[A-Za-z]+/g,
  },
  {
    id: 'phone',
    label: 'Phone',
    required: true,
    format: /^\(\d{2}\) \d{4,5}-\d{4}$/,
  },
  {
    id: 'email',
    label: 'Email',
    required: true,
    format: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  {
    id: 'password',
    label: 'Password',
    required: true,
    format: /(?=.{8,})/g,
    errorMessage: 'The password must be at least eight characters long.',
  },
  {
    id: 'repeat-password',
    label: 'Repeat Password',
    required: true,
  },
];

function validatePasswordMatching() {
  const password = document.getElementById('password');
  const repeatPassword = document.getElementById('repeat-password');

  const match = password.value === repeatPassword.value;

  // Adding or removing the error class
  if (!match) {
    addErrorClass(password);
    addErrorClass(repeatPassword);
  } else {
    clearErrorClass(password);
    clearErrorClass(repeatPassword);
  }

  return match;
}

function submit() {
  printFormValues(formFields); 
}

function validateBeforeSubmit() {
  const invalid = formFields.filter(field => !validateField(field));
  if (invalid.length) {
    return alert('Invalid or empty fields.');
  }

  const passwordsMatch = validatePasswordMatching();
  if (!passwordsMatch) {
    return alert('The passwords must match!');
  }
  
  submit();
}
