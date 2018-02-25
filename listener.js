function toggleButton(disable) {
  const button = document.getElementById('knap');
  knap.disabled = disable;
}

function checkNavn(event) {
  const value = event.target.value;
  const valueIsEmpty = value.length === 0;
  toggleButton(valueIsEmpty);
}

function submitForm(event) {
  event.preventDefault();
  toggleButton(true);
  const navnInput = document.getElementById('navn');
  setTimeout(() => {
    alert('Velkommen til, ' + navnInput.value);
    navnInput.value = '';
    navnInput.focus();
  }, 2000);
}