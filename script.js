// (Facil)
let uno = !true || false; //false
let dos = false && !false; //false
let tres = true && !false; //true

//(Medio)
let cuatro = 5 === 5 || !true; //true
let cinco = !0 || 5 < 0; //true
let seis = 3 > 4 && !0; //false

//Avanzado
let siete = ((false || true) && !false && true) || (true && false); //true
let ocho = 6 === 3 + 3 && 9 / 3 >= 3; //true
let nueve = !!false || ("1" == 1 && !false === true); //true

//Hardcore
let diez = !!true === !!(5 >= 5); //true
let once = !(true && !true === !!(8 === 4 * 2)); //true

//Ultra-Hardcore
let doce = !(true && !true === !!(16 === 4 * 2 + 8)) !== false; //true

//Leyenda
let trece = !( (!(!(10 / 5 == "2") === false) != false) === 5 * 5 <= 100 / 4 && !(1 + 1 !== 10 / 5) !== true ); //true

//Inmortal
let catorce = !!((10 % 3 != 1 || typeof ("10" - 5) !== "number" 
|| !!([] && {})) && (12 * 4 === "48" || (7 <= "7" && "7" <= 7) || Boolean(0) === Boolean("0"))); //true

console.log(uno)
console.log(dos)
console.log(tres)
console.log(cuatro)
console.log(cinco)
console.log(seis)
console.log(siete)
console.log(ocho)
console.log(nueve)
console.log(diez)
console.log(once)
console.log(doce)
console.log(trece)
console.log(catorce)


/* 

Facil
1   False
2   False
3   True
medio
4   true
5   true
6   false
Avanzado
7   true
8   true
9   true
Hardcore
10  true
11  true
Ultra-hardcore
12  true
Leyenda
13  true
Inmortal
14  true
 */