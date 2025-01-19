var a=document.querySelector("h5")
var b=document.querySelector("#add")
var c=document.querySelector("#remove")
var d=document.querySelector("#images")
var e=document.querySelector("i")
var f=document.querySelector("#card")
var g=document.querySelector(".cursor")
var h=document.querySelector("body")
b.addEventListener("click" ,function(){
    a.innerHTML="friend"
    a.style.color="green"
})
c.addEventListener("click",function(){
    a.innerHTML="stranger"
    a.style.color="red"
})
let love=0
d.addEventListener("dblclick" ,function(){
    if(love==0){
        e.style.color="red"
        love=1
    }else{
        e.style.color="white"
        love=0
    }



})
f.addEventListener("mousemove",function(p){
    g.style.left=p.x+"px"
    g.style.top=p.y+"px"
})
h.addEventListener("mousemove",function(r){
    
    g.style.left=r.x+"px"
    g.style.top=r.y+"px"
    g.style.color="blue"
    
})
