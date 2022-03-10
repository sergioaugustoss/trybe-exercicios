const geraEmail = (nomeCompleto) => {
    const minusculo = nomeCompleto.toLowerCase();
    const email = `${minusculo}@trybe.com`;
    const emailFinal = email.replace(/ /g, "_");
    return { nomeCompleto: nomeCompleto, email: emailFinal };
};


const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'),
      id2: callback('Luiza Drumond'),
      id3: callback('Carla Paiva'),
    };
    return employees;
  };

console.log((newEmployees(geraEmail)));
