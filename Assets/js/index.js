// function searchPages() {
    
//     let searchBar =document.getElementById("searchbar").value;

//     if ('movies' == searchBar) {
//         window.open('index.html')
//     } else if ('leo' == searchBar) {
//         window.open('pages/movie_details.html?name=Leo')
//     }

// }
const movie_lists =JSON.parse(localStorage.getItem("show_movie_details"));
  
movie_lists.filter(function (movie){
  if(movie.status && movie.language == "Tamil" ){



     let movie_list_items=document.createElement("div")
          movie_list_items.setAttribute("class","movie-list-item");

     let   main_image = document.createElement("img");
       main_image.setAttribute("class","movie-list-item-img");
       main_image.setAttribute("src",movie.images.main_image);
       movie_list_items.append(main_image);

     let   title = document.createElement("span");
       title.innerText = movie.name.movie_name;
       title.setAttribute("class","movie-list-item-title");
       movie_list_items.append(title);

    let   description = document.createElement("p");
       description.innerText = movie.Description;
       description.setAttribute("class","movie-list-item-desc");
       movie_list_items.append(description);

    let movie_button=document.createElement("button");
      //  movie_button.innerText="book now";
       movie_button.setAttribute("class","movie-list-item-button");
       movie_list_items.append(movie_button);


   let a = document.createElement("a");
       a.setAttribute("href", "./pages/movie_details.html?name=" +movie["name"]["movie_name"]);
       a.innerText="book now";
       movie_button.append(a);

       document.querySelector(".movie-list").append(movie_list_items);
    

      }
}) ;

movie_lists.filter(function (movie){
  if(movie.status && movie.language == "English" ){



     let movie_list_items=document.createElement("div")
          movie_list_items.setAttribute("class","movie-list-item");

     let   main_image = document.createElement("img");
       main_image.setAttribute("class","movie-list-item-img");
       main_image.setAttribute("src",movie.images.main_image);
       movie_list_items.append(main_image);

     let   title = document.createElement("span");
       title.innerText = movie.name.movie_name;
       title.setAttribute("class","movie-list-item-title");
       movie_list_items.append(title);

    let   description = document.createElement("p");
       description.innerText = movie.Description;
       description.setAttribute("class","movie-list-item-desc");
       movie_list_items.append(description);

    let movie_button=document.createElement("button");
      //  movie_button.innerText="book now";
       movie_button.setAttribute("class","movie-list-item-button");
       movie_list_items.append(movie_button);


   let a = document.createElement("a");
       a.setAttribute("href", "./pages/movie_details.html?name=" +movie["name"]["movie_name"]);
       a.innerText="book now";
       movie_button.append(a);

       document.querySelector(".movie-list").append(movie_list_items);
    

      }
}) ;

// const arrows = document.querySelectorAll(".arrow");
// const movieLists = document.querySelectorAll(".movie-list ");
  

// arrows.forEach((arrow, i) => {
//  let itemNumber = movieLists[i].querySelectorAll("img").length;
//  let clickCounter = 0;
// arrow.addEventListener("click" , () => {
//       clickCounter++;
//       if(itemNumber - ( 4 + clickCounter)>= 0){
//           movieLists[i].style.transform = `translateX(${
//       movieLists[i].computedStyleMap().get("transform")[0].x.value
//       -300}px)`;
//       }else{
//           movieLists[i].style.transform = "translateX(0)";
//           clickCounter = 0;
//       }
    
// });
// console.log(movieLists[i].querySelectorAll("img").length);
// });



// // movie_lists.filter(function (movie){
// //   if(movie.status && movie.language == "English"){



// //      let movie_list_items=document.createElement("div")
// //           movie_list_items.setAttribute("class","movie-list-item2");

// //      let   main_image = document.createElement("img");
// //        main_image.setAttribute("class","movie-list-item-img2");
// //        main_image.setAttribute("src",movie.images.main_image);
// //        movie_list_items.append(main_image);

