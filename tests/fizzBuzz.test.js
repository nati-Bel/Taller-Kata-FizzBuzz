const FizzBuzz = require("../fizzBuzz.js")
describe ("Si hay divisores comunes de 3 y 5 return FizzBuzz" ,()=> {
        test("caso 1 devuelve Fizz cuando divisible por 3",() =>{
                //Arrange: definimos las variables a usar
                const fizz_buzz = new FizzBuzz();
                let numero = 9;
                let respuesta_esperada = "Fizz";
                //Act:ejecutar el escenario
                const respuesta = fizz_buzz.retornar_fizz_buzz(numero);
                //Assert:comprobamos
                expect(respuesta).toBe(respuesta_esperada);
                }
        );

        test("caso 2 devuelve Buzz cuando divisible por 5", () => {
                //Arrange: definimos las variables a usar
                const fizz_buzz = new FizzBuzz();
                let numero = 10;
                let respuesta_esperada = "Buzz";
                //Act:ejecutar el escenario
                const respuesta = fizz_buzz.retornar_fizz_buzz(numero);
                //Assert:comprobamos
                expect(respuesta).toBe(respuesta_esperada);
                }
        );
        test("caso 3 devuelve FizzBuzz cuando divisible por 3 y 5", () => {
                //Arrange: definimos las variables a usar
                const fizz_buzz = new FizzBuzz();
                let numero = 30;
                let respuesta_esperada = "FizzBuzz";
                //Act:ejecutar el escenario
                const respuesta = fizz_buzz.retornar_fizz_buzz(numero);
                //Assert:comprobamos
                expect(respuesta).toBe(respuesta_esperada);
                }
        );
});




/**Gherkin test (Given-When-Then) 
 * dado un numero - cuando sea divisible por 3 - devuelva fizz
 * 
*/