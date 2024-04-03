const chair = document.querySelectorAll(".avilable");
const money = document.querySelector(".money_updated");
const seats = document.querySelector(".seat");
const date_set = document.getElementById("date");
let cost = 0;
let seat = 0
const a = new Date();
const set_date = a.getDay();
date_set.innerHTML = set_date;

chair.forEach((ele) => {
    ele.addEventListener("click", () => {
        console.log("Seat clicked");
        if (ele.getAttribute('fill') === "#014e6f") {
            ele.setAttribute("fill", "#ff0040");
            cost += 10;
            seat += 1;
            money.textContent = cost;
            seats.textContent = seat;
            console.log("Money updated");
        }
        else if (ele.getAttribute('fill') === "#b3b3b3") {
            ele.setAttribute("fill", "#b3b3b3");
            console.log("Seat is unavailable");
        }
        else {
            ele.setAttribute("fill", "#014e6f");
            cost -= 10;
            seat -= 1;
            money.textContent = cost;
            seats.textContent = seat;
        }
    })
})
const next = document.getElementById("Next");
next.addEventListener("click", () => {
    alert("Your ticket has been sended ur mail ID");
})



