let x = 10;
let y = 10;
let yemX = 0;
let yemY = 0;
let puan = 0;
const hiz = 10;
const boyut = 10;
const oyunAlani = document.getElementById('oyunAlani');
const yilan = document.getElementById('yilan');
const yem = document.getElementById('yem');
const puanGoster = document.getElementById('puan');
let hareket;

document.addEventListener('keydown', yonBelirle);

function yonBelirle(event) {
    switch (event.key) {
        case 'ArrowUp':
            clearInterval(hareket);
            hareket = setInterval(() => {
                y -= hiz;
                if (y <= 0) {
                    clearInterval(hareket);
                    alert('Oyun Bitti! Puanınız: ' + puan);
                    location.reload();
                    return;
                }
                yilan.style.top = y + 'px';
                yilanYemCarpismaKontrolu();
            }, 100);
            break;
        case 'ArrowDown':
            clearInterval(hareket);
            hareket = setInterval(() => {
                y += hiz;
                if (y >= oyunAlani.clientHeight) {
                    clearInterval(hareket);
                    alert('Oyun Bitti! Puanınız: ' + puan);
                    location.reload();
                    return;
                }
                yilan.style.top = y + 'px';
                yilanYemCarpismaKontrolu();
            }, 100);
            break;
        case 'ArrowLeft':
            clearInterval(hareket);
            hareket = setInterval(() => {
                x -= hiz;
                if (x <= 0) {
                    clearInterval(hareket);
                    alert('Oyun Bitti! Puanınız: ' + puan);
                    location.reload();
                    return;
                }
                yilan.style.left = x + 'px';
                yilanYemCarpismaKontrolu();
            }, 100);
            break;
        case 'ArrowRight':
            clearInterval(hareket);
            hareket = setInterval(() => {
                x += hiz;
                if (x >= oyunAlani.clientHeight) {
                    clearInterval(hareket);
                    alert('Oyun Bitti! Puanınız: ' + puan);
                    location.reload();
                    return;
                }
                yilan.style.left = x + 'px';
                yilanYemCarpismaKontrolu();
            }, 100);
            break;
    }
}

function yilanYemCarpismaKontrolu() {
    if (x === yemX && y === yemY) {
        puan++;
        puanGoster.textContent = puan;
        yemKonumunuAyarla();
    }
}

function oyunDongusu() {
    yilanYemCarpismaKontrolu();

    if ((x <= 0 || x >= oyunAlani.clientWidth) || (y <= 0 || y >= oyunAlani.clientHeight)) {
        clearInterval(hareket);
        alert('Oyun Bitti! Puanınız: ' + puan);
        location.reload();
        return;
    }

    yilan.style.left = x + 'px';
    yilan.style.top = y + 'px';
}

function yemKonumunuAyarla() {
    yemX = Math.floor(Math.random() * oyunAlani.clientWidth / boyut) * boyut;
    yemY = Math.floor(Math.random() * oyunAlani.clientHeight / boyut) * boyut;
    if (yemX === 0) yemX = yemX + 10;
    if (yemX === oyunAlani.clientWidth) yemX = yemX - 10;
    if (yemY === 0) yemY = yemY + 10;
    if (yemY === oyunAlani.clientHeight) yemY = yemY - 10;
    yem.style.left = yemX + 'px';
    yem.style.top = yemY + 'px';
}

yemKonumunuAyarla();
hareket = setInterval(oyunDongusu, 100);
