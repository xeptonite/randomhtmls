const menuButton = document.querySelector('.menu-button');
const navButtons = document.querySelector('.nav-buttons');

function toggleMenu() {
    navButtons.classList.toggle('hidden');
}

function adjustMenu() {
    if (window.innerWidth > 500) {
        navButtons.classList.remove('hidden');
        menuButton.style.display = 'none';
    } else {
        navButtons.classList.add('hidden');
        menuButton.style.display = 'block';
    }
}

window.addEventListener('resize', adjustMenu);
window.addEventListener('load', adjustMenu);

const displayNameField = document.getElementById('display-name');
const usernameField = document.getElementById('username');
const displayNamePreview = document.getElementById('display-name-preview');
const usernamePreview = document.getElementById('username-preview');

// Synchronize Username and optional Display Name
usernameField.addEventListener('input', function () {
    usernamePreview.textContent = usernameField.value || 'example';
    if (!displayNameField.dataset.manualEdit) {
        displayNameField.value = usernameField.value;
        displayNamePreview.textContent = usernameField.value || 'example';
    }
});

displayNameField.addEventListener('input', function () {
    displayNameField.dataset.manualEdit = true;
    displayNamePreview.textContent = displayNameField.value || 'example';
});

function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
}

function validateForm() {
// Clear previous error messages
            document.getElementById('class-name-error').innerText = '';
            document.getElementById('tf2-since-error').innerText = '';
            document.getElementById('username-error').innerText = '';
            document.getElementById('password-error').innerText = '';

            // Class Name validation
            let className = document.getElementById('class-name').value;
            if (!className) {
                document.getElementById('class-name-error').innerText = 'Class Name is required.';
                valid = false;
            }

            // Played TF2 Since validation (October 10th, 2007 or later)
            let day = document.getElementById('tf2-day').value;
            let month = document.getElementById('tf2-month').value;
            let year = document.getElementById('tf2-year').value;

            if (!day || !month || !year) {
                document.getElementById('tf2-since-error').innerText = 'Complete Played TF2 Since date is required.';
                valid = false;
            } else {
                let tf2SinceDate = new Date(`${year}-${month}-${day}`);
                let minimumDate = new Date("2007-10-10");
                if (tf2SinceDate < minimumDate) {
                    document.getElementById('tf2-since-error').innerText = 'Played TF2 Since must be October 10th, 2007 or later.';
                    valid = false;
                }
            }
    const usernameError = document.getElementById('username-error');
    const usernamePattern = /^(?!.*\.\.)(?!^\.)[a-zA-Z0-9._]{3,20}$/;
    let valid = true;

    if (!usernamePattern.test(usernameField.value)) {
        usernameError.textContent = 'Username must be 3-20 characters, letters, numbers and one underscore.';
        valid = false;
    } else {
        usernameError.textContent = '';
    }
    return valid;
}
