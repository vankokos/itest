let goalsTable = document.querySelector(".goals__table")
let goalsTableAdd = document.querySelectorAll(".goals__table-add")
let goalsTableRemove = document.querySelectorAll(".goals__table-jsMonthlyPrice-remove")
let localArr = []
let clearStorage = document.querySelector(".goals__table-clearStorage")
clearStorage.addEventListener("click",()=> {
    localStorage.clear()
    location.reload()
})

goalsTableAdd.forEach(i => i.addEventListener("click", (e)=> {
    let usedDiv = e.target.closest("div")
    let usedTable = usedDiv.querySelector("table")
    let today = new Date
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()

    let newGoal = document.createElement("tr")

    let jsGoal = document.createElement("td")
    jsGoal.classList.add("goals__table-jsGoal")
    let jsGoalInput = document.createElement("input")
    jsGoalInput.type = "text"
    let jsGoalText = document.createElement("p")

    let jsPrice = document.createElement("td")
    jsPrice.classList.add("goals__table-jsPrice")
    let jsPriceInput = document.createElement("input")
    jsPriceInput.type = "number"
    let jsPriceText = document.createElement("p")

    let jsTimeLine = document.createElement("td")
    jsTimeLine.classList.add("goals__table-jsTimeline")
    let jsTimeLineInput = document.createElement("input")
    jsTimeLineInput.type = "number"
    let jsTimeLineText = document.createElement("p")

    let jsMonthlyPrice = document.createElement("td")
    jsMonthlyPrice.classList.add("goals__table-jsMonthlyPrice")
    let jsMonthlyPriceAdd = document.createElement("button")
    jsMonthlyPriceAdd.classList.add("goals__table-jsMonthlyPrice-calculate")
    jsMonthlyPriceAdd.innerHTML = `<img src="img/calculator.png" alt="" srcset="">`
    let jsMonthlyPriceRemove = document.createElement("button")
    jsMonthlyPriceRemove.classList.add("goals__table-jsMonthlyPrice-remove")
    jsMonthlyPriceRemove.innerHTML = `<img src="img/remove.png" alt="">`
    let jsMonthlyPriceText = document.createElement("p")

    jsMonthlyPriceRemove.addEventListener("click", ()=> {
        usedTable.removeChild(newGoal)

    })

    jsMonthlyPriceAdd.addEventListener("click", ()=> {
        jsGoalText.innerHTML = jsGoalInput.value + `<br><br>` + date ;
        jsPriceText.innerHTML = jsPriceInput.value;
        jsTimeLineText.innerHTML = jsTimeLineInput.value;
        let priceAMonth = jsPriceInput.value/jsTimeLineInput.value
        jsMonthlyPriceText.innerHTML = `${Math.round(priceAMonth)} грн`

        let testObj = {
            goal: jsGoalText.innerHTML,
            price: jsPriceText.innerHTML,
            timeLine: jsTimeLineText.innerHTML,
            monthlyPrice: jsMonthlyPriceText.innerHTML
        }

        let stringObj = JSON.stringify(testObj)
        localArr.push(stringObj + ",")
        
        localStorage.setItem("localArr", localArr)
    })

    newGoal.appendChild(jsGoal)
    jsGoal.appendChild(jsGoalInput)
    jsGoal.appendChild(jsGoalText)
    newGoal.appendChild(jsPrice)
    jsPrice.appendChild(jsPriceInput)
    jsPrice.appendChild(jsPriceText)
    newGoal.appendChild(jsTimeLine)
    jsTimeLine.appendChild(jsTimeLineInput)
    jsTimeLine.appendChild(jsTimeLineText)
    newGoal.appendChild(jsMonthlyPrice)
    jsMonthlyPrice.appendChild(jsMonthlyPriceAdd)
    jsMonthlyPrice.appendChild(jsMonthlyPriceRemove)
    jsMonthlyPrice.appendChild(jsMonthlyPriceText)
 
    usedTable.appendChild(newGoal)
    
    // localStorage.setItem("newGoal", newGoal)
}))


window.addEventListener("load", ()=> {
    let existingGoals = localStorage.getItem("localArr")
    let newArr = existingGoals.split(",,")
    let lastElement = newArr.pop()
    let fixedLastElement = lastElement.slice(0,-1)
    newArr.push(fixedLastElement)

    function appendGoals(obj) {
        // let usedDiv = goalsTable
        // let usedTable = usedDiv.querySelector("table")
    
        let newGoal = document.createElement("tr")
    
        let jsGoal = document.createElement("td")
        jsGoal.classList.add("goals__table-jsGoal")
        let jsGoalInput = document.createElement("input")
        jsGoalInput.type = "text"
        let jsGoalText = document.createElement("p")
    
        let jsPrice = document.createElement("td")
        jsPrice.classList.add("goals__table-jsPrice")
        let jsPriceInput = document.createElement("input")
        jsPriceInput.type = "number"
        let jsPriceText = document.createElement("p")
    
        let jsTimeLine = document.createElement("td")
        jsTimeLine.classList.add("goals__table-jsTimeline")
        let jsTimeLineInput = document.createElement("input")
        jsTimeLineInput.type = "number"
        let jsTimeLineText = document.createElement("p")
    
        let jsMonthlyPrice = document.createElement("td")
        jsMonthlyPrice.classList.add("goals__table-jsMonthlyPrice")
        let jsMonthlyPriceAdd = document.createElement("button")
        jsMonthlyPriceAdd.classList.add("goals__table-jsMonthlyPrice-calculate")
        jsMonthlyPriceAdd.innerHTML = `<img src="img/calculator.png" alt="" srcset="">`
        let jsMonthlyPriceRemove = document.createElement("button")
        jsMonthlyPriceRemove.classList.add("goals__table-jsMonthlyPrice-remove")
        jsMonthlyPriceRemove.innerHTML = `<img src="img/remove.png" alt="">`
        let jsMonthlyPriceText = document.createElement("p")
    
        jsMonthlyPriceRemove.addEventListener("click", ()=> {
            goalsTable.removeChild(newGoal)
    
        })
    
        jsGoalText.innerHTML = obj.goal
        jsPriceText.innerHTML = obj.price
        jsTimeLineText.innerHTML = obj.timeLine
        jsMonthlyPriceText.innerHTML = obj.monthlyPrice
    
        newGoal.appendChild(jsGoal)
        jsGoal.appendChild(jsGoalInput)
        jsGoal.appendChild(jsGoalText)
        newGoal.appendChild(jsPrice)
        jsPrice.appendChild(jsPriceInput)
        jsPrice.appendChild(jsPriceText)
        newGoal.appendChild(jsTimeLine)
        jsTimeLine.appendChild(jsTimeLineInput)
        jsTimeLine.appendChild(jsTimeLineText)
        newGoal.appendChild(jsMonthlyPrice)
        jsMonthlyPrice.appendChild(jsMonthlyPriceAdd)
        jsMonthlyPrice.appendChild(jsMonthlyPriceRemove)
        jsMonthlyPrice.appendChild(jsMonthlyPriceText)
     
        goalsTable.appendChild(newGoal)    
    }

    for (let i = 0; i < newArr.length; i++) {
        var newestObj = JSON.parse(newArr[i])
        console.log(newestObj)

        appendGoals(newestObj)
    }


})