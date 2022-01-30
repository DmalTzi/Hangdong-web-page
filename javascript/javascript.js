
const countElement = document.getElementById('count');

update();

function update(){
    fetch('https://api.countapi.xyz/update/dmaltzicode/test?amount=1')
        .then(res => res.json())
        .then(res => {
            countElement.innerHTML = res.value;
        })
}

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}