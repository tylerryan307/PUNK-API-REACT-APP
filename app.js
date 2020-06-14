document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.querySelector('.beer-button')
    const randomBeer = document.querySelector('.random-beer')
    const descriptionDisplay = document.querySelector('.description')

    function getData() {

    fetch('https://api.punkapi.com/v2/beers/random')
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            const name = data[0].name
            const description = data[0].description


            randomBeer.innerHTML = name
            descriptionDisplay.innerHTML = description
        })
    }

    startBtn.addEventListener('click', getData)

})