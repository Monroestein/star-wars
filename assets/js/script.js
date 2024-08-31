
// Getting data from API

function getData(idCharacter) {
    let promise = fetch("https://swapi.dev/api/people/" + idCharacter)

    promise
        .then(response => {

            console.log(response)

            if (!response.ok) {

                if (response.status === 404) {

                    alert(`Character not found.`)
                    throw new Error(`Resource not found.`)

                } else {

                    console.error(`HTTP Error`, response.status)
                    throw new Error(`Couldn't obtain character.`)
                }
            }
            return response.json()
        })

        .then(data => {
            console.log(data)
            injectInfo(data)
        })

        .catch(error => {
            console.log(error)
        })
}

// Injecting data to HTML.
//      ! Fix the first going last when injecting other cards.

function injectInfo(character) {

    const {name, height, mass} = character;

    let infoHTML = ` 
    <div class="card">
        <h3>${name}</h3>
        <p>Height: ${height} m. | Mass: ${mass} kg.</p>
    </div>
    `;

    console.log(infoHTML)

    document.getElementById('mostPopular').innerHTML += infoHTML;
 }

// I need to add event listener to button

    // document.querySelector('.numbers').addEventListener('hover', injectInfo)


// I need to make a loop until getData reaches 5

// getData(1)
// getData(6)

/*

*/

// 1:41:58