function Alert(){
            var password = document.getElementById('password').value;
            var confirmPassword = document.getElementById('confirmPassword').value;
            var messageElement = document.getElementById('message');

            if (password === confirmPassword) {
                messageElement.textContent = 'Passwords match!';
                messageElement.className = 'success';
            } else {
                messageElement.textContent = 'Passwords do not match!';
                messageElement.className = 'error';
            }
}

// document.getElementById('passwordForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form from submitting

//     var password = document.getElementById('password').value;
//     var confirmPassword = document.getElementById('confirmPassword').value;
//     var messageElement = document.getElementById('message');

//     if (password === confirmPassword) {
//         messageElement.textContent = 'Passwords match!';
//         messageElement.className = 'success';
//         document.getElementById('password').classList.remove('input-error');
//         document.getElementById('confirmPassword').classList.remove('input-error');
//     } else {
//         messageElement.textContent = 'Passwords do not match!';
//         messageElement.className = 'error';
//         document.getElementById('password').classList.add('input-error');
//         document.getElementById('confirmPassword').classList.add('input-error');
//     }
// });
