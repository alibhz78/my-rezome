

let slider=()=>{
    let nav=document.getElementById("navication")
    let navbar=document.getElementById("navicationbar")
    let step1=document.querySelectorAll(".ulmenu>.limenu")
    let step2=document.querySelectorAll(".pesarmoshtarak")
    let step3=document.querySelectorAll(".ulresp>.liresp")
    for(let a=0;a<step1.length;a++ ){
        step1[a].dataset.gholi=a
        step1[a].onclick=function(){
            pesarha(this.dataset.gholi)


        }
    }
    //
    for(let a=0;a<step3.length;a++ ){
        step3[a].dataset.gholi=a
        step3[a].onclick=function(){
            pesarha(this.dataset.gholi)
            navbar.style.transform="translateX(100%)";
            nav.style.display="block"

        }
    }
    //
    for(let b=0;b<step2.length;b++ ){
        step2[b].style.display="none"
    }
    step2[0].style.display="block"
}
slider()
let pesarha=(a)=>{
    let step2=document.querySelectorAll(".pesarmoshtarak")
    for(let b=0;b<step2.length;b++ ){
        step2[b].style.display="none"
    }
    step2[a].style.display="block"
}
let nemonekar=()=>{
    let step2=document.querySelectorAll(".pesarmoshtarak")
    let ne=document.getElementById("nemonekar")

    ne.onclick=function(){
        for(let b=0;b<step2.length;b++ ){
            step2[b].style.display="none"
        }
        step2[2].style.display="block"
    }

}

nemonekar()
let navicat=()=>{
    let nav=document.getElementById("navication")
    let navbar=document.getElementById("navicationbar")
    nav.onclick=function(){
        nav.style.display="none"
        navbar.style.transform="translateX(0%)";
    }
}
navicat()

let close=()=>{
    let nav=document.getElementById("navication")
    let navbar=document.getElementById("navicationbar")
    let cl=document.getElementById("closeid")
    cl.onclick=function(){
        navbar.style.transform="translateX(100%)";
        nav.style.display="block"
    }
 }
close()
/*let abas=()=>{
    let navbar=document.getElementById("navicationbar")
    let step1=document.querySelectorAll(".ul1>.li1")
    for(let a=0;a<step1.length;a++){
        step1[a].onclick
    }


}*/
//
function ali() {
    let a = document.querySelectorAll(".icon");
    let b = document.getElementById("dir");
    for (let z = 0; z < a.length; z++) {
      a[z].dataset.gholi = z;
      a[z].onmouseover = () => {
        if (z == 1) {
          b.style.right = "31.5%";
        } else if (z == 2) {
          b.style.right = "56%";
        } else if (z == 3) {
          b.style.right = "81%";
        } else {
          b.style.right = "6%";
        }
        abas(z);
      };
      a[z].onclick = () => {
        if (z == 1) {
            alert("1")
        } else if (z == 2) {
            alert("2")
        } else if (z == 3) {
            alert("3")
        } else {
          window.location.assign("https://alibhzrezome.ir")
        }
        abas(z);
      };
    }
  }
  
  function abas(z) {
    let a = document.querySelectorAll(".icon");
    for (let c = 0; c < a.length; c++) {
      a[c].style.color = "black";
      a[c].style.fontsize = "2em";
    }
    a[z].style.color = "white";
    a[z].style.fontsize = "10em";
  }
  
  ali();

//
function slide(){
  var change=document.querySelectorAll(".divax")
  for(var b=0;b<=change.length;b++){
      change[b].style.opacity=.4;
      change[b].dataset.gholi=b;
      change[b].onmouseover=function(){
          slideer(this.dataset.gholi)
     }
     change[b].onmouseleave=function(){
          slider1(this.dataset.gholi)
     }
  }
}
slide()
function slideer(b){
  var change=document.querySelectorAll(".divax")
  for(var a=0;a<=change.length;a++){
      change[a].style.opacity=.4;
  change[b].style.opacity=1;
  }
      
}
function  slider1(b){
var change=document.querySelectorAll(".divax")
change[b].style.opacity=.4;
}
