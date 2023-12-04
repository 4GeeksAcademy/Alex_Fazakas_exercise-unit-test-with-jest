//  Importar la función sum del archivo app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');


test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar to yen should be 147.42 yen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 dolar son 147.42 yenes, entonces 3.5 dolares deben ser (3.5 * 147.42 yenes)
    const expected = 3.5 * 147.42;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.5)).toBe(515.9699999999999); // 1 dolar son 147.42 yenes, entonces 3.5 dolares deberían ser = (3.5 * 147.42)
})

test("One yen should be 0.0054 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const yenes = fromYenToPound(3.5);

    // Si 1 yen son 0.0054 dólares, entonces 3.5 yenes deben ser (3.5 * 0.0054)
    const expected = 3.5 * 0.0054;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(3.5)).toBe(0.0189); // 1 yen son 0.0054 dólares, entonces 3.5 euros deberían ser = (3.5 * 0.0054)
})

 

