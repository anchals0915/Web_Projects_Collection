const form = document.getElementById('my-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const fields = [
        { 
            element: document.getElementById('username'), 
            errorId: 'user-error', 
            validation: validateUser 
        },
        { 
            element: document.getElementById('email'), 
            errorId: 'email-error', 
            validation: validateEmail 
        },
        { 
            element: document.getElementById('password'),
            errorId: 'pass-error',
            validation: validatePass 
        },
        { 
            element: document.getElementById('confirm-pass'),
            errorId: 'confirm-error',
            validation: validateConfirm 
        }
    ];

    fields.forEach( field => {
        let errorMessage ; 
        if(field.errorId === 'confirm-error' ) {
            errorMessage = field.validation(document.getElementById('confirm-pass').value , document.getElementById('password').value );
        } else {
            errorMessage = field.validation(field.element.value);
        }
        document.getElementById(field.errorId).textContent = errorMessage;
    });
});

function validateUser(str) {
    if (str.length === 0) { 
        return "This field cannot be empty.";
    }
    if (str.length < 8 || str.length > 15) {
        return "Username should be of length 8-15";
    }
    const usernameRegex = /^[a-zA-Z0-9_]{8,15}$/;
    return usernameRegex.test(str) ? "✓" : "Username should only contain A-Z, a-z, 0-9";
}

function validateEmail(str) {
    if (str.length === 0) {
        return "This field cannot be empty.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(str) ? "✓" : "Email is Invalid ";
}

function validatePass(str) {
    if (str.length === 0) {
        return "This field cannot be empty.";
    }
    if (str.length < 8) {
        return "Should be of 8 or more Characters";
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(str) ? "✓" : "At least one from each {a-z, A-Z, 0-9, @$!%*?&} ";
}

function validateConfirm(str1, str2) {
    if (str1.length === 0) {
        return "This field cannot be empty.";
    }
    return str1 == str2 ? "✓" : "Should be same as Password ";
}
// @N$i2003