//elements 
const BTN = document.querySelector(".progressAdd")
const Counter = document.querySelector(".counter")
const Queue = document.querySelector(".queue")
const Clicked = document.querySelector(".clicked")
const Reset = document.querySelector(".reset")
const ProgressContainer = document.querySelector(".progressWrap")


//Global States
let elementCount = 0
let queue = 0
let total = 0
let queueTask = []
let maxLimit = 3


//functions
Reset.addEventListener("click", ResetAll)

BTN.addEventListener("click", addProgressBar)

function ResetAll(){
	elementCount = 0
  Counter.innerText = elementCount
  
  queue = 0
  Queue.innerText = queue
  
  total = 0
  Clicked.innerText = total
  
  ProgressContainer.innerHTML = ""
}


const buildProgressBar = () => {
	const ProgressBar = document.createElement("div")
  ProgressBar.classList.add("progress-bar")
  ProgressBar.setAttribute("id", `progress-id-${total}`)
  ProgressContainer.append(ProgressBar)
  
  
  let intervalTimer = setInterval(() => {

    //This condition means that we have 3 elements
    // on the ui already deployed hence we can add more.
    if(elementCount === maxLimit) {
        elementCount = 0
        queue = 0
        Queue.innerText = queue
    }

    //This condition means that
    //The elements to be deployed exceeds the
    //max limit, hence we deploy them
    // over the interval of given ms

    if(elementCount > maxLimit) {     
        queue -= 1
        elementCount -= 1
        Queue.innerText = queue
        Counter.innerText = parseInt(Counter.innerText, 10) + 1
        buildProgressBar()
    } 
    clearInterval(intervalTimer)
  }, 2000)	
}


function addProgressBar() {
  total += 1
  Clicked.innerText = total
  
  
  elementCount += 1
  
  if(elementCount <= maxLimit) {
  	Counter.innerText = total
    buildProgressBar()
  } else {
  	 queue += 1
     Queue.innerText = queue
  }
}