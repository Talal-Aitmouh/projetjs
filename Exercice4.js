const inscriptions = [
    { id: 10, nom: 'ALAMI', filiere: 'DEVOWFS' },
    { id: 11, nom: 'RAJI', filiere: 'DEVOWFS' },
    { id: 12, nom: 'NAJI', filiere: 'DEVOWFS' },
    { id: 13, nom: 'IBRAHIMI', filiere: 'DEVOWFS' }
  ];
  
const pureInsert = (inscriptions, index, newInscription) => {
    let clonedInscriptions = [...inscriptions];
    clonedInscriptions.splice(index, 0, newInscription);  
    return clonedInscriptions;
  };
  
  const newInscription = { id: 14, nom: 'TALAL', filiere: 'DEVOWFS' };
  const updatedInscriptions = pureInsert(inscriptions, 4, newInscription);
//   console.log(updatedInscriptions);
  
  
  const pureDeleteByPosition = (inscriptions, index) => {
    let clonedInscriptions = [...inscriptions];
    clonedInscriptions.splice(index, 1);  
    return clonedInscriptions;
  };
  
  const deleted = inscriptions[2];
  const updatedInscriptions2 = pureDeleteByPosition(inscriptions, 2);
//   console.log(updatedInscriptions2);
//   console.log(deleted);
  


  const pureUpdateByPosition = (inscriptions, index, updated) => {
    let clonedInscriptions = [...inscriptions];
    clonedInscriptions.splice(index, 1, updated);  
    return clonedInscriptions;
  };
  
  const updated = inscriptions[2];
  const updatedInscriptions3 = pureUpdateByPosition(inscriptions, 2, { id: 14, nom: 'ABDO', filiere: 'DEVOWFS' });
 // console.log(updatedInscriptions3);


 const pureUpdateById = (inscriptions, id, updated) => {
    let clonedInscriptions = [...inscriptions];
    let index = clonedInscriptions.findIndex(inscription => inscription.id === id);
    clonedInscriptions.splice(index, 1, updated);  
    return clonedInscriptions;
  };    

  const updatedInscriptions4 = pureUpdateById(inscriptions, 10, { id: 10, nom: 'ABDO', filiere: 'DEVOWFS' });   
//   console.log(updatedInscriptions4);



const pureDeleteById = (inscriptions, id) => {
    let clonedInscriptions = [...inscriptions];
    let index = clonedInscriptions.findIndex(inscription => inscription.id === id);
    clonedInscriptions.splice(index, 1);  
    return clonedInscriptions;
  };    
  const deleted2 = inscriptions[2];
  const updatedInscriptions5 = pureDeleteById(inscriptions, 11);
  console.log(updatedInscriptions5);
  console.log(deleted2); 