const userClick = document.querySelector('.btn');
const quotes = document.querySelector('.quotes');
const resultContainer = document.querySelector('.result');
const text = document.querySelector(' #text');
const authorName = document.querySelector('#authorName');
const apiUrl = "https://api.quotable.io/quotes";
// fetch api 
const randomQuotesGenerator = async () => {
    const dataFetch = await fetch(apiUrl)
    const respo = await dataFetch.json();
    console.log(respo);
    // create our own container 

    respo.results.forEach((result) => {
        console.log(result);
        const container = `
<p id="text">${result.content}</p>
<b id="authorName">${result.author}</b>
`
        resultContainer.innerHTML = container;


    })

}

// user click
userClick.addEventListener('click', () => {
    randomQuotesGenerator();

})
