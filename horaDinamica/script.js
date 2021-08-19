function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')

    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()

   


    if(hora >= 6 && hora < 12){
        msg.innerHTML=`Bom dia, agora são ${hora}:${minutos}`
        img.src ='manha.png'
        document.body.style.background = '#DAA520'
    }

    else if(hora >= 12 && hora < 18){
        img.setAttribute('src','tarde.png')
        msg.innerHTML=`Boa tarde, agora são ${hora}:${minutos}`
        document.body.style.background='#D2691E'
    }

    else if(hora >= 18 && hora <= 23){
        img.setAttribute('src','noite.png')
        msg.innerHTML=`Boa noite, agora são ${hora}:${minutos}`
        document.body.style.background='#1C1C1C'
    }

    else{
        img.src ='madrugada.jpg'
        msg.innerHTML=`Boa madrugada, agora são ${hora}:${minutos}`
        document.body.style.background='#000000'
    }
}

