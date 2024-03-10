var userImageLink = document.querySelector(".url").value;



			var time_start, end_time; 

			var downloadSize = 5616998; 
			var downloadImgSrc = new Image(); 


			time_start = new Date().getTime(); 
			downloadImgSrc.src = userImageLink; 
           
                    downloadImgSrc.onload=()=>{
                    end_time = new Date().getTime(); 
                    displaySpeed();  
                    }
            
                
            var btn=document.querySelector(".submit").addEventListener("click",
            ()=> {
                location.reload();
                });
                    
            
			function displaySpeed() { 
                if(userImageLink==""){
                    alert("Give a Valid URL");
                }
                else{
                    var timeDuration = (end_time - time_start) / 1000; 
                    var loadedBits = downloadSize * 8; 
                    
                    /* Converts a number into string 
                    using toFixed(2) rounding to 2 */
                    var bps = (loadedBits / timeDuration).toFixed(2); 
                    var speedInKbps = (bps / 1024).toFixed(2); 
                    var speedInMbps = (speedInKbps / 1024).toFixed(2); 
                    alert("Your internet connection speed is: \n"
                        + bps + " bps\n" + speedInKbps 
                        + " kbps\n" + speedInMbps + " Mbps\n"); 
                }
				
			} 
