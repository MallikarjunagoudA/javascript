var a =document.querySelector(".a");
var b =document.querySelector(".b");
var c =document.querySelector(".c");
var z =document.querySelector(".z");
var e =document.querySelector(".e");
var f =document.querySelector(".f");

// console.log(window.getComputedStyle(a));
// console.log(window.getComputedStyle(a).background);
// console.log(window.getComputedStyle(a).backgroundColor);

const getRGB = (selectedEle) =>{
  return window.getComputedStyle(selectedEle).backgroundColor;
}

var aa =getRGB(b);
console.log(aa);

console.log(getRGB(b));

a.addEventListener("mouseenter", () =>{
    z.style.backgroundColor =aa;
})

const rgbColor =(element,color,event) =>{
    element.addEventListener(event,() =>{
        z.style.backgroundColor =color;
    })
}

rgbColor(a,getRGB(a),"mouseenter");
rgbColor(b,getRGB(b),"mouseenter");
rgbColor(c,getRGB(c),"mouseenter");
rgbColor(e,getRGB(e),"mouseenter");
