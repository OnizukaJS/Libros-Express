'use strict';

class Validator {
    constructor() {
        //Créer les messages prédéterminés
        this.invalidEmailError = 'Ingrese un email válido';
        this.emailExistsError = 'Este emal ya está registrado';
        this.passwordError = 'Introduce una contraseña de 6 o más carácteres';
        this.repeatPassworderror = 'Los campos no coinciden';

        //objet avec les erreurs que nous allons montrer aux utilisateurs (Sans l'email car nous ferons la verif' une fois que le bouton submit est pressé)
        this.errors = {
            invalidEmailError: this.invalidEmailError,
            passwordError: this.passwordError,
            repeatPassworderror: this.repeatPassworderror
        }
    }

    //Metodo Validar el nombre del email
    validateValidEmail = (email) => {
        if (this.emailIsValid(email)) {
            //Vérifier si l'email est valide afin de pouvoir quitter l'erreur de l'objet this.errors
            delete this.errors.invalidEmailError;
        } else {
            //Si ce n'est pas valide, il faut le mettre de nouveau dans this.errors
            this.errors.invalidEmailError = this.invalidEmailError;
        }
    }

    //Fonction auxiliaire de 'ValidateEmail' pour retourner true ou false
    emailIsValid = (email) => {
        //Regex avec les règles à respecter
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

        //Metodo test qui renvoie true ou false
        const isValid = emailRegex.test(email);
    }

    //Metodo Validar que el email no esta usado
    validateUniqueEmail = (newEmail) => {
        //Récupérer les valeurs de localStorage pour voir s'il existe déjà
        const usersDB = db.getAllUsers();
        let emailUnique = true;

        if (usersDB.length > 0) {
            usersDB.forEach((userObj) => {
                //Si l'email est déjà dans la bdd
                if (userObj.email === newEmail) {
                    emailUnique = false;
                }
            });
            if (emailUnique) {
                //On enlève le message d'erreur
                delete this.errors.emailExistsError;
            } else {
                this.errors.emailExistsError = this.emailExistsError;
            }
        }
    }

    //Metodo Validar la longitud del password
    validatePassword = (password) => {
        if (password.length > 5) {
            delete this.errors.passwordError;
        } else {
            this.errors.passwordError = this.passwordError;
        }
    }

    //Metodo Validar si los dos campos coinciden
    validatePasswordRepeat = (password, passwordRepeat) => {
        if (password === passwordRepeat) {
            delete this.errors.repeatPassworderror;
        } else {
            this.errors.repeatPassworderror = this.repeatPassworderror;
        }
    }

    //Metodo Obtener el objeto con errores, para mostrarlos al usuario en la pagina Sign Up
    getErrors = () => {
        return this.errors;
    }

    //Reiniciar los errores mostrados, para el proximo Signup
    resetValidator = () => {
        this.errors = {
            invalidEmailError: this.invalidEmailError,
            passwordError: this.passwordError,
            repeatPassworderror: this.repeatPassworderror
        }
    }
}

//Possibilité d'accéder aux méthodes rapidement avec validator.nomMethod()
const validator = new Validator();