const getQuotes = document.querySelector('button');
const quotes = document.querySelector('.quotes');
const authors = document.querySelector('.authors');
const quotables = [{
    name: 'Nelson Mandela',
    author: 'the greatest glory in living lies not in never falling, but rise every time we fall'
},
{
    name: 'walt disney',
    author: 'the way to get startted is to quit talking and start doing'
},
{
    name: 'john lennon',
    author: 'life is what happens when you are busy making other plans'
},
{
    name: 'margaret mead',
    author: 'always remember that you are absolutely unique. just like everyone else'
},
{
    name: 'elenor roosevert',
    author: 'the future belongs to those who believe in the beauty of their dreams'
}]

getQuotes.addEventListener("click", showQuotes);

function showQuotes() {
    let random = Math.floor(Math.random() * quotables.length)
    quotes.innerText = quotables[random].author;
    authors.innerText = quotables[random].name;
}