function Ax(){
    
    var rollbut = document.querySelector('#rollbut'); 
    var rollmn =  document.getElementById('roll');

    const RollIt = () => {
   

        if(rollmn.style.display == "flex"){

           
            rollmn.style.transition = "height 400ms, opacity 300ms"
            rollmn.style.opacity = "0";
            rollmn.style.height = "0em";
          
            setTimeout(() => {
              
                rollmn.style.display = "none";
            }, 500);

        }
        else{
            rollmn.style.display = "flex";
            rollmn.style.transition = "height 400ms, opacity 600ms"
            setTimeout(() => {
                rollmn.style.height = "30em";
                rollmn.style.opacity = "1";
            }, 300);
            
        }



        const AntiResize = () => {
            if(rollmn.style.display == "flex"){

           
                rollmn.style.transition = "height 400ms, opacity 300ms"
                rollmn.style.opacity = "0";
                rollmn.style.height = "0em";
              
                setTimeout(() => {
                  
                    rollmn.style.display = "none";
                }, 500);
    
            }
            else{
                
            }
        }
        
        window.addEventListener('resize',AntiResize)
            
    }

    rollbut.addEventListener('click',RollIt)

}
window.onload(Ax());

