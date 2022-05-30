
function calcular(){

var nome = document.getElementById('nome').value;
var altu = document.getElementById('altura').value;
var peso = document.getElementById('peso').value;


var res = (peso/(altu*altu)).toFixed(1);
var result = document.getElementById('resultado');


if(res < 18.5){
    result.innerHTML = "Olá" +nome+ ",Seu IMC é:   " + res + "    Abaixo do peso! ";
        

    }else if(res >= 18.6 && res <= 24.9){
        result.innerHTML= "Olá "+nome+ ",Seu IMC é:  " + res +  "     Peso ideal, Parabéns! ";
     

        }else if(res >= 25.0 && res <= 29.9 ){
             result.innerHTML = "Olá " +nome+ ",Seu IMC é:  " + res + "  Levemente acima do Peso! ";
            
                
            }else if(res >= 30.0 && res <= 34.9){
                 result.innerHTML = "Olá " +nome+ ",Seu IMC é:  " + res + "   Obesidade Grau I,Atenção! ";
                   

                }else if(res >= 35.0 && res <= 39.9){
                     result.innerHTML= "Olá "+nome+ ",Seu IMC é:  " + res + "    Obesidade grau II,Cuidado com sua saúde!";
                       

                    }else if(res >= 40.0){
                         result.innerHTML = "Olá "+nome+ ",Seu IMC é:  " + res + "   Obesidade Grau III, Você Precisa imediatamente fazer uma dieta!";
                      
                    }else {
                         result.innerHTML = "Verifique seus dados Novamente!";
                    }


              
                           
                
}




    
