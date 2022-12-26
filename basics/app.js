var pics = [
    "imgs/cat1.jpg",
    "imgs/kedi1.jpg",
    "imgs/kedi2.jpg",
    "imgs/kedi3.jpg"
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var index = 1;


btn.addEventListener("click", function(){
    
    if(index === 4){
        index = 0;
    }

    img.src= pics[index];
    index++;
});