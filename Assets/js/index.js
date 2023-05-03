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
  if (movie.status && movie.language == "Tamil") {



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
  if (movie.status && movie.language == "English") {



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
  arrow.addEventListener("click", () => {
    clickCounter++;

    if (itemNumber - (4 + clickCounter) >= 0) {
      movieLists2[i].style.transform = `translateX(${movieLists2[i].computedStyleMap().get("transform")[0].x.value
        - 300}px)`;
    }
    else {
      movieLists2[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }

  });
  console.log(movieLists2[i].querySelectorAll("img").length);
});



if (JSON.parse(localStorage.getItem("show_movie_details"))) {

}
else {
  localStorage.setItem("show_movie_details", JSON.stringify(
    [
      {
        "name":
        {
          "movie_name": "PONIYAN SELVAN -2",
          "cast1_name": "VIKRAM",
          "cast2_name": "KARTHI",
          "cast3_name": "JAYAM RAVI",
          "cast4_name": "TRISHA KRISHNAN",
          "director_name": "MANI RATNAM",
          "music_director_name": "A R RAHMAN",
          "producer_name": "LYCA"
        },
        "images": {
          "main_image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ponniyin-selvan--part-2-et00348725-1680776467.jpg",
          "background_image": "url(https://static.toiimg.com/photo/99722979.jpeg)",
          "cast1_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vikram-2474-16-09-2017-01-23-22.jpg",
          "cast2_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/karthik-sivakumar-16841-24-03-2017-17-34-20.jpg",
          "cast3_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jayam-ravi-5828-16-09-2017-03-41-40.jpg",
          "cast4_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/trisha-krishnan-15856-18-09-2017-06-05-18.jpg",
          "director_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/mani-ratnam-1351-20-09-2017-01-11-11.jpg",
          "music_director_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/a_r_rahman_38.jpg",
          "producer_image": "data:image/jpeg;base64,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"
        },
        "movie_time": "2H 44M",
        "language": "Tamil",
        "frame": "2D",
        "movie_type": "ACTION,ADVENTURE,DRAMA",
        "Description": "A plot to murder the king and the two princes of the Chola dynasty is underfoot. Can the Cholas survive the wrath of the Pandiya rebels, who are being led by the vengeful Nandhini?",
        "status": true

      },

      {
        "name": {
          "movie_name": "VIDUTHALAI PART -1",
          "cast1_name": "SOORI",
          "cast2_name": "VIJAY SETHUPATHI",
          "cast3_name": "BHAVANI SRE",
          "cast4_name": "GAUTHAM MENON",
          "director_name": "VETRIMAARAN",
          "music_director_name": "ILAYARAJA",
          "producer_name": "ELRED KUMAR"
        },
        "images": {
          "main_image": "https://static.moviecrow.com/gallery/20220906/204565-vp1.jpg",
          "background_image": "url(https://www.newsbricks.com/root_upld/general-news/2023/03/40830/org_88836202303031632.jpg)",
          "cast1_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/soori-2201-24-03-2017-17-32-33.jpg",
          "cast2_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vijay-sethupathi-32355-16-09-2017-03-30-38.jpg",
          "cast3_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/bhavani-sre-2026588-1679073697.jpg",
          "cast4_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/gautham-menon-2889-08-02-2022-03-33-26.jpg",
          "director_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vetrimaaran-3991-24-03-2017-15-46-28.jpg",
          "music_director_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ilaiyaraaja-846-24-03-2017-17-39-07.jpg",
          "producer_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/elred-kumar-28523-24-03-2017-17-34-52.jpg"
        },
        "movie_time": "2H 30M",
        "movie_certified": "A",
        "movie_release_date": "MAR 31",
        "language": "Tamil",
        "movie_frame": "2D",
        "movie_type": "ACTION,CRIME,DRAMA",
        "Description": "Kumaresan, a newly recruited police constable is assigned to deliver food to police personnel posted in the `red` districts who are hunting for the most wanted terrorist, `Mentor` Perumal",
        "status": true
      },
      {
        "name":
        {
          "movie_name": "GUARDIANS OF THE GALAXY VOL.3",
          "cast1_name": "CHRIS PRATT",
          "cast2_name": "ZOE SALDANA",
          "cast3_name": "DAVE BAUTISTA",
          "cast4_name": "KAREN GILLAN",
          "director_name": "JAMES GUNN",
          "music_director_name": "JOHN MURPHY",
          "producer_name": "KEVIN FEIGE"
        },
        "images": {
          "main_image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/guardians-of-the-galaxy-vol-3-et00310794-1669967545.jpg",
          "background_image": "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5B19A90041BF5AEF179F0E24A77E6B3EDBA3984AC344E2328BAFFF72B9E66025/scale?width=1200&aspectRatio=1.78&format=jpeg)",
          "cast1_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/chris-pratt-12677-24-03-2017-12-35-43.jpg",
          "cast2_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/zoe-saldana-3261-13-10-2017-03-54-34.jpg",
          "cast3_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/dave-bautista-31034-24-03-2017-17-32-42.jpg",
          "cast4_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/karen-gillan-1043536-1658911474.jpg",
          "director_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/james-gunn-907-18-04-2017-16-21-51.jpg",
          "music_director_image": "data:image/jpeg;base64,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",
          "producer_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kevin-feige-1092082-18-04-2018-14-44-54.jpg"
        },
        "movie_time": "2H 30MINS",
        "language": "English",
        "frame": "3D",
        "movie_type": "ACTION,ADVENTURE,SCI-FI",
        "Description": "Our beloved band of misfits are settling into life on Knowhere. But it isn`t long before their lives are upended by the echoes of Rocket`s turbulent past. Peter Quill, still reeling from the loss of Gamora, must rally his team around him on a dangerous mission ",
        "status": true
      },
      {
        "name":
        {
          "movie_name": "RUDHRAN",
          "cast1_name": "RAGHAVENDRA LAWRENCE",
          "cast2_name": "PRIYA BHAVANI SHAKER",
          "cast3_name": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/nassar-8386-1657383113.jpg",
          "cast4_name": "POORNIMA BHAGYARAJ",
          "director_name": "KATHIRESAN",
          "music_director_name": "G . V. PRAKASH",
          "producer_name": "KATHRESAN"
        },
        "images": {
          "main_image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/rudhran-et00333202-1664437269.jpg",
          "background_image": "url(https://www.onlykollywood.com/wp-content/uploads/2023/04/Rudhran-Lawrence-780x390.jpg)",
          "cast1_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/raghavendra-lawrence-5258-1664524558.jpg",
          "cast2_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/priya-bhavani-shankar-1086843-16-10-2017-01-49-49.jpg",
          "cast3_image": "NASSAR",
          "cast4_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/poornima-bhagyaraj-36652-24-03-2017-17-40-02.jpg",
          "director_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kathiresan-iein014701-24-03-2017-15-33-39.jpg",
          "music_director_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/g-v-prakash-kumar-3973-15-02-2022-01-57-26.jpg",
          "producer_image": "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kathiresan-iein014701-24-03-2017-15-33-39.jpg"
        },
        "movie_time": "2H 29MINS",
        "movie_certified": "undefined",
        "movie_release_date": "undefined",
        "language": "Tamil",
        "movie_frame": "undefined",
        "movie_type": "ACTION, DRAMA",
        "Description": "Rudhran`s life is turned upside down when a major criminal network involving a businessman named Bhoomi rose to power. He embarks on a mission to expose the criminal network.",
        "status": true
      }
    ]
  ))
};



