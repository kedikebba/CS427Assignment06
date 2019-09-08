window.onload = function(){
    
    let biggerDecoId =  document.getElementById("biggerDeco"); 
    let textAreaId = document.getElementById("textArea");
    let checkBoxId = document.getElementById("checkbox");
    let pigLatinId = document.getElementById("pigLatin");
    let malkovitchId = document.getElementById("malkovitch");

    biggerDecoId.onclick=changeSize2;
    let timer = null;
    function changeSize2(){
        if(timer==null){
            timer = setInterval(changeSize, 500);
        }else{
            clearInterval(timer);
            timer = null;
        }
    }
    function changeSize(){
      let currentFont = parseInt(window.getComputedStyle(textAreaId).fontSize);
      //textAreaId.style.fontSize = (currentFont*2*0.75) + "pt";

     textAreaId.style.fontSize = (currentFont*0.75)+2 + "pt"; 
      alert("Hello, world!");
    }

    checkBoxId.onchange=function(){
        alert("CheckBox Status Changed!");
        if(checkBoxId.checked){
           textAreaId.style.fontWeight = "bold";
           document.body.style.backgroundImage="url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
           textAreaId.style.color = "green";
            textAreaId.style.textDecoration = "underline"; 
        }else{
            textAreaId.style.fontWeight = "normal" 
        }
       

    }
    pigLatinId.onclick = function(){
        let currentWord = textAreaId.value;
        textAreaId.value =pigLation(currentWord); 

    }
    malkovitchId.onclick = function(){
        let currentWord = textAreaId.value;
        if(currentWord.length>5){
            textAreaId.value = 'Malkovich'; 
        }

    }

    function pigLation(word){
        if(isVowel(word.charAt(0))){
            return word+'ay';
        }
        if(!isVowel(word.charAt(0))&&isVowel(word.charAt(1))){
            return word.substring(1,word.length)+word.charAt(0)+'ay';
        }
        if(!isVowel(word.charAt(0))&&!isVowel(word.charAt(1))){
            return word.substring(2,word.length)+word.charAt(0)+word.charAt(1)+'ay';
        }
        return word;

    }
    function isVowel(character){
        var result = false;
        var vowels = ["A","E", "I", "O", "U", "a","e", "i", "o", "u"];
    
        for(i=0;i<vowels.length;i++){
            if(vowels[i]==character){
                result = true;
            }
        }
        return result;
    }
 
}

