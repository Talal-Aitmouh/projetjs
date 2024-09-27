const personnes = [ 
    { nom: "ALAMI", age: 33, estMember: true }, 
    { nom: "FATIHI", age: 24, estMember: false }, 
    { nom: "RAJI", age: 45, estMember: true }, 
    { nom: "RAMI", age: 37, estMember: false } 
    ]; 

    // let estMembers = personnes.filter(personne => personne.estMember);
    // console.log(estMembers);


    let estMembersNoms = personnes
    .filter(personne => personne.estMember)
    .map(personne => personne.nom);

console.log(estMembersNoms);