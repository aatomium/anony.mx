var socket = null;

var send = document.getElementById("send_button");
send.addEventListener("click",send_message);

function send_message(){
    console.log("ezeff");
    socket.emit("message",document.getElementById("message_to_send").value);
}
import ("../socket/socket.io.js").then(({f1}) => {
    socket = io("http://192.168.1.127:3000", {
    });

    // Add a connect listener
    socket.on('connect', function (socket) {
        console.log('Connected!');
    });


})
