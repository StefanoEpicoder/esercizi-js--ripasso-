/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/*function area(l1, l2) {
  return l1 * l2;
}
let total = area(5, 10);
console.log(total);*/

let area = function (l1, l2) {
  return l1 * l2;
};
let total = area(5, 10);
console.log(total);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/*function crazySum(n1, n2) {
  if (n1 === n2) {
    return (n1 + n2) * 3;
  } else {
    return n1 + n2;
  }
}

const ex2 = crazySum(5, 5);
console.log(ex2);*/

const crazySum = function (n1, n2) {
  if (n1 === n2) {
    return (n1 + n2) * 3;
  } else {
    return n1 + n2;
  }
};

const finalResult = crazySum(10, 10);
console.log(finalResult);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (n1) {
  let differenza = Math.abs(n1 - 19);
  if (n1 > 19) {
    return differenza * 3;
  } else {
    return differenza;
  }
};

let result3 = crazyDiff(24);
console.log(result3);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
  return (n > 20 && n <= 100) || n === 400;
};

let result4 = boundary(400);
console.log(result4);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

var epify = function (stringa) {
  if (stringa.startsWith("EPICODE")) {
    return stringa;
  } else {
    return "EPICODE " + stringa;
  }
};

const result5 = epify("EPICODE");
console.log(result5);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (n1) {
  if (n1 % 3 == 0 || n1 % 7 == 0) {
    return "accettato";
  } else {
    return "non va bene!";
  }
};

const result6 = check3and7(28);
console.log(result6);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = function (stringa) {
  return stringa.split("").reverse().join("");
};
const result7 = reverseString("EPICODE");
console.log(result7);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function (stringa) {
  let parole = stringa.split(" ");
  for (let i = 0; i < parole.length; i++) {
    let parola = parole[i];
    parole[i] = parola.charAt(0).toUpperCase() + parola.slice(1);
  }
  return parole.join(" ");
};

const result8 = upperFirst("eravamo quattro amici al bar");
console.log(result8);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (stringa) {
  return stringa.slice(1, -1);
};

const result9 = cutString("stefano");
console.log(result9);
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
const giveMeRandom = function (n5) {
  let arrayEmpty = [];
  for (i = 0; i < n5; i++) {
    arrayEmpty.push(Math.floor(Math.random() * 10));
  }
  return arrayEmpty;
};

const result10 = giveMeRandom(10);
console.log(result10);
