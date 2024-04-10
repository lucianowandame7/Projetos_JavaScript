function carregar() {
   var msg = window.document.getElementById('msg')
   var img = document.getElementById('imagem')
   var data = new Date()
   var hora = data.getHours()
  // var hora = 21
   msg.innerHTML = `Agora são ${hora} horas.` 
   if (hora >=0 && hora < 12) {
    // BOM DIA!
    img.src = 'mapa1.png'
    document.body.style.background ='#e2cd9f'
   } else if (hora >=12 && hora <18 ) {
    // Boa tarde!
    img.src ='mapa5.png'
    document.body.style.background = 'blue'
   } else {
    //BOA NOITE
    img.src = 'mapa8.png'
    document.body.style.background = 'red'
   }
}