$(document).ready(() => {
  $('#submit').on('click', async (e) => { 
    e.preventDefault();
  
    const newBurger = {
      burgerName: $('textarea').val().trim()
    }
  
    const response = await fetch('/api/burgers', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(newBurger)
    });
  
    console.log(response);
    if (response.ok) location.reload();
  });
  
  // TODO: Fix this
  $('button').on('click', async () => { 
    const id = $(this).data('id');

    // Test
    console.log(id)
  
    // const response = await fetch(`/api/burgers/${id}`, {
    //   method: 'PATCH',
    //   headers: { 'Content-type': 'application/json' }
    // });
  
    console.log(response);
    if (response.ok) location.reload();
  });
})