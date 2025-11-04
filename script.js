const result = document.getElementById("result");
const btn = document.getElementById("btn")
const rollimg = document.getElementById("rollimg")
const cmnt = document.getElementById("cmnt")
let random;

btn.onclick=function () {
    random=Math.floor( Math.random()*6)+1;
    result.textContent= `${random}`;
    rollimg.style.backgroundImage = `url('${random}.png')`;

  switch (random) {
    case 1:
        cmnt.textContent = `OHo`;
        break;
    case 2:
        cmnt.textContent = `Shit`;
        break;
    case 3:
        cmnt.textContent = `Offf`;
        break;
    case 4:
        cmnt.textContent = `Okey`;
        break;
    case 5:
        cmnt.textContent = `hmm`;
        break;
    case 6:
        cmnt.textContent = `YEAH`;
        break;
    default:
        cmnt.textContent = `WOW`; // Only runs if random is < 1 or > 6
}
}



