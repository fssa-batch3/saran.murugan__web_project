// function searchPages() {

//     let searchBar =document.getElementById("searchbar").value;

//     if ('movies' == searchBar) {
//         window.open('index.html')
//     } else if ('leo' == searchBar) {
//         window.open('pages/movie_details.html?name=Leo')
//     }

// }

const movie_lists = JSON.parse(localStorage.getItem("show_movie_details"));

movie_lists.filter((movie) => {
  if (
    movie.status &&
    movie.language == "TAMIL" &&
    movie.movie_releasing == "true"
  ) {
    const movie_list_items = document.createElement("div");
    movie_list_items.setAttribute("class", "movie-list-item");

    const main_image = document.createElement("img");
    main_image.setAttribute("class", "movie-list-item-img");
    main_image.setAttribute("src", movie.images.main_image);
    movie_list_items.append(main_image);

    const title = document.createElement("span");
    title.innerText = movie.name.movie_name;
    title.setAttribute("class", "movie-list-item-title");
    movie_list_items.append(title);

    const description = document.createElement("p");
    description.innerText = movie.Description;
    description.setAttribute("class", "movie-list-item-desc");
    movie_list_items.append(description);

    const movie_button = document.createElement("button");
    //  movie_button.innerText="book now";
    movie_button.setAttribute("class", "movie-list-item-button");
    movie_list_items.append(movie_button);

    const a = document.createElement("a");
    a.setAttribute(
      "href",
      `./pages/movie_details.html?name=${movie.name.movie_name}`
    );
    a.innerText = "book now";
    movie_button.append(a);

    document.querySelector(".movie-list").append(movie_list_items);
  }
});

movie_lists.filter((movie) => {
  if (movie.status && movie.language == "ENGLISH") {
    const movie_list_items = document.createElement("div");
    movie_list_items.setAttribute("class", "movie-list-item");

    const main_image = document.createElement("img");
    main_image.setAttribute("class", "movie-list-item-img");
    main_image.setAttribute("src", movie.images.main_image);
    movie_list_items.append(main_image);

    const title = document.createElement("span");
    title.innerText = movie.name.movie_name;
    title.setAttribute("class", "movie-list-item-title");
    movie_list_items.append(title);

    const description = document.createElement("p");
    description.innerText = movie.Description;
    description.setAttribute("class", "movie-list-item-desc");
    movie_list_items.append(description);

    const movie_button = document.createElement("button");
    //  movie_button.innerText="book now";
    movie_button.setAttribute("class", "movie-list-item-button");
    movie_list_items.append(movie_button);

    const a = document.createElement("a");
    a.setAttribute(
      "href",
      `./pages/movie_details.html?name=${movie.name.movie_name}`
    );
    a.innerText = "book now";
    movie_button.append(a);

    document.querySelector(".movie-list").append(movie_list_items);
  }
});

