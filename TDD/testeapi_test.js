import{

    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
    
}from "https://deno.land/std/testing/asserts.ts" 

let aluno = 'Cróvis José'
let professores=['Joao','Lais','Davi','Bruno Aparecido Cano']
Deno.test("Teste de assertions (API)",()=>{

    assertEquals(aluno, "Cróvis José");
    assertStringIncludes(aluno,"José");
})
Deno.test("Testando números", ()=>{

    assertArrayIncludes(numeros, [8, 33]);
})
Deno.test("Testando array do professor (API)", ()=>{

    assertArrayIncludes(professores,
        ["Davi","Lais","Alan"],
        "Opa! Algo deu errado!")
})