const inscriptions = [ 
    { id: 10, nom: 'ALAMI', filiere: 'DEVOWFS', frais:500 }, 
    { id: 11, nom: 'RAJI', filiere: 'DEVOWFS', frais:900 }, 
    { id: 12, nom: 'NAJI', filiere: 'DEVOWFS', frais:1000 }, 
    { id: 13, nom: 'IBRAHIMI', filiere: 'DEVOWFS', frais:600 } 
    ]; 

    const pureAppendInscription= (inscriptions,newin) =>{
        return [...inscriptions,newin]
    }

    const totalFrais = inscriptions.reduce((total, inscription) => {
        return total + inscription.frais;
    }, 0);

    const newinscription = {id: 14, nom:'Islam', filiere:'DEVOWFS',frais: 700}
    console.log(totalFrais)
    console.log(pureAppendInscription(inscriptions,newinscription))