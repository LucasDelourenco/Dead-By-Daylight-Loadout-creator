var SlotSelecionado=0 //0 1 2 3-> Perks,  4 5 6-> Itens/Adons
var personagem="Sobrevivente"
var qtdSelecionada=1 //0 perks qtd=1; 3-4 + perks qtd = 4
var loadout=[0,0,0,0]
const Selecao = document.querySelector("#Seleção")
var SelecaoPerkshtml
var Selecaoitenshtml
var Selecaoaddonshtml

function shout(num){
    alert(num)
}

function Selecionar(num){
    SlotSelecionado=num
}

function Pegar(num){
    if (SlotSelecionado>3){
        SlotSelecionado=qtdSelecionada
    }

    let slot = document.getElementById(`Perk${SlotSelecionado}`) //IPC usar ``
    let lixo = document.getElementById(num)
    let temp = slot.src
    slot.src = lixo.src
    lixo.remove()
    if (loadout[SlotSelecionado]!=0){ //Se o slot que voce adicionou nao for vazio, o perk que voce tinha volta para a lista de seleção
        let novo = document.createElement("img")
        //NAO FUNCIONA ->   novo.innerHTML=`<img src="${temp}" id="${loadout[SlotSelecionado]}" class="imagem" onclick=Pegar(id)>`
        novo.src = temp
        novo.id = loadout[SlotSelecionado]
        novo.className = "imagem"
        novo.onclick = function() { Pegar(novo.id) } // IPC
        Selecao.append(novo)
    }
    loadout[SlotSelecionado]=num

    if(qtdSelecionada<3){
        qtdSelecionada++
    }
    if (SlotSelecionado<3){
        SlotSelecionado++
    }
}