'use strict'

//Example pour faire une fake BDD
class Database {
    //Recuperar los usarios - el array
    getAllUsers = () => {
        //Récupérer le string de la base de données fake
        const usersStr = localStorage.getItem('users');
        //Transformer un str en arr
        const usersArr = JSON.parse(usersStr);

        //S'il n'y a pas d'usarios, il retourne un arr vide
        if(usersArr === null){
            return [];
        } else {
            return usersArr;
        }
    }

    saveNewUser = (newUser) => {
        //Récupérer l'arr des usarios del localStorage
        const usersArr = this.getAllUsers();

        //Actualizar el array de usarios
        usersArr.push(newUser);

        //Convertir l'array en string
        const usersStr = JSON.stringify(usersArr);
        
        //Almacenarlo de nuevo
        localStorage.setItem('users', usersStr);
    }
}

const db = new Database();

console.log('db', db);