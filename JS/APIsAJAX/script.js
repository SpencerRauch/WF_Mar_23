console.log("linked")
const url = "https://pokeapi.co/api/v2/pokemon/"

const pokeInputElement = document.querySelector("#pokeNameInput")
const resultsElement = document.querySelector("#results")

async function getPoke(){
    let search = pokeInputElement.value;
    console.log(search)
    let response = await fetch(url+search)
    let data = await response.json()
    console.log(data)
    resultsElement.innerHTML = `
    <p> Number: ${data.id} --- ${data.name} </p>
    <img src="${data.sprites.front_default}" alt="${data.name}" width="300px">
    `
}

// async function randomPoke(){
//     let pokeNum = Math.floor(Math.random() * 999)
//     let response = await fetch(url+pokeNum)
//     let data = await response.json()
//     console.log(data)
//     resultsElement.innerHTML = `
//     <p> Number: ${data.id} --- ${data.name} </p>
//     <img src="${data.sprites.front_default}" alt="${data.name}" width="300px">
//     `
// }

function randomPoke(){
    let pokeNum = Math.floor(Math.random() * 999)
    fetch(url+pokeNum)
        .then( response => response.json())
        .then( data => {
            console.log(data)
            resultsElement.innerHTML = `
            <p> Number: ${data.id} --- ${data.name} </p>
            <img src="${data.sprites.front_default}" alt="${data.name}" width="300px">
            `
        })
        .catch(err => console.log(err))

}


