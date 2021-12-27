				

				function flexStyle(flexstyle){

			        var flexstyle = flexstyle;
			        //flexstyle.style.alignItems = "center";
			        flexstyle.style.display = "flex";
			        flexstyle.style.textAlign = "center";  
			        flexstyle.style.justifyContent = "center";        
			        flexstyle.style.flexDirection = "column"; 
			    } 

				//------Header Section------
				function header(){

					var headerDiv = document.createElement("DIV");
				   headerDiv.style.width = "100%";
				   headerDiv.style.height = "100vh";
				    flexStyle(headerDiv);

				   //======= for header image==============
			     //  var headerImg = document.createElement("img");
				  //  headerImg.src = "images/Profile.png";
				 //   headerImg.width = "300";
					


				   //======= for header content==============
				   var headerTitle = document.createElement("p");	
				   headerTitle.innerHTML = "<h1>Welcome to the portfolio</h1>";
				   headerTitle.innerHTML = "<img width='300px' src='images/Profile.png'>";				   
				   headerTitle.style.color = "#fff";
				   headerTitle.style.fontFamily = "Rubik";

				    //======= for header title==============
				   var headerName = document.createElement("DIV");	
				   headerName.innerHTML = "<h3>Hello</h3><h1>I'm <span style='color:#64b9ef; border-bottom:1px solid #64b9ef;'>Rahul Gaur</span></h1>";	
				   headerName.style.color = "#fff";
				   headerName.style.letterSpacing = "2px";
				   headerName.style.fontFamily = "Rubik";

				     //======= for header description==============
				   var headerDes = document.createElement("p");	
				   headerDes.innerHTML = "<p>Front-End Developer</p>";
				   headerDes.style.color = "#fff";	
				  	headerDes.style.fontFamily = "calibri";

					//======= for header hire button==============
				    var headerBut = document.createElement("a");  
				    headerBut.innerHTML = "<a style='border:1px solid #64b9ef; padding:10px 35px 10px 35px;'>HIRE ME</a>";
				    headerBut.style.color = "#64b9ef";
				    headerBut.style.display = "inline-block";
				    headerBut.style.fontSize = "15px";
				    headerBut.style.padding = "10px 35px 10px 35px";
				    headerBut.style.fontFamily = "calibri";


								   
				   headerDiv.appendChild(headerTitle);
				 //  headerDiv.appendChild(headerImg);
				   headerDiv.appendChild(headerName);
				   headerDiv.appendChild(headerDes);
				   headerDiv.appendChild(headerBut);	
 					document.body.appendChild(headerDiv);
	
					 
				}

			  