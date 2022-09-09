
    //FUNCIONES
    function encriptar(letra) {
        var textoEncriptado = letra;
        switch (letra) {
            case "a":
                textoEncriptado = "ai";
                break;
            case "e":
                textoEncriptado = "enter";
                break;
            case "i":
                textoEncriptado = "imes";
                break;
            case "o":
                textoEncriptado = "ober";
                break;
            case "u":
                textoEncriptado = "ufat";
                break;
        }
        return textoEncriptado;
    }

    function desencriptar(texto) {
        var letra = texto;
        switch (texto) {
            case "ai":
                letra = "a";
                break;
            case "enter":
                letra = "e";
                break;
            case "imes":
                letra = "i";
                break;
            case "ober":
                letra = "o";
                break;
            case "ufat":
                letra = "u";
                break;
        }
        return letra;
    }

    function encriptarFrase() {
        var input = document.getElementById("input");

        var frase = input.value;

        var arregloFrase = frase.split("");
        var cadenaEncriptada = "";

        for (var i = 0; i < arregloFrase.length; i++) {
            cadenaEncriptada = cadenaEncriptada + encriptar(arregloFrase[i]);
        }

        if(input.value!=""){
            output.style.cssText="background-image:none";
            texto1.style.cssText="visibility: hidden";
            texto2.style.cssText="visibility: hidden";
            button_copiar.style.cssText="visibility: visible";
        }

        output.value = cadenaEncriptada;
        input.value = "";
    }

    function desencriptarFrase() {
        var input = document.getElementById("input");
        var fraseEncriptada = input.value;

        var arregloFraseEncriptada = fraseEncriptada.split("");
        var cadenaDesencriptada = "";
        var contador = 0;
        while (contador < arregloFraseEncriptada.length) {
            console.log("Estoy leyendo: " + arregloFraseEncriptada[contador]);
            if (arregloFraseEncriptada[contador] == "i" || arregloFraseEncriptada[contador] == "o" || arregloFraseEncriptada[contador] == "u") {
                cadenaDesencriptada = cadenaDesencriptada + arregloFraseEncriptada[contador];
                contador += 4;
                console.log("Entre al iou");
            }
            else
                if (arregloFraseEncriptada[contador] == "a") {
                    cadenaDesencriptada = cadenaDesencriptada + arregloFraseEncriptada[contador];
                    contador += 2;
                    console.log("Entre al a");
                }
                else
                    if (arregloFraseEncriptada[contador] == "e") {
                        cadenaDesencriptada = cadenaDesencriptada + arregloFraseEncriptada[contador];
                        contador += 5;
                        console.log("Entre al e");
                    }
                    else {
                        cadenaDesencriptada = cadenaDesencriptada + arregloFraseEncriptada[contador];
                        contador++;
                        console.log("Entre al no es vocal");
                    }
            console.log("Contador es: " + contador);
            console.log("Hasta el momento la frase es: " + cadenaDesencriptada);
        }
        output.value = cadenaDesencriptada;
        input.value = "";
    }

    function copiar() {
        document.getElementById("output").select();
        document.execCommand("copy");
    }

    var output = document.getElementById("output");

    var button_encriptar = document.getElementById("btn_encriptar");
    button_encriptar.onclick = encriptarFrase;

    var button_desencriptar = document.getElementById("btn_desencriptar");
    button_desencriptar.onclick = desencriptarFrase;

    var button_copiar = document.getElementById("btn_copiar");
    button_copiar.onclick = copiar;

    var texto1=document.getElementById("texto1");

    var texto2=document.getElementById("texto2");