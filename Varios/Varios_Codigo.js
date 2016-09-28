/*****************************Ejercicios varios*************************/

/*Ejercicio #1: SUMA 10 NUMEROS CICLO WHILE
Se requiere un algoritmo para obtener la suma de diez cantidades mediante la utilización de un ciclo “WHILE”.
Realice el diagrama de flujo y el pseudocódigo*/
var n;   //numero a sumar
var r=0; //resultado de la suma
var i=1; //contador
while(i<=10){
	n=Number(prompt("Escribe un numero a sumar",0));
	r=r+n;
	i++;
}
console.log("La suma es:"+r);


/*Ejercicio #2: SUMA 10 NUMEROS CICLO DO...WHILE
Se requiere un algoritmo para obtener la suma de diez cantidades mediante la utilización de un ciclo DO...WHILE.
Realice el diagrama de flujo y el pseudocódigo*/
var n;   //numero a sumar
var r=0; //resultado de la suma
var i=1; //contador
do{
	n=Number(prompt("Escribe un numero a sumar",0));
	r=r+n;
	i++;
}while(i<=10);
console.log("La suma es:"+r);

/************Ejercicio #3: SUMA 10 NUMEROS CICLO FOR
Se requiere un algoritmo para obtener la suma de diez cantidades mediante la utilización de un ciclo FOR.
Realice el diagrama de flujo, el pseudocódigo************/
var n; //numero a sumar
var r=0; //resultado de la suma
for(var i=1;i<=10;i++){
	n=Number(prompt("Escribe un numero a sumar",0));
	r=r+n;
}
console.log("La suma es:"+r);

/*Ejercicio #4.1: EDAD PROMEDIO
Se requiere un algoritmo para obtener la edad promedio de un grupo de 'N' alumnos.
Realice el diagrama de flujo Y el pseudocódigo para representarlo, utilizando los tres tipos de estructuras de ciclo*/

var e;   //edad del alumno
var p=0; //promedio de edades

n=Number(prompt("Escribe el numero de alumnos",0));
for(i=1; i<=n; i++){
	e=Number(prompt("Escribe la edad del alumno " + i,0));
	p=p+e;
}
p=p/n;
console.log("El promedio de las edades es:"+ p);

/*Ejercicio #4.2: EDAD PROMEDIO
Se requiere un algoritmo para obtener la edad promedio de un grupo de 'N' alumnos.
Realice el diagrama de flujo Y el pseudocódigo para representarlo, utilizando los tres tipos de estructuras de ciclo*/

var e;   //edad del alumno
var p=0; //promedio de edades
var i=1; //contador de alumnos
n=Number(prompt("Escribe el numero de alumnos",0));
do{
	e=Number(prompt("Escribe la edad del alumno " + i,0));
	p=p+e;
	i++;
}while(i<=n)
p=p/n;
console.log("El promedio de las edades es:"+ p);

/*Ejercicio #4.3: EDAD PROMEDIO
Se requiere un algoritmo para obtener la edad promedio de un grupo de 'N' alumnos.
Realice el diagrama de flujo Y el pseudocódigo para representarlo, utilizando los tres tipos de estructuras de ciclo*/

var e;   //edad del alumno
var p=0; //promedio de edades
var i=1; //contador de alumnos
n=Number(prompt("Escribe el numero de alumnos",0));
while(i<=n){
	e=Number(prompt("Escribe la edad del alumno " + i,0));
	p=p+e;
	i++;
	
}
p=p/n;
console.log("El promedio de las edades es:"+ p);

/*Ejercicio #5: NUMEROS PARES DEL 0-100
Realice un algoritmo para generar e imprimir los números pares que se encuentran entre 0 y 100.
Realice el diagrama de flujo y el pseudocódigo para representarlo, utilizando el ciclo apropiado*/
console.log("Numeracion de 2  en 2 hasta el 100");
for(i=2; i<=100; i=i+2){
	console.log(i);
}

/*Ejercicio #6: TRIANGULO Un triangulo rectángulo puede tener lados que sean todos enteros. El conjunto de tres valores enteros para los lados de un triángulo rectángulo se conoce como una terna pitagórica. Estos tres lados deben satisfacer la relación de que la suma de los cuadrados de dos lados es igual al cuadrado de la hipotenusa. Encuentre todas las ternas de Pitágoras para el cateto opuesto, cateto adyacente e hipotenusa, todos ellos no mayores de 500.*/
var i; //cateto opuesto
var j; //cateto adyacente
var i; //cateto opuesto
for(i=1;i<=500;i++){
	for(j=1;j<=500;j++){
		for(k=1;k<=500;k++){
			if(k*k==i*i+j*j)
			console.log("terna:("+i+","+j+","+k+")");
		}
	}
}

/*Ejercicio #7: TABLAS DE MULTIPLICAR
Construir la tabla de multiplicar de un número ingresado por teclado, partiendo desde cero.*/

var tabla; //tabla de multiplicar
tabla=Number(prompt("Escribe la tabla a calcular",0));
for(i=1;i<=10;i++){
	console.log(tabla+"X"+i+"="+tabla*i);
}

/*Ejercicio #8: ELEVAR UN NUMERO ENTERO A LA "N" POTENCIA
Realizar el diagrama de flujo y pseudocodigo de un programa que permita elevar un número entero ingresado por teclado, a una potencia dada.*/

var b; //tabla de multiplicar
var p; //Potencia a elevar
var r=1; //resultado 
b=Number(prompt("Ingresa el numero base",0));
p=Number(prompt("Ingresa la potencia",0));
if(p==0){
	console.log("El resultado de " + b + " a la " + p + " potencia es " + r);
}else if(p>0){
	for(i=1;i<=p;i++){
		r=r*b;
	}
	console.log("El resultado de " + b + " a la " + p + " potencia es " + r);
}else{
	console.log("Este programa solo calcula potencias mayores o igual a 0 ");
}

/*Ejercicio #9: CALIFICACIONES ALUMNOS
Suponga que se tiene las calificaciones de un grupo de 40 alumnos.
Realizar un algoritmo para calcular la calificación media y la calificación más baja de todo el grupo..*/
var c;   //calificacion del alumno
var cb;  //calificacion mas baja
var p=0; //promedio
for(i=1; i<=40; i++){
	c=Number(prompt("Escribe la calificacion del alumno " + i,0));
	if(i>1){ //obteniendo la calificacion mas baja
		if(c<cb){
			cb=c;
		}
	}else{
		cb=c;
	}
	p=p+c;
}
p=p/40;
console.log("La calificacion mas baja es:"+ cb);
console.log("El promedio de las calificaciones es:"+ p);

/*Ejercicio #10: CUBO Y CUARTA DE UN NUMERO
Leer 10 números y obtener su cubo y su cuarta.*/
var n;   //numero base
var cubo;
var cuarta;
for(i=1; i<=10; i++){
	n=Number(prompt("Escribe el numero base del elemento" + i,0));
	cubo=n*n*n;
	cuarta=cubo*n;
	console.log(n + " al cubo "+ cubo +", "+ n + " a la cuarta "+ cuarta);
}