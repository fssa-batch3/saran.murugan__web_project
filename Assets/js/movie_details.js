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
                a.innerText="Book your tickets";
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
                let castandcrew=document.querySelector(".castandcrew")

                let cast_head=document.querySelector(".cast_head")
                castandcrew.prepend(cast_head);

                let cast_head_text=document.createElement("h1")
                cast_head_text.innerText="cast";
                cast_head.prepend(cast_head_text);

                let cast1=document.querySelector(".cast")
                castandcrew.append("cast1");

                let casteh=document.querySelectorAll(".casteh")
                cast1.prepend(casteh)
        
               
                let cast_image1 = document.createElement("img");
                cast_image1.setAttribute("src",res["images"]["cast1_image"]);
                cast_image1.setAttribute("alt", "image_placeholder");
                casteh[0].prepend(cast_image1);

                let cast_image2 = document.createElement("img");
                cast_image2.setAttribute("src",res["images"]["cast2_image"]);
                cast_image2.setAttribute("alt", "image_placeholder");
                casteh[1].append(cast_image2);
               
                let cast_image3 = document.createElement("img");
                cast_image3.setAttribute("src",res["images"]["cast3_image"]);
                cast_image3.setAttribute("alt", "image_placeholder");
                casteh[2].append(cast_image3);

                let cast_image4 = document.createElement("img");
                cast_image4.setAttribute("src",res["images"]["cast4_image"]);
                cast_image4.setAttribute("alt", "image_placeholder");
                casteh[3].append(cast_image4);

            
                let cast_name1=document.createElement("h2")
                cast_name1.innerText=res["name"]["cast1_name"]
                casteh[0].append(cast_name1);

                let cast_name2=document.createElement("h2")
                cast_name2.innerText=res["name"]["cast2_name"]
                casteh[1].append(cast_name2);

                let cast_name3=document.createElement("h2")
                cast_name3.innerText=res["name"]["cast3_name"]
                casteh[2].append(cast_name3);

                let cast_name4=document.createElement("h2")
                cast_name4.innerText=res["name"]["cast4_name"]
                casteh[3].append(cast_name4);



                let cast_category=document.createElement("p")
                cast_category.innerText= "Actor";
                casteh[0].append(cast_category);
                
                let cast_category2=document.createElement("p")
                cast_category2.innerText="Actor";
                casteh[1].append(cast_category2);

                
                let cast_category3=document.createElement("p")
                cast_category3.innerText="Actor";
                casteh[2].append(cast_category3);

                let cast_category4=document.createElement("p")
                cast_category4.innerText="Actor";
                casteh[3].append(cast_category4);
    


                let crew_head=document.querySelector(".crew_head")
            
                
                let crew_head_text=document.createElement("h1")
                crew_head_text.innerText="crew";
                crew_head.prepend(crew_head_text);


                 let crew=document.querySelector(".crew")
                 castandcrew.append(crew);

                 let creweh=document.querySelectorAll(".creweh")
                 crew.prepend(creweh);


                 let crew_image1 = document.createElement("img");
                crew_image1.setAttribute("src",res["images"]["director_image"]);
                crew_image1.setAttribute("alt", "image_placeholder");
                creweh[0].prepend(crew_image1);

                let crew_image2 = document.createElement("img");
                crew_image2.setAttribute("src",res["images"]["music_director_image"]);
                crew_image2.setAttribute("alt", "image_placeholder");
                creweh[1].append(crew_image2);
               
                let crew_image3 = document.createElement("img");
                crew_image3.setAttribute("src",res["images"]["producer_image"]);
                crew_image3.setAttribute("alt", "image_placeholder");
                creweh[2].append(crew_image3);

            
                let crew_name1=document.createElement("h2")
                crew_name1.innerText=res["name"]["director_name"]
                creweh[0].append(crew_name1);

                let crew_name2=document.createElement("h2")
                crew_name2.innerText=res["name"]["music_director_name"]
                creweh[1].append(crew_name2);

                let crew_name3=document.createElement("h2")
                crew_name3.innerText=res["name"]["producer_name"]
                creweh[2].append(crew_name3);

                let crew_category=document.createElement("p")
                crew_category.innerText="Director" 
                creweh[0].append(crew_category);
                
                let crew_category2=document.createElement("p")
                crew_category2.innerText="Music Director";
                creweh[1].append(crew_category2);


                
                let crew_category3=document.createElement("p")
                crew_category3.innerText="Producer";
                creweh[2].append(crew_category3);

              
            
                
                console.log(mainimg);
                console.log(content);