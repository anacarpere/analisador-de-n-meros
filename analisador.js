let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n)>=1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n))!= -1){
        return true
    }else{
        return false
    }
    
}
    

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value =''
    num.focus()
    }  
    
function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicionar valores antes de finalizar!')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]    
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos <font color="green"><b>${total}</b></font> números informados`
        res.innerHTML += `<p> O maior número informado foi <font color="green"><b>${maior}<b></font>`
        res.innerHTML += `<p> O menor número cadastrado foi <font color="green"><b>${menor}<b></font>`
        res.innerHTML += `<p> Somando todos os valores temos <font color="green"><b>${soma}<b></font>`
        res.innerHTML += `<p> A média dos valores é <font color="green"><b>${media}<b></font>`


    }
        
    
    
}
