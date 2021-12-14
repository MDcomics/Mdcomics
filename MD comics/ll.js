var password = "12345"

function passcheck(){
    if(document.getElementById('pass1').value !== password ){
        alert('Wrong password, try again.');
    }
    if(document.getElementById('pass1').value == password ){
        alert('CORRECT password, click ok to enter webpage.');
    }
}