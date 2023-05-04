function mudacor(){
    var div = document.getElementById("container");
    div.style.backgroundColor = "green";
}

function mudacor2(){
    var div2= document.getElementById("nome");
    div2.style.backgroundColor= "yellow";
}

function mudacor3(){
    var div2= document.getElementById("email");
    div2.style.backgroundColor= "yellow";
}

function mudacor4(){
    var div2= document.getElementById("idade");
    div2.style.backgroundColor= "yellow";
}

function mudacor5(){
    var div2= document.getElementById("cidade");
    div2.style.backgroundColor= "yellow";
}




function brincar(){

    const testezinSpining =[
        {transform:"rotate(0) scale(1)"},
        {transform:"rotate(360deg) scale(0)"}
    ]
    
    const testezinTimer = {
        duration: 1000,
        interasions:1,
    }


    var teste = document.getElementById("teste");
      teste.animate(testezinSpining,testezinTimer)

}