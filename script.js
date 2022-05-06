
//fetch 
fetch("./data.json")
.then(function (resp){
    return resp.json();
})
.then(function(data) {
    jsonData = data
})


const dailyBtn = document.getElementById("daily-el")
const weeklyBtn = document.getElementById("weekly-el")
const monthlyBtn = document.getElementById("monthly-el")
const currentEl = document.getElementsByClassName("currenthours")
const buttonCont = document.getElementsByClassName("user-bot")

let jsonData = []
let currentHoursTotal = []



dailyBtn.addEventListener("click", function(){
    renderDailyData()
    checkActive(dailyBtn)
})
weeklyBtn.addEventListener("click", function(){
    renderWeeklyData()
    checkActive(weeklyBtn)
})
monthlyBtn.addEventListener("click", function(){
    renderMonthlyData()
    checkActive(monthlyBtn)
})




function renderDailyData(){
    let currentHoursTotal = []
    for (let i = 0; i <jsonData.length; i++) {
        currentHoursTotal.push(jsonData[i].timeframes.daily.current)
    }
    for (let i = 0; i <currentEl.length; i++){
        currentEl[i].innerText = currentHoursTotal[i] + "hrs"
    }
}

function renderWeeklyData(){
    let currentHoursTotal = []
    for (let i = 0; i <jsonData.length; i++) {
        currentHoursTotal.push(jsonData[i].timeframes.weekly.current)
    }
    for (let i = 0; i <currentEl.length; i++){
        currentEl[i].innerText = currentHoursTotal[i] + "hrs"
    }
   
}

function renderMonthlyData(){
    let currentHoursTotal = []
    for (let i = 0; i <jsonData.length; i++) {
        currentHoursTotal.push(jsonData[i].timeframes.monthly.current)
    }
    for (let i = 0; i <currentEl.length; i++){
        currentEl[i].innerText = currentHoursTotal[i] + "hrs"
    }   
}

function checkActive(e){
    if (document.querySelector(".user-bot p.active") !== null){
        document.querySelector(".user-bot p.active").classList.remove('active');
    }
    e.className = "active";
}