// //      let   title = document.createElement("span");
// //        title.innerText = movie.name.movie_name;
// //        title.setAttribute("class","movie-list-item-title2");
// //        movie_list_items.append(title);

// //     let   description = document.createElement("p");
// //        description.innerText = movie.Description;
// //        description.setAttribute("class","movie-list-item-desc2");
// //        movie_list_items.append(description);

// //     let movie_button=document.createElement("button");
// //       //  movie_button.innerText="book now";
// //        movie_button.setAttribute("class","movie-list-item-button2");
// //        movie_list_items.append(movie_button);


// //    let a = document.createElement("a");
// //        a.setAttribute("href", "./pages/movie_details.html?name=" +movie["name"]["movie_name"]);
// //        a.innerText="book now";
// //        movie_button.append(a);

// //        document.querySelector(".movie-list2").append(movie_list_items);
    

//       }
//       if(movie.status && movie.language == "Telugu"){
//         let movie_list_items=document.createElement("div")
//           movie_list_items.setAttribute("class","movie-list-item2");

//      let   main_image = document.createElement("img");
//        main_image.setAttribute("class","movie-list-item-img2");
//        main_image.setAttribute("src",movie.images.main_image);
//        movie_list_items.append(main_image);

//      let   title = document.createElement("span");
//        title.innerText = movie.name.movie_name;
//        title.setAttribute("class","movie-list-item-title2");
//        movie_list_items.append(title);

//     let   description = document.createElement("p");
//        description.innerText = movie.Description;
//        description.setAttribute("class","movie-list-item-desc2");
//        movie_list_items.append(description);

//     let movie_button=document.createElement("button");
//       //  movie_button.innerText="book now";
//        movie_button.setAttribute("class","movie-list-item-button2");
//        movie_list_items.append(movie_button);


//    let a = document.createElement("a");
//        a.setAttribute("href", "./pages/movie_details.html?name=" +movie["name"]["movie_name"]);
//        a.innerText="book now";
//        movie_button.append(a);

//        document.querySelector(".movie-list2").append(movie_list_items);
//       }

 
// if(movie.status && movie.language == "Kanada"){
//     let movie_list_items=document.createElement("div")
//       movie_list_items.setAttribute("class","movie-list-item2");

//  let   main_image = document.createElement("img");
//    main_image.setAttribute("class","movie-list-item-img2");
//    main_image.setAttribute("src",movie.images.main_image);
//    movie_list_items.append(main_image);

//  let   title = document.createElement("span");
//    title.innerText = movie.name.movie_name;
//    title.setAttribute("class","movie-list-item-title2");
//    movie_list_items.append(title);

// let   description = document.createElement("p");
//    description.innerText = movie.Description;
//    description.setAttribute("class","movie-list-item-desc2");
//    movie_list_items.append(description);

// let movie_button=document.createElement("button");
//   //  movie_button.innerText="book now";
//    movie_button.setAttribute("class","movie-list-item-button2");
//    movie_list_items.append(movie_button);


// let a = document.createElement("a");
//    a.setAttribute("href", "./pages/movie_details.html?name=" +movie["name"]["movie_name"]);
//    a.innerText="book now";
//    movie_button.append(a);

//    document.querySelector(".movie-list2").append(movie_list_items);
//   }



const arrows2 = document.querySelectorAll(".arrow2");
const movieLists2 = document.querySelectorAll(".movie-list2");
  

arrows2.forEach((arrow, i) => {
 let itemNumber = movieLists2[i].querySelectorAll("img").length;

 let clickCounter = 0;
arrow.addEventListener("click" , () => {
      clickCounter++;

      if(itemNumber - ( 4 + clickCounter)>= 0){
          movieLists2[i].style.transform = `translateX(${
      movieLists2[i].computedStyleMap().get("transform")[0].x.value
      -300}px)`;
      }
      else{
          movieLists2[i].style.transform = "translateX(0)";
          clickCounter = 0;
      }
    
});
console.log(movieLists2[i].querySelectorAll("img").length);
});



if(JSON.parse(localStorage.getItem("show_movie_details"))){

}
else{
  
}