const jPDinos = [
    `Velociraptors`,
    `Tyrannosaurus`,
    `Dilophosaurus`
]

function seeDinos(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}

seeDinos(...jPDinos)

const jPCharacters = {
    alanGrant:`Sam Neill`,
    ellieSattler:`Laura Dern`,
    ianMalcolm:`Jeff Goldblum`
}

function seeCharacters ({alanGrant, ellieSattler, ianMalcolm}){
    
    console.log(ellieSattler);
    
}
seeCharacters(jPCharacters)
const {alanGrant, ellieSattler, ianMalcolm} = jPCharacters