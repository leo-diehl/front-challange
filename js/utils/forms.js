const errorClass = 'has-error';

function addErrorClass(field) {
  field.classList.add(errorClass);
}

function clearErrorClass(field) {
  field.classList.remove(errorClass);
}

/*
 * Validate field based on requirement and value format
 */
function validateField(field) {
  const fieldObject = document.getElementById(field.id);

  // Field not found
  if (!fieldObject) {
    return false;
  }

  console.log(field.label)
  
  const value = fieldObject.value.trim();
  console.log(value)

  let valid = true;

  if (!value) {
    // If field is empty, it'll be valid if it isn't required
    valid = !field.required;
  
  // Validating field value format
  } else if (field.format) {
    valid = value.match(field.format);

    if (!valid && field.errorMessage) {
      alert(field.errorMessage);
    }
  }

  // Inserting or removing the error class
  if (!valid) {
    addErrorClass(fieldObject);
  } else {
    clearErrorClass(fieldObject);
  }

  return valid;
}

/*
 * 
 */
function printFormValues(fields) {
  // Getting a string with label and value for each field
  let result = fields.map((field) => {
    const fieldObject = document.getElementById(field.id);
    if (!fieldObject) {
      return '';
    }
    
    return `${field.label}: ${fieldObject.value}`;
  });

  // Joining the result
  result = result.join('\n');

  alert(result);
}