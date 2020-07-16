'use strict'
class Login {
    constructor() {
        this.email = document.querySelector('#email');
        this.password = document.querySelector('#password');
        this.loginButton = document.querySelector('#login-button');
        this.messageContainer = document.querySelector('.message-container');
    }
    //gestionar el envio de los datos (evento "submit")
    submit = (event) => {
        event.preventDefault();
        const userDB = db.getAllUsers();
        const email = this.emailInput.value;
        const password = this.passwordInput.value;
        //Intentar encontrar el usuario - finde devueleve solo un elemento
        const user = usersDB.find((userObj) => {
            if (userObj.email === email && userObj.password === password) {
                return true;
            }
        });
        this.showMessage(user);
    }
    //mostrar el mensaje de error o mensaje de exito
    showMessage = (user) => {
        this.messageContainer.innerHTML = '';

        const message = document.createElement('p');

        if (user) {
            message.innerHTML = `hola, ${user.email}`;
            message.classList.add('correct-message');
        } else {
            message.innerHTML = 'El email o/y password son incorectos';
        }
        this.messageContainer.appendChild(message);

        if (user) this.redirect();
    }

    redirect = () => {
        setTimeout(() => location.assign('dashboard.html'), 2000)
    }
}

const login = new Login();

login.loginButton.addEventListener('click', login.submit);