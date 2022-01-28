const $cuadro = document.querySelectorAll(".cuadro");
const $button = document.querySelector("#button");
const $mensaje = document.getElementsByClassName("mensaje")[0];

const ArregloX = {
  arrId1: [],
  arrId2: [],
  arrId3: [],
  arrId4: [],
  arrId5: [],
  arrId6: [],
  arrId7: [],
  arrId8: [],
  arrId9: [],
};

const ArregloO = {
  arrId1: [],
  arrId2: [],
  arrId3: [],
  arrId4: [],
  arrId5: [],
  arrId6: [],
  arrId7: [],
  arrId8: [],
  arrId9: [],
};

let suma = 0;
let casilla;
let msnX = "Ganaste 'X' !!!";
let msnO = "Ganaste 'O' !!!";

$cuadro.forEach((el) => {
  // console.log(el);
  el.addEventListener("click", (e) => {
    suma = suma + 1;
    casilla = e.target.getAttribute("id");
    //console.log(casilla);
    if (el.textContent === "" && suma % 2 == 1) {
      let x = (el.textContent = "x");
      suma_x();
    } else if (el.textContent === "" && suma % 2 == 0) {
      el.textContent = "o";
      suma_o();
    } else if (el.textContent !== "") {
      suma = suma - 1; //si la casilla es la misma le resto la q le sume con el click
      alert("No se puede remarcar la casilla");
    }
  });

  //FUNCION DEL JUGADOR X
  function suma_x() {
    //const ArregloX = new Arreglos();
    if (casilla == "a" || casilla == "b" || casilla == "c")
      ArregloX["arrId1"].push("x1");
    if (casilla == "a" || casilla == "e" || casilla == "i")
      ArregloX["arrId2"].push("x2");
    if (casilla == "d" || casilla == "e" || casilla == "f")
      ArregloX["arrId3"].push("x3");
    if (casilla == "g" || casilla == "h" || casilla == "i")
      ArregloX["arrId4"].push("x4");
    if (casilla == "a" || casilla == "d" || casilla == "g")
      ArregloX["arrId5"].push("x5");
    if (casilla == "b" || casilla == "e" || casilla == "h")
      ArregloX["arrId6"].push("x6");
    if (casilla == "c" || casilla == "f" || casilla == "i")
      ArregloX["arrId7"].push("x7");
    if (casilla == "c" || casilla == "e" || casilla == "g")
      ArregloX["arrId8"].push("x8");

    for (let num = 1; num < 9; num++) {
      for (let i = 0; i < ArregloX[`arrId${num}`].length; i++)
        if (i == 2) resultado(ArregloX);
    }
    /*    
     for (let i1 = 0; i1 < ArregloX["arrId1"].length; i1++)
      if (i1 == 2) resultado();
    for (let i2 = 0; i2 < ArregloX["arrId2"].length; i2++)
      if (i2 == 2) resultado();
 */
    //console.log(ArregloX["arrId1"], ArregloX["arrId2"]);
  }

  //FUNCION DEL JUGADOR O
  function suma_o() {
    if (casilla == "a" || casilla == "b" || casilla == "c")
      ArregloO["arrId1"].push("x1");
    if (casilla == "a" || casilla == "e" || casilla == "i")
      ArregloO["arrId2"].push("x2");
    if (casilla == "d" || casilla == "e" || casilla == "f")
      ArregloO["arrId3"].push("x3");
    if (casilla == "g" || casilla == "h" || casilla == "i")
      ArregloO["arrId4"].push("x4");
    if (casilla == "a" || casilla == "d" || casilla == "g")
      ArregloO["arrId5"].push("x5");
    if (casilla == "b" || casilla == "e" || casilla == "h")
      ArregloO["arrId6"].push("x6");
    if (casilla == "c" || casilla == "f" || casilla == "i")
      ArregloO["arrId7"].push("x7");
    if (casilla == "c" || casilla == "e" || casilla == "g")
      ArregloO["arrId8"].push("x8");

    for (let num = 1; num < 9; num++) {
      for (let i = 0; i < ArregloO[`arrId${num}`].length; i++)
        if (i == 2) resultado();
    }
    //console.log(ArregloO["arrId1"], ArregloO["arrId2"]);
  }
}); //end ciclo forEach

const reseteo = () => {
  $cuadro.forEach((el) => (el.innerHTML = ""));
  /*  
   ArregloX["arrId1"] = [];
  ArregloX["arrId2"] = [];
*/

  for (let i = 1; i < 9; i++) {
    //console.log("i", i);
    ArregloX[`arrId${i}`] = [];
    ArregloO[`arrId${i}`] = [];
  }
  suma = 0;
};

const resultado = (ArregloX) => {
  $mensaje.innerHTML = ArregloX ? `${msnX}` : `${msnO}`;
  let tiempo = setTimeout(() => {
    $mensaje.innerHTML = ``;
    reseteo();
  }, 2000);
};
