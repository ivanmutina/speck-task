// testiranje valjanosti upisane vrijednosti 
document.getElementById("submit").addEventListener("click", () => {
    console.log(document.getElementById("input").value)
   });

// document.querySelector('#ispis').setAttribute('class', 'col-5 border text-center ms-3 pb-3 pt-3 testDiv');

document.body.onload = addElement;

const newDiv = document.createElement('div');
newDiv.classList.add('col-5 border text-center ms-3 pb-3 pt-3');

function e(){
   document.querySelector('#ispis').innerHTML = document.querySelector('#input').value;
};