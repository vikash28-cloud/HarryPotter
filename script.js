
let container = document.querySelector(".container");

async function  api_data(){
    let api = await fetch("https://hp-api.onrender.com/api/characters");
    let data = await api.json();

    console.log(data);

    for(let i=0;i<30;i++){

        let card = `<div class="card">
                <img src=${data[i].image} alt="character" >
                <h3>${data[i].name}</h3>
                <div class="info">
                    <span>${data[i].house}</span>
                    <p class="actorName">${data[i].actor}</p>
                    <p class="id">${data[i].id}</p>
                    <a target="_blank" href="https://www.google.com/search?q=${data[i].name}">Search on Web</a>


                </div>

            </div>`
        container.innerHTML += card;
    }


    
    
}

api_data();

