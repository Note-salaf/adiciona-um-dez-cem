const botMil = document.querySelector('#botMil')
const botCem = document.querySelector('#botCem')
const botDez = document.querySelector('#botDez')
const botUm = document.querySelector('#botUm')
const botMilMenos = document.querySelector('#botMilMenos')
const botCemMenos = document.querySelector('#botCemMenos')
const botDezMenos = document.querySelector('#botDezMenos')
const botUmMenos = document.querySelector('#botUmMenos')
const resultado =  document.querySelector('#resultado')
const botDecomposicao = document.querySelector('#botDecomposicao')
const resultadoDecomposicao = document.querySelector('#resultadoDecomposicao')
let compNum = 0
let algarismos = []
let algarismosMultiplicados = []

function adicionaMil() {
    resultado.textContent = parseInt(resultado.textContent) + 1000
    
}
botMil.addEventListener('click', adicionaMil)
function adicionaCem() {
    resultado.textContent = parseInt(resultado.textContent) + 100
    
}
botCem.addEventListener('click', adicionaCem)
function adicionaDez() {
    resultado.textContent = parseInt(resultado.textContent) + 10
    
}
botDez.addEventListener('click', adicionaDez)
function adicionaUm() {
    resultado.textContent = parseInt(resultado.textContent) + 1
    
}
botUm.addEventListener('click', adicionaUm)

//código para subtrair
function subtraiMil() {
    resultado.textContent = parseInt(resultado.textContent) - 1000
    
}
botMilMenos.addEventListener('click', subtraiMil)
function subtraiCem() {
    resultado.textContent = parseInt(resultado.textContent) - 100
    
}
botCemMenos.addEventListener('click', subtraiCem)
function subtraiDez() {
    resultado.textContent = parseInt(resultado.textContent) - 10
    
}
botDezMenos.addEventListener('click', subtraiDez)
function subtraiUm() {
    resultado.textContent = parseInt(resultado.textContent) - 1
    
}
botUmMenos.addEventListener('click', subtraiUm)
//comprimento do número
function comprimento() {
    compNum = resultado.textContent.length
    console.log('O comprimento do número é:' + compNum)
}
// mostra a parte dos milhares
function decompor() {
    separaAlgarismos()
    multiplicaAlgarismos()
    mostraDecomposicao()
    //resultadoDecomposicao.textContent = Math.floor(parseInt(resultado.textContent) / ordem) * ordem     
    }
    

function separaAlgarismos() {
    algarismos = []
    for (let indice = 0; indice < compNum; indice++) {
        const elemento = resultado.textContent[indice];
        console.log('algarismo' + elemento)
        algarismos.push(elemento)
        }
        algarismos.reverse()
console.log(algarismos)
}
function multiplicaAlgarismos() {
    algarismosMultiplicados = []
    for (let indice = 0; indice < algarismos.length; indice++) {
        let elemento = algarismos[indice]
        elemento = elemento * 10 ** indice
        algarismosMultiplicados.push(elemento)
        
    }
    algarismosMultiplicados.reverse()
    console.log(algarismosMultiplicados)
}
function mostraDecomposicao() {
    resultadoDecomposicao.textContent = ''
    for (let indice = 0; indice < algarismosMultiplicados.length; indice++) {
        if (indice < algarismosMultiplicados.length - 1) {
            resultadoDecomposicao.textContent += algarismosMultiplicados[indice] + ' + '
        }
        if (indice == algarismosMultiplicados.length - 1) {
            resultadoDecomposicao.textContent += algarismosMultiplicados[indice]
        }
}
}
botDecomposicao.addEventListener('click', () => {
    comprimento()
    decompor()
   
})