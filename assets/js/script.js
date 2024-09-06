
// Getting data from API and returns it

async function fetchingData (id) {

    let id = 3;
    
    try {

        let response = await fetch("https://swapi.dev/api/people/" + id )

        if (!response.ok){

            if (response.status === 404){

                alert(`Character not found.`)

                console.error(`Character not found.`, response.status)

                throw new Error(`Resource not found.`)

            }

            else {

                console.error(`HTTP Error`, response.status)

                throw new Error(`Unable to get character.`)

            }
        }

        const data = await response.json(); // Returns a promise so we use await

        console.log(data)

        injectingCard(data)

    }

    catch (error){

        console.error(error)

    }

};



// Injecting card into html

function injectingCard(character){
    
    const {name, height, mass} = character

    let cardHTML =  `
                    <div class="card">
                        <h3>${name}</h3>
                        <p>Height: ${height} m. | Mass: ${mass} kg.</p>
                    </div>
    `;

    if (id <= 5){

        document.getElementById('mostPopular').innerHTML += cardHTML;

    } else if (id > 5 && id <= 10) {

        document.getElementById('secondary').innerHTML += cardHTML;

    } else if (id >= 15){

        document.getElementById('others').innerHTML += cardHTML;

    } else {

        console.error(`Unable to show character.`)

    }

    console.log(cardHTML)

};





