const name_list= JSON.parse(localStorage.getItem("show_movie_details"));

        const url = window.location.search;                // ?name=Arun
        const urlParams = new URLSearchParams(url);    //"name":"ponniyinselvan"    // converting string into key value pair
        const username = urlParams.get("name")             // return value of the "name" key
        console.log(username);
        

        // Array.find(  function(variableName){} )
        // const user = name_list.find(
        //         function (userObj) {  //   userObj = {name : "Bala", "image": {}, "text": ""}

        //                 const name = userObj["name"];

        //                 // username = "Bala"
        //                 // name =     "Bala"
        //                 if (username === name) {
        //                         return true;
        //                 } else {
        //                         return false;
        //                 }

        //         }
        // )
        let res;
        name_list.find(function (e){
            if (e["name"]["movie_name"] == username) { //arr[0],arr[1]  =e
                return res = e;
            }
            else {
                return res = 0;
            }
        })

        // if (res) {
        //     console.log(res);

        // }
        // else {
        //     console.log("not found")
        // }

            
                
                let mainimg=document.querySelector(".mainimg");
                mainimg.style.backgroundImage=res["images"]["background_image"];
                let time=document.createElement("div")
                time.setAttribute("class","time")
                mainimg.prepend(time);
                let heading1=document.createElement("h2")
                heading1.innerText=res["name"]["movie_name"];
                time.append(heading1)
                let lan=document.createElement("div")
                lan.setAttribute("class","lan")
                time.append(lan);
                let language=document.createElement("h3")
                language.innerText="Tamil";
                lan.append(language);
                let frame=document.createElement("h3")
                frame.innerText="2D";
                lan.append(frame);

                let time_and_date=document.createElement("div");
                 time_and_date.setAttribute("class","time_date")
                  time.append(time_and_date);
                let movie_time=document.createElement("p")
                movie_time.innerText=res["movie_time"];
                time_and_date.append(movie_time);

                let movie_certified=document.createElement("p");
                movie_certified.innerText=res["movie_certified"];
                time_and_date.append(movie_certified);

                let movie_release_date=document.createElement("p");
                movie_release_date.innerText=res["movie_release_date"];
                time_and_date.append(movie_release_date);
                let movie_type=document.createElement("h4")
                movie_type.innerText=res["movie_type"];
                time.append(movie_type)   

                let book_button=document.createElement("button")
                // book_button.innerText="book_button";
                time.append(book_button);

                 let a = document.createElement("a");
                //  url.html?key=value&key=value
                a.setAttribute("href", "movie_show_time.html?name=" + res["name"]["movie_name"]);
                a.innerText="Book tickets";
                book_button.append(a);

                let content=document.querySelector(".content");

                let about_movie=document.createElement("div");
                about_movie.setAttribute("class","aboutmovie")
                content.prepend(about_movie);
                let about_head=document.createElement("h2")
                about_head.innerText="About movie";
                about_movie.prepend(about_head);

                let about_text=document.createElement("p")
                about_text.innerText=res["Description"]
                about_movie.append(about_text);


                // let cast_head=document.createElement("h1")
                // // cast_head.innerText=res["cast_heading"]
                // // about_movie.append(cast_head);
                let castandcrew=document.querySelector(".cast")

                let cast_head=document.querySelector(".cast_head")
                castandcrew.prepend(cast_head);

                let cast_head_text=document.createElement("h1")
                cast_head_text.innerText="cast";
                cast_head_text.setAttribute("class","cast_head")
                cast_head.prepend(cast_head_text);

                let cast_div=document.querySelector(".cast-main-dev");
               

                // let casteh=document.querySelector(".cast-main-dev")
                // cast1.prepend(casteh)


                 console.log(res);

                 for(i=0; i< res["images"]["cast_image"].length; i++){
   
                    
                let cast=document.createElement("div");
                cast.setAttribute("class","cast_div")
                cast_div.append(cast);

                 let cast_images=document.createElement("img");
                 cast_images.setAttribute("src",res["images"]["cast_image"][i]);
                 cast_images.setAttribute("class","cast_images")
                 cast.append(cast_images);
 
                 let cast_name= document.createElement("h2");
                 cast_name.innerText=res["name"]["cast_name"][i];
                 cast_name.setAttribute("class","cast_names")
                 cast_name.setAttribute("class","cast")
                 cast.append(cast_name);

                 let cast_role=document.createElement("h4");
                 cast_role.innerText=res["name"]["cast_role"][i];
                 cast_role.setAttribute("class","cast_role");
                 cast_role.setAttribute("class","cast")
                 cast.append(cast_role);
                }


                let crew_head=document.querySelector(".crew_head")
                

                let crew_head_text=document.createElement("h1")
                crew_head_text.innerText="crew";
                crew_head_text.setAttribute("class","crew_head")
                crew_head.prepend(crew_head_text);

                let crew_div=document.querySelector(".crew-main-dev");
                 
                

                for(i=0; i< res["images"]["crew_image"].length; i++){
   
                    
                let crew=document.createElement("div");
                crew.setAttribute("class","crew_div")
                crew_div.append(crew);

                 let crew_images=document.createElement("img");
                 crew_images.setAttribute("src",res["images"]["crew_image"][i]);
                 crew_images.setAttribute("class","crew_images")
                 crew.append(crew_images);
 
                 let crew_name= document.createElement("h2");
                 crew_name.innerText=res["name"]["crew_name"][i];
                 crew_name.setAttribute("class","crew_names")
                 crew_name.setAttribute("class","crew")
                 crew.append(crew_name);

                 let crew_role=document.createElement("h4");
                 crew_role.innerText=res["name"]["crew_role"][i];
                 crew_role.setAttribute("class","crew_role");
                 crew_role.setAttribute("class","crew")
                 crew.append(crew_role);
                }
