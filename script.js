const wordRow1 = document.querySelector(".word-row1")
const counter = document.querySelector(".counter")
const pointBox = document.querySelector(".point-box")
const writeBox = document.querySelector("#text-box")
var wordArray = ["apple", "blue", "cat", "dance", "elephant", 
"flower", "green", "house", "ice", "jungle", "kite", "lemon",
"mountain", "notebook", "orange", "piano", "queen", "river", 
"sun", "tree", "umbrella", "violet", "whale", "xylophone", 
"yellow", "zebra", "ant", "butterfly", "cloud", "dolphin", "eagle",
"fire", "garden", "hat", "island", "jacket", "kangaroo", 
"lake", "moon", "nest", "ocean", "penguin", "quilt", "rain", 
"star", "train", "unicorn", "violin", "wind", "x-ray", "yarn", 
"zoo", "acorn", "balloon", "cactus", "diamond", "earth", "feather",
"giraffe", "honey", "iguana", "jelly", "koala", "leaf", 
"mirror", "noodle", "owl", "pumpkin", "quokka", "robot", "shell",
"turtle", "under", "vase", "window", "xenon", "yawn", "zigzag", 
"arrow", "biscuit", "canoe", "drum", "elbow",
"fountain", "globe", "hammer", "igloo", "jigsaw", "kangaroo", 
"ladder", "microphone", "nozzle", "orchid", "parrot", "quartz", 
"rocket", "saddle", "tomato", "utensil", "vulture", "whistle", "zipper"]
var randomIndex
var letters=0
var wordCount=0;
var secondNumber=60;
var second=secondNumber;
var timer
var munite=0
if(second>=60)
    munite=parseInt(second/60)
else
    munite=0
if((second-munite*60)<10)
    counter.textContent=`${munite}:0${second-munite*60}`
else
    counter.textContent=`${munite}:${second-munite*60}`
function counterLoopFunction(){
    if(second>0)
        timer = setTimeout(counterLoopFunction,1000)
    if(second>=60)
        munite=parseInt(second/60)
    else
        munite=0
    if((second-munite*60)<10)
        counter.textContent=`${munite}:0${second-munite*60}`
    else
        counter.textContent=`${munite}:${second-munite*60}`
    second--
    if(second<0){
        clearInterval(timer)
        writeBox.disabled=true;
        let deleteword=document.querySelectorAll(".word")
        for(let i=0;i<deleteword.length;i++){
            deleteword[i].remove()
        }
        wordRow1.textContent=`Your score: ${pointBox.textContent}`
    }
}
function randomWordAdd(){
while(letters<32){//random word adding
    randomIndex = Math.floor(Math.random()*wordArray.length)
    letters+=wordArray[randomIndex].length
    let addWord = document.createElement("div")
    addWord.setAttribute("class","word")
    wordRow1.appendChild(addWord)
    wordCount++;
    addWord.textContent=wordArray[randomIndex]
    wordArray.splice(randomIndex,1)
}
}
randomWordAdd();
wordRow1.children[0].style.backgroundColor="#dddddd"
//wordRow1.children[0].style.backgroundColor="gray"

function reflesh(){ //reflesh button
    wordArray = ["apple", "blue", "cat", "dance", "elephant", 
    "flower", "green", "house", "ice", "jungle", "kite", "lemon",
    "mountain", "notebook", "orange", "piano", "queen", "river", 
    "sun", "tree", "umbrella", "violet", "whale", "xylophone", 
    "yellow", "zebra", "ant", "butterfly", "cloud", "dolphin", "eagle",
    "fire", "garden", "hat", "island", "jacket", "kangaroo", 
    "lake", "moon", "nest", "ocean", "penguin", "quilt", "rain", 
    "star", "train", "unicorn", "violin", "wind", "x-ray", "yarn", 
    "zoo", "acorn", "balloon", "cactus", "diamond", "earth", "feather",
    "giraffe", "honey", "iguana", "jelly", "koala", "leaf", 
    "mirror", "noodle", "owl", "pumpkin", "quokka", "robot", "shell",
    "turtle", "under", "vase", "window", "xenon", "yawn", "zigzag", 
    "arrow", "biscuit", "canoe", "drum", "elbow",
    "fountain", "globe", "hammer", "igloo", "jigsaw", "kangaroo", 
    "ladder", "microphone", "nozzle", "orchid", "parrot", "quartz", 
    "rocket", "saddle", "tomato", "utensil", "vulture", "whistle", "zipper"]
    second=secondNumber
    if(second>=60)
        munite=parseInt(second/60)
    else
        munite=0
    if((second-munite*60)<10)
        counter.textContent=`${munite}:0${second-munite*60}`
    else
        counter.textContent=`${munite}:${second-munite*60}`
    clearInterval(timer)
    writeBox.value="";
    writeBox.disabled=false
    point=0; 
    pointBox.textContent=point;
    wordRow1.textContent=""
    let wordsOnScreen=document.querySelectorAll(".word").length
    for(let j=0;j<wordsOnScreen;j++){
        let word = document.querySelector(".word")
        wordRow1.removeChild(word)
    }
    letters=0;
    wordCount=0;
    i=0;
    randomWordAdd();
    wordRow1.children[0].style.backgroundColor="#dddddd"
}
var point = 0;
pointBox.textContent=0
var i=0;
function mainLoop(){
    if(writeBox.value==" "){
        writeBox.value=""
        return
    }
    var selectedWord =document.querySelectorAll(".word")
    //childLoop(selectedWord[i])
    if(second==secondNumber)
        counterLoopFunction();
    //IF CORRECT
    if(writeBox.value[writeBox.value.length-1]==" "){
        if(writeBox.value==selectedWord[i].textContent+" "){
            point++
            pointBox.textContent=point
            selectedWord[i].style.backgroundColor="green"
            selectedWord[i].style.color="white"
        }
        else{
            selectedWord[i].style.backgroundColor="red"
            selectedWord[i].style.color="white"
        }
        writeBox.value=""
        i++;
        if(i==selectedWord.length){
            console.log("SİL")
            selectedWord.forEach(function(element){
                element.remove()
            });
            letters=0;
            i=0;
            randomWordAdd();
        }
        if(i!=selectedWord.length)
            document.querySelectorAll(".word")[i].style.backgroundColor="#dddddd"
    }
}
// var streak=true
// function childLoop(word){
//     let wordString=word.textContent
//     let writeBoxLetter=writeBox.value
//     word.split("")
//     console.log(word)
//     for(let i=0;i<writeBoxLetter.length;i++){
//         if(writeBoxLetter[i]==wordString[i]){
            
//         }
//     }
// }
writeBox.addEventListener('input',mainLoop)