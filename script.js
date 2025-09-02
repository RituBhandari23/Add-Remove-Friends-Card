var stranger=document.querySelector("h5")
var btn=document.querySelector("#add")
var check=0

btn.addEventListener("click",function(){
    if(check==0){
        stranger.innerHTML="Friend"
        stranger.style.color="green"
        btn.innerHTML="Remove Friends"
        check=1
    }
    else{
        stranger.innerHTML="Stranger"
        stranger.style.color="red"
        btn.innerHTML="Add Friends"
        check=0
    }
})
