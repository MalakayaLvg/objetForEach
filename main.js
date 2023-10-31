console.log("coucou")


const etudiant1 = {
    name : "Pierre",
    age : 19,
    platPref : "pizza",
    booleenPref : true,
    pseudoGH : "Pierrot69280",
}

const etudiant2 = {
    name : "Mei",
    age : 17,
    platPref : "boeuf bourguignon",
    booleenPref : false,
    pseudoGH : "MeyDetour",

}

const etudiant3 = {
    name : "Natan",
    age : 19,
    platPref : "pates à la bolognaise",
    booleenPref : true,
    pseudoGH : "natanbinisti",
}

const etudiant4 = {
    name : "Raphael",
    age : 18,
    platPref : "risoto",
    booleenPref : true,
    pseudoGH : "raphaelmoynat",
}

const etudiant5 = {
    name : "Malakaya",
    age : 21,
    platPref : "pates carbonara",
    booleenPref : true,
    pseudoGH : "MalakayaLvg",
}

const etudiants = [etudiant1,etudiant2,etudiant3,etudiant4,etudiant5]

console.log(etudiant1.name)

let card = document.querySelector(".cardTemplate")

fetch("https://api.github.com/users/malakayalvg")
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        const urlAvatar = data.avatar_url
        console.log(urlAvatar)
    })

function makeCardFromStudent (student){

        let cardTemplate = `
            <div class="card" style="width: 18rem;">
                    <img src="" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title"> nom : ${student.name}</h5>
                        <p class="card-text"> age : ${student.age}</p>
                        <p class="card-text"> plat préféré : ${student.platPref}</p>
                        <p class="card-text"> booleen préféré : ${student.booleenPref}</p>
                        <p class="card-text"> pseudo GitHub : ${student.pseudoGH}</p>
                        <a href="#" class="btn btn-primary">Hello</a>
                    </div>
            </div>
            `


            return cardTemplate
        }


etudiants.forEach((etudiant)=>{
    card.innerHTML += makeCardFromStudent(etudiant)
})

/*
const divBlague = document.querySelector(".blague")
const h3Blague = document.querySelector('.blague')

fetch("https://api.chucknorris.io/jokes/random")
    .then(laBlagueEnJson=>laBlagueEnJson.json())
    .then((laBlagueDeserialise)=>{
        console.log(laBlagueDeserialise)
        divBlague.innerHTML = laBlagueDeserialise.value
    })

const boutonBlague = document.querySelector(".boutonBlague")


async function nouvelleBlagueDeChuckNorris (){
    return await fetch("https://api.chucknorris.io/jokes/random")
        .then(nouvelleBlagueJson=>nouvelleBlagueJson.json())
        .then(nouvelleBlagueDem=>{
            return nouvelleBlagueDem
        })
}

boutonBlague.addEventListener("click",()=>{
    nouvelleBlagueDeChuckNorris().then(data=>{
        let template = <h3>${data.value}</h3>
        divBlague.innerHTML += template;
        }
    )
})

 */



