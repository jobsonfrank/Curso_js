function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas `
if (hora >= 0 && hora < 12){
    img.src = 'fotomanha.jpg'
    document.body.style.background = '#e68686'
}else if(hora >= 12 && hora <= 18){
    img.src = 'fototarde.jpg'
    document.body.style.background = '#e91919 '
}else{
    img.src = 'fotonoite.jpg'
    document.body.style.background = '#363636'
}
}
//2cd9f