var SlotSelecionado=0 //0 1 2 3-> Perks,  4 5 6-> Itens/Adons
var time="Sobrevivente"
var qtdSelecionada=1 //0 perks qtd=1; 3-4 + perks qtd = 4
var loadout=[0,0,0,0,0,0,0] // 0-3 perks   4 item   5-6 addons
const Selecao = document.querySelector("#Seleção")
const EspacoInterativ = document.querySelector("#espaço interativo")
const AbaConfig = document.querySelector("#AbaConfigurações")
var SelecaoPerkshtml
var Selecaoitenshtml = `<img src="Imagens/lanternaAmarela.webp" id="1" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/lanternaAmarela.webp" id="2" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/lanternaAmarela.webp" id="3" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/lanternaAmarela.webp" id="4" class="imagem" onclick=Pegar(id)>`
var Selecaoaddonshtml = `<img src="Imagens/EndSapphireLens.webp" id="1" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/EndSapphireLens.webp" id="2" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/EndSapphireLens.webp" id="3" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/EndSapphireLens.webp" id="4" class="imagem" onclick=Pegar(id)>`
var configAberta = false
var opacidade = 0


function shout(num){
    alert(num)
}

function Selecionar(num){
    if (SlotSelecionado<4){
        SelecaoPerkshtml = Selecao.innerHTML
        if(num == 4)
            Selecao.innerHTML = Selecaoitenshtml
        else if(num > 4)
            Selecao.innerHTML = Selecaoaddonshtml
    }
    else if (SlotSelecionado==4){
        Selecaoitenshtml = Selecao.innerHTML
        if(num < 4)
            Selecao.innerHTML = SelecaoPerkshtml
        else if(num > 4)

            // C O N T I N U A R
            //Faz os addons mudarem dependendo do item selecionado
            if (time=="Sobrevivente"){
                if (loadout[4]==1){ //Se for a lanterna1
                    Selecaoaddonshtml = `<img src="Imagens/EndSapphireLens.webp" id="1" class="imagem" onclick=Pegar(id)>
                    <img src="Imagens/EndSapphireLens.webp" id="2" class="imagem" onclick=Pegar(id)>
                    <img src="Imagens/EndSapphireLens.webp" id="3" class="imagem" onclick=Pegar(id)>
                    <img src="Imagens/EndSapphireLens.webp" id="4" class="imagem" onclick=Pegar(id)>`
                }
            }

            Selecao.innerHTML = Selecaoaddonshtml
    }
    else if (SlotSelecionado>4){
        Selecaoaddonshtml = Selecao.innerHTML
        if(num < 4)
            Selecao.innerHTML = SelecaoPerkshtml
        else if(num == 4)
            Selecao.innerHTML = Selecaoitenshtml
    }

    SlotSelecionado=num
}

function Pegar(num){
    if (SlotSelecionado<4){ //pegando perks
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

        if (qtdSelecionada<4)
            for (let i=0;i<4;i++){
                if (loadout[i]==0){
                    SlotSelecionado=i
                    break
                }
            }
    }
    
    else if (SlotSelecionado==4){ //Pegando Itens/Killers
        let slot = document.getElementById("Item")
        let lixo = document.getElementById(num)
        let temp = slot.src
        slot.src = lixo.src
        lixo.remove()
        if (loadout[4]!=0){
            let novo = document.createElement("img")
            novo.src = temp
            novo.id = loadout[4]
            novo.className = "imagem"
            novo.onclick = function() {Pegar(novo.id)}
            Selecao.append(novo)
        }
        loadout[4]=num
        Selecionar(5)
    }

    else if (SlotSelecionado>4){  //Pegando Addons
        let slot = document.getElementById(`addon${SlotSelecionado-5}`)
        let lixo = document.getElementById(num)
        let temp = slot.src
        slot.src = lixo.src
        lixo.remove()
        if (loadout[SlotSelecionado]!=0){
            let novo = document.createElement("img")
            novo.src = temp
            novo.id = loadout[SlotSelecionado]
            novo.className = "imagem"
            Selecao.append(novo)
        }
        loadout[SlotSelecionado]=num
        if (loadout[5]==0)
            Selecionar(5)
        else
            SlotSelecionado++
    }

}

function TrocarTime(){
    loadout=[0,0,0,0,0,0,0]
    for(let i = 0; i<4;i++)
        document.getElementById(`Perk${i}`).src = "Imagens/Vazio.png"
    document.getElementById("Item").src = "Imagens/ItemVazio.png"
    document.getElementById("addon0").src = "Imagens/ItemVazio.png"
    document.getElementById("addon1").src = "Imagens/ItemVazio.png"
    SlotSelecionado=0

    if(time=="Sobrevivente"){
        time="Assassino"
        document.getElementById("TrocarTime").src = "Imagens/survivor.jpeg"

        Selecao.innerHTML = `<img src="Imagens/agitation.webp" id="1" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/agitation.webp" id="2" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/agitation.webp" id="3" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/agitation.webp" id="4" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/agitation.webp" id="5" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/agitation.webp" id="6" class="imagem" onclick=Pegar(id)>                
            <img src="Imagens/agitation.webp" id="7" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/agitation.webp" id="8" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/agitation.webp" id="9" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/agitation.webp" id="10" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/agitation.webp" id="11" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/agitation.webp" id="12" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/agitation.webp" id="13" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/agitation.webp" id="14" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/agitation.webp" id="15" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/agitation.webp" id="16" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/agitation.webp" id="17" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/agitation.webp" id="18" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/agitation.webp" id="19" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/agitation.webp" id="20" class="imagem" onclick=Pegar(id)>`
        Selecaoitenshtml = `<img src="Imagens/trapper.webp" id="1" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/wraith.webp" id="2" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/nurse.webp" id="3" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/hillbilly.webp" id="4" class="imagem" onclick=Pegar(id)>`
        Selecaoaddonshtml = ``
    }
    else{
        time="Sobrevivente"
        document.getElementById("TrocarTime").src = "Imagens/killer.webp"

        Selecao.innerHTML= `<img src="Imagens/headon.webp" id="1" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/headon.webp" id="2" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/headon.webp" id="3" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/headon.webp" id="4" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/headon.webp" id="5" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/headon.webp" id="6" class="imagem" onclick=Pegar(id)>                
            <img src="Imagens/headon.webp" id="7" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/headon.webp" id="8" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/headon.webp" id="9" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/headon.webp" id="10" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/headon.webp" id="11" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/headon.webp" id="12" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/headon.webp" id="13" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/headon.webp" id="14" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/headon.webp" id="15" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/headon.webp" id="16" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/headon.webp" id="17" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/headon.webp" id="18" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/headon.webp" id="19" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/headon.webp" id="20" class="imagem" onclick=Pegar(id)>`
        Selecaoitenshtml = `<img src="Imagens/lanternaAmarela.webp" id="1" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/lanternaAmarela.webp" id="2" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/lanternaAmarela.webp" id="3" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/lanternaAmarela.webp" id="4" class="imagem" onclick=Pegar(id)>`
        Selecaoaddonshtml = ``
    }

}

function Configuracao(){
    if(!configAberta){
        document.getElementById("Configurações").remove()

        let config = document.createElement("img")
        config.src="Imagens/Config.webp"
        config.id="Configurações"
        config.className="imagem configs"
        config.onclick = function(){Configuracao()}
        AbaConfig.append(config)
        

        //Adicionando o botao trocar time
        let tt = document.createElement("img")
        tt.id = "TrocarTime"
        tt.className = "imagem configs"
        if (time=="Sobrevivente")
            tt.src = "Imagens/killer.webp"
        else
            tt.src = "Imagens/survivor.jpeg"
        tt.onclick = function(){TrocarTime()}
        AbaConfig.append(tt)
        configAberta=!configAberta

        //Adicionando div com botoes importar e exportar build
        let copydiv = document.createElement("div")
        copydiv.id = "AreaImportExport"
        copydiv.className = "configs"
        copydiv.innerHTML= `<div id="importar">
                <p>Importar Build</p>
                <input id="inpt" type="text" onkeypress="capturarEnter(event)">
            </div>
            <div id="exportar">
                <p>Exportar Build</p>
                <button onclick=Exportar()><span class="material-symbols-outlined">upload</span></button>
            </div>`
        AbaConfig.append(copydiv)
    }
    else{
        document.getElementById("TrocarTime").remove()
        document.getElementById("AreaImportExport").remove()
        document.getElementById("Configurações").remove()
        document.getElementById("cabeçalho").innerHTML = `<img src="Imagens/Config.webp" id="Configurações" class="imagem configs" onclick=Configuracao()>
                <h1 class="texto"><strong>LOADOUT</strong></h1>`
        configAberta=!configAberta
    }
}


function capturarEnter(evento){
    if (evento.key === "Enter")
        Importar(evento.target.value)
}

function Exportar(){
    let codigo
    if(time=="Sobrevivente")
        codigo="S."
    else
        codigo="K."
    for(let i=0;i<6;i++){
        codigo+=`${loadout[i]}.`
    }
    codigo+=`${loadout[6]}`
    navigator.clipboard.writeText(codigo)
    alert("Código copiado para Área de Transferência")
}
function Importar(codigo){ 
    let vetor = codigo.split(".")
    if(vetor[0]=="S"){
        TrocarTime()  //Troca para remover e resetar os perks e itens
        if(time=="Assassino")
            TrocarTime()  //Troca de volta para manter o time certo do importado
    }
    else if(vetor[0]=="K"){
        TrocarTime()
        if(time=="Sobrevivente")
            TrocarTime()
    }
    else{
        shout("Código Inválido")
        return
    }
    //Setando as instancias do codigo
    
    for(let i=0;i<7;i++)
        loadout[i]=vetor[i+1]
    Selecionar(0)
    for(let i=0;i<4;i++){
        if(loadout[i]!=0){
            document.getElementById(`Perk${i}`).src = document.getElementById(`${loadout[i]}`).src
            document.getElementById(`${loadout[i]}`).remove()
        }
    }   
    Selecionar(4)
    if(loadout[4]!=0){
    document.getElementById(`Item`).src = document.getElementById(`${loadout[4]}`).src
    document.getElementById(`${loadout[4]}`).remove()
    }
    Selecionar(5)
    for(let i=5;i<7;i++){
        if(loadout[i]!=0){
        document.getElementById(`addon${i-5}`).src = document.getElementById(`${loadout[i]}`).src
        document.getElementById(`${loadout[i]}`).remove()
        }
    }
    Selecionar(0)
}