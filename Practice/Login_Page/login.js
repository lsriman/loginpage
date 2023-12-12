//let username= document.getElementById('user');
//let information=document.getElementById('info');

function login(){
    let username= document.getElementById('user');
    let information=document.getElementById('info');
    let userentervalue=username.value
    let disptxt= " Hai "+ userentervalue + " Please Wait for sometime we are verifying your credentials..."
    information.textContent= disptxt
}   