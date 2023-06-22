let a = 'oi'
let b = 'olá'

Deno.test("teste do oi (no api)", () =>{
    if(a != "oi"){
        throw new Error(`${a} não é oi`);
    }
} ) 

Deno.test("Não pode ser oi (no api)", () =>{
    if(b == "oi"){
        throw new Error(`${a}  é oi`)
    }
} ) 