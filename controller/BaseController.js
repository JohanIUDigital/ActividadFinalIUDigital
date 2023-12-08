document.addEventListener("DOMContentLoaded", function () {
  onInit();
});

function onInit() {
  console.log("onInit");
  document.getElementById("alertFecha").style.visibility = "hidden";
  document.getElementById("alertNombre").style.visibility = "hidden";
  document.getElementById("alertPrecio").style.visibility = "hidden";
  document.getElementById("alertInv").style.visibility = "hidden";
}

function validSave() {
  console.log("test");

  //valida si campo fecha esta completo
  var inpFechaP = document.getElementById("txtFechaP");
  if (inpFechaP.value) {
    document.getElementById("alertFecha").style.visibility = "hidden";
  } else {
    document.getElementById("alertFecha").style.visibility = "visible";
  }

  //valida si campo nombre esta completo
  var inpNombreP = document.getElementById("inpNombreP");
  if (inpNombreP.value) {
    document.getElementById("alertNombre").style.visibility = "hidden";
  } else {
    document.getElementById("alertNombre").style.visibility = "visible";
  }

  //valida si campo precio esta completo
  var inpPrecioP = document.getElementById("inpPrecioP");
  if (inpPrecioP.value) {
    document.getElementById("alertPrecio").style.visibility = "hidden";
  } else {
    document.getElementById("alertPrecio").style.visibility = "visible";
  }

  //valida si campo inventario esta completo
  var inpInventarioP = document.getElementById("inpInventarioP");
  if (inpInventarioP.value) {
    document.getElementById("alertInv").style.visibility = "hidden";
  } else {
    document.getElementById("alertInv").style.visibility = "visible";
  }

  //valida si todos estan completos
  if (
    inpFechaP.value &&
    inpNombreP.value &&
    inpPrecioP.value &&
    inpInventarioP.value
  ) {
    alert("El producto se ha creado con éxito");
    inpFechaP.value = "";
    inpNombreP.value = "";
    inpPrecioP.value = "";
    inpInventarioP.value = "";
  } else {
    alert("Faltan campos obligatorios por llenar, Favor validar");
  }
}

function listar(){
  console.log("listar");
  let aImages = ["imagen_1.png","imagen_2.png","imagen_3.png","imagen_4.png","imagen_5.png","imagen_6.png","imagen_7.png","imagen_8.png","imagen_9.png","imagen_10.png"]
  let bloque = document.getElementById("bloque");
  
  if(!bloque.getInnerHTML()){    
  aImages.forEach((elemento) =>{
    bloque.innerHTML += `<li> <img src='images/listar/${elemento}' alt='imagen pic'></li>`
  });
  }else{
    alert("Solo se pueden listar elementos una vez !");
  }

}

function borrar(){

  let bloque = document.getElementById("bloque");
  if(!bloque.getInnerHTML()){ 
    alert("No existen elementos para borrar")
  } else{
    let bconfirm = confirm("¿Está seguro que desea Eliminar la lista de imagenes?");
    if(bconfirm){
      console.log("Acepto");
      bloque.innerHTML = '';
    }else{
      console.log("no acepto");
    }
  }
}
