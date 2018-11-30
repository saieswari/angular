        var cvs= document.getElementById("canvas");
      
        var ctx= cvs.getContext("2d");
        var gap=75;
        var bX=0;
        var bY=100;
       var gravity=0.5;
alert(cvs.width);
        var flappy=new Image();
        var back=new Image();
        var fg= new Image();
        var pipeNorth=new Image();
        var pipeSouth=new Image();
        flappy.src="bubble.jpg";
        back.src="back.png";
        fg.src="fg.png";
        pipeNorth.src="pipeSouth.png";
        pipeSouth.src="pipeNorth.png";
        var constant= pipeNorth.height+gap;
        var pipe=[];
        pipe[0]={
           x:50,
           y:0
        }
      
     
      document.addEventListener("keydown",moveUp);
           function moveUp(){
                   
              bY=bY-10;
              
           }
     
        function draw(){
            


              
                console.log(bY);
                ctx.drawImage(back,0,0);
                //ctx.drawImage(pipeNorth,100,0,50,200);
            
                //ctx.drawImage(pipeSouth,100,0+constant+250,50,100);
                ctx.drawImage(flappy,bX,bY,60,60);
                bY+=gravity;
               
                ctx.drawImage(fg,0,400);
            
         
           for(var i=0;i<pipe.length;i++){
              ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y,50,200);
              ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant+250,50,100);

              pipe[i].x--;

               if(pipe[i].x==cvs.width-188){

                  pipe.push(
                     x=cvs.width,
                     y=Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height

                  );
               }



           }
           
         //   ctx.drawImage(pipeSouth,pX,pY);
         //   ctx.drawImage(pipeNorth,pX,pY+Const);
         //   ctx.drawImage(fg,0,cvs.height-fg.height);
         //   ctx.drawImage(flappy,bX,bY);

         //     bY+= gravity;

           //requestAnimationFrame(draw);
         
        }
        draw();