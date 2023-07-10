var socket = null;

var send = document.getElementById("send_button");
send.addEventListener("click",send_message);

function send_message(){
    console.log("ezeff");
    socket.emit("message",document.getElementById("pseudo").value,document.getElementById("message_to_send").value);
}
import ("../socket/socket.io.js").then(({f1}) => {
    socket = io("http://192.168.1.127:3000", {
    });

    // Add a connect listener
    socket.on('connect', function (socket) {
        console.log('Connected!');
    });
    socket.on('send_messages', (data) => {
        data.forEach((item, index) => {
            final_str = item.pseudo + ' - ' + item.message;
            var tag = document.createElement("p");
            var text = document.createTextNode(final_str);
            tag.appendChild(text);
            var element = document.getElementById("messages_container");
            element.appendChild(tag);
        })
        // Traiter le message et envoyer une réponse au client si nécessaire
    });
    socket.on("new_message",(pseudo,data) => {
        console.log("test");
        final_str = pseudo + ' - ' + data;
        var tag = document.createElement("p");
        var text = document.createTextNode(final_str);
        tag.appendChild(text);
        var element = document.getElementById("messages_container");
        element.appendChild(tag);
    })


})
var form = document.getElementById("form_send_message");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
