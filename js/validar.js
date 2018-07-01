function validar(){
    var nombre, apellidos, correo, usuario, clave, telefono, expresion;

    nombre = document.getElementById("name").value;
    correo = document.getElementById("email").value;
    telefono = document.getElementById("subject").value;
    direccion = document.getElementById("message").value;
   // clave = document.getElementById("clave").value;
   // telefono= document.getElementById("telefono").value;

/*  El simbolo  | se crea en codigo asccii con alt+124 */

    expresion = /\w+@\w+\.+[a-z]/;


    if(nombre === "" || telefono === "" || correo === "" || direccion === "" ){
        alert("Todos los campos son obligatorios");
        return false;
    }

    else if(nombre.length>40){
        alert("El nombre es muy largo");
        return false;        
    }


    else if(correo.length>40){
        alert("El correo es muy largo");
        return false;        
    }

    else if(!expresion.test(correo)){
        alert('El correo no es valido');
        return false;
    }

    /*else if(direccion.length>40){
        alert("El usuario y la clave solo deben tener 20 caracteres como máximo");
        return false;        
    }*/

    else if(telefono.length>11){
        alert("El teléfono es muy largo");
        return false;        
    }

    else if(isNaN(telefono)) {
        alert("El teléfono ingresado no es un numero");
        return false;        
    }

}
