/*Ejercicio #1 Completando condiciones
Completar las condiciones de los if del siguiente script para que los mensajes de los alert() se muestren siempre de forma correcta:*/
var numero1 = 5;
/*Ejercicio #2 Factorial de un numero
El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120
Utilizando la estructura for, crear un script que calcule el factorial de un número entero.*/
var numero =parseInt(prompt("Ingresa un numero para calcular su factorial:","1"));
factorial=1; 
for(i=numero;i>=1;i--){
	factorial=factorial*i;
}
console.log(numero+"!="+factorial);


var numero2 = 8;
if(numero1<=numero2) { 
    alert("numero1 no es mayor que numero2"); 
}

if(numero2>0){
  alert("numero2 es positivo");
}

if(numero1<0){
  alert("numero1 es negativo o distinto de cero");
}

if(numero1+1<numero2){
  alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

/*Ejercicio #2 Factorial de un numero
El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120
Utilizando la estructura for, crear un script que calcule el factorial de un número entero.*/
var numero =parseInt(prompt("Ingresa un numero para calcular su factorial:","1"));
factorial=1; 
for(i=numero;i>=1;i--){
	factorial=factorial*i;
}
console.log(numero+"!="+factorial);

/*Ejercicio #3: Operaciones matematicas
Pedir dos numeros y despues realizar las siguientes operaciones:
-Si el primer numero es mayor que el segundo, sumarlos y restarlos -Sino, si los dos numeros son iguales,mandar una alerta indicando eso, sino multiplicarlos y dividirlos*/
var numero1 =parseInt(prompt("Ingresar primer numero:","0"));
var numero2 =parseInt(prompt("Ingresar segundo numero:","0"));
if(numero1>numero2){
	operacion1=numero1+numero2;
	operacion2=numero1-numero2;
	alert(numero1+"+"+numero2+"="+operacion1 + " y " + numero1+"-"+numero2+"="+ operacion2);
}else if(numero1==numero2){
	alert("Los numeros son iguales", numero1, numero2);
}else{
	operacion1=numero1*numero2;
	operacion2=(numero1/numero2).toFixed(2);
	alert(numero1+"*"+numero2+"="+operacion1 + " y " + numero1+"/"+numero2+"="+ operacion2);
}

/*Ejercicio #4: Saldo bancario
En un banco se procesan datos de las cuentas corrientes de sus clientes. De cada cuenta corriente se conoce: número de cuenta, nombre del cliente y saldo actual. El ingreso de datos debe finalizar al ingresar un valor negativo en el número de cuenta.Se pide confeccionar un programa que lea los datos de las cuentas corrientes e informe:a) De cada cuenta: número de cuenta, nombre del cliente y estado de la cuenta según su saldo, sabiendo que:Estado de la cuenta:'Acreedor' si el saldo es >0. 'Deudor' si el saldo es <0. 'Nulo' si el saldo es =0.
b) La suma total de los saldos acreedores.*/
var numCuenta;
var nombreCte;
var totalAcredores=saldoActual=0;
do{
	numCuenta=prompt("Ingresa numero de cuenta (para salir teclea un numero negativo):","0");
	if(numCuenta<0){
		continue;
	}
	nombreCte=prompt("Ingresa nombre del cliente:","Nombre");
	saldoActual=parseFloat(prompt("Ingresa saldo de "+nombreCte,"0"));
	if(saldoActual>0){
		tipo="Acreedor";
		totalAcredores+=saldoActual;
	}else if(saldoActual<0){
		tipo="Deudor";
	}else{
		tipo="Nulo";
	}
	console.log("\nCliente:"+nombreCte+"\nCuenta:"+numCuenta+"\nSaldo:"+saldoActual);
}while(numCuenta>0)
console.log("\nTotal saldo acreedores:",totalAcredores);

/*Ejercicio #5: Repetir un texto
Realizar un programa que repite un texto cualquiera en número de veces que queramos, utilizando un “for”*/
var texto=prompt("Ingresa un texto:","texto");
var veces=parseInt(prompt("Cuantas veces quieres repetirlo:","0"));
console.log("Repitiendo "+texto+" "+veces+" veces");
for(i=1;i<=veces;i++){
	console.log(i+"."+texto);
}

/*Ejercicio #6: Multiplos de 11
Realizar un programa que calcula todos los múltiplos de 11 menores de 3000 y por último nos da la suma de todos*/
var NUMERO=11;
console.log("Multiplos de 11 menores de 3000");
for(i=NUMERO; i<3000;i++){
	console.log(NUMERO+" x "+i+" = "+NUMERO*i);
}

/*Ejercicio #7: Listas de valores
Realizar un programa que permita cargar dos listas de 3 valores cada una. Informar con un mensaje cual de las dos listas tiene un valor acumulado mayor (mensajes 'Lista 1 mayor', 'Lista 2 mayor', 'Listas iguales')
Tener en cuenta que puede haber dos o más estructuras repetitivas en un algoritmo.*/

lista=[[],[]];
suma=[0,0];
for(i=0; i<=1;i++){
	for(j=0;j<=2;j++){
		lista[i][j]=parseInt(prompt("Compara Lista Numeros \nIngresa el elemento "+(j+1)+" de la lista " + (i+1) +" :","0"));
		suma[i]+=lista[i][j];
	}
}
console.log("Lista 1:"+lista[0]);
console.log("Lista 2:"+lista[1]);
if(suma[0]>suma[1]){
	console.log("Lista 1 es mayor, acumulado: ",suma[0]);
}else if(suma[0]<suma[1]){
	console.log("Lista 2 es mayor, acumulado: ",suma[1]);
}else{
	console.log("Lista 1 es igual a Lista 2 acumulado:",suma[0]);
}
