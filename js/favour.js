let firstImage = document.getElementById('first-image')
let secondImage = document.getElementById("tonic")
let thirdImage = document.getElementById('highBlood')
let fourthImage = document.getElementById('multivitamin')
let fifthImage = document.getElementById('vaseline')
let sixthImage = document.getElementById('antibiotic')
let sevenImage = document.getElementById('cancer')
let Images1 = new Array (
  "images/pharm2.jpg",
  "images/childrenphoto.jpg",
  "images/pharm6.jpg",
  "images/pharm1.jpg"
)

let Images2 = new Array (
  "images/blood_tonic_medicine.jpg",
  "images/bunto.png",
  "images/cancer2.jpg",
  "images/third-antibotic.jpg"
)

let Images3 = new Array(
  "images/High blood pressure/losartan-losagen-50mg.jpg",
  "images/High blood pressure/medicine 2.jpg",
  "images/High blood pressure/medicine 3.jpeg",
  "images/Emzoron.jpeg"
)

let Images4 = new Array (
  "images/multivitamin/Bottle of Centrum Multigummies Women Vitamins.avif",
  "images/multivitamin/Multivitamin-Women-Wellvita.jpg",
  "images/vitamins.jpg",
  "images/vitamins2.jpg"
)

let Images5 = new Array (
  "images/vaseline/Nivea cream.jpeg",
  "images/vaseline/Extract img.jpeg",
  "images/vaseline/vaseline.jpeg",
  "images/dove.jpg"
)

let Images6 = new Array (
  "images/antibiotics.jpg",
  "images/another-antibiotic.jpg",
  "images/antibiotic.jpg",
  "images/antibiotic2.jpg"
)

let Images7 = new Array (
  "images/cancer.jpg",
  "images/cancerdrugs.jpg",
  "images/cancerdrugs3.jpg",
  "images/cancerdrugs4.jpg"
)

let len = Images1.length
let len2 = Images2.length
let len3 = Images3.length
let len4 = Images4.length
let len5 = Images5.length
let len6 = Images6.length
let len7 = Images7.length
let i = 0


  function load() {
    if ( i > len-1, i > len2-1, i > len3-1, i > len4-1, i > len5-1, i > len6-1, i > len7-1) {
      i = 0
    }

    firstImage.src = Images1[i]
    secondImage.src = Images2[i]
    thirdImage.src = Images3[i]
    fourthImage.src = Images4[i]
    fifthImage.src = Images5[i]
    sixthImage.src = Images6[i]
    sevenImage.src = Images7[i]
    i++
    setTimeout("load()", 4000)
  }

   
   let year = new Date()
   document.getElementById('year').innerHTML = year.getFullYear()


 

