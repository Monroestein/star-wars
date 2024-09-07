// Getting data from API 

async function fetchData (id) {
    
    try {

        let response = await fetch("https://swapi.dev/api/people/" + id )

        if (!response.ok){

            if (response.status === 404){

                alert('Character not found.')

                console.error('Character not found.', response.status)

                throw new Error('Resource not found.')

            }

            else {

                console.error('HTTP Error', response.status)

                throw new Error('Unable to get character.')

            }
        }

        const data = await response.json(); // Returns a promise so we use await
        
        console.log(data)
        
        injectCard(data, id)

    }

    catch (error){

        console.error(error)

    }

};

// Injecting card into html

function injectCard(character, id){
    
    const {name, height, mass} = character

    let cardHTML =  `
                    <div class="card">
                        <h3>${name}</h3>
                        <p>Height: ${height} m. | Mass: ${mass} kg.</p>
                    </div>
    `;

    if (id <= 5) { 

        document.querySelector("#numPop").addEventListener('mouseover', function(){
            document.getElementById('mostPopular').innerHTML += cardHTML;
        })
        
    } else if (id > 5 && id <= 10) {
 
        document.querySelector("#numSec").addEventListener('mouseover', function(){
            document.getElementById('secondary').innerHTML += cardHTML;
        })

    } else if (id > 10 && id <= 15){

        document.querySelector("#numThi").addEventListener('mouseover', function(){
            document.getElementById('others').innerHTML += cardHTML;
        })

    } else {

        console.error('Unable to show character.')

    }

    //console.log(cardHTML)

};


/* 
    - Each iteration have to add to the id
    - It can't show more than five cards.
*/

// Increase id and limit iterations to 15.

function limitIterations(){

    let count = 1

    for (let i = 1; i <= 15; i++){
        fetchData(count)
        count++
    }

    return
    //console.log(count)
}


limitIterations()



