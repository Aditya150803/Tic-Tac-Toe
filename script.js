 let boxes = document.querySelectorAll(".box")
 let msgContainer = document.querySelector(".msgContainer")
 let msg = document.querySelector("#msg")
 let newGame = document.querySelector("#newGame")
 let reset = document.querySelector("#reset")
 let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
 ]

 let turnO = false
const markOnClick = boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO){
            box.innerText = "O"
            turnO = false
        }
        else{
            box.innerText = "X"
            turnO = true
        }
        box.disabled = true
        checkWinner()
    })
 })
 const enableBoxes = ()=>{
    for(box of boxes){
        box.disabled = false
        box.innerText = ""
    }
 }
 const resetGame = () =>{
    turnO = false
    enableBoxes()
    msgContainer.classList.add("hide")  
 }

 const disableBoxes = ()=>{
    for(box of boxes){
        box.disabled = true
    }
 }

 const showWinner = (winner) =>{
    msg.innerText = `Congratulations. The winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableBoxes()  
 }

 let checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1Value = boxes[pattern[0]].innerText
        let pos2Value = boxes[pattern[1]].innerText
        let pos3Value = boxes[pattern[2]].innerText
        if(pos1Value != "" && pos2Value != "" && pos3Value != ""){
            if(pos1Value === pos2Value && pos2Value === pos3Value){
                showWinner(pos1Value)
            }
        }
    }
 }
 let result = markOnClick
if (result === false){
    console.log("Draw")
}

reset.addEventListener("click", resetGame)
newGame.addEventListener("click", resetGame)