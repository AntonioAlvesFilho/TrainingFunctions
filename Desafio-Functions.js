const count = number => {
    for (let i = 1; i < number; i++) { //[ ] Escreva um programa onde, você chame uma função enviando um número, a função deve imprime na tela os número de 1 até o número que você enviou
        console.log(i)
    }
}
count(10)


//

const tab = number => {
    for (let i = 0; i <= 10; i++) {
        if (number <= 10) {
            console.log(` ${number} * ${i} = ${number * i}`)
        } else {
            console.log("insert a number between 0 and 10")
            break
        }

    }
}

tab(10)


//

function hour() {
    const d = new Date(); // [ ] Escreva um programa onde, você chame uma função, e ela diga a hora exata! 
    d.getHours();
    console.log(`${d.getHours()}:${d.getMinutes()}`)
}

hour()


//

function year() {
    const d = new Date(); // [ ] Escreva um programa onde, você chame uma função, e ela diga que ano estamos! 
    d.getFullYear();
    console.log(`${d.getFullYear()}`)
}

year()


//

function conta(number1, number2) { // [ ] Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior
    if (number1 > number2) {
        console.log(`${number1} is bigger than ${number2}`)
    } else if (number1 < number2) {
        console.log(`${number2} is bigger than ${number1}`)
    } else {
        console.log(`${number2} is equal ${number1}`)
    }
}
conta(10, 10)

//

let family = [{
        salary: 7300,
        children: 5,
    },
    {
        salary: 6000,
        children: 2,
    },
    {
        salary: 4000,
        children: 3,
    },
    {
        salary: 4000,
        children: 4,
    },
    {
        salary: -2000,
        children: 0,
    }
]
const all_data = (family) => {

    let average_saraly = 0
    let average_children = 0
    let highest_salary = 0


    for (let i = 0; i < family.length; i++) {

        let salary = family[i].salary
        let children = family[i].children

        if (salary > highest_salary) {
            highest_salary = salary
        }

        if (salary < 0) {
            console.log(highest_salary)
            console.log(average_children / i)
            console.log(average_saraly / i)
        }
        else {
            average_children = (average_children + children)
            average_saraly = (average_saraly + salary)
        }

    }
}

all_data(family)

//

function calc(montante, capital, meses) {
    let Juros = montante - capital
    let Taxa = Juros / (capital * meses) //[ ] Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento. 
    console.log(`${Taxa * 100}%`)
}
calc(2600, 2000, 12)
/*J = M - C 
T = J / C * m */


//

function discont(name, first_purchase, cash_purchase, price) {
    if (first_purchase == "primeira compra" && cash_purchase == "compra a vista" && price > 1000) {
        console.log(`O cliente ${name} recebeu um desconto de 30% na compra de ${price}R$ com o valor final de ${price*0.70}R$`)
    } else if (first_purchase == "primeira compra" && cash_purchase == "compra a vista" && price <= 1000 && price >= 500) {
        console.log(`O cliente ${name} recebeu um desconto de 25% na compra de ${price}R$ com o valor final de ${price*0.75}R$`)
    } else if (first_purchase == "primeira compra" && cash_purchase == "compra a vista" && price < 500) {
        console.log(`O cliente ${name} recebeu um desconto de 20% na compra de ${price}R$ com o valor final de ${price*0.80}R$`)
    } else if (first_purchase == "primeira compra" && cash_purchase == "compra a prazo" && price > 1000) {
        console.log(`O cliente ${name} recebeu um desconto de 20% na compra de ${price}R$ com o valor final de ${price*0.80}R$`)
    } else if (first_purchase == "primeira compra" && cash_purchase == "compra a prazo" && price <= 1000 && price >= 500) {
        console.log(`O cliente ${name} recebeu um desconto de 15% na compra de ${price}R$ com o valor final de ${price*0.85}R$`)
    } else if (first_purchase == "primeira compra" && cash_purchase == "compra a prazo" && price < 500) {
        console.log(`O cliente ${name} recebeu um desconto de 10% na compra de ${price}R$ com o valor final de ${price*0.90}R$`)
    } else if (first_purchase == "nao é a primeira compra" && cash_purchase == "compra a vista" && price > 1000) {
        console.log(`O cliente ${name} recebeu um desconto de 20% na compra de ${price}R$ com o valor final de ${price*0.80}R$`)
    } else if (first_purchase == "nao é a primeira compra" && cash_purchase == "compra a vista" && price <= 1000 && price >= 500) {
        console.log(`O cliente ${name} recebeu um desconto de 15% na compra de ${price}R$ com o valor final de ${price*0.85}R$`)
    } else if (first_purchase == "nao é a primeira compra" && cash_purchase == "compra a vista" && price < 500) {
        console.log(`O cliente ${name} recebeu um desconto de 10% na compra de ${price}R$ com o valor final de ${price*0.90}R$`)
    } else if (first_purchase == "nao é a primeira compra" && cash_purchase == "compra a prazo" && price > 1000) {
        console.log(`O cliente ${name} recebeu um desconto de 10% na compra de ${price}R$ com o valor final de ${price*0.90}R$`)
    } else if (first_purchase == "nao é a primeira compra" && cash_purchase == "compra a prazo" && price <= 1000 && price >= 500) {
        console.log(`O cliente ${name} recebeu um desconto de 5% na compra de ${price}R$ com o valor final de ${price*0.95}R$`)
    } else if (first_purchase == "nao é a primeira compra" && cash_purchase == "compra a prazo" && price < 500) {
        console.log(`O cliente ${name} efetuou uma compra no valor final de ${price}R$ agradeçemos sua preferência`)
    }
}
discont("Eduardo", "nao é a primeira compra", "compra a prazo", 400)

/*[ ] Escreva um programa onde, você cria uma função geradora de desconto. 

- A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um booleano que diz se é a primeira compra do cliente ou não, um booleando que diz se o cliente vai pagar a vista ou não)

- Os descontos funcionam da seguinte forma: 

    - Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto 

    - Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% de desconto     

    - Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20% 

    - Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto - Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto 

    - Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10% 

    - Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto     

   - Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto 

   - Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10% 

   - Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto - Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 5% de desconto 

   - Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO
- A função deve imprimir na tela: 

    - Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, o valor total com desconto e a porcentagem de desconto que ele recebeu.       

    - Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da sua compra e um cupom de desconto. Esse cupom deve ser um valor aleatório entre 10 e 20% para a próxima compra.*/