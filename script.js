console.log("We are connected");

function alertName(){
    alert("This Pokemon's name is Suicine");
} 
// Name can be element or pokemon or whatever
function enter(element){
    element.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png";
} 

function leave(element){
    element.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/155.png";
}

function getNumber(){
    var element = document.querySelector("#number");
    // console.log(element);
    console.log(element.value);
    var myPoke = document.querySelector("#myPokemon");
    myPoke.innerHTML = '<img https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + element.value +'.png alt="pokemon">'; 
}

