const quotes = [
    {
        name: 'Confucius',
        quote: "Exige beaucoup de toi-même et attends peu des autres. Ainsi beaucoup d'ennuis te seront épargnés."
    } , {
        name: 'Sartre',
        quote:"Dans la vie on ne fait pas ce que l'on veut mais on est responsable de ce que l'on est."
    } , {
        name: 'Gandhi',
        quote: "La vie est un mystère qu'il faut vivre, et non un problème à résoudre."
    } , {
        name: 'Einstein',
        quote: "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre."
    } , {
        name: 'Confucius',
        quote: "Un jour l'amour a dit à l'amitié : Pourquoi existes-tu puisque je suis là? L'amitié lui répond : Pour amener un sourire là ou tu as laissé des larmes."
    }
];

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random() * quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}





