var res;

function fetchAPI(){
    fetch(`http://api.hgbrasil.com/finance?format=jason&key=dbd20426`)
    .then(response => response.json())
    .then(data => converter(data))
}

function converter(data){
    console.log(data);
}

function convDol(){
    fetchAPI();
}

function convReal(){

}