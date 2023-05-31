
const toggleMenu = () =>
      document.body.classList.toggle("open");




if (JSON.parse(localStorage.getItem("show_movie_details"))) {
  // return
}

else {
  localStorage.setItem("show_movie_details", JSON.stringify(
    [
      {
        "name": {
          "movie_name": "Custody",
          "cast_name": [
            "Naga Chaitanya",
            "Krithi Shetty",
            "Aravind Swamy",
            "Priyamani",
            "Premgi Amaren",
            "Jiiva"
          ],
          "cast_role": [
            "Actor",
            "Actor",
            "Actor",
            "Actor",
            "Actor",
            "Actor"
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
          "background_image": "url(https://th-i.thgim.com/public/incoming/6t6pf7/article66842179.ece/alternates/FREE_1200/naga%20chaitanya%20custody%20%282%29.jpg)",
          "cast_image": [
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/naga-chaitanya-akkineni-13567-1655789028.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/krithi-shetty-2014897-1663066716.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/arvind-swamy-34572-17-12-2018-02-54-45.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/priyamani-1738-1654347025.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/premgi-amaren-35908-24-03-2017-17-52-12.jpg",
            "https://i.ibb.co/zFvcm4y/download-4.jpg"
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
            "https://i.ibb.co/ZKFdLBJ/download-5.jpg",
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
          "movie_name": "Gaurdianns of the galexy vol.3",
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
            "https://i.ibb.co/y8Nwzpr/download-2.jpg"
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
      },
      {
        "name": {
          "movie_name": "Captain miller",
          "cast_name": [
            "Dhanush",
            "Priyanka Mohan",
            "Shivarajkumar",
            "Sundeep Krishnan"
          ],
          "cast_role": [
            "Actor",
            "Actor",
            "Actor",
            "Actor"
          ],
          "crew_name": [
            "Arun Matheshwaran",
            "Senthil Thyagarajan",
            "Arjun Thyagarajan",
            "G. V. Prakash"
          ],
          "crew_role": [
            "Director, Writer",
            "Producer",
            "Producer",
            "Musician"
          ]
        },
        "images": {
          "main_image": "https://upload.wikimedia.org/wikipedia/en/1/1c/Captain_Miller_film_poster.jpg",
          "background_image": "url(https://i.ytimg.com/vi/Oz9SAMQLSz0/maxresdefault.jpg)",
          "cast_image": [
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/dhanush-3988-18-09-2017-03-32-21.jpg",
            "https://i.ibb.co/QnbMwyx/download-3.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb46YS9ufXYeynBNANHQ-lrZ1GzgsgAenjRA&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS58t54ZM3t3H3FjDcDA-dpEm4gNTIA55K9Mw&usqp=CAU"
          ],
          "crew_image": [
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/arun-matheshwaran-2015816-20-12-2021-02-15-08.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sendhil-thyagarajan-1085531-22-08-2017-16-12-08.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/arjun-thyagarajan-1084876-1667558177.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/g-v-prakash-kumar-3973-15-02-2022-01-57-26.jpg"
          ]
        },
        "movie_time": "2h 40mins ",
        "language": "TAMIL",
        "frame": "2D",
        "movie_certified": "UA",
        "movie_type": "HISTORICAL,FANTACY",
        "movie_release_date": "Nov 10",
        "movie_releasing": "false",
        "Description": "Captain Miller is a Tamil movie starring Dhanush in a prominent role. It is a drama written and directed by Arun Matheswaran forming part of the crew.\n",
        "status": true
      },
      {
        "name": {
          "movie_name": "Leo",
          "cast_name": [
            "Vijay",
            "Trisha Krishnan",
            "Sanjay Dutt",
            "Priya Anand",
            "Gautham Menon"
          ],
          "cast_role": [
            "Actor",
            "Actor",
            "Actor",
            "Actor",
            "Actor"
          ],
          "crew_name": [
            "Lokesh Kanagaraj",
            "Anirudh Ravichnader",
            "7 Screen Studio"
          ],
          "crew_role": [
            "Director, Writer",
            "Musician",
            "Producer"
          ]
        },
        "images": {
          "main_image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/leo-et00351731-1675663884.jpg",
          "background_image": "url(https://assets.mspimages.in/gear/wp-content/uploads/2023/02/new.jpg)",
          "cast_image": [
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vijay-2461-20-12-2017-04-37-08.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/trisha-krishnan-15856-18-09-2017-06-05-18.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sanjay-dutt-2035-12-09-2017-05-07-10.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/priya-anand-13077-18-08-2021-11-03-47.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/gautham-menon-2889-08-02-2022-03-33-26.jpg"
          ],
          "crew_image": [
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/lokesh-kanakaraj-1065304-24-03-2017-16-24-31.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/anirudh-ravichander-34897-24-03-2017-13-54-49.jpg",
            "https://i.ibb.co/f4zSmDW/download-6.jpg",
          ]
        },
        "movie_time": "2h 40mins ",
        "language": "TAMIL",
        "frame": "2D",
        "movie_certified": "UA",
        "movie_type": "ACTION,THRILLER,DRAMA",
        "movie_release_date": "Oct 19",
        "movie_releasing": "false",
        "Description": "Leo is an action-thriller starring Vijay and Trisha Krishnan in the lead.",
        "status": true
      },
      {
        "name": {
          "movie_name": "Jailer",
          "cast_name": [
            "Rajinikanth",
            "Ramya Krishnan",
            "Yogi babu",
            "Vasanth Ravi",
            "Vinayakan"
          ],
          "cast_role": [
            "Actor",
            "Actor",
            "Actor",
            "Actor",
            "Actor"
          ],
          "crew_name": [
            "Nelson Dilipkumar",
            "Anirudh Ravichandran",
            "Kalanithi Maran"
          ],
          "crew_role": [
            "Director, Writer",
            "Musician",
            "Producer"
          ]
        },
        "images": {
          "main_image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jailer-et00331686-1664432415.jpg",
          "background_image": "url(https://static.moviecrow.com/marquee/jailer-new-poster-feat-cop-rajinikanth-is-here/215546_thumb_665.jpg)",
          "cast_image": [
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/rajinikanth-1795-29-12-2016-01-58-24.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ramya-krishnan-2920-18-09-2017-05-34-55.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/yogi-babu-1055754-02-12-2021-12-53-23.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vasanth-ravi-1046606-20-12-2021-02-09-52.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vinayakan-iein031171-06-06-2019-11-45-43.jpg"
          ],
          "crew_image": [
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/nelson-dilipkumar-1090825-14-08-2018-11-45-27.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/anirudh-ravichander-34897-24-03-2017-13-54-49.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBzzCjfvkEKbhdt83A_PF7DI7nykF6_Q4NQA&usqp=CAU"
          ]
        },
        "movie_time": "2h 30mins",
        "language": "TAMIL",
        "frame": "2D",
        "movie_certified": "U",
        "movie_type": "ACTION,THRILLER,DRAMA",
        "movie_release_date": "Aug 10",
        "movie_releasing": "false",
        "Description": "Jailer is a Tamil movie starring Rajinikanth. It is an action - thriller directed and written by Nelson with music director Anirudh forming part of the crew.",
        "status": true
      },
      {
        "name": {
          "movie_name": "Maaveeran",
          "cast_name": [
            "Sivakarthikeyan",
            "Aditi Shanker",
            "Sunil",
            "Yogi Babu"
          ],
          "cast_role": [
            "Actor",
            "Actor",
            "Actor",
            "Actor"
          ],
          "crew_name": [
            "Madonne Ashwin",
            "Bharath sankar",
            "Philomin Raj",
            "Kumar Gangappan"
          ],
          "crew_role": [
            "Director,writer",
            "Musician",
            "Editor",
            "Art Director"
          ]
        },
        "images": {
          "main_image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/maaveeran-et00357966-1682333861.jpg",
          "background_image": "https://i.ibb.co/vx069DJ/MV5-BY2-Rk-YWEx-ODIt-Yj-Uy-Ni00-Yzkx-LTg1-MTkt-NWZi-Zm-M2-ODAw-ZWQz-Xk-Ey-Xk-Fqc-Gde-QXVy-MTU4-Mzg1.jpg",

          "cast_image": [
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sivakarthikeyan-1042969-18-09-2017-03-37-23.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBcRSnHj8CJcyVtnj2MGSOCZG6iFCQlHRDOA&usqp=CAU",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sunil-2292-24-03-2017-18-02-16.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/yogi-babu-1055754-02-12-2021-12-53-23.jpg"
          ],
          "crew_image": [
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/madonne-ashwin-2020610-1657869488.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/bharath-sankar-1083948-29-06-2017-21-53-44.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/philomin-raj-2017575-1665748194.jpg",
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kumar-gangappan-1264908-29-01-2019-02-14-18.jpg"
          ]
        },
        "movie_time": "2h 30mins",
        "language": "TAMIL",
        "frame": "2D",
        "movie_certified": "U",
        "movie_type": "ACTION,THRILLER,DRAMA",
        "movie_release_date": "Jul 14",
        "movie_releasing": "false",
        "Description": "Maaveeran is a Tamil movie starring Sivakarthikeyan, Sunil and Yogi Babu in prominent roles. It is written and directed by Madonne Ashwin.\n",
        "status": true
      }
    ])

  )
};



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
    a.innerText = "See details";
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


if (loginUser == null) {
  console.log("ok");

}
else if (loginUser !== false) {

  let profile_details = JSON.parse(localStorage.getItem("profile_details"))
  log_in.style.display = "none";

  // const profile_div=document.createElement("div");
  // profile_div.setAttribute("class","profile_div")

  // const user_div=document.createElement("div");
  // user_div.setAttribute("class","user_div")
  // profile_div.append(user_div);

  // const user_image=document.createElement("img")
  // user_image.setAttribute("src","https://i.ibb.co/2gJ5Wgb/user.png");
  // user_image.setAttribute("class","user_image")
  // user_div.append(user_image)

  // const profile_name = document.createElement("h2");
  // profile_name.setAttribute("id", "user_name");
  // profile_name.innerText = profile_details.name;
  // user_div.append(profile_name);

  //  const profile=document.createElement("button");
  //  profile.setAttribute("class","profile_a")
  //  profile.innerText="View profile";
  //  profile_div.append(profile)

  const profile = document.createElement("a");
  profile.innerText="Profile"
  profile.setAttribute("id","a-menu")
  // profile.style("animation-delay: 0.2s")



  profile.addEventListener("click", () => {
    window.location.href = "pages/profile.html";
  });
  document.querySelector(".profile-a").prepend(profile);


}
else {
  log_in.style.display = "block"

}




let profile_details = JSON.parse(localStorage.getItem("profile_details"));


console.log(profile_details.email);
if (profile_details.email == "letsshow@gmail.com") {

  let admin = document.createElement("a");
  // admin.setAttribute("id", "admin_tag");
  admin.setAttribute("id","a-menu")
  admin.innerText = "Admin";
  document.querySelector(".profile-a").prepend(admin);

  console.log("hi");
 

  admin.addEventListener("click", function () {

    window.location.href = "../../Pages/admin/adminHome.html";
  })

}


// const users = JSON.parse(localStorage.getItem("profile_details"));

// let user_name = document.getElementById("user_name");
// // user_name.innerText=users.name;

// let a = document.createElement("a");
// a.setAttribute("href", "pages/profile.html");
// a.setAttribute("id", "user_name");
// a.innerText = users.name;
// user_name.append(a);


// if(JSON.parse(localStorage.getItem(""))){
//   // return
// }

// else{
//   localStorage.setItem("show_movie_details", JSON.stringify(

function togglemenu() {
  document.getElementById('sidebar').classList.toggle('active');
}


if (JSON.parse(localStorage.getItem("show_details"))) {
  // return
}

else {
  localStorage.setItem("show_details", JSON.stringify(
    [
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "11:00 AM",
          "01:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "11:00 AM",
          "01:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "11:00 AM",
          "01:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "11:00 AM",
          "01:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "11:00 AM",
          "01:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "11:00 AM",
          "01:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "21",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "11:00 AM",
          "01:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "20",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "11:00 AM",
          "01:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "19",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "21",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "",
        "premium_cost": "",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "",
        "premium_cost": "",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "",
        "premium_cost": "",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "",
        "premium_cost": "",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "",
        "premium_cost": "",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "",
        "premium_cost": "",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "",
        "premium_cost": "",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "28",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "",
        "premium_cost": "",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "29",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "",
        "premium_cost": "",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "30",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "",
        "premium_cost": "",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "31",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "",
        "premium_cost": "",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "21",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "28",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "29",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "30",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "21",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "28",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "29",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "21",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "28",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "29",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "30",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "Kasi Talkies Dolby Atmos: Ashok Nagar"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "21",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "Kasi Talkies Dolby Atmos: Ashok Nagar"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "Kasi Talkies Dolby Atmos: Ashok Nagar"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "Kasi Talkies Dolby Atmos: Ashok Nagar"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "Kasi Talkies Dolby Atmos: Ashok Nagar"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "Kasi Talkies Dolby Atmos: Ashok Nagar"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "Kasi Talkies Dolby Atmos: Ashok Nagar"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "Kasi Talkies Dolby Atmos: Ashok Nagar"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "28",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "Kasi Talkies Dolby Atmos: Ashok Nagar"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "29",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "Kasi Talkies Dolby Atmos: Ashok Nagar"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "30",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "SPI: S2 Theyagaraja - Thiruvanmiyur, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "21",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "SPI: S2 Theyagaraja - Thiruvanmiyur, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "SPI: S2 Theyagaraja - Thiruvanmiyur, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "SPI: S2 Theyagaraja - Thiruvanmiyur, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "SPI: S2 Theyagaraja - Thiruvanmiyur, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "SPI: S2 Theyagaraja - Thiruvanmiyur, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "SPI: S2 Theyagaraja - Thiruvanmiyur, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "SPI: S2 Theyagaraja - Thiruvanmiyur, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "28",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "SPI: S2 Theyagaraja - Thiruvanmiyur, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "29",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "SPI: S2 Theyagaraja - Thiruvanmiyur, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "02:00 PM",
          "04:00 PM",
          "07:00 PM",
          "08:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "30",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "PVR: VR Chennai, Anna Nagar"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "04:00 PM",
          "07:00 PM"
        ],
        "show_date": "21",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "PVR: VR Chennai, Anna Nagar"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "04:00 PM",
          "07:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "PVR: VR Chennai, Anna Nagar"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "04:00 PM",
          "07:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "PVR: VR Chennai, Anna Nagar"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "04:00 PM",
          "07:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "PVR: VR Chennai, Anna Nagar"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "04:00 PM",
          "07:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "PVR: VR Chennai, Anna Nagar"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "04:00 PM",
          "07:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "PVR: VR Chennai, Anna Nagar"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "04:00 PM",
          "07:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "PVR: VR Chennai, Anna Nagar"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "04:00 PM",
          "07:00 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "PVR: VR Chennai, Anna Nagar"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "04:00 PM",
          "07:00 PM"
        ],
        "show_date": "28",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "PVR: VR Chennai, Anna Nagar"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "04:00 PM",
          "07:00 PM"
        ],
        "show_date": "29",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "PVR: VR Chennai, Anna Nagar"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "04:00 PM",
          "07:00 PM"
        ],
        "show_date": "30",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "Cinepolis: BSR Mall, OMR, Thoraipakkam"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "Cinepolis: BSR Mall, OMR, Thoraipakkam"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "Cinepolis: BSR Mall, OMR, Thoraipakkam"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "Cinepolis: BSR Mall, OMR, Thoraipakkam"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "Cinepolis: BSR Mall, OMR, Thoraipakkam"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "Cinepolis: BSR Mall, OMR, Thoraipakkam"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "Cinepolis: BSR Mall, OMR, Thoraipakkam"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "28",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "Cinepolis: BSR Mall, OMR, Thoraipakkam"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "29",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "Cinepolis: BSR Mall, OMR, Thoraipakkam"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "30",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "SPI: Sathyam Cinemas - Royapettah, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "SPI: Sathyam Cinemas - Royapettah, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "SPI: Sathyam Cinemas - Royapettah, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "SPI: Sathyam Cinemas - Royapettah, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "SPI: Sathyam Cinemas - Royapettah, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "SPI: Sathyam Cinemas - Royapettah, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "SPI: Sathyam Cinemas - Royapettah, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "28",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "SPI: Sathyam Cinemas - Royapettah, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "29",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Ponniyin selvan part-2",
          "theatre_name": "SPI: Sathyam Cinemas - Royapettah, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "30",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "Pvr,grand mall,velacherry"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "Pvr,grand mall,velacherry"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "Pvr,grand mall,velacherry"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "Pvr,grand mall,velacherry"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "Pvr,grand mall,velacherry"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "Pvr,grand mall,velacherry"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "Pvr,grand mall,velacherry"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "28",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "Pvr,grand mall,velacherry"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "29",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "Pvr,grand mall,velacherry"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "30",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "28",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "29",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM"
        ],
        "show_date": "30",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "28",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "29",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM"
        ],
        "show_date": "30",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "28",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "29",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "30",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "28",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "29",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "30",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "Kasi Talkies Dolby Atmos: Ashok Nagar"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "Kasi Talkies Dolby Atmos: Ashok Nagar"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "Kasi Talkies Dolby Atmos: Ashok Nagar"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "Kasi Talkies Dolby Atmos: Ashok Nagar"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "Kasi Talkies Dolby Atmos: Ashok Nagar"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "Kasi Talkies Dolby Atmos: Ashok Nagar"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "Kasi Talkies Dolby Atmos: Ashok Nagar"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "28",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "Kasi Talkies Dolby Atmos: Ashok Nagar"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "29",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "Kasi Talkies Dolby Atmos: Ashok Nagar"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "30",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "SPI: S2 Theyagaraja - Thiruvanmiyur, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "SPI: S2 Theyagaraja - Thiruvanmiyur, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "SPI: S2 Theyagaraja - Thiruvanmiyur, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "SPI: S2 Theyagaraja - Thiruvanmiyur, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "SPI: S2 Theyagaraja - Thiruvanmiyur, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "SPI: S2 Theyagaraja - Thiruvanmiyur, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "SPI: S2 Theyagaraja - Thiruvanmiyur, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "28",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "SPI: S2 Theyagaraja - Thiruvanmiyur, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "29",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "SPI: S2 Theyagaraja - Thiruvanmiyur, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "30",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "PVR: VR Chennai, Anna Nagar"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "PVR: VR Chennai, Anna Nagar"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "PVR: VR Chennai, Anna Nagar"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "PVR: VR Chennai, Anna Nagar"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "PVR: VR Chennai, Anna Nagar"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "PVR: VR Chennai, Anna Nagar"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "PVR: VR Chennai, Anna Nagar"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "28",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "PVR: VR Chennai, Anna Nagar"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "29",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Good Night",
          "theatre_name": "PVR: VR Chennai, Anna Nagar"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "30",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "28",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "29",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "30",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "28",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "29",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "30",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "28",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "29",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "30",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "28",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "29",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "30",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "28",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "29",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Farhana",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "10:00 AM",
          "12:00 PM",
          "03:00 PM",
          "07:00 PM",
          "10:00 PM",
          "11:00 PM",
          "11:30 PM"
        ],
        "show_date": "30",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "28",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "29",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "30",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "28",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "29",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "30",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "28",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "29",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "30",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Pichaikkaran 2",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Raavana kottam",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Raavana kottam",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Raavana kottam",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Raavana kottam",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Raavana kottam",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Raavana kottam",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Raavana kottam",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Raavana kottam",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Raavana kottam",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Raavana kottam",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Raavana kottam",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Raavana kottam",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Raavana kottam",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Raavana kottam",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Raavana kottam",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Raavana kottam",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Raavana kottam",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Raavana kottam",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Raavana kottam",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Fast X",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Fast X",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Fast X",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Fast X",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Fast X",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Fast X",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Fast X",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Fast X",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Fast X",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Fast X",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Fast X",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Fast X",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Fast X",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Fast X",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Fast X",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Fast X",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Fast X",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Fast X",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Fast X",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Fast X",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Fast X",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Fast X",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Fast X",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Fast X",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Fast X",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Fast X",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Fast X",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Fast X",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Fast X",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Fast X",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Gaurdianns of the galexy vol.3",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Gaurdianns of the galexy vol.3",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Gaurdianns of the galexy vol.3",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Gaurdianns of the galexy vol.3",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Gaurdianns of the galexy vol.3",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Gaurdianns of the galexy vol.3",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Gaurdianns of the galexy vol.3",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Gaurdianns of the galexy vol.3",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Gaurdianns of the galexy vol.3",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Gaurdianns of the galexy vol.3",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Gaurdianns of the galexy vol.3",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Gaurdianns of the galexy vol.3",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Gaurdianns of the galexy vol.3",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Gaurdianns of the galexy vol.3",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Gaurdianns of the galexy vol.3",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Gaurdianns of the galexy vol.3",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Gaurdianns of the galexy vol.3",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Gaurdianns of the galexy vol.3",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Gaurdianns of the galexy vol.3",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Gaurdianns of the galexy vol.3",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Gaurdianns of the galexy vol.3",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Gaurdianns of the galexy vol.3",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Gaurdianns of the galexy vol.3",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Gaurdianns of the galexy vol.3",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Custody",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Custody",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Custody",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Custody",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Custody",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Custody",
          "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Custody",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Custody",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Custody",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Custody",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Custody",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Custody",
          "theatre_name": "PVR: Grand Mall, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Custody",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Custody",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Custody",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Custody",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Custody",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Custody",
          "theatre_name": "INOX: The Marina Mall, OMR"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Custody",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Custody",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Custody",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Custody",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Custody",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Custody",
          "theatre_name": "INOX: LUXE Phoenix Market City, Velachery"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Custody",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "22",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Custody",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "23",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Custody",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "24",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Custody",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "25",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Custody",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "26",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      },
      {
        "name": {
          "movie_name": "Custody",
          "theatre_name": "Rohini Silver Screens: Koyambedu"
        },
        "show_times": [
          "07:00 AM",
          "10:00 AM",
          "12:00 PM",
          "01:00 PM",
          "07:00 PM",
          "11:00 PM"
        ],
        "show_date": "27",
        "screen_frame": "2D",
        "movie_language": "Tamil",
        "show_month": "May",
        "budget_cost": "60",
        "premium_cost": "190",
        "status": true
      }
    ])

  )
}





if (JSON.parse(localStorage.getItem("theatre_details"))) {
  // return
}

else {
  localStorage.setItem("theatre_details", JSON.stringify(
    [
      {
        "theatre_name": "MAYAJAAL Multiplex: ECR, Chennai",
        "theatre_address": "No. 34/1, East Coast Road, Kanathur, Near Toll Plaza, Chennai, Tamil Nadu 603112, India",
        "theatre_map_location": "https://goo.gl/maps/jiq2hVTk3SfwL4xx9?coh=178572&entry=tt",
        "theatre_lat_long": "12.847991,80.240136"
      },
      {
        "theatre_name": "PVR: Grand Mall, Velachery",
        "theatre_address": "3rd Floor, Grand Square Mall, No.137, Tambaram Velachery Road, V.O.C Nagar, Doctor Seetaram Nagar, Chennai, Tamil Nadu 600042, India\n",
        "theatre_map_location": "https://goo.gl/maps/6DPHubRXDaTWxKQp7?coh=178572&entry=tt",
        "theatre_lat_long": "12.971962,80.220429"
      },
      {
        "theatre_name": "INOX: The Marina Mall, OMR",
        "theatre_address": "3rd Floor, The Marina Mall, Old Mahabalipuram Road, Egatoor, Navalur, Chennai, Tamil Nadu 603103, India",
        "theatre_map_location": "https://goo.gl/maps/q1AfmcJ94mTgnYWF9?coh=178572&entry=tt",
        "theatre_lat_long": "12.836170,80.229571"
      },
      {
        "theatre_name": "INOX: LUXE Phoenix Market City, Velachery",
        "theatre_address": "Formerly Jazz Cinemas, 2nd Floor, Phoenix Market City, Velachery Main Road, Velachery, Chennai, Tamil Nadu 600042, India",
        "theatre_map_location": "https://goo.gl/maps/dyZ4PmF5v1wDSiw47?coh=178572&entry=tt",
        "theatre_lat_long": "12.992071,80.217159"
      },
      {
        "theatre_name": "Rohini Silver Screens: Koyambedu",
        "theatre_address": "141/2, Poonamallee High Road, Koyembedu, Near St. Thomas College Of Arts And Science, Chennai, Tamil Nadu 600107, India\n",
        "theatre_map_location": "https://goo.gl/maps/2thRrTnNTvdP1LiE8?coh=178572&entry=tt",
        "theatre_lat_long": "13.075767,80.195872"
      },
      {
        "theatre_name": "Kasi Talkies Dolby Atmos: Ashok Nagar",
        "theatre_address": "No-4, Pillaiyar Koil St, Jafferkhanpet, Chennai, Tamil Nadu 600083, India",
        "theatre_map_location": "https://goo.gl/maps/Xf3shLAYwrnvY4di7?coh=178572&entry=tt",
        "theatre_lat_long": "13.031586,80.206537"
      },
      {
        "theatre_name": "SPI: S2 Theyagaraja - Thiruvanmiyur, Chennai",
        "theatre_address": "60, LB Road, Ranganatha Puram, Thiruvanmiyur, Chennai, Tamil Nadu 600041, India\n",
        "theatre_map_location": "https://goo.gl/maps/Sh6ZEV7XCeVDq761A?coh=178572&entry=tt",
        "theatre_lat_long": "12.989515,80.256437"
      },
      {
        "theatre_name": "PVR: VR Chennai, Anna Nagar",
        "theatre_address": "3rd Floor, VR Mall, MetroZone, No 44, Pillaiyar Koil Street, Jawaharlal Nehru Road, Anna Nagar, Chennai, Tamil Nadu 600040, India",
        "theatre_map_location": "https://goo.gl/maps/Xmas7EfzB34uSrby7?coh=178572&entry=tt",
        "theatre_lat_long": "13.082561,80.194803"
      },
      {
        "theatre_name": "Cinepolis: BSR Mall, OMR, Thoraipakkam",
        "theatre_address": "BSR Mall, Thoraipakkam, Seevaram, Oggiyamduraipakkam, Chennai, Tamil Nadu 600097, India",
        "theatre_map_location": "https://goo.gl/maps/zXba7rFBAYZcKMS58?coh=178572&entry=tt",
        "theatre_lat_long": "12.949551,80.240281"
      },
      {
        "theatre_name": "SPI: Sathyam Cinemas - Royapettah, Chennai",
        "theatre_address": "8, Thiru Vi Ka Road, Royapettah, Chennai, Tamil Nadu 600014, India",
        "theatre_map_location": "https://goo.gl/maps/CYN6xi9T7qtfG2XCA?coh=178572&entry=tt",
        "theatre_lat_long": "13.055369,80.257966"
      }
    ])

  )
}