let TopRight = document.getElementById("top-right");
let BottomRight = document.getElementById("bottom-right");
let BottomLeft = document.getElementById("bottom-left");
let TopLeft = document.getElementById("top-left");
let tr,tl,br,bl;
TopRight.addEventListener('input',()=>{
    document.getElementById("experiment").style.borderTopRightRadius=`${TopRight.value}px`;
    tr = document.getElementsByClassName("tr");
    console.log(tr);
    for(let i=0;i<2;i++)
    tr[i].innerHTML=`${TopRight.value}`;
});
TopLeft.addEventListener('input',()=>{
    document.getElementById("experiment").style.borderTopLeftRadius=`${TopLeft.value}px`;
    tl = document.getElementsByClassName("tl");
    for(let i=0;i<2;i++)
    tl[i].innerHTML=`${TopLeft.value}`;
});
BottomRight.addEventListener('input',()=>{
    document.getElementById("experiment").style.borderBottomRightRadius=`${BottomRight.value}px`;
    br = document.getElementsByClassName("br");
    for(let i=0;i<2;i++)
    br[i].innerHTML=`${BottomRight.value}`;
});
BottomLeft.addEventListener('input',()=>{
    document.getElementById("experiment").style.borderBottomLeftRadius=`${BottomLeft.value}px`;
    bl = document.getElementsByClassName("bl");
    for(let i=0;i<2;i++)
    bl[i].innerHTML=`${BottomLeft.value}`;
});
function copyProperties(){
  let copied = `border-top-left-radius : ${TopLeft.value}px;\nborder-top-right-radius: ${TopRight.value}px;\nborder-bottom-right-radius : ${BottomRight.value}px; \nborder-bottom-left-radius : ${BottomLeft.value}px;`;
  console.log(copied);
  navigator.clipboard.writeText(copied);
}