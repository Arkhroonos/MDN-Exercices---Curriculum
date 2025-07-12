/* This function allows to display and delete an alert message */

function displayMessage(msgText, msgType) {
            const body = document.body;

const panel = document.createElement("div"); // This Create a new Div on the document (html) called Panel
panel.setAttribute("class", "msgBox"); // This set a class Attribute to the created div element and gives it a class name */
body.appendChild(panel); // Adds the new div to the body

const msg = document.createElement("p"); // Creates a new "p" on the document (html)
msg.textContent = msgText;
panel.appendChild(msg); // Adds the "p" to the Panel element

const closeBtn = document.createElement("button"); // Creates a new "X" button 
closeBtn.textContent = "x";
panel.appendChild(closeBtn); // Adds the "x" button to the Panel

closeBtn.addEventListener("click", () => /* Anonymous function used to remove the panel based on the 'click' event listener on the closeBtn */
  panel.parentNode.removeChild(panel),
);

if (msgType === "warning") {
  msg.style.backgroundImage = "../Alert Message/icons/warning.png";
  panel.style.backgroundColor = "red";
} else if (msgType === "chat") {
  msg.style.backgroundImage = "../Alert Message/icons/chat.png";
  panel.style.backgroundColor = "aqua";
} else {
  msg.style.paddingLeft = "20px";
}

}
const btn = document.querySelector("button");
btn.addEventListener("click", () =>
  displayMessage("Brian: Hi there, how are you today?", "chat")
);
