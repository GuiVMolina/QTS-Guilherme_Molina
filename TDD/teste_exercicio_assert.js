import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
    assertNotEquals,
    assertStrictEquals,
    assertExists,
    assertObjectMatch,
    assertRejects

} from "https://deno.land/std/testing/asserts.ts"

let aluno = 'Cróvis José'
let professores = ['Joao','Lais','Davi','Alan']
let numeros = [8,33]


//assert testado em aula
//assertEquals, assertStringIncludes
Deno.test("Teste de assertions (API)", () => {
    assertEquals(aluno, "Cróvis José");
    assertStringIncludes(aluno,"José");
})

//assert testado em aula
//assertArrayIncludes
Deno.test("Testando números", () => {
    assertArrayIncludes(numeros, [8, 33]);
})

//assert testado em aula
//assertArrayIncludes
Deno.test("Testando array do professor (API)", () => {
    assertArrayIncludes(professores,
        ["Davi","Lais","Alan"])
})

//assertNotEquals
Deno.test("Testando se os valores são diferentes", () => {
    assertNotEquals(10, 5, "Os valores são diferentes.");
})

//assertStrictEquals
Deno.test("Testando se os valores são iguais", () => {
    assertStrictEquals(10, 10, "Os valores são iguais.");
})

//assertExists
//Esse assert dá erro pois a variável "teste" não existe
Deno.test("Testando se as variáveis existem", () => {
    assertExists(aluno, professores, numeros, teste);
})

//assertObjectMatch
//Esse assert dá erro pois a variável "gender" era esperada no objeto principal
Deno.test("Testando se existem as informações esperadas", () => {
    const obj = { name: "Alice", age: 25 };
    assertObjectMatch(obj, { name: "Alice", age: 25, gender: "female" }, "Os objetos não correspondem.");
})

//assertRejects
//Esse assert mostrará um erro intencional no código, que caso contenha algum erro, será rejeitado
Deno.test("Testando se a função está sendo rejeitada corretamente", async () => {
    async function asyncFunction() {
      throw new Error("Rejeitado.");
    } await assertRejects(asyncFunction, Error, "A função não foi rejeitada.");
});