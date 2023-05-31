import{
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes
} from "http://deno.land/std/testing/asserts.ts"

let aluno = 'Cróvis José'
let professores = ['João', 'Lais', 'Davi', 'Bruno Aparecido Cano']

Deno.test("Teste de assertions (API)", () =>{
    assertEquals(aluno, "Cróvis José");
    assertStringIncludes (aluno, "José");
})