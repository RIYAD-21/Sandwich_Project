
var z =1;
var t = 0;
const list = [];
var v = true;
const KrabbyPatty = ["beef","Ketchup","mustard","pickel","onion","lettuce","cheese","tomato"];
var n = KrabbyPatty.length;
const sound = document.getElementById('AddSound');


function addContainer(ingredient) {
    const containerArea = document.getElementById('Burger');
    const newContainer = document.createElement('div');
    if(list.length < 18) {
        if (v) {
            z += 1; 
            switch (ingredient) {
                case "meat":
                    newContainer.className = 'beef';
                    list.push("beef");
                    
                    break;
                case "cheese":
                    newContainer.className = 'cheese';
                    list.push("cheese");
                    
                    break;
                case "tomato":
                    newContainer.className = 'tomato';
                    list.push("tomato");
                    break;
                case "lettuce":
                    newContainer.className = 'lettuce';
                    list.push("lettuce");
                    break;
                case "pickles":
                    newContainer.className = 'pickel';
                    list.push("pickel");
                    break;
                case "ketchup":
                    newContainer.className = 'Ketchup';
                    list.push("Ketchup");
                    break;
                case "mayonnaise":
                    newContainer.className = 'mayonnaise';
                    list.push("mayonnaise");
                    break;
                case "mustard":
                    newContainer.className = 'mustard';
                    list.push("mustard");
                    break;
                case "onion":
                    newContainer.className = 'onion';
                    list.push("onion");
                    break;
                case "topBread":
                    newContainer.className = 'bottombread';
                    v = false;
                    const c = document.getElementById('Check');
                    c.style.display = "block";
                    const end = document.getElementById('BurgerT');
                    end.style.display = "none";
                    break;
            }
            
            containerArea.insertBefore(newContainer, containerArea.firstChild);
            
            newContainer.style.zIndex = z;
            newContainer.style.position = "absolute";
            newContainer.style.top = `${t}px`;
            t -= 18;
            sound.play();
        }
    }else{
        window.alert("You have reached the maximum amount of ingredients");
    }
    
}

function CheckBurger(){
    t
            var s = JSON.stringify(list);
            var p = JSON.stringify(KrabbyPatty);
              if(s === p){
                window.open("winPage.html", "_top");
              }else{
                window.open("losePage.html", "_top"); 
                
              }    
     
}   

function endBurger(){
    var end = document.getElementById('BurgerT');
    end.style.display="block";
}

function reloadPage(){
    location.reload();
}
