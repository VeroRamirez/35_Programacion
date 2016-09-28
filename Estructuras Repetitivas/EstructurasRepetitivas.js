/**************Estructuras repetitivas*************/
/*Ejercicio #1: Promedio de personas
Se requiere un algoritmo para obtener la estatura promedio de un grupo de personas, cuyo número de miembros se desconoce, el ciclo debe efectuarse siempre y cuando se tenga una estatura registrada.
Realice el diagrama de flujo y el pseudocódigo utilizando el ciclo apropiado*/
var e;   //estatura
var p=0; //promedio de edades
var n=0; //numero de personas

n=Number(prompt("Escribe el tamano del grupo",0));
for(i=1; i<=n; i++){
	do{
		e=Number(prompt("Escribe la estatura " + i,0));
	}while(e<=0)
	p=p+e;
}
p=p/n;
p=p.toFixed(2);
console.log("El promedio de estaturas es:"+ p);

/*Ejercicio #2: Igual o menos a 0
Se requiere un algoritmo para determinar, de N cantidades, cuántas son menores o iguales a cero y cuántas mayores a cero. Realice el diagrama de flujo y el pseudocódigo para representarlo, utilizando el ciclo apropiado.*/
var N=0;   //numero de cantidades
var cm=0; //cantidades mayores a cero
var cn=0; //cantidades menores a cero
var ci=0; //cantidades iguales a cero
var c;    //cantidad leida
n=Number(prompt("Escribe la cantidad de numeros a comparar con cero",0));
for(i=1; i<=n; i++){
	c=Number(prompt("Escribe un numero " + i,0));
	if(c>0){
		console.log(c + " es mayor a cero");
		cm+=1;
	}else if(c<0){
		console.log(c + " es menor a cero");
		cn+=1;
	}else{
		console.log(c + " es igual a cero");
		ci+=1;
	}
}
console.log("Cantidades mayores a cero:"+ cm);
console.log("Cantidades menores a cero:"+ cn);
console.log("Cantidades iguales a cero:"+ ci);

/*Ejercicio #3: Sucesión de Fibonacci
Realice un algoritmo para generar N elementos de la sucesión de Fibonacci (0, 1, 1, 2, 3, 5, 8, 13,…).
Realice el diagrama de flujo y el pseudocódigo para representarlo, utilizando el ciclo apropiado.*/
var n=0; //cantidad de elementos de la serie a mostrar
var n1=0; //primer numero de la serie de Fibonacci
var n2=1; //segundo numero de la serie de Fibonacci
var nn; //Nuevo elemento de la serie de fibonacci

n=Number(prompt("Ingresa el numero de elementos de fibonacci a cacular",0));
console.log("La Serie Fibonacci inicia con al menos 2 elementos");
console.log(n1);
console.log(n2);
for(i=1; i<=(n-2); i++){
	nn=n1+n2;
	console.log(nn);
	n1=n2;
	n2=nn;
}

/*Ejercicio #4: Aguascalientes-Zacatecas
Una persona se encuentra en el kilómetro 70 de la carretera AguascalientesZacatecas, otra se encuentra en el km 150 de la misma carretera. La primera viaja en dirección a Zacatecas, mientras que la segunda se dirige a Aguascalientes, a la misma velocidad.
Realice un algoritmo para determinar en qué kilometro de esa carretera se encontrarán y represéntelo mediante el diagrama de flujo y el pseudocódigo utilizando el ciclo apropiado.*/

var c1=70; //ubicacion carro 1
var c2=150; //ubicacion carro 2
var d=c2-c1; //distancia entre los 2 autos

while(d>0){
	c1++;
	c2--;
	d=c2-c1;
}
console.log("Los autos se encontraran en el kilometro:" + c1);

/*Ejercicio #5: Ahorro
Se requiere un algoritmo para determinar cuánto ahorrará una persona en un año, si al final de cada mes deposita variables cantidades de dinero; además, se requiere saber cuánto lleva ahorrado cada mes.
Realice el diagrama de flujo y el pseudocódigo para representarlo, utilizando el ciclo apropiado*/

var suma=0; //ahorro acumulado

for(i=1; i<=12; i++){
	n=Number(prompt("Ingresa el ahorro del mes "+i ,0));
	suma+=n;
	console.log("Hasta el mes " + i + " has ahorrado: " + suma);
}
console.log("Tu ahorro del anio fue:" + suma);









