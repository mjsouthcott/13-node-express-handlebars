$('#submit').on('click', (e) => {
  // Test
  console.log('"Submit" button clicked');

  e.preventDefault();

  const newBurger = {
    burgerName: $('textarea').val().trim()
  }

  // Test
  console.log(newBurger)

  const response = await fetch('/api/burgers', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(newBurger)
  });

  console.log(response);
  if (response.ok) location.reload();
});

$('ul').on('click', 'button', () => {
  // Test
  console.log('"Devour it!" button clicked');

  const id = this.getAttribute('data-id')

  const response = await fetch(`/api/burgers/${id}`, {
    method: 'PATCH',
    headers: { 'Content-type': 'application/json' }
  });

  console.log(response);
  if (response.ok) location.reload();
});