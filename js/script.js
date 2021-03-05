// // IPO Patter for program design - Input -> Process -> Output 


// /*-------constants------*/

// const $name = $('#name');
// const $game_index = $('#game_index');


// // const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

// // Event listeneres

// $('form').on('submit', handleSubmit);


// // Functions

// function handleSubmit(evt) {
//     const term = $input.val();
//     $.ajax(`https://pokeapi.co/api/v2/pokemon/?q=({term}`).then(funciton(data) {
//         console.log('Pokemon', data);
//         $name.text(data.name);
//         $game_index.text(data.game_index);

//     }, function(error) {
//         console.log('error: ', error);
//     });

// }

const poke_container = document.getElementById('poke_container');
const pokemons_number = 150;

const getPokemon = async id => {
    const url = https://pokeapi.co/api/v2/pokemon/
}