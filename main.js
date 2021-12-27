<<<<<<< HEAD
			//------Main Section------
		function main(){

				//------Main Div Section------
				var mainDiv = document.createElement("DIV");
				   mainDiv.style.width = "100%";
				   mainDiv.style.height = "500px";
				   mainDiv.style.backgroundColor = "#64b9ef";
				   flexStyle(mainDiv);
				
				//------Main Title Section------  
				  var aboutMe = document.createElement("h2");
				  	aboutMe.innerHTML = "<h1>About Me</h1>";
				  	aboutMe.style.fontFamily = "calibri";
				  	flexStyle(aboutMe);

				  	//------Main paragarph Section------  
				  var aboutPara = document.createElement("p");
				  	aboutPara.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
				  	aboutPara.style.fontFamily = "arial";
				  	aboutPara.style.fontSize = "16px";
				  	aboutPara.style.color = "#fff";
				  	
				  	//======= for know more button==============
				    var mainBut = document.createElement("a");  
				    mainBut.innerHTML = "<a href='https://www.linkedin.com/in/rahulgaur7895/' style='border:1.5px solid #242322; padding:10px 35px 10px 35px; text-decoration:none; color:#242322;'>Check out LinkedIn</a>";
				    mainBut.style.color = "#fff";
				    mainBut.style.fontSize = "20px";
				    mainBut.style.padding = "10px 35px 10px 35px";
				    mainBut.style.fontFamily = "calibri";
				    mainBut.style.marginTop = "50px";

				  


				  	mainDiv.appendChild(aboutMe);
				  	mainDiv.appendChild(aboutPara);
				  	mainDiv.appendChild(mainBut);
 					document.body.appendChild(mainDiv);
			}

=======
			//------Main Section------
		function main(){

				//------Main Div Section------
				var mainDiv = document.createElement("DIV");
				   mainDiv.style.width = "100%";
				   mainDiv.style.height = "500px";
				   mainDiv.style.backgroundColor = "#64b9ef";
				   flexStyle(mainDiv);
				
				//------Main Title Section------  
				  var aboutMe = document.createElement("h2");
				  	aboutMe.innerHTML = "<h1>About Me</h1>";
				  	aboutMe.style.fontFamily = "calibri";
				  	flexStyle(aboutMe);

				  	//------Main paragarph Section------  
				  var aboutPara = document.createElement("p");
				  	aboutPara.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
				  	aboutPara.style.fontFamily = "arial";
				  	aboutPara.style.fontSize = "16px";
				  	aboutPara.style.color = "#fff";
				  	
				  	//======= for know more button==============
				    var mainBut = document.createElement("a");  
				    mainBut.innerHTML = "<a href='https://www.linkedin.com/in/rahulgaur7895/' style='border:1.5px solid #242322; padding:10px 35px 10px 35px; text-decoration:none; color:#242322;'>Check out LinkedIn</a>";
				    mainBut.style.color = "#fff";
				    mainBut.style.fontSize = "20px";
				    mainBut.style.padding = "10px 35px 10px 35px";
				    mainBut.style.fontFamily = "calibri";
				    mainBut.style.marginTop = "50px";

				  


				  	mainDiv.appendChild(aboutMe);
				  	mainDiv.appendChild(aboutPara);
				  	mainDiv.appendChild(mainBut);
 					document.body.appendChild(mainDiv);
			}

>>>>>>> 8030e24442e6a1d4d0a633005207bd811b88c1ec
