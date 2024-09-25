const ORIGINAL_MESSAGE = "Hello! How can I help you today?";

const chatBodyElement = document.querySelector(".chat-body");
const resetButtonElement = document.querySelector(".reset-button");
const chatInputElement = document.querySelector(".chat-input");
const sendMessageButtonElement = document.querySelector(".send-message-button");

sendMessageButtonElement.addEventListener("click", onSubmitMessage);
chatInputElement.addEventListener("input", checkIsInputEmpty);
resetButtonElement.addEventListener("click", onResetChat);

function checkIsInputEmpty() {
  if (chatInputElement.value === "") {
    sendMessageButtonElement.classList.add("disabled");
  } else {
    sendMessageButtonElement.classList.remove("disabled");
  }
}

function onSubmitMessage() {
  const message = chatInputElement.value;
  chatInputElement.value = "";
  chatBodyElement.innerHTML += `<div class="chat-message chat-message--user">${message}</div>`;
}

function onResetChat() {
  chatBodyElement.innerHTML = `<div class="chat-message chat-message--bot">${ORIGINAL_MESSAGE}</div>`;
}
