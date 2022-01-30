function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}

const countEL = document.getElementById('count');

function updateVisitCount(){
    fetch('https://api.countapi.xyz/create?namespace=florin-pop&key=youtube&value=0')
        .then(res => res.json())
        .then(res => {
            countEL.innerHTML = res.value
        });
}