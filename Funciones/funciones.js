/*******************************FUNCIONES**************************/
/*Ejercicio #1: El menor de los numeros
Elaborar una función a la cual le enviemos tres enteros y muestre el menor.*/
function comparar(numero1,numero2,numero3){
	if(numero1<numero2 && numero1<numero3){
		return numero1;
	}else if(numero2<numero1 && numero2<numero3){
		return numero2;
	}else if(numero3<numero1 && numero3<numero2){
		return numero3;
	}else{
		console.log("los numeros son iguales");
		return numero3;
	}
}

lista=prompt("Ingresar 3 numeros separados por coma, Ejemplo: 23,-60,20");
lista=lista.split(",");
resultado=comparar(parseInt(lista[0]),parseInt(lista[1]),parseInt(lista[2]));
console.log("El numero menor de la lista '"+lista+"' es",resultado);

/*Ejercicio #2: Numero par o impar
Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar.
Mostrar por pantalla el resultado devuelto por la función.*/
function getTipo(numero){
    if(numero%2==0){
        return "Numero Par";
    }else{
        return "Numero Impar";
    }
}
var n=parseInt(prompt("Ingresa un numero entero:",0));
console.log(n+" " + getTipo(n));

/*Ejercicio #3: Ordenando numeros
Realizar una función a la cual le envíe tres enteros y los muestre ordenados de menor a mayor.*/
function comparar(numero1,numero2,numero3){
    lista={};
	if(numero1<numero2 && numero1<numero3){
        	if(numero2<numero3){
        		lista[0]=numero1;
            	lista[1]=numero2;
            	lista[2]=numero3;
        	}
            else{
	            lista[0]=numero1;
	            lista[1]=numero3;
	            lista[2]=numero2;
	        }
    }else if(numero2<numero1 && numero2<numero3){
    	if(numero1<numero3){
        		lista[0]=numero2;
            	lista[1]=numero1;
            	lista[2]=numero3;
        	}
            else{
	            lista[0]=numero2;
	            lista[1]=numero3;
	            lista[2]=numero1;
	        }
    }else if(numero3<numero1 && numero3<numero2){
    	if(numero1<numero2){
        		lista[0]=numero3;
            	lista[1]=numero1;
            	lista[2]=numero2;
        	}
            else{
	            lista[0]=numero3;
	            lista[1]=numero2;
	            lista[2]=numero1;
	        }
    }else if(numero1==numero2){
    	if(numero1<=numero3){
    		lista[0]=numero1;
	        lista[1]=numero2;
	        lista[2]=numero3;
    	}else{
    		lista[0]=numero3;
	        lista[1]=numero2;
	        lista[2]=numero1;
    	}
    }else if(numero1==numero3){
    	if(numero1<=numero2){
    		lista[0]=numero1;
	        lista[1]=numero3;
	        lista[2]=numero2;
    	}else{
    		lista[0]=numero2;
	        lista[1]=numero1;
	        lista[2]=numero3;
    	}
    }else{ //(numero2==numero3)
    	if(numero1<=numero2){
    		lista[0]=numero1;
	        lista[1]=numero2;
	        lista[2]=numero3;
    	}else{
    		lista[0]=numero2;
	        lista[1]=numero3;
	        lista[2]=numero1;
    	}
    }
    return lista;
}

n1=parseInt(prompt("Ingresa el primer numero a comparar:",0));
n2=parseInt(prompt("Ingresa el segundo numero a comparar:",0));
n3=parseInt(prompt("Ingresa el tercer numero a comparar:",0));
r=comparar(n1,n2,n3);
console.log("Lista ordenada:",r[0],r[1],r[2]);

/*Ejercicio #5: Palindromo
Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha.
Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".*/

var mensaje=prompt("Escribe un palindromo:","Anita lava la tina");
console.log("'" + mensaje + "' " + esPalindromo(mensaje));

function esPalindromo(palindromo){
	palindromo=palindromo.replace(/\s/g,"");
	var reves=palindromo.split("");
	reves=reves.reverse();
	reves=reves.join("");
	if(reves.toUpperCase()==palindromo.toUpperCase()){
		return "Es un palindromo";
	}else{
		return "No es un palindromo";
	}
}

/*Ejercicio #6: Operaciones matematicas
Realizar un programa que te de la opción de la operación matemática que quieres realizar por medio de funciones*/
function suma(numero1,numero2){
	return numero1+numero2;
}
function resta(numero1,numero2){
	return numero1-numero2;
}
function multiplicacion(numero1,numero2){
	return numero1*numero2;
}
function division(numero1,numero2){
	return numero1/numero2;
}
var opcion=parseInt(prompt("Ingresa el numero de la operacion a realizar \n1.Suma \n2.Resta \n3.Multiplicacion \n4.Division"));
var n1=parseInt(prompt("Ingresa el primer numero de la operacion",0));
var n2=parseInt(prompt("Ingresa el segundo numero de la operacion",0));
switch (opcion){
	case 1: console.log("SUMA "+ n1 + "+" + n2 + "=" + suma(n1,n2));
		break;
	case 2: console.log("RESTA "+ n1 + "-" + n2 + "=" + resta(n1,n2));
		break;
	case 3: console.log("MULTIPLICACION "+ n1 + "*" + n2 + "=" + multiplicacion(n1,n2));
		break;
	case 4: console.log("DIVISION "+ n1 + "/" + n2 + "=" + division(n1,n2));
		break;
	default: console.log("Opcion no valida");
}

/*Ejercicio #7: Cuadrado de la suma de dos numeros
Realizar un programa que calcule el cuadrado de la suma de dos números*/
var n1=parseInt(prompt("Ingresa el primer numero:",0));
var n2=parseInt(prompt("Ingresa el segundo numero:",0));
console.log("Cuadrado de la suma de dos numeros");
console.log("("+n1+"+"+n2+")^2=" + obtenCuadrado(n1,n2));

function obtenCuadrado(numero1,numero2){
	return Math.pow(numero1+numero2,2);
}

/*Ejercicio #8: Numero primo
Realizar un programa que por medio de una función nos indique si el número que el usuario ingresa es primo o no*/
function esPrimo(numero){
	if(numero%2==0){
		return false;
	}else{
		for(i=3;i<=(numero-1);i++){
			if(numero%i==0){
				console.log("Divisible entre " + i);
				return false;
			}
		}
		return true;
	}
}

var n=parseInt(prompt("Ingresa numero entero:"));
if(esPrimo(n)){
	console.log(n + " es Primo");
}else{
	console.log(n + " No es Primo");
}

/*Ejercicio #9: Multiplos de un numero
Programa que calcula los 10 primeros múltiplos del número que queramos, utilizando una función que retorna parámetro.*/
var n=parseInt(prompt("Multiplo\nIngresa un numero:","0"));
console.log("Multiplos de " + n);
multiplos=obtenMultiplo(n);
multiplos.forEach(function(valor,indice){
	console.log(valor);
})


function obtenMultiplo(numero){
var lista=[];
j=0; //contador de multiplos
for(i=1; i<=n; i++){
	if(n%i==0){
		lista[j]=i;
		j++;
		if(j==10){
			return lista;
		}
	}
}
return lista;
}

/*Ejercicio #10: Cantidad de digitos
Desarrollar una función que retorne la cantidad de dígitos que tiene una variable entera positiva.*/
var cantidad=parseInt(prompt("Ingresa una cantidad positiva"),"0");
console.log(cantidad+" tiene "+contarDigitos(cantidad)+" digitos");

function contarDigitos(numero){
	var longitud=numero.toString().length;
	return longitud;
}
