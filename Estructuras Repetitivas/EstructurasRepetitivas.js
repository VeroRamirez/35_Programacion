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

/*Ejercicio #7: Horas de trabajo
Una empresa tiene el registro de las horas que trabaja diariamente un empleado durante la semana (seis días) y requiere determinar el total de éstas, así como el sueldo que recibirá por las horas trabajadas.
Realice un algoritmo para determinar esto y represéntelo mediante el diagrama de flujo y el pseudocódigo utilizando el ciclo apropiado.*/

var sueldoHora=0;
var horasDia=0;
var horasTotal=0;

sueldoHora=Number(prompt("Ingresa el sueldo por hora ",0));
for(i=1; i<=6; i++){
	horasDia=Number(prompt("Ingresa las horas trabajadas del dia "+i ,0));
	horasTotal+=horasDia;
}
console.log("Sueldo por Hora :" + sueldoHora);
console.log("Horas Trabajadas :" + horasTotal);
console.log("El sueldo de la semana es :" + (horasTotal*sueldoHora));

/*Ejercicio #8: Tiki Taka
Un empleado de la tienda “Tiki Taka” realiza N ventas durante el día;se requiere saber cuántas de ellas: • Fueron mayores a $1000, • Cuántas fueron mayores a $500 pero menores o iguales a $1000 • Cuántas fueron menores o iguales a $500. • Además, se requiere saber el monto de lo vendido en cada categoría y de forma global.
Realice un algoritmo que permita determinar lo anterior y represéntelo mediante el diagrama de flujo y el pseudocódigoutilizando el ciclo apropiado*/
var n=0; //numero de ventas del dia
var m=0; //monto de una ventas
var v1=0; //cantidad de ventas >1000
var v2=0; //cantidad de ventas >500 y <=1000
var v3=0; //cantidad de ventas <=500
var m1=0; //monto de ventas >1000
var m2=0; //monto de ventas >500 y <=1000
var m3=0; //monto de ventas <=500
var t=0;  //monto total
n=Number(prompt("Ingresa la cantidad de ventas del dia ",0));
for(i=1; i<=n; i++){
	m=Number(prompt("Ingresa el monto de la venta "+i ,0));
	t+=m;
	if(m>1000){
		m1=m1+m;
		v1++;
	}else if(m<=500){
		m3=m3+m;
		v3++;
	}else{
		m2=m2+m;
		v2++;
	}
}
console.log("Cantidad Ventas <= $500: " + v3 + " Monto $"+m3);
console.log("Cantidad Ventas > $500 y hasta $1000: " + v2 + " Monto $"+m2);
console.log("Cantidad Ventas > $1000: " + v1 + " Monto $"+m1);
console.log("Ventas totales: "+n + " Monto total $"+t);

/*Ejercicio #9: Mensualidades
Una persona adquirió un producto para pagar en 20 meses. El primer mes pagó $10, el segundo $20, el tercero $40 y así sucesivamente.
Realice un algoritmo para determinar cuánto debe pagar mensualmente y el total de lo que pagó después de los 20 meses y represéntelo mediante el diagrama de flujo y el pseudocódigo utilizando el ciclo apropiado.*/
var m=5; //monto de la mensualidad
var t=0; //total a pagar

for(i=1; i<=20; i++){
	m=2*m;
	console.log("La mensualidad " + i + " es $" + m);
	t+=m;
}
console.log("Costo total $"+ t);

/*Ejercicio #10: Tienda de autoservicio
La cadena de tiendas de autoservicio “El mandilón” cuenta con sucursales en C ciudades diferentes de la República, en cada ciudad cuenta con T tiendas y cada tienda cuenta con N empleados, asimismo, cada una registra lo que vende de manera individual cada empleado, cuánto fue lo que vendió cada tienda, cuánto se vendió en cada ciudad y cuánto recaudó la cadena en un solo día.
Realice un algoritmo para determinar lo anterior y represéntelo mediante un diagrama de flujo, utilizando el ciclo apropiado.*/
var C=0; //cantidad de ciudades
var T=0; //cantidad de tiendas por ciudad
var N=0; //cantidad de empleados por tienda
var m=0; //monto vendido por empleado
var v1=0; //monto vendido en la cadena
var v2=0; //monto vendido en la ciudad
var v3=0; //monto vendido en la tienda

C=Number(prompt("Ingresa cantidad de ciudades de Tiendas Mandilon"));
for(i=1; i<=C; i++){
	T=Number(prompt("Ingresa cantidad de tiendas de la ciudad " + i));
	for(j=1; j<=T; j++){
		N=Number(prompt("Ingresa cantidad de empleados de la ciudad " + i + " tienda " + j));
		for(k=1; k<=N; k++){
			m=Number(prompt("Ingresa el monto vendido del empleado " + k + " de la tienda " + j + " ciudad " + i));
			v3=v3+m;
		}
		console.log("El monto vendido en la tienda " + j + " ciudad " + i + " fue $" + v3);
		v2=v2+v3;
	}
	console.log("El monto vendido en la ciudad " + i + " fue $" + v2);
	v1=v1+v2;
}
console.log("El monto vendido por toda la cadena $"+ v1);











