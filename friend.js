var i=0;
var button=document.getElementsByClassName("next");
button[0].addEventListener('click',function(){
    i++;
    if(i<=9)
    {
        if (i===1) {
            document.querySelector("p").innerHTML="Priyanka💖";
        }
        else if (i===2) {
            document.querySelector("p").innerHTML="Vyshu💗";
        }
        else if (i===3) {
            document.querySelector("p").innerHTML="Sindhusha";
        }
        else if (i===4) {
            document.querySelector("p").innerHTML="Kavya";
        }
        else if (i===5) {
            document.querySelector("p").innerHTML="Divya";
        }
        else if (i===6) {
            document.querySelector("p").innerHTML="Nikki";
        }
        else if (i===7) {
            document.querySelector("p").innerHTML="Saranya";
        }
        else if (i===8) {
            document.querySelector("p").innerHTML="Satwika";
        }
        else if(i==9)
        document.querySelector("p").innerHTML="my gangsters";
        // var randomFriendImage="friend"+randomNumber+".jpg";
        // var randomImageSource="images/"+randomFriendImage;
        // var image= document.querySelectorAll("img")[0];
        // image.setAttribute("src",randomImageSource);

        let p="images/friend"+i+".JPG";
        let img=document.getElementsByClassName("img");
        img[0].setAttribute("src",p);
    }
    
});