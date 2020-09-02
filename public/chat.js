'use strict';

const socket = io('http://10.114.32.18');

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const inp = document.getElementById('m');
  socket.emit('chat message', inp.value);
  inp.value = '';
});

socket.on('chat message', (msg) => {
  const item = document.createElement('li');
  item.innerHTML = msg;
  document.getElementById('messages').appendChild(item);
});

