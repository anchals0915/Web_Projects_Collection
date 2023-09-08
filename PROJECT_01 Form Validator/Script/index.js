const formElement = document.getElementById('form');

const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_Password');

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.classList.remove('success'); 
    formControl.classList.add('error');
    const error = formControl.querySelector('small');
    error.textContent = message;
}


// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
    formControl.classList.add('success'); 
}

// Check required fields
function checkRequired(inputArr_Elements) {
    inputArr_Elements.forEach(function(element) {
        if (element.value.trim() === '') {
            showError(element, `${getFieldName(element)} is required`);
        } else {
            showSuccess(element);
        }
    });
}




// Check email is valid
function validate(input) {
    if( input.id === 'username' ) {
        /*
         * The username must be between 3 and 30 characters.
         * It can consist of letters (both uppercase and lowercase), numbers, underscores, and periods.
         * It cannot start or end with an underscore (_) or period (.).
         * It cannot have two consecutive underscores or periods.
         * It cannot have a special character before or after a letter or number.
         */
        const re =  /^(?![_\.])[a-zA-Z0-9._](?![_\.])[a-zA-Z0-9._]{1,28}[a-zA-Z0-9._]$/;
    } 
    else if( input.id === 'password' ) {
        /*
         * Length: Minimum of 12 characters.
         * Complexity: Requires at least one lowercase letter, one uppercase letter, one digit, and one special character.
         * Avoiding Common Patterns: It doesn't allow common patterns or sequences.
         * Unpredictability: The combination of characters is random and unpredictable.
         */
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^])[A-Za-z\d@$!%*?&^]{8,}$/;
    } 
    else if( input.id === 'email' ) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }

    
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'This is not valid!');
    }
}

// Check passwords match
function checkPasswordsMatch(password, confirm_password) {
    if (password.value !== confirm_password.value) {
        showError(confirm_password, 'Passwords do not match');
    }
}

// Get fieldname
function getFieldName(element) {
    return element.id.charAt(0).toUpperCase() + element.id.slice(1);
}


// Check input length
function checkLength(element, min_length, max_length) {
    if (element.value.length < min_length) {
        showError(
            element,
            `${getFieldName(element)} must be at least ${min_length} characters`
        );
    } else if ( element.value.length > max_length) {
        showError(
            element,
            `${getFieldName(element)} must be less than ${max_length} characters`
        );
    } else {
        showSuccess(element);
    }
}

// Event listeners
formElement.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([username, email, password, confirm_password]);
    
    checkLength(username, 3, 30);
    validate(username) ;

    validate(password) ; 

    validate(email);

    checkPasswordsMatch(password, confirm_password);
});
