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
var secondNumber=59;
var second=secondNumber;
var timer
counter.textContent=`0:${second}`
function counterLoopFunction(){
    if(second>0)
        timer = setTimeout(counterLoopFunction,1000);
    counter.textContent=`0:${second}`
    second--;
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
    counter.textContent=`0:${second}`
    clearInterval(timer)
    writeBox.value="";
    writeBox.disabled=false
    pointBox.textContent=0;
    wordRow1.textContent=""
    let wordsOnScreen=document.querySelectorAll(".word").length
    for(let j=0;j<wordsOnScreen;j++){
        let word = document.querySelector(".word")
        wordRow1.removeChild(word)
        console.log("deleted words")
    }
    letters=0;
    wordCount=0;
    i=0;
    randomWordAdd();
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
    }
    // else
    //     selectedWord[i].style.backgroundColor="gray"
    console.log(wordCount)
}
writeBox.addEventListener('input',mainLoop)