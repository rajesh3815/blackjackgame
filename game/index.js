
let cards=[]
let sum=0
let hasblack=false
let isalive=false
let message=""
let mesel=document.getElementById("message")
let sumel=document.getElementById("sum-el")
let cardel=document.getElementById("card-el");
let pr=document.getElementById("pl-el")

let p={
    player:"pel",money:10
}
pr.textContent=p.player+":$"+p.money
function getrandom(){
    let a=Math.floor(Math.random()*13)+1
    if(a>10)
    return 10
    else if(a==1)
    return 11
    else
    return a
}
function startgame(){
    isalive=true;
    let firstcard=getrandom()
let secondcard=getrandom()
 cards=[firstcard,secondcard]
 sum=firstcard+secondcard
    rendergame()
}
function rendergame(){
if(sum<20){
    message="Do you want to draw new card"
}
else if(sum===21){
    message="yeah,you got blackJack!"
    hasblack=true
}else{
    message="sorry you are out from game"
    isalive=false
}
cardel.textContent="card:"
for(let i=0;i<cards.length;i++){
    cardel.textContent+=cards[i]+" "
}
// cardel.textContent="cards: "+cards[0]+" "+cards[1]
mesel.textContent=message
sumel.textContent="sum:"+sum
}
function newcard(){
    if(isalive===true && hasblack===false){
        let card=getrandom()
        sum+=card
        cards.push(card)
        rendergame()
    }
   
}
