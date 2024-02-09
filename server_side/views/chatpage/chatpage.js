const sendbtn = document.getElementById('sendbtn');
const inputvalue = document.getElementById('chatbox');
const chatcontainer = document.getElementById('messagebox');


sendbtn.addEventListener('click',()=>{
    const message = inputvalue.value;
    if(message){
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.textContent = message;
        chatcontainer.appendChild(messageDiv);

        inputvalue.value='';
        chatcontainer.scrolltop = chatcontainer.scrollHeight;
    }
});


// Add chat page JavaScript
// Fix chat page JavaScript bug
