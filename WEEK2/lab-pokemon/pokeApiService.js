'use strict';

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