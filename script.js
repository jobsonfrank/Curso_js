function verificar(){

   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano') 
   var res = document.querySelector('div#res')
   if(fano.Value == 0 || Number(fano.Value) > ano){
      window.alert('[ERRO] Verifique os dados e tente novamente')
   }else{
       var fsex = document.getElementsByName('radsex')
       var idade  = ano - Number(fano.Value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked){
           genero = 'Homem'
           if(idade >= 0 && idade < 10){
               //criança
               img.setAttribute('src', 'criança_masc.jpg')

           }else if(idade > 10 && idade < 21){
               //jovem
               img.setAttribute('src', 'jovem_masc.jpg')

           }else if(idade > 21 && idade < 50){
               //Adulto
               img.setAttribute('src', 'adulto_masc.jpeg')

               
           }else{
               //Idoso
               img.setAttribute('src', 'idoso_masc.jpg')
           }
       }else if(fsex[1].checked){
           genero = 'Mulher'
           if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'criança_fem.jpg')
        }else if(idade < 21){
            //jovem
            img.setAttribute('src', 'jovem_fem.jpg')
        }else if(idade < 50){
            //Adulto
            img.setAttribute('src', 'adulto_fem.jpeg')
        }else{
            //Idoso
            img.setAttribute('src', 'idoso_fem.jpg')
        }
       }
       res.getElementsByClassName.textAling = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos`
       res.appendChild(img)
       
   }
}
