const title = document.querySelector("h1.title")
const main = document.querySelector("main")

let titleX = 10
let titleY = 10
let [r, g, b] = [200, 180, 170]
let score = 0
let titleSize = 2
let titleBorder = 0.5

const clearListeners = () => {
  document.removeEventListener("mousemove", mouse)
  document.removeEventListener("click", click)
  document.removeEventListener("scroll", scroll)
}

const displayWin = () => {
  document.body.style.height = "100vh"
  document.body.style.width = "100%"
  document.body.style.overflow = "hidden"
  main.textContent = "YOU WIN"
  main.style.textAlign = "center"
  main.style.fontSize = "18rem"
  main.style.fontWeight = 700
  main.style.fontFamily = "Helvetica, Open Sans, Arial, sans-serif"
  main.style.color = "#ffff00"
  titleSize += 0.2
  titleX -= 5
  titleY -= 5
  titleBorder += 0.1
  title.style.zIndex = 0
  main.style.position = "relative"
  main.style.zIndex = 1
}

const randomizeEm = n => {
  titleSize += 0.015
  title.style.fontSize = titleSize.toString() + "rem"
  titleBorder += 0.0015
  title.style.borderBottom = `${titleBorder.toString() + "rem"} solid rgb(231, 222, 210)`
  title.style.transform = `translate(${titleX.toString() + "px"}, ${titleY.toString() + "px"})`
  title.style.color = `rgb(${r}, ${g}, ${b})`
  titleX += Math.round(Math.random())
    ? Math.round(Math.random() * 9 + n)
    : -Math.round(Math.random() * 8 + n)
  titleY += Math.round(Math.random())
    ? Math.round(Math.random() * 8 + n)
    : -Math.round(Math.random() * 6 + n)
  if (!score % 5) {
    titleX -= 15
    titleY -= 18
  }
  if (!score % 50) {
    titleX -= 20
    titleY -= 20
  }
  r += Math.round(Math.random())
    ? Math.round(Math.random() * 5)
    : -Math.round(Math.random() * 5)
  g += Math.round(Math.random())
    ? Math.round(Math.random() * 5)
    : -Math.round(Math.random() * 5)
  b += Math.round(Math.random())
    ? Math.round(Math.random() * 5)
    : -Math.round(Math.random() * 5)
  score++
  if (score > 800) {
    displayWin()
    if (score > 1400) {
      clearListeners()
    }
  }
}

const mouse = () => randomizeEm(1)
const click = () => randomizeEm(20)
const scroll = () => randomizeEm(20)

document.addEventListener("mousemove", mouse)
document.addEventListener("click", click)
document.addEventListener("scroll", scroll)
