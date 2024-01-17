var nome = 'ildelandio';
var peso = 75;
var altura = 1.70;

var imc = peso / (altura * altura);

var pesoMinimo = 18.5 * (altura * altura);
var pesoMaximo = 24.9 * (altura * altura);

if (imc < 16.9) {
    var pesoDesejado = 18.5 * (altura * altura);
    var pesoParaGanhar = pesoDesejado - peso;
    console.log(nome + ", Cuidado!! Você está muito abaixo do peso.\nÉ indicado que você ganhe aproximadamente " + pesoParaGanhar.toFixed(2) + " kg para atingir um peso saudável.");
} else if (imc >= 17 && imc <= 18.4) {
    var pesoDesejado = 18.5 * (altura * altura);
    var pesoParaGanhar = pesoDesejado - peso;
    console.log(nome + ", Você está abaixo do peso.\nÉ indicado que você ganhe aproximadamente " + pesoParaGanhar.toFixed(2) + " kg para atingir um peso saudável.");
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log(nome + ", Você está no peso normal. Continue mantendo um estilo de vida saudável!");
} else if (imc >= 25 && imc <= 29.9) {
    var pesoDesejado = 24.9 * (altura * altura);
    var pesoParaPerder = peso - pesoDesejado;
    console.log(nome + ", Cuidado! Você está acima do peso.\nÉ indicado que você perca aproximadamente " + pesoParaPerder.toFixed(2) + " kg para atingir um peso saudável.");
} else if (imc >= 30 && imc <= 34.9) {
    var pesoDesejado = 24.9 * (altura * altura);
    var pesoParaPerder = peso - pesoDesejado;
    console.log(nome + ", Cuidado!! Você está com obesidade grau 1.\nÉ indicado que você perca aproximadamente " + pesoParaPerder.toFixed(2) + " kg para atingir um peso saudável.");
} else if (imc >= 35 && imc <= 40) {
    var pesoDesejado = 24.9 * (altura * altura);
    var pesoParaPerder = peso - pesoDesejado;
    console.log(nome + ", Cuidado!! Você está com obesidade grau 2.\nÉ indicado que você perca aproximadamente " + pesoParaPerder.toFixed(2) + " kg para atingir um peso saudável.");
} else {
    var pesoDesejado = 24.9 * (altura * altura);
    var pesoParaPerder = peso - pesoDesejado;
    console.log(nome + ", Cuidado!! Você está com obesidade grau 3.\nÉ indicado que você perca aproximadamente " + pesoParaPerder.toFixed(2) + " kg para atingir um peso saudável.");
}