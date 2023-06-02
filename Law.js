var CVA = document.getElementById("Marv")
var GOR = CVA.getContext("2d") 
var ROHE = 1
var ROHI = 1
var ROB = "rover.png"
var Marvin = "mars.jpg"
var SPX = 10
var SPY = 10
var STORE
var COLL
function Loaded(){
    COLL = new Image()
    COLL.onload = charge
    COLL.src = Marvin
    STORE = new Image()
    STORE.onload = energize
    STORE.src = ROB   
}
function charge(){
    GOR.drawImage(COLL, 0,0, CVA.width, CVA.height)
}
function energize(){
    GOR.drawImage(STORE, SPX,SPY, ROHE, ROHI)
}
charge()
energize()

window.addEventListener("keydown", presskey)
function presskey(M){
var Storage = M.keyCode
console.log(Storage)
if (Storage == 37) {
Izquierda()
console.log("Izquierda")
} 
if (Storage == 38) {
Arriba()
console.log("Arriba")
} 
if (Storage == 39) {
Derecha()
console.log("Derecha")
}
if (Storage == 40) {
Abajo()
console.log("Abajo")
 } 
 
}

function Izquierda(){
SPX = SPX - 1
charge()
energize()
}
function Arriba(){
SPY = SPY - 1
charge()
energize()
}
function Derecha(){
SPX = SPX + 1
charge()
energize()
}
function Abajo(){
SPY = SPY + 1
charge()
energize()
}
