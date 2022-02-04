function nombrar (){
    let inputNuevoNombre="<input class=playlist__content--newname type=text><img class=playlist__content--newnamebutton src=./img/tic.png> </img>"
     $(".playlist__content__name").replaceWith(inputNuevoNombre) 
     $(".playlist__content--newnamebutton").click(aceptar)
     function aceptar () {
        let nuevoNombre=$(".playlist__content--newname").val()
          $(inputNuevoNombre).remove() 
     }
    console.log("exacxo")
}

$(".playlist__content__name").dblclick(nombrar) /*Y ESTO EN EL IF DE ANALIZA*/