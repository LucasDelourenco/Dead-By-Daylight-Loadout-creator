var SlotSelecionado=0 //0 1 2 3-> Perks,  4 5 6-> Itens/Adons
var time="Sobrevivente"
var qtdSelecionada=1 //0 perks qtd=1; 3-4 + perks qtd = 4
var loadout=[0,0,0,0,0,0,0] // 0-3 perks   4 item   5-6 addons
const Selecao = document.querySelector("#Seleção")
const EspacoInterativ = document.querySelector("#espaço interativo")
const AbaConfig = document.querySelector("#AbaConfigurações")
var SelecaoPerkshtml
var Selecaoitenshtml = `<img src="Imagens/Itens/caixaMarrom.webp" id="1" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/caixaAmarela.webp" id="2" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/caixaVerde1.webp" id="3" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/caixaVerde2.webp" id="4" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/caixaRoxa1.webp" id="5" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/caixaRoxa2.webp" id="6" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/medkitMarrom.webp" id="7" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/medkitAmarelo.webp" id="8" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/medkitVerde.webp" id="9" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/medkitRoxo.webp" id="10" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/lanternaAmarela.webp" id="11" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/lanternaVerde.webp" id="12" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/lanternaRoxa.webp" id="13" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/mapaVerde.webp" id="14" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/mapaRosa.webp" id="15" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/chaveVerde.webp" id="16" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/chaveRoxa.webp" id="17" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/chaveRosa.webp" id="18" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/caixaEvento.webp" id="19" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/medkitEvento.webp" id="20" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/lanternaEvento.webp" id="21" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/mapaEvento.webp" id="22" class="imagem" onclick=Pegar(id)>`
var Selecaoaddonshtml = ``
var configAberta = false
var opacidade = 0
var qtdSelecionavel=[91,22,4]


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
        else if(num > 4){

            // C O N T I N U A R
            //Faz os addons mudarem dependendo do item selecionado
            if (time=="Sobrevivente"){
                if (loadout[4]>10 && loadout[4]<14){ //Se for a lanterna1
                    Selecaoaddonshtml = `<img src="Imagens/Addons/EndSapphireLens.webp" id="1" class="imagem" onclick=Pegar(id)>
                    <img src="Imagens/Addons/EndSapphireLens.webp" id="2" class="imagem" onclick=Pegar(id)>
                    <img src="Imagens/Addons/EndSapphireLens.webp" id="3" class="imagem" onclick=Pegar(id)>
                    <img src="Imagens/Addons/EndSapphireLens.webp" id="4" class="imagem" onclick=Pegar(id)>`
                }
                else{
                    Selecaoaddonshtml=``
                }
            }
            Selecao.innerHTML = Selecaoaddonshtml
        }
    }
    else if (SlotSelecionado>4){
        Selecaoaddonshtml = Selecao.innerHTML
        if(num < 4)
            Selecao.innerHTML = SelecaoPerkshtml
        else if(num == 4)
            Selecao.innerHTML = Selecaoitenshtml
    }
    
    SlotSelecionado=num
    AtualizarFuncoes()
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
        else
            qtdSelecionavel[0]--
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
            novo.onclick = function() { Pegar(novo.id) }
            Selecao.append(novo)
        }
        else
            qtdSelecionavel[1]--
        loadout[4]=num
        loadout[5]=0
        loadout[6]=0
        document.getElementById("addon0").src = "Imagens/ItemVazio.png"
        document.getElementById("addon1").src = "Imagens/ItemVazio.png"
        //Selecionar(5)
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
            novo.onclick = function() {Pegar(novo.id)}
            Selecao.append(novo)
        }
        else
            qtdSelecionavel[2]--
        loadout[SlotSelecionado]=num
        if (loadout[5]==0)
            Selecionar(5)
        else
            SlotSelecionado++
    }

}


function AtualizarFuncoes(){ //IPC!  //Recria os events listeners dos perks/itens desselecionados
    let imagens = Selecao.querySelectorAll("img")
    imagens.forEach(imagem => {
        //imagem.addEventListener('click', function(){Pegar(imagem.id)})  //mais formal
        imagem.onclick = function(){Pegar(imagem.id)}
    })
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

        Selecao.innerHTML = `<img src="Imagens/Perks/Killer/agitation.webp" id="1" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Killer/agitation.webp" id="2" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Killer/agitation.webp" id="3" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Killer/agitation.webp" id="4" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Killer/agitation.webp" id="5" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Killer/agitation.webp" id="6" class="imagem" onclick=Pegar(id)>                
            <img src="Imagens/Perks/Killer/agitation.webp" id="7" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Killer/agitation.webp" id="8" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Killer/agitation.webp" id="9" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Killer/agitation.webp" id="10" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Killer/agitation.webp" id="11" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Killer/agitation.webp" id="12" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Killer/agitation.webp" id="13" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Killer/agitation.webp" id="14" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Killer/agitation.webp" id="15" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Killer/agitation.webp" id="16" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Killer/agitation.webp" id="17" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Killer/agitation.webp" id="18" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Killer/agitation.webp" id="19" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Killer/agitation.webp" id="20" class="imagem" onclick=Pegar(id)>`
        Selecaoitenshtml = `<img src="Imagens/Killers/trapper.webp" id="1" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Killers/wraith.webp" id="2" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Killers/nurse.webp" id="3" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Killers/hillbilly.webp" id="4" class="imagem" onclick=Pegar(id)>`
        Selecaoaddonshtml = ``
    }
    else{
        time="Sobrevivente"
        document.getElementById("TrocarTime").src = "Imagens/killer.webp"

        Selecao.innerHTML= `<img src="Imagens/Perks/Survivor/aceinthehole.webp" id="1" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/adrenaline.webp" id="2" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/aftercare.webp" id="3" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/alert.webp" id="4" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/anymeansnecessary.webp" id="5" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/appraisal.webp" id="6" class="imagem" onclick=Pegar(id)>                
            <img src="Imagens/Perks/Survivor/autodidact.webp" id="7" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/balancedlanding.webp" id="8" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/bitethebullet.webp" id="9" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/blastmine.webp" id="10" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/bloodpact.webp" id="11" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/boilover.webp" id="12" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/bond.webp" id="13" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/borrowedtime.webp" id="14" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/botanyknowledge.webp" id="15" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/breakdown.webp" id="16" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/breakout.webp" id="17" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/buckleup.webp" id="18" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/builttolast.webp" id="19" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/calmspirit.webp" id="20" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/circleofhealing.webp" id="21" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/clairvoyance.webp" id="22" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/correctiveaction.webp" id="23" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/counterforce.webp" id="24" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/dancewithme.webp" id="25" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/darktheory.webp" id="26" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/deadhard.webp" id="27" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/deception.webp" id="28" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/decisivestrike.webp" id="29" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/deliverance.webp" id="30" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/desperatemeasures.webp" id="31" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/detectiveshunch.webp" id="32" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/distortion.webp" id="33" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/diversion.webp" id="34" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/empathy.webp" id="35" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/empaticconnection.webp" id="36" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/exponencial.webp" id="37" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/fasttrack.webp" id="38" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/flashbang.webp" id="39" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/flipflop.webp" id="40" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/fogwise.webp" id="41" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/forthepeople.webp" id="42" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/hardened.webp" id="43" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/headon.webp" id="44" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/innerfocus.webp" id="45" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/ironwill.webp" id="46" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/leader.webp" id="47" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/leftbehind.webp" id="48" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/lithe.webp" id="49" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/luckybreak.webp" id="50" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/metalofman.webp" id="51" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/nomither.webp" id="52" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/objectofobsession.webp" id="53" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/offtherecord.webp" id="54" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/openhanded.webp" id="55" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/overcome.webp" id="56" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/overzealous.webp" id="57" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/parentalguidance.webp" id="58" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/pharmacy.webp" id="59" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/poised.webp" id="60" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/potentialenergy.webp" id="61" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/powerstruggle.webp" id="62" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/provethyself.webp" id="63" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/quickandquiet.webp" id="64" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/quickgambit.webp" id="65" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/redherring.webp" id="66" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/repressedalliance.webp" id="67" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/residualmanifest.webp" id="68" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/resurgence.webp" id="69" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/rookiespirit.webp" id="70" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/saboteur.webp" id="71" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/selfcare.webp" id="72" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/selfpreservation.webp" id="73" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/shadowstep.webp" id="74" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/smashhit.webp" id="75" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/solesurvivor.webp" id="76" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/solidarity.webp" id="77" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/soulguard.webp" id="78" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/sprintburst.webp" id="79" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/stakeout.webp" id="80" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/streetwise.webp" id="81" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/technician.webp" id="82" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/tenacity.webp" id="83" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/unbreakable.webp" id="84" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/uptheante.webp" id="85" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/urbanevasion.webp" id="86" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/vigil.webp" id="87" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/visionary.webp" id="88" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/wakeup.webp" id="89" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/weregonnaliveforever.webp" id="90" class="imagem" onclick=Pegar(id)>
            <img src="Imagens/Perks/Survivor/windowsofopportunity.webp" id="91" class="imagem" onclick=Pegar(id)>
`
        Selecaoitenshtml = `<img src="Imagens/Itens/caixaMarrom.webp" id="1" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/caixaAmarela.webp" id="2" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/caixaVerde1.webp" id="3" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/caixaVerde2.webp" id="4" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/caixaRoxa1.webp" id="5" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/caixaRoxa2.webp" id="6" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/medkitMarrom.webp" id="7" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/medkitAmarelo.webp" id="8" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/medkitVerde.webp" id="9" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/medkitRoxo.webp" id="10" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/lanternaAmarela.webp" id="11" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/lanternaVerde.webp" id="12" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/lanternaRoxa.webp" id="13" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/mapaVerde.webp" id="14" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/mapaRosa.webp" id="15" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/chaveVerde.webp" id="16" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/chaveRoxa.webp" id="17" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/chaveRosa.webp" id="18" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/caixaEvento.webp" id="19" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/medkitEvento.webp" id="20" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/lanternaEvento.webp" id="21" class="imagem" onclick=Pegar(id)>
        <img src="Imagens/Itens/mapaEvento.webp" id="22" class="imagem" onclick=Pegar(id)>`
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


function capturarEnter(evento){//IPC
    if (evento.key === "Enter")
        Importar(evento.target.value)
        evento.target.value="" //limpa o input
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