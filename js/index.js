let phoneNumber = '';

$("input[name='phone']").on("input", function() {

  console.log('--- iduashduasui ---'); // [XXX] REMOVE BEFORE COMMITING
  console.log('--- this.value ---'); // [XXX] REMOVE BEFORE COMMITING
  console.log(this.value); // [XXX] REMOVE BEFORE COMMITING
  phoneNumber = destroyMask(this.value || '');
  this.value = createMask(phoneNumber);
})

function createMask(string){
  return string.replace(/(\d{2})?(\d{5}|\d{4})?(\d{4})/,"($1) $2-$3");
}

function destroyMask(string){
  return string.replace(/\D/g,'');
}