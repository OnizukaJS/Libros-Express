class Signup {
    constructor() {
        this.nameInput = document.querySelector('#name');
        this.pokemonInput = document.querySelector('#pokemon');
        this.typeInput = document.querySelector('#type');
        this.emailInput = document.querySelector('#email');
        this.passwordInput = document.querySelector('#password');
        this.repeatPasswordInput = document.querySelector('#repeat-password');
        this.buttonInput = document.querySelector('#signup-button');
        this.errorsWrapper = document.querySelector('#message-container');
    }

    //Gestionar cambios del input “email”
    handleEmailInput = (event) => {
        const email = event.target.value;

        //validar el texto del input email
        validator.validateValidEmail(email);

        const errors = validator.getErrors();

        //Si le nom de l'email est valide car le message d'erreur n'existe pas
        if (!errors.invalidEmailError){
            //Vérifier que l'email est unique
            validator.validateUniqueEmail(email);
        } 

        //À FAIRE mostrar los errores si hay algunos
    }

    //Gestionar cambios del input “password”
    handlePasswordInput = (event) => {
        const password = event.target.value;
        const passwordRepeat = this.repeatPasswordInput.value;

        //validar el texto del input password
        validator.validatePassword(password);
        validator.validatePasswordRepeat(password, passwordRepeat)

        this.setErrorMessages();
    }

    //Gestionar cambios del input “repeat-password”
    handleRepeatPasswordInput = (event) => {
        const repeatPassword = event.target.value;
        const password = this.passwordInput.value;

        //validar el texto del input repeatPassword
        //validar el texto del input password
        validator.validatePassword(password);
        validator.validatePasswordRepeat(password, passwordRepeat);

        //À FAIRE mostrar los errores si hay algunos
    }

    //Gestionar el envío de los datos (submit)
    saveData = (event) => {
        event.preventDefault(); //Pour que la page de recharge pas à chaque fois
        //Recoger los valores de los input
        const name = this.nameInput.value;
        const pokemon = this.pokemonInput.value;
        const type = this.typeInput.value;
        const email = this.emailInput.value;
        const password = this.passwordInput.value;
        const repeatPassword = this.repeatPasswordInput.value;

        function createUser(name, pokemon, type, email, password) {
            const userObj = {
                /*When the key and value are the same, we can just put this way
                  name,
                  pokemon,
                  type,
                  email,
                  password */
                name: name,
                pokemon: pokemon,
                type: type,
                email: email,
                password: password,
                //No repeat password porque es solo para validar
            }
            return userObj;
        }
        const newUser = createUser(name, pokemon, type, email, password);


        //guardar el nuevo usario en la base de datos (simulada)
        db.saveNewUser(newUser); //check Database.js


        //Vaciar el form
        this.nameInput.value = "";
        this.pokemonInput.value = "";
        this.typeInput.value = "";
        email = this.emailInput.value = "";
        password = this.passwordInput.value = "";
        repeatPassword = this.repeatPasswordInput.value = "";

        this.showSuccessMessage();
        this.removeMessages();
    }


    //Registrar funciones para cada input/campo
    addListeners = () => {
        //Chaque changement de texte
        this.emailInput.addEventListener('input', this.handleEmailInput);
        this.passwordInput.addEventListener('input', this.handlePasswordInput);
        this.repeatPasswordInput.addEventListener('input', this.handleRepeatPasswordInput);

        this.buttonInput.addEventListener('input', this.saveData);
    }

    showSuccessMessage = () => {
        //Vider les erreurs pour qu'elles ne s'additionnent pas
        this.errorsWrapper.innerHTML = '';
        const errorObj = validator.getErrors();

        //Convertir el objecto a un array de strings
        const errorsStringsArr = Object.value(errorObj);

        if(errorsStringsArr.length > 1){

        }

        const successMessageP = document.createElement('p');
        successMessageP.innerHTML = 'La cuenta ha sido creada correctamente';
        
        this.errorsWrapper.appendChild(successMessageP);
    }

    removeMessages = () => {
        setTimeout(() => {
            this.errorsWrapper.innerHTML = '';
        }, 2000);
    }

    setErrorMessages = () => {
        //Vider les erreurs pour qu'elles ne s'additionnent pas
        this.errorsWrapper.innerHTML = '';
        const errorsObj = validator.getErrors();

        //Convertir l'objet en un array de strings
        const errorsStringArr = Object.values(errorsObj);

        errorsStringArr.forEach((errorsStr) => {
            const errorMessageP = document.createElement('p');
            errorMessageP.innerHTML = errorStr;

            this.errorsWrapper.appendChild(errorMessageP);
        });
    }
}

//Crear una nueva instancia del Signup (objeto)
const signup = new Signup();

window.addEventListener('load', signup.addListeners)