// // IPO Patter for program design - Input -> Process -> Output 


// // /*-------constants------*/

const $name = $('.name');
const $game_index = $('.game_index');
const $sprites = $('.sprites');
const $type = $('.type');
const $shiny = $('.shiny');
const $input = $('input[type="text"]');
// // // Event listeners

$('form').on('submit', handleSubmit);


// // // Functions

function handleSubmit(evt) {
    evt.preventDefault();
    const $term = $input.val();
    $.ajax(`https://pokeapi.co/api/v2/pokemon/${$term}`).then(function (data) {
        console.log('Pokemon', data);
        $name.text(data.name);
        $game_index.text('No. ' + (data.id));
        $sprites.html(`<img src="${data.sprites.front_default}" id="sprite"></img>`);
        $type.text('Type: ' + (data.types[0].type.name));
        $shiny.html(`<img src="${data.sprites.front_shiny}" id="sprite"></img>`);
    });

}

