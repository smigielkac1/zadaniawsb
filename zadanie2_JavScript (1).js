function kreator() { 
    let haslo = "";
    let dostepne = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&*+-=?@[]^_`{|}~"; //podanie ciągu znaków dostępnych do hasła
    for (let i = 0; i < 8; i++) { 
        haslo += dostepne.charAt(Math.floor(Math.random() * dostepne.length)); 
      } 
      return haslo;
    }
    console.log(kreator());