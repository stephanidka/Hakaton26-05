function randomChoce(){
    let result = document.getElementById("result_choice");
    const img = document.createElement('img');
    let randomImage = new Array();
    randomImage[0] = './assets/images/srilanka.png';
    randomImage[1] = '/assets/images/china.png';
    randomImage[2] = '/assets/images/turkey.png';
    randomImage[3] = './assets/images/spain.png';
    randomImage[4] = './assets/images/france.png';
    randomImage[5] = './assets/images/italy.png';
    randomImage[6] = './assets/images/baikal.png';
    let number = Math.floor(Math.random()*randomImage.length);
    img.src = randomImage[number];
    result.append(img);
    document.getElementById("button_id").onclick = null;
}