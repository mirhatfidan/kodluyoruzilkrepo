let stepSecond = 0
let stepMinutes = 0
let stepHours = 0
let nickName = prompt("Lütfen adınızı giriniz.")
let greeting = document.querySelector("#userName")
let myClock = document.querySelector("#Date")

while (nickName == 0 || nickName == null || !isNaN(nickName)) {
    nickName = prompt("Lütfen adınızı giriniz.")
}
greeting.innerHTML = nickName[0].toUpperCase() + nickName.slice(1, nickName.length)

function drawClock() {
    const time = new Date()
    const degree = 6
    myClock.innerHTML = new Date().toLocaleString()

    if (time.getSeconds() == 0) {
        stepSecond ++;
    }
    if (time.getMinutes() == 0 && time.getSeconds() == 0) {
        stepMinutes ++;
    }
    if (time.getHours() == 0 && time.getMinutes() == 0 && time.getSeconds == 0) {
        stepHours ++;
    }
    let second = time.getSeconds() * degree + 360 * stepSecond
    let minutes = time.getMinutes() * degree + time.getSeconds() * 0.1 + 360 * stepMinutes;
    let hours = time.getHours() * 30 + time.getMinutes() * 0.5 + 720 * stepHours;
    document.querySelector('.second').style.transform = `rotate(${second}deg)`
    document.querySelector('.minute-hand').style.transform = `rotate(${minutes}deg)`
    document.querySelector('.hour-hand').style.transform = `rotate(${hours}deg)`
}
drawClock()
setInterval(drawClock,1000) // her saniye fonk. çagırır.