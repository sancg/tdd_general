/**
 * Escribir una funcion que al pasarle un numero:
 *  -[x] Muestra :fizz: si el numero es multipo de 3
 *  -[x] Muestra :buzz: si es multipo de 5
 *  -[x] Muestra :fuzzbuzz: si es multiplo de 3 y de 5
 *  -[x] Muestra el numero si no es multipo de ninguno de los anteriores
 */
export const fizzbuzz = (args) => {
    if (typeof args !== "number") throw new Error("Fizzbuzz received a number as parameter");
    if (Number.isNaN(args)) throw new Error("Fizzbuzz received a number as parameter");
    let output = "";
    const multiple = { 3: "fizz", 5: "buzz", 7: "woof" };
    Object.entries(multiple).forEach(([is_multiple, world]) => {
        if (args % is_multiple === 0) {
            output += world;
        }
    });
    return output || args;
};
