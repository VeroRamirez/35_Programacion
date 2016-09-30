/*Ejercicio #1: Calculando DNI
El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo que se basa en obtener el resto de la división entera del número de DNI y el número 23.
A partir del resto de la división, se obtiene la letra seleccionándola dentro de un array de letras.
El array de letras es:
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es la A. Con estos datos, elaborar un pequeño script que:
Almacene en una variable el número de DNI indicado por el usuario y en otra variable la letra del DNI que se ha indicado. (Pista: si se quiere pedir directamente al usuario que indique su número y su letra, se puede utilizar la función prompt())
En primer lugar (y en una sola instrucción) se debe comprobar si el número es menor que 0 o mayor que 99999999. Si ese es el caso, se muestra un mensaje al usuario indicando que el número proporcionado no es válido y el programa no muestra más mensajes.
Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente.
Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no coinciden, se muestra un mensaje al usuario diciéndole que la letra que ha indicado no es correcta.
En otro caso, se muestra un mensaje indicando que el número y la letra de DNI son correctos.*/

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var dni=Number(prompt("Ingresa el DNI:",0));
var letra=prompt("Ingresa la clave:",0);
letra=letra.toUpperCase();
if (dni<0 && dn1>99999999) console.log("El numero indicado no es valido");
var clave=dni%23;
if(letras[clave]==letra){
	console.log("La letra del Documento Nacional " + letra + " y DNI " + dni + " son CORRECTOS");
}else{
	console.log("La letra del Documento Nacional " + letra + " y DNI " + dni + " son INCORRECTOS");
}

/*Ejercicio #2: Añadir elementos a un array con push(Ciclo for)
Crear un array de elementos que contenga nombres y posteriormente agregar más elementos por medio del método “push”*/

var nombres=["Maria","Justo","Lorena","Ruth"];
for(i=1;i<=10;i++){
	nombres.push("hola"+i);
}
console.log(nombres);

/*Ejercicio #3: Creando arrays
Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla los doce nombres utilizando la función alert()*/
var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
meses.forEach(function(mes,index){
	alert(mes);
});

/*Ejercicio #4: Operaciones en arrays
A partir del siguiente array que se proporciona:
var valores = [true, 5, false, "hola", "adios", 2];
Determinar cuál de los dos elementos de texto es mayor
Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false
Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos*/
var valores = [true, 5, false, "hola", "adios", 2];

console.log("*****Comparando longitud de cadenas*****");
if(valores[3].length>valores[4].length){
	console.log("La cadena \"" +valores[3] + "\" es mas larga que \"" + valores[4] + "\"");
}else{
	console.log("La cadena \"" + valores[4] + "\" es mas larga que \"" + valores[3] + "\"");
}
console.log("\n*****Operaciones Booleanas*****");
console.log("Resultado con And "+valores[0]+"&&"+valores[2]+" =", valores[0]&&valores[2]);
console.log("Resultado con Or "+valores[0]+"||"+valores[2]+" =", valores[0]||valores[2]);

console.log("\n*****Operaciones numericas*****");
console.log(valores[1]+"+"+valores[5]+"="+(valores[1]+valores[5]));
console.log(valores[1]+"-"+valores[5]+"="+(valores[1]-valores[5]));
console.log(valores[1]+"*"+valores[5]+"="+(valores[1]*valores[5]));
console.log(valores[1]+"/"+valores[5]+"="+(valores[1]/valores[5]));
console.log(valores[1]+"^"+valores[5]+"="+ Math.pow(valores[1],valores[5]));


/*Ejercicio #5: Suma de números
Hacer un ejercicio que nos pida 10 números y luego que sume esos valores.*/
var numeros =prompt("Escribe 10 numeros separados por comas");
var lista=numeros.split(",");
suma=0;
lista.forEach(function(value,index){
	suma=suma+Number(value);
});
console.log("Suma de 10 numeros");
console.log(lista.join("+")+" ="+suma);

