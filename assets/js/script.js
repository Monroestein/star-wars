// let count = 1

// Getting data from API 

async function fetchData(id, id_dom) {

    try {
        let response = await fetch("https://swapi.dev/api/people/" + id)
        if (!response.ok) {
            if (response.status === 404) {
                alert('Character not found.')
                console.error('Character not found.', response.status)
                throw new Error('Resource not found.')
            } else {
                console.error('HTTP Error', response.status)
                throw new Error('Unable to get character.')
            }
        }
        const data = await response.json(); // Returns a promise so we use await
        console.log(data)
        injectCard(data, id_dom)
        return true
    } catch (error) {
        console.error(error)
    }
};

// Injecting card into html

function injectCard(character, id) {
    const { name, height, mass } = character
    let cardHTML = `
                    <div class="card">
                        <h3>${name}</h3>
                        <p>Height: ${height} m. | Mass: ${mass} kg.</p>
                    </div>`;

    document.getElementById(id).innerHTML += cardHTML;

};

/* Primary */

let countPrimary = 1

document.getElementById('numPop').addEventListener('click', function (){
    
    if(countPrimary <= 5){

        let response = fetchData(countPrimary, 'mostPopular')

        if (response){
            countPrimary++
        }
    } 

});

/* Secondary */

let countSecondary = 6

document.getElementById('numSec').addEventListener('click', ()=>{
    if (countSecondary <= 10){
        let response = fetchData(countSecondary, 'secondary')
        if(response){
            countSecondary++
        }
    }
});

/* Others */

let countOthers = 11

document.getElementById('numThi').addEventListener('click', ()=>{
    if (countOthers <= 15){
        let response = fetchData(countOthers, 'others')
        if(response){
            countOthers++
        }
    }
});



