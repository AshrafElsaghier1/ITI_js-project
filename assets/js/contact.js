let form = document.getElementById('form')
let userNameInput = document.getElementById('name')
let emailInput = document.getElementById('email')
let phoneInput = document.getElementById('phone')
let message = document.getElementById('message')
let btnSubmit = document.getElementById('submit-btn')
let allInputs = document.querySelectorAll('.form-group .input')



function validationForm() {


    // Email function validation
    function ValidateEmail(input) {
        let validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (input.value.match(validRegex)) {
            input.classList.remove('error')
            return true;
        } else {
            input.classList.add('error')
            return false;
        }
    }
    // text name Validation

    function userNameInputFunc(input) {
        let validRegex = /^[a-zA-Z\s]*$/g;
        if (input.value.match(validRegex)) {
            input.classList.remove('error')
            return true;
        } else {
            input.classList.add('error')
            return false;
        }
    }

    // Phone Number Validation
    function phoneFunc(input) {
        var phoneValidation = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,5}$/im;
        if (input.value.match(phoneValidation)) {
            input.classList.remove('error')
            return true;
        } else {
            input.classList.add('error')
            return false;
        }
    }

    // Message length more than 20 letters

    function textLength(textarea) {
        let textValue = textarea.value.trim()
        if (textValue.length >= 20) {
            textarea.classList.remove('error')

        } else {
            textarea.classList.add('error')
        }

    }


    // checking for Empty value
    allInputs.forEach(input => {
        let fieldVal = input.value.trim();
        if (fieldVal.length == 0 || fieldVal == "") {
            input.classList.add('error')
            return false;
        } else {
            input.classList.remove('error')
            return true;
        }
    });
    textLength(message)
    userNameInputFunc(userNameInput)
    ValidateEmail(emailInput)
    phoneFunc(phoneInput)


}

form.addEventListener('submit', function(e) {
    e.preventDefault()
    validationForm()

})