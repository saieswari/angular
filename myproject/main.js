// var myCat={
//     "name":["kitty","meow","hahhahaha"],
//     "species":"cat",
//     "favFood":"salmon"
// }
// myCat.favFood;

// var thePet=[
//  { "name":"ji chang wook",
//  "species":"cat",
//  "favFood":"salmon"
// },
//  { "name":"lee jong suk",
//  "species":"dog",
//  "favFood":"hot dog"
// },
//  {"name":"lee min hoo",
//  "species":"tiger",
//  "favFood":"human"
// }
// ];
var pagecounter=1;
var animal= document.getElementById("animal-info");
var btn=document.getElementById("btn");
document.getElementById("btn").addEventListener("click",function(){

    var xhr= new XMLHttpRequest();
    xhr.open('get','https://learnwebcode.github.io/json-example/animals-'+pagecounter+'.json',true);
    xhr.onload=function(){
    var data=JSON.parse(xhr.responseText);
    renderHTML(data);
    }
    
    xhr.send();
pagecounter++;
if(pagecounter>3){
    btn.classList.add("hide-me");

}
});

function renderHTML(mydata){
    var htmlString="";
    for(let i=0;i<mydata.length;i++){
        htmlString+="<p>"+mydata[i].name +" is a"+" "+mydata[i].species+" that likes to eat"+" ";     
        for(let j=0;j<mydata[i].foods.likes.length;j++){
            htmlString+=mydata[i].foods.likes[j]+" ";
        }
        htmlString+= ' and dislikes'+" ";
        for(let j=0;j<mydata[i].foods.dislikes.length;j++){
            htmlString+=mydata[i].foods.dislikes[j]+" ";
        }

        htmlString+="</p>";
    }
    animal.insertAdjacentHTML('beforeend',htmlString);
}



// fill text JSON ,it contains bunch of json examples

















