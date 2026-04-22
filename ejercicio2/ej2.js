const numeros = [3, 18, 7, 22, 5, 11, 100, 1, 45, 8];

for (let i = 0; i < numeros.length; i++) {
    const n = numeros[i];

    if (n % 2 === 0) {
        console.log(n + " es par")
    } else {
        console.log(n + " es impar")
    }

    if (n >= 18) {
        console.log("(mayor de edad)")
    }

    if (n % 5 === 0) {
        console.log("(multiplo de 5)")
    }
}