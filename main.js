function confirmarPedido() {
  const menuSelection = parseInt(document.getElementById("menu-selection").value);
  const numDias = document.getElementById("num-dias").value;
  const precioMenu1 = 2000;
  const precioMenu2 = 1500;
  const precioMenu3 = 1000;
  let total = 0;
  switch (menuSelection) {
    case 1:
      total = precioMenu1 * numDias;
      break;
    case 2:
      total = precioMenu2 * numDias;
      break;
    case 3:
      total = precioMenu3 * numDias;
      break;
  }
  alert("Elegiste el menu "+ menuSelection + " por "+ numDias + " dias. garpas " + total + " Pesos");
}
let usuario = prompt("Ingresa tu Usuario");
for (; usuario != "john dow" && usuario != "fran perez"; ) {
  usuario = prompt("Ingresa tu Usuario");
}
let password = prompt("Ingresa tu Clave");
for (
  ;
  (usuario === "john dow" && password != 1234) ||
  (usuario === "fran perez" && password != 4321);

) {
  password = prompt("Ingresa tu Clave");
}

if (usuario === "john dow") {
  const spanNombre = document.getElementById("bienvenido-nombre");
  spanNombre.innerHTML = "john";
  const spanApellido = document.getElementById("bienvenido-apellido");
  spanApellido.innerHTML = "dow";
} else {
  const spanNombre = document.getElementById("bienvenido-nombre");
  spanNombre.innerHTML = "fran";
  const spanApellido = document.getElementById("bienvenido-apellido");
  spanApellido.innerHTML = "perez";
}
