const showPasswordCheckbox = document.getElementById('show-password');
    const passwordInput = document.getElementById('password');

    showPasswordCheckbox.addEventListener('change', () => {
      passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
    });

    
    const form = document.getElementById('form');

    form.addEventListener('submit', (event) => {
      event.preventDefault(); 
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();

      
      if (username === '' || password === '') {
        alert('Please fill in all fields.');
        return;
      }

      
      alert(`Login Successful!\nRedirecting to the dashboard...`);
      window.location.href = 'dashboard.html'; 
    });