const hireMeButton = document.getElementById('hireMeButton');
const hireMeForm = document.getElementById('hireMeForm');
const hireMeFormInner = document.getElementById('hireMeFormInner');

hireMeButton.addEventListener('click', () => {
  hireMeForm.style.display = 'block';
});

hireMeFormInner.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(hireMeFormInner);

  // Send the data to your server for email processing
  fetch('email-script.php', {
    method: 'POST',
    body: formData,
  }).then((response) => {
    if (response.ok) {
      alert('Your message has been sent.');
      hireMeForm.style.display = 'none';
    } else {
      alert('Error sending the message. Please try again.');
    }
  });
});
