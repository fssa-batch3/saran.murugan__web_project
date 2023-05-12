// function searchPages() {

//     let searchBar =document.getElementById("searchbar").value;

//     if ('movies' == searchBar) {
//         window.open('index.html')
//     } else if ('leo' == searchBar) {
//         window.open('pages/movie_details.html?name=Leo')
//     }

// }
  


 
const movie_lists = JSON.parse(localStorage.getItem("show_movie_details"));

movie_lists.filter(function (movie) {
  if (movie.status && movie.language == "TAMIL"&&  movie.movie_releasing == "true"  ) {



    let movie_list_items = document.createElement("div")
    movie_list_items.setAttribute("class", "movie-list-item");
  

    let main_image = document.createElement("img");
    main_image.setAttribute("class", "movie-list-item-img");
    main_image.setAttribute("src", movie.images.main_image);
    movie_list_items.append(main_image);

    let title = document.createElement("span");
    title.innerText = movie.name.movie_name;
    title.setAttribute("class", "movie-list-item-title");
    movie_list_items.append(title);

    let description = document.createElement("p");
    description.innerText = movie.Description;
    description.setAttribute("class", "movie-list-item-desc");
    movie_list_items.append(description);

    let movie_button = document.createElement("button");
    //  movie_button.innerText="book now";
    movie_button.setAttribute("class", "movie-list-item-button");
    movie_list_items.append(movie_button);


    let a = document.createElement("a");
    a.setAttribute("href", "./pages/movie_details.html?name=" + movie["name"]["movie_name"]);
    a.innerText = "book now";
    movie_button.append(a);

    document.querySelector(".movie-list").append(movie_list_items);


  }
});

movie_lists.filter(function (movie) {
  if (movie.status && movie.language == "ENGLISH") {



    let movie_list_items = document.createElement("div")
    movie_list_items.setAttribute("class", "movie-list-item");

    let main_image = document.createElement("img");
    main_image.setAttribute("class", "movie-list-item-img");
    main_image.setAttribute("src", movie.images.main_image);
    movie_list_items.append(main_image);

    let title = document.createElement("span");
    title.innerText = movie.name.movie_name;
    title.setAttribute("class", "movie-list-item-title");
    movie_list_items.append(title);

    let description = document.createElement("p");
    description.innerText = movie.Description;
    description.setAttribute("class", "movie-list-item-desc");
    movie_list_items.append(description);

    let movie_button = document.createElement("button");
    //  movie_button.innerText="book now";
    movie_button.setAttribute("class", "movie-list-item-button");
    movie_list_items.append(movie_button);


    let a = document.createElement("a");
    a.setAttribute("href", "./pages/movie_details.html?name=" + movie["name"]["movie_name"]);
    a.innerText = "book now";
    movie_button.append(a);

    document.querySelector(".movie-list").append(movie_list_items);


  }
});

movie_lists.filter(function (movie) {

  if(movie.status && movie.language == "TELUGU"  ){
    
    let movie_list_items = document.createElement("div")
    movie_list_items.setAttribute("class", "movie-list-item");

    let main_image = document.createElement("img");
    main_image.setAttribute("class", "movie-list-item-img");
    main_image.setAttribute("src", movie.images.main_image);
    movie_list_items.append(main_image);

    let title = document.createElement("span");
    title.innerText = movie.name.movie_name;
    title.setAttribute("class", "movie-list-item-title");
    movie_list_items.append(title);

    let description = document.createElement("p");
    description.innerText = movie.Description;
    description.setAttribute("class", "movie-list-item-desc");
    movie_list_items.append(description);

    let movie_button = document.createElement("button");
    //  movie_button.innerText="book now";
    movie_button.setAttribute("class", "movie-list-item-button");
    movie_list_items.append(movie_button);


    let a = document.createElement("a");
    a.setAttribute("href", "./pages/movie_details.html?name=" + movie["name"]["movie_name"]);
    a.innerText = "book now";
    movie_button.append(a);

    document.querySelector(".movie-list").append(movie_list_items);

};
});

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



movie_lists.filter(function (movie){
  if(movie.status && movie.language == "hindi"){



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
  } );


  movie_lists.filter(function (movie){
if(movie.status && movie.language == "Kanada" ){
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
  });


  movie_lists.filter(function (movie){
    if(movie.status && movie.language == "TAMIL"&& movie.movie_releasing=="false" ){
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
    
       document.querySelector(".movie-list2").append(movie_list_items);
      }
      });


  


// const arrows2 = document.querySelectorAll(".arrow2");
// const movieLists2 = document.querySelectorAll(".movie-list2");


// arrows2.forEach((arrow, i) => {
//   let itemNumber = movieLists2[i].querySelectorAll("img").length;

//   let clickCounter = 0;
//   arrow.addEventListener("click", () => {
//     clickCounter++;

//     if (itemNumber - (4 + clickCounter) >= 0) {
//       movieLists2[i].style.transform = `translateX(${movieLists2[i].computedStyleMap().get("transform")[0].x.value
//         - 300}px)`;
//     }
//     else {
//       movieLists2[i].style.transform = "translateX(0)";
//       clickCounter = 0;
//     }

//   });
//   console.log(movieLists2[i].querySelectorAll("img").length);
// });



// if (JSON.parse(localStorage.getItem("show_movie_details"))) {

// }
// else {
//   localStorage.setItem("show_movie_details", JSON.stringify(
//     [
//       {
//         "name":
//         {
//           "movie_name": "PONIYAN SELVAN -2",
//           "cast1_name": "VIKRAM",
//           "cast2_name": "KARTHI",
//           "cast3_name": "JAYAM RAVI",
//           "cast4_name": "TRISHA KRISHNAN",
//           "director_name": "MANI RATNAM",
//           "music_director_name": "A R RAHMAN",
//           "producer_name": "LYCA"
//         },
//         "images": {
//           "main_image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ponniyin-selvan--part-2-et00348725-1680776467.jpg",
//           "background_image": "url(https://static.toiimg.com/photo/99722979.jpeg)",
//           "cast1_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vikram-2474-16-09-2017-01-23-22.jpg",
//           "cast2_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/karthik-sivakumar-16841-24-03-2017-17-34-20.jpg",
//           "cast3_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jayam-ravi-5828-16-09-2017-03-41-40.jpg",
//           "cast4_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/trisha-krishnan-15856-18-09-2017-06-05-18.jpg",
//           "director_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/mani-ratnam-1351-20-09-2017-01-11-11.jpg",
//           "music_director_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/a_r_rahman_38.jpg",

//         },
//         "movie_time": "2H 44M",
//         "language": "Tamil",
//         "frame": "2D",
//         "movie_type": "ACTION,ADVENTURE,DRAMA",
//         "Description": "A plot to murder the king and the two princes of the Chola dynasty is underfoot. Can the Cholas survive the wrath of the Pandiya rebels, who are being led by the vengeful Nandhini?",
//         "status": true

//       },

//       {
//         "name": {
//           "movie_name": "VIDUTHALAI PART -1",
//           "cast1_name": "SOORI",
//           "cast2_name": "VIJAY SETHUPATHI",
//           "cast3_name": "BHAVANI SRE",
//           "cast4_name": "GAUTHAM MENON",
//           "director_name": "VETRIMAARAN",
//           "music_director_name": "ILAYARAJA",
//           "producer_name": "ELRED KUMAR"
//         },
//         "images": {
//           "main_image": "https://static.moviecrow.com/gallery/20220906/204565-vp1.jpg",
//           "background_image": "url(https://www.newsbricks.com/root_upld/general-news/2023/03/40830/org_88836202303031632.jpg)",
//           "cast1_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/soori-2201-24-03-2017-17-32-33.jpg",
//           "cast2_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vijay-sethupathi-32355-16-09-2017-03-30-38.jpg",
//           "cast3_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/bhavani-sre-2026588-1679073697.jpg",
//           "cast4_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/gautham-menon-2889-08-02-2022-03-33-26.jpg",
//           "director_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vetrimaaran-3991-24-03-2017-15-46-28.jpg",
//           "music_director_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ilaiyaraaja-846-24-03-2017-17-39-07.jpg",
//           "producer_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/elred-kumar-28523-24-03-2017-17-34-52.jpg"
//         },
//         "movie_time": "2H 30M",
//         "movie_certified": "A",
//         "movie_release_date": "MAR 31",
//         "language": "Tamil",
//         "movie_frame": "2D",
//         "movie_type": "ACTION,CRIME,DRAMA",
//         "Description": "Kumaresan, a newly recruited police constable is assigned to deliver food to police personnel posted in the `red` districts who are hunting for the most wanted terrorist, `Mentor` Perumal",
//         "status": true
//       },
//       {
//         "name":
//         {
//           "movie_name": "GUARDIANS OF THE GALAXY VOL.3",
//           "cast1_name": "CHRIS PRATT",
//           "cast2_name": "ZOE SALDANA",
//           "cast3_name": "DAVE BAUTISTA",
//           "cast4_name": "KAREN GILLAN",
//           "director_name": "JAMES GUNN",
//           "music_director_name": "JOHN MURPHY",
//           "producer_name": "KEVIN FEIGE"
//         },
//         "images": {
//           "main_image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/guardians-of-the-galaxy-vol-3-et00310794-1669967545.jpg",
//           "background_image": "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5B19A90041BF5AEF179F0E24A77E6B3EDBA3984AC344E2328BAFFF72B9E66025/scale?width=1200&aspectRatio=1.78&format=jpeg)",
//           "cast1_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/chris-pratt-12677-24-03-2017-12-35-43.jpg",
//           "cast2_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/zoe-saldana-3261-13-10-2017-03-54-34.jpg",
//           "cast3_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/dave-bautista-31034-24-03-2017-17-32-42.jpg",
//           "cast4_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/karen-gillan-1043536-1658911474.jpg",
//           "director_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/james-gunn-907-18-04-2017-16-21-51.jpg",
//           "producer_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kevin-feige-1092082-18-04-2018-14-44-54.jpg"
//         },
//         "movie_time": "2H 30MINS",
//         "language": "English",
//         "frame": "3D",
//         "movie_type": "ACTION,ADVENTURE,SCI-FI",
//         "Description": "Our beloved band of misfits are settling into life on Knowhere. But it isn`t long before their lives are upended by the echoes of Rocket`s turbulent past. Peter Quill, still reeling from the loss of Gamora, must rally his team around him on a dangerous mission ",
//         "status": true
//       },
//       {
//         "name":
//         {
//           "movie_name": "RUDHRAN",
//           "cast1_name": "RAGHAVENDRA LAWRENCE",
//           "cast2_name": "PRIYA BHAVANI SHAKER",
//           "cast3_name": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/nassar-8386-1657383113.jpg",
//           "cast4_name": "POORNIMA BHAGYARAJ",
//           "director_name": "KATHIRESAN",
//           "music_director_name": "G . V. PRAKASH",
//           "producer_name": "KATHRESAN"
//         },
//         "images": {
//           "main_image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/rudhran-et00333202-1664437269.jpg",
//           "background_image": "url(https://www.onlykollywood.com/wp-content/uploads/2023/04/Rudhran-Lawrence-780x390.jpg)",
//           "cast1_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/raghavendra-lawrence-5258-1664524558.jpg",
//           "cast2_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/priya-bhavani-shankar-1086843-16-10-2017-01-49-49.jpg",
//           "cast3_image": "NASSAR",
//           "cast4_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/poornima-bhagyaraj-36652-24-03-2017-17-40-02.jpg",
//           "director_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kathiresan-iein014701-24-03-2017-15-33-39.jpg",
//           "music_director_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/g-v-prakash-kumar-3973-15-02-2022-01-57-26.jpg",
//           "producer_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kathiresan-iein014701-24-03-2017-15-33-39.jpg"
//         },
//         "movie_time": "2H 29MINS",
//         "movie_certified": "undefined",
//         "movie_release_date": "undefined",
//         "language": "Tamil",
//         "movie_frame": "undefined",
//         "movie_type": "ACTION, DRAMA",
//         "Description": "Rudhran`s life is turned upside down when a major criminal network involving a businessman named Bhoomi rose to power. He embarks on a mission to expose the criminal network.",
//         "status": true
//       }
//     ]
//   ))
// };



