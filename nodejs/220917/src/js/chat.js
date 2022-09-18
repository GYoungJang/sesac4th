'use strict'

// socket 변수에 클라이언트의 socket이 담기게 됨.
const socket = io();
const nickname = document.querySelector('#nickname');
const chatList = document.querySelector('.chatting-list');
const chatInput = document.querySelector('.chatting-input');
const sendButton = document.querySelector('.send-button');
const displayContainer = document.querySelector('.display-container');

chatInput.addEventListener('keypress', (e) => {
  let key =  e.key || e.keyCode;
  if((key === 'Enter' && !e.shiftKey)||(key === 13 && key !== 16)){
    send();
    chatInput.value = '';
  }
})
    

  


function send() {
  if (chatInput.value == '') return;
  const param = {
    name : nickname.value,
    msg : chatInput.value,
  }
  socket.emit('chatting', param );
}

sendButton.addEventListener('click', send)

socket.on('chatting', (data) => {
  const {name, msg, time} = data;
  const item = new liModel(name, msg, time);
  item.makeLi();
  displayContainer.scrollTo(0, displayContainer.scrollHeight);
})

function liModel(name, msg, time) {
  this.name = name;
  this.msg = msg;
  this.time = time

  this.makeLi = () => {
    const li = document.createElement('li');
    li.classList.add(nickname.value === this.name ? 'sent' : 'received');
    const dom = `<span class="profile">
                  <span class="user">${this.name}</span>
                  <img class="img" src="https://placeimg.com/50/50/any" alt="any" />
                </span>
                <span class="message">${this.msg}</span>
                <span class="time">${this.time}</span>`
                li.innerHTML = dom;
                chatList.appendChild(li);

  }
}