movie_lists.filter((movie) => {
  if (movie.status && movie.language == "TELUGU") {
    const movie_list_items = document.createElement("div");
    movie_list_items.setAttribute("class", "movie-list-item");

    const main_image = document.createElement("img");
    main_image.setAttribute("class", "movie-list-item-img");
    main_image.setAttribute("src", movie.images.main_image);
    movie_list_items.append(main_image);

    const title = document.createElement("span");
    title.innerText = movie.name.movie_name;
    title.setAttribute("class", "movie-list-item-title");
    movie_list_items.append(title);

    const description = document.createElement("p");
    description.innerText = movie.Description;
    description.setAttribute("class", "movie-list-item-desc");
    movie_list_items.append(description);

    const movie_button = document.createElement("button");
    //  movie_button.innerText="book now";
    movie_button.setAttribute("class", "movie-list-item-button");
    movie_list_items.append(movie_button);

    const a = document.createElement("a");
    a.setAttribute(
      "href",
      `./pages/movie_details.html?name=${movie.name.movie_name}`
    );
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

movie_lists.filter((movie) => {
  if (movie.status && movie.language == "hindi") {
    const movie_list_items = document.createElement("div");
    movie_list_items.setAttribute("class", "movie-list-item");

    const main_image = document.createElement("img");
    main_image.setAttribute("class", "movie-list-item-img");
    main_image.setAttribute("src", movie.images.main_image);
    movie_list_items.append(main_image);

    const title = document.createElement("span");
    title.innerText = movie.name.movie_name;
    title.setAttribute("class", "movie-list-item-title");
    movie_list_items.append(title);

    const description = document.createElement("p");
    description.innerText = movie.Description;
    description.setAttribute("class", "movie-list-item-desc");
    movie_list_items.append(description);

    const movie_button = document.createElement("button");
    //  movie_button.innerText="book now";
    movie_button.setAttribute("class", "movie-list-item-button");
    movie_list_items.append(movie_button);

    const a = document.createElement("a");
    a.setAttribute(
      "href",
      `./pages/movie_details.html?name=${movie.name.movie_name}`
    );
    a.innerText = "book now";
    movie_button.append(a);

    document.querySelector(".movie-list").append(movie_list_items);
  }
});

movie_lists.filter((movie) => {
  if (movie.status && movie.language == "Kanada") {
    const movie_list_items = document.createElement("div");
    movie_list_items.setAttribute("class", "movie-list-item");

    const main_image = document.createElement("img");
    main_image.setAttribute("class", "movie-list-item-img");
    main_image.setAttribute("src", movie.images.main_image);
    movie_list_items.append(main_image);

    const title = document.createElement("span");
    title.innerText = movie.name.movie_name;
    title.setAttribute("class", "movie-list-item-title");
    movie_list_items.append(title);

    const description = document.createElement("p");
    description.innerText = movie.Description;
    description.setAttribute("class", "movie-list-item-desc");
    movie_list_items.append(description);

    const movie_button = document.createElement("button");
    //  movie_button.innerText="book now";
    movie_button.setAttribute("class", "movie-list-item-button");
    movie_list_items.append(movie_button);

    const a = document.createElement("a");
    a.setAttribute(
      "href",
      `./pages/movie_details.html?name=${movie.name.movie_name}`
    );
    a.innerText = "book now";
    movie_button.append(a);

    document.querySelector(".movie-list").append(movie_list_items);
  }
});

movie_lists.filter((movie) => {
  if (
    movie.status &&
    movie.language == "TAMIL" &&
    movie.movie_releasing == "false"
  ) {
    const movie_list_items = document.createElement("div");
    movie_list_items.setAttribute("class", "movie-list-item");

    const main_image = document.createElement("img");
    main_image.setAttribute("class", "movie-list-item-img");
    main_image.setAttribute("src", movie.images.main_image);
    movie_list_items.append(main_image);

    const title = document.createElement("span");
    title.innerText = movie.name.movie_name;
    title.setAttribute("class", "movie-list-item-title");
    movie_list_items.append(title);

    const description = document.createElement("p");
    description.innerText = movie.Description;
    description.setAttribute("class", "movie-list-item-desc");
    movie_list_items.append(description);

    const movie_button = document.createElement("button");
    //  movie_button.innerText="book now";
    movie_button.setAttribute("class", "movie-list-item-button");
    movie_list_items.append(movie_button);

    const a = document.createElement("a");
    a.setAttribute(
      "href",
      `./pages/movie_details.html?name=${movie.name.movie_name}`
    );
    a.innerText = "book now";
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

const loginUser = JSON.parse(localStorage.getItem("profile_details"));
let log_in = document.getElementById("log-in-button");
console.log(log_in);


if (loginUser == null) {
 console.log("ok");

}
else if (loginUser !== false) {

  let profile_details = JSON.parse(localStorage.getItem("profile_details"))
  log_in.style.display ="none"


  const profile = document.createElement("button");
  profile.setAttribute("id", "user_name");
  profile.innerText = "My Profile"
  // profile.innerText ="sAND";
  profile.addEventListener("click", () => {
  window.location.href = "pages/profile.html";
  });
  document.querySelector(".profile-a").append(profile)
 

}
else {
  log_in.style.display = "block"

}


// const users = JSON.parse(localStorage.getItem("profile_details"));

// let user_name = document.getElementById("user_name");
// // user_name.innerText=users.name;

// let a = document.createElement("a");
// a.setAttribute("href", "pages/profile.html");
// a.setAttribute("id", "user_name");
// a.innerText = users.name;
// user_name.append(a);


let movie_list= [
      {
        "name": {
          "movie_name": "Custody",
          "cast_name": [
            "Naga Chaitanya",
            "Krithi Shetty",
            "Aravind Swamy",
            "Priyamani",
            "Premgi Amaren",
            
          ],
          "cast_role": [
            "Actor",
            "Actor",
            "Actor",
            "Actor",
            "Actor",
          ],
          "crew_name": [
            "Venkat Prabhu",
            "Srinivasaa Chitturi",
            "Ilaiyaraaja",
            "Yuvan Shanker Raja"
          ],
          "crew_role": [
            "Director",
            "Producer",
            "Musician",
            "Musician"
          ]
        },
        "images": {
          "main_image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/custody-et00354148-1677833307.jpg",
          "background_image": "https://th-i.thgim.com/public/incoming/6t6pf7/article66842179.ece/alternates/FREE_1200/naga%20chaitanya%20custody%20%282%29.jpg",
          "cast_image": [
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/naga-chaitanya-akkineni-13567-1655789028.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/krithi-shetty-2014897-1663066716.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/arvind-swamy-34572-17-12-2018-02-54-45.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/priyamani-1738-1654347025.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/premgi-amaren-35908-24-03-2017-17-52-12.jpg",
            ""
          ],
          "crew_image": [
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/venkat-prabhu-2446-11-04-2018-01-00-16.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/srinivasaa-chitturi-1095379-26-03-2021-09-33-42.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ilaiyaraaja-846-24-03-2017-17-39-07.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/yuvan-shankar-raja-2551-24-03-2017-12-31-18.jpg"
          ]
        },
        "movie_time": "2h 28m",
        "language": "TELUGU",
        "frame": "2D",
        "movie_certified": "UA",
        "movie_type": "CRIME,THRILLER,DRAMA",
        "movie_release_date": "May 12",
        "movie_releasing": "true",
        "Description": "Custody is a bilingual movie starring Naga Chaitanya Akkineni and Krithi Shetty in the lead.",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "cast_name": [
            "Vikram",
            "Karthi",
            "Jayam Ravi",
            "Aishwarya Rai",
            "Trisha Krishnan",
            "Aishwarya Lekshmi",
            "Prakash Raj"
          ],
          "cast_role": [
            "Actor",
            "Actor",
            "Actor",
            "Actor",
            "Actor",
            "Actor",
            "Actor"
          ],
          "crew_name": [
            "Mani Ratnam",
            "B. Jeyamohan",
            "A. R. Rahman",
            "Kumaravel"
          ],
          "crew_role": [
            "Director",
            "Writer",
            "Musician",
            "Screenplay"
          ]
        },
        "images": {
          "main_image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ponniyin-selvan--part-2-et00348725-1680776467.jpg",
          "background_image": "url(https://www.koimoi.com/wp-content/new-galleries/2023/04/ponniyin-selvan-2-early-trends-001.jpg)",
          "cast_image": [
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vikram-2474-16-09-2017-01-23-22.jpg",
            "https://in.bookmyshow.com/person/karthi/16841",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jayam-ravi-5828-16-09-2017-03-41-40.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/aishwarya-rai-bachchan-37572-1675062633.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/trisha-krishnan-15856-18-09-2017-06-05-18.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/aishwarya-lekshmi-1085670-21-12-2017-11-33-11.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/prakash-raj-1713-1653648505.jpg"
          ],
          "crew_image": [
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/mani-ratnam-1351-20-09-2017-01-11-11.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/b.-jeyamohan-34570-20-04-2017-14-07-03.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/a_r_rahman_38.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kumaravel-7650-29-10-2017-04-04-42.jpg"
          ]
        },
        "movie_time": "2h 44m",
        "language": "TAMIL",
        "frame": "2D",
        "movie_certified": "U",
        "movie_type": "HISTORICAL,FANTACY",
        "movie_release_date": "Apr 28",
        "movie_releasing": "true",
        "Description": "A plot to murder the king and the two princes of the Chola dynasty is underfoot. Can the Cholas survive the wrath of the Pandiya rebels, who are being led by the vengeful Nandhini?",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "cast_name": [
            "Manikandan K.",
            "Meetha Raghunath",
            "Ramesh Thilak",
            "Bagavathi Perumal"
          ],
          "cast_role": [
            "Actor",
            "Actor",
            "Actor",
            "Actor"
          ],
          "crew_name": [
            "Vinayak Chandrasekaran",
            "Magesh Raj Pasilan",
            "Sean Roldan"
          ],
          "crew_role": [
            "Director",
            "Producer",
            "Musician"
          ]
        },
        "images": {
          "main_image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/good-night-et00358164-1682501014.jpg",
          "background_image": "url(https://i.ytimg.com/vi/eLPePlnFoho/maxresdefault.jpg)",
          "cast_image": [
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/manikandan-k-2027891-1683890187.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/meetha-raghunath-2027555-1682495252.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ramesh-thilak-1050431-24-03-2017-17-48-44.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/bagavathi-perumal-1057087-24-03-2017-14-38-56.jpg"
          ],
          "crew_image": [
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vinayak-chandrasekaran-2027557-1682495656.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/magesh-raj-pasilian-2027559-1682496220.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sean-roldan-1045284-24-03-2017-15-26-23.jpg"
          ]
        },
        "movie_time": "2h 44m",
        "language": "TAMIL",
        "frame": "2D",
        "movie_certified": "U",
        "movie_type": "ACTION,THRILLER,DRAMA",
        "movie_release_date": "May 12",
        "movie_releasing": "true",
        "Description": "Good Night is a Tamil movie starring Manikandan K, Meetha Raghunath, Ramesh Thilak, Raichal Rebecca, Bagavathi Perumal and Balaji Shakthivel in prominent roles. It is written and directed by Vinayak Chandrasekaran.",
        "status": true
      },
      {
        "name": {
          "movie_name": "Fast X",
          "cast_name": [
            "Vin Diesel",
            "Jason Momoa",
            "John Cena",
            "Jason Statham",
            "Tyrese Gibson",
            "Nathalie Emmanuel",
            "Michelle Rodriguez",
            "Sung Kang"
          ],
          "cast_role": [
            "Actor",
            "Actor",
            "Actor",
            "Actor",
            "Actor",
            "Actor",
            "Actor",
            "Actor"
          ],
          "crew_name": [
            "Justin Lin",
            "Neal H. Moritz",
            "Gary Scott",
            "Nicole Perlman",
            "Stephen F. Windon"
          ],
          "crew_role": [
            "Director",
            "Producer",
            "Writer",
            "Executive Producer",
            "Cinematographer"
          ]
        },
        "images": {
          "main_image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/fast-x-et00122562-1683110461.jpg",
          "background_image": "url(https://www.fastxmovie.com/images/main/desktop-cropped-v2.jpg?id=8_7)",
          "cast_image": [
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vin-diesel-5007-22-12-2017-10-17-23.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jason-momoa-25617-24-03-2017-17-39-52.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/john-cena-1021-24-03-2017-15-43-30.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jason-statham-935-24-03-2017-13-50-52.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tyrese-gibson-2671-24-03-2017-17-39-25.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/nathalie-emmanuel-1055032-24-03-2017-16-16-15.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/michelle-rodriguez-1471-13-10-2017-03-57-20.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sung-kang-11092-26-02-2021-18-44-11.jpg"
          ],
          "crew_image": [
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/justin-lin-1105-24-03-2017-15-20-50.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/neal-h.-moritz-iein011457-24-03-2017-15-17-53.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/gary-scott-thompson-1068971-07-04-2017-11-42-53.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/nicole-perlman-42699-12-10-2018-10-33-23.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/stephen-f.-windon-iein073214-07-04-2017-11-42-14.jpg"
          ]
        },
        "movie_time": "2h 14m",
        "language": "ENGLISH",
        "frame": "2D",
        "movie_certified": "UA",
        "movie_type": "ACTION,THRILLER,DRAMA",
        "movie_release_date": "May 18",
        "movie_releasing": "true",
        "Description": "Dom Toretto and his family must confront a terrifying new enemy who`s fueled by revenge.",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "cast_name": [
            "Aishwarya Rajesh",
            "Jithan Ramesh",
            "Aishwarya Dutt"
          ],
          "cast_role": [
            "Actor",
            "Actor",
            "Actor"
          ],
          "crew_name": [
            "Nelson Venkatesan",
            "Gokul Benoy",
            "Sabu Joseph"
          ],
          "crew_role": [
            "Director",
            "Cinematographer",
            "Editor"
          ]
        },
        "images": {
          "main_image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/farhana-et00349067-1682342803.jpg",
          "background_image": "url(https://www.onlykollywood.com/wp-content/uploads/2023/05/Farhana-Movie-Review.jpg)",
          "cast_image": [
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/aishwarya-rajesh-1048096-1680242348.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jithan-ramesh-28416-1682342150.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/aishwarya-dutta-1063537-08-06-2017-15-29-22.jpg"
          ],
          "crew_image": [
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/nelson-venkatesan-1061383-1682345087.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/gokul-benoy-2027511-1682344865.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sabu-joseph-2027512-1682345027.jpg"
          ]
        },
        "movie_time": "2h 21m",
        "language": "TAMIL",
        "frame": "2D",
        "movie_certified": "UA",
        "movie_type": "ACTION,THRILLER,DRAMA",
        "movie_release_date": "May 12",
        "movie_releasing": "true",
        "Description": "Farhana, a middle-class mother takes a call center job due to financial reasons which gives her freedom. When she tries to earn better by opting for a fancy division, it leads into a web of dangers.",
        "status": true
      },
      {
        "name": {
          "movie_name": "Gaurdianns of the galexy  vol.3",
          "cast_name": [
            "Chris Pratt",
            "Zoe Saldana",
            "Dave Bautista",
            "Karen Gillan",
            "Maria Bakalova"
          ],
          "cast_role": [
            "Actor",
            "Actor",
            "Actor",
            "Actor",
            "Actor"
          ],
          "crew_name": [
            "James Gunn",
            "Kevin Fiege",
            "Louis D`Esposito",
            "Victoria Alonso"
          ],
          "crew_role": [
            "Director",
            "Producer",
            "Executive Producer",
            "Executive Producer"
          ]
        },
        "images": {
          "main_image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/guardians-of-the-galaxy-vol-3-et00310794-1683529214.jpg",
          "background_image": "url(https://bleedingcool.com/wp-content/uploads/2022/12/Fi6te2xVUAE4GAJ-1200x675.jpg)",
          "cast_image": [
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/chris-pratt-12677-24-03-2017-12-35-43.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/zoe-saldana-3261-13-10-2017-03-54-34.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/dave-bautista-31034-24-03-2017-17-32-42.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/karen-gillan-1043536-1658911474.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/maria-bakalova-2022925-1665994314.jpg"
          ],
          "crew_image": [
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/james-gunn-907-18-04-2017-16-21-51.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kevin-feige-1092082-18-04-2018-14-44-54.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/louis-d-esposito-iein013028-24-03-2017-15-26-49.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/victoria-alonso-iein071518-24-03-2017-16-27-21.jpg"
          ]
        },
        "movie_time": "2h 30m",
        "language": "ENGLISH",
        "frame": "2D",
        "movie_certified": "UA",
        "movie_type": "FANTACY,ADVENTURE,SCI-FI",
        "movie_release_date": "May 5",
        "movie_releasing": "true",
        "Description": "Our beloved band of misfits are settling into life on Knowhere. But it isn`t long before their lives are upended by the echoes of Rocket`s turbulent past. Peter Quill, still reeling from the loss of Gamora",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "cast_name": [
            "Vijay Antony",
            "Kavya Thapar",
            "Hareesh Peradi",
            "John Vijay"
          ],
          "cast_role": [
            "Actor",
            "Actor",
            "Actor",
            "Actor"
          ],
          "crew_name": [
            "VIjay Antony",
            "Vijay Antony"
          ],
          "crew_role": [
            "Director,Writer",
            "Musician"
          ]
        },
        "images": {
          "main_image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pichaikkaran-2-et00324847-1683542091.jpg",
          "background_image": "url(https://i.ytimg.com/vi/QTMq1kjSmAo/maxresdefault.jpg)",
          "cast_image": [
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vijay-anthony-7790-22-11-2017-10-59-52.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kavya-thapar-1093441-15-09-2018-12-25-45.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/hareesh-peradi-37560-1669615969.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/john-vijay-7760-24-03-2017-18-01-55.jpg"
          ],
          "crew_image": [
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vijay-anthony-7790-22-11-2017-10-59-52.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vijay-anthony-7790-22-11-2017-10-59-52.jpg"
          ]
        },
        "movie_time": "2h 40m",
        "language": "TAMIL",
        "frame": "2D",
        "movie_certified": "UA",
        "movie_type": "ACTION,THRILLER,DRAMA",
        "movie_release_date": "May 19",
        "movie_releasing": "true",
        "Description": "Pichaikkaran 2 is a Tamil movie starring Vijay Antony, Kavya Thapar, Hareesh Peradi, and John Vijay in prominent roles. It is written and directed by Vijay Antony.",
        "status": true
      },
      {
        "name": {
          "movie_name": "Raavana kottam",
          "cast_name": [
            "Shanthanu",
            "Anandhi"
          ],
          "cast_role": [
            "Actor",
            "Actor"
          ],
          "crew_name": [
            "Vikram Sugumaran",
            "Justin Prabhakaran"
          ],
          "crew_role": [
            "Director",
            "Music Director"
          ]
        },
        "images": {
          "main_image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/raavana-kottam-et00311948-1683612842.jpg",
          "background_image": "url(https://i.ytimg.com/vi/tvidTzl9PJw/maxresdefault.jpg)",
          "cast_image": [
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shanthanu-bhagyaraj-37502-07-09-2016-11-50-00.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/anandhi-1047577-02-02-2021-12-33-47.jpg"
          ],
          "crew_image": [
            "https://i.ibb.co/M70t0mQ/download-1.jpg",
            "https://i.ibb.co/y8Nwzpr/download-2.jpg",
          ]
        },
        "movie_time": "2h 24m",
        "language": "TAMIL",
        "frame": "2D",
        "movie_certified": "UA",
        "movie_type": "LOVE,ROMANCE,THRILLER",
        "movie_release_date": "May 12",
        "movie_releasing": "true",
        "Description": "Raavana Kottam is a drama film featuring Shanthanu Bhagyaraj and Anandhi",
        "status": true
      }
    ]
 

     localStorage.setItem("show_movie_details",JSON.stringify(movie_list))