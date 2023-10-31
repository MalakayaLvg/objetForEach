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

function makeCardFromStudent (student){

        let cardTemplate = `
            <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
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