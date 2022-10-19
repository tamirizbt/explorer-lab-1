import "./css/index.css"

const ccBgColor01 = document.querySelector("#cor1")
const ccBgColor02 = document.querySelector("#cor2")
const ccLogo = document.querySelector("#cc-img-logo")


function setCardType(type) {
  const colors = {
    visa: ["#436D99","#2D57F2"],
    mastercard: ["#DF6F29","#C69347"],
    default: ["black", "gray"],
  }
  ccBgColor01.setAttribute("fill", colors[type][0])
  ccBgColor02.setAttribute("fill", colors[type][1]) 
  ccLogo.setAttribute("src", `cc-${type}.svg`)
}

setCardType("visa")