(() => {
	const Wrapper = document.getElementById("wrapperBody")
  let flag = false

  const stack = []
  let map = {}
  
  Wrapper.addEventListener("click", (e) => {
  	const targetElement = e.target
    const isSquare = e.target.className === "square"
    
    
    if(isSquare) {
      if(map[targetElement.id] === undefined) {
        map[targetElement.id] = true
      	stack.push(targetElement)
      	targetElement.style.backgroundColor = "white"
      }
      
    }
  })
  
  
  setInterval(() => {
    if(stack.length === 7) {
    	flag = true
  	}
    
    if(!stack.length) {
			flag = false
      map = {}
		}
    
  	if(flag) {
    	let element = stack.pop()
      element.style.backgroundColor = "green"
    }
  }, 1000)
  
})()

