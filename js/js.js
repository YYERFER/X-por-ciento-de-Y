/**Ejercicio
 * ¿Cuanto es el X por ciento de Y?
 * Ejemplo:
 * equisPorciento(10,120) //devuelve: 12
 * equisPorciento(20,100)//devuelve: 20
 */

// DIV
var div = document.createElement('div');
div.classList='div';
document.body.appendChild(div);

div.style.display='flex';
div.style.flexDirection='column';
div.style.maxWidth='200px'
div.style.margin='auto'

// INGRESE VALOR
var lblValor = document.createElement('label');
lblValor.id='valor';
lblValor.textContent='Ingrese Valor'
div.appendChild(lblValor);

var txtValor = document.createElement('input');
txtValor.id='txtValor'
div.appendChild(txtValor);

// INGRESE PORCENTAJE
var lblPorcentaje = document.createElement('label');
lblPorcentaje.id='porcentaje';
lblPorcentaje.textContent='Ingrese Porcentaje'
div.appendChild(lblPorcentaje);

var txtPocentaje = document.createElement('input');
txtPocentaje.id='txtPorcentaje'
div.appendChild(txtPocentaje);

var Porcentaje = document.createElement('label');

Porcentaje.textContent='%'
div.appendChild(Porcentaje);


// BOTON
var btn = document.createElement('button');
btn.textContent='OK'
btn.addEventListener('click',()=>{
    var valor = txtValor.value;
    var porcentaje =txtPocentaje.value;

    
    parrafo.textContent = '=>' + ' ' + operacion(valor,porcentaje);
  
});

div.appendChild(btn);

// PARRAFO

var parrafo = document.createElement('p');
div.appendChild(parrafo);

parrafo.style.border='1px solid red'
// 

function operacion(valor,porcentaje){
    let total =  (valor*porcentaje)/100;
    let totalGral = Number.parseFloat(total).toFixed(2);
    return totalGral;
}
