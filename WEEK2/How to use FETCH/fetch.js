'use strict';





function getPictures() {

    const divElt = document.getElementById('liste');
    const warningMsg = document.createElement('p');

    for (let i = 0; i < 21; i++) {
        // cada photo lleva su propio indice
        // tenemos que añadir el indice al fin de URL de la API
        fetch(`https://www.scorebat.com/video-api/v1/${i+1}`)

            .then((response) => {
                warningMsg.innerHTML = ''; //Para vaciar el mensaje

                if (!response.ok) {
                    throw new Error('Cuidado, no se puede encontrar ningun imagenes');
                }

                return response.json();
            }) //grace a .json() ça permet de lire toutes les donnés de l'url qu'on a choppé sur response qui permet de chopper l'url
            .then((data) => {
                const aElts = document.createElement('a');

                aElts.innerHTML = `<h4>${data.title}</h4>`;

                divElt.appendChild(aElts);

            })

            .catch((err) => {
                warningMsg.textContent = err; //Le message va se créer une seule fois car const warning mess est créé en dehors de la recherche.

                divElt.appendChild(warningMsg);
            })
    }
}

getPictures();

/*function getPictures() {

    const divElt = document.getElementById('liste');
    const warningMsg = document.createElement('p');

    for (let i = 0; i < 21; i++) {
        // cada photo lleva su propio indice
        // tenemos que añadir el indice al fin de URL de la API
        fetch(`https://jsonplaceholder.typicode.com/photos/${i+1}`) 

            .then((response) => {
                warningMsg.innerHTML = ''; //Para vaciar el mensaje

                if (!response.ok) {
                    throw new Error('Cuidado, no se puede encontrar ningun imagenes');
                }

                return response.json();
            }) //grace a .json() ça permet de lire toutes les donnés de l'url qu'on a choppé sur response qui permet de chopper l'url
            .then((data) => {
                const aElts = document.createElement('a');

                aElts.innerHTML = `<img src="${data.thumbnailUrl}">
                                    <h4>${data.title}</h4>`;

                divElt.appendChild(aElts);

            })

            .catch((err) => {
                warningMsg.textContent = err; //Le message va se créer une seule fois car const warning mess est créé en dehors de la recherche.

                divElt.appendChild(warningMsg);
            })
    }
}

getPictures();*/

/*for (let i = 0; i < 21; i++) {
        //Chaque pokemon a son propre indice
        //Nous devons ajouter l'indice à la fin de l'url
        fetch(`https://pokeapi.co/api/v2/pokemon/${i+1}`)
            .then((response) => {
                //Convertir la réponse en un objet lisible,
                //Car les données de la réponse (response.body) sont codifiées.
                console.log(response);

                return response.json(); //opération asynchrone
            })
            .then((data) => {
                //data représente chaque pokemon
                const article = document.createElement('article');
                article.innerHTML = `
                    <img src="${data.sprites.front_default}" alt="${data.name}"/>
                    <h3>${data.name}</h3>
                `;

                section.appendChild(article);
            })
            .catch((err) => {})
    }*/


/*const getFirstUserData = async () => {
    const reponse = await fetch('https://jsonplaceholder.typicode.com/users') //usamos fetch para traer la lista de users
    const users = await response.json(); //parse json
    const user = users[0]; //Elegimos el primer user
    console.log(user.email);
};

getFirstUserData();

//Other example
async function getUserAsync(name) {
    let response = await fetch(`https://api.github.com/users/${name}`);
    let data = await response.json()
    return data;
}

getUserAsync('yourUsernameHere')
    .then(data => console.log(data));*/


/*'use strict';

function getPokemons() {

    const section = document.querySelector('.pokemon-list');


    for (let i=0; i<21; i++){
        //Chaque pokemon a son propre indice
        //Nous devons ajouter l'indice à la fin de l'url
        fetch(`https://pokeapi.co/api/v2/pokemon/${i+1}`)
            .then((response)=> {
                //Convertir la réponse en un objet lisible,
                //Car les données de la réponse (response.body) sont codifiées.
                console.log(response);

                return response.json(); //opération asynchrone
            })
            .then((data)=> {
                //data représente chaque pokemon
                const article = document.createElement('article');
                article.innerHTML = `
                    <img src="${data.sprites.front_default}" alt="${data.name}"/>
                    <h3>${data.name}</h3>
                `;

                section.appendChild(article);   
            })
            .catch((err)=>{})
    }
}

getPokemons();

/*Étant donné que fetch est une opération asynchrone il faut donc utiliser:
- then() = respuesta
- catch() = errores
Pour gérer les rep*/