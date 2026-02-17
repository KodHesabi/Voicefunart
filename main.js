/*
const path = window.location.pathname;
const match = path.match(/page(\d+)/);
const currentPage = match ? Number(match[1]) : 1;
const formDOM = document.querySelector(".search-form");
const searchInputDOM = document.querySelector("#searchInput");
const resultsDOM = document.querySelector("#search-results");
const pageSize = 20;




let allItems = [];
let filteredItems = [];
//formun submit olmasını engellemek için lazım form içinde bir butona bastığımızda refresh atmayacak.
formDOM.addEventListener("submit", (e) => {
  e.preventDefault();
});

// json dosyasını çagır renderpage dönder
fetch("data.json")
  .then(res => res.json())
  .then(data => {
    allItems = data;
    filteredItems = data;
    renderPage();
  });

searchInputDOM.addEventListener("input", (e) => {
  const value = e.target.value.trim().toLowerCase();

  filteredItems = allItems.filter(item =>
    item.name.toLowerCase().includes(value)
  );

  renderPage();
});

resultsDOM.addEventListener("click", function(e) {

  if (e.target.classList.contains("play-btn")) {

    const parent = e.target.closest(".voice-item");

    const staticImg = parent.querySelector(".voice-static");
    const animatedImg = parent.querySelector(".voice-animated");

    if (animatedImg) {
      staticImg.style.opacity = "0";
      animatedImg.style.opacity = "1";
    }

  }

});


function renderPage() {
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;

  const pageItems = filteredItems.slice(start, end);

  let result = "";

  pageItems.forEach(item => {

    result += `
      <div class="voice-item">
        <div class="voice-image">
          <img class="voice-static" src="${item.images.static}">
          ${
            item.images.animated 
              ? `<img class="voice-animated" src="${item.images.animated}">`
              : ""
          }
        </div>
        <button class="play-btn">${item.name}</button>
      </div>
    `;
  });

  resultsDOM.innerHTML = result;
}
*/
//! JHSON yazıldı
/*
var itemler = [
  {
    id: "btn_baslangic",
    class:"btn-primary",
  },

  {
    type: "item1",
    name: "Sate sate sate",
    img: "resim/meliodas.jpg",
    id: "btn1",
  },

  {
    type: "item2",
    name: "tatakae tatakae",
    img: "resim/eren.jpg",
    id: "btn2",
  },

  {
    type: "item3",
    name: "I say discoo",
    img: "resim/shinobigif.gif",
    id: "btn3",
  },


  {
    type: "item4",
    name: "baka baka bakaa",
    img: "resim/bakaa/images.jpg",
    id: "btn4",
  },

  {
    type: "item5",
    name: "okawai koto",
    img: "resim/kaguya03.jpg",
    id: "btn5",
  },

  {
    type: "item6",
    name: "ayayaa ayayaa",
    img: "resim/ayayya/ayaya-yeah1.gif",
    id: "btn6",
  },

  {
    type: "item7",
    name: "Gambare Gabimaru",
    img: "resim/gabimaru.jpg",
    id: "btn7",
  },

  {
    type: "item8",
    name: "ara sayanoraa",
    img: "resim/ara-sayanora.jpg",
    id: "btn8",
  },

  {
    type: "item9",
    name: "ara araa",
    img: "resim/akeno-ara2.jpg",
    id: "btn9"
  },
  {
    type: "item10",
    name: "ho mete yaro",
    img: "resim/sukuna2.jpg",
    id: "btn10",
  },

  {
    type: "item11",
    name: "omae wa mou shindeiru",
    img: "resim/omae-wa.jpg",
    id: "btn11",
  },

  {
    type: "item12",
    name: "naniii",
    img: "resim/nani.jpg",
    id: "btn12"
  },
  {
    type: "item13",
    name: "yare yare",
    img: "resim/gojo-maceraları.jpg",
    id: "btn13",
  },

  {
    type: "item14",
    name: "moshi moshii",
    img: "resim/moshi-moshi.jpg",
    id: "btn14",
  },

  {
    type: "item15",
    name: "ram and rem",
    img: "resim/rem-ram1.jpg",
    id: "btn15",
  },

  {
    type: "item16",
    name: "Mary Saotome",
    img: "resim/bakaa/mary.jpg",
    id: "btn16",
  },

  {
    type: "item17",
    name: "tabii efendim!",
    img: "resim/spiderman.jpg",
    id: "btn17",
  },

  {
    type: "item18",
    name: "Bakaa",
    img: "resim/bakaa/bunyy.jpg",
    id: "btn18",
  },

  {
    type: "item19",
    name: "gambare gambare",
    img: "resim/sukuna01.jpg",
    id: "btn19",
  },

  {
    type: "item20",
    name: "baka",
    img: "resim/bakaa/baka.gif",
    id: "btn20",
  },

  {
    type: "item21",
    name: "like a baka",
    img: "resim/bakaa/like-a-baka.jpg",
    id: "btn21",
  },

  {
    type: "item22",
    name: "ya metee kudasai",
    img: "resim/maxresdefault.jpg",
    id: "btn22",
  },

  {
    type: "item23",
    name: "nee sama",
    img: "resim/rem.jpg",
    id: "btn23"
  },

  {
    type: "item24",
    name: "shikanoko nokonoko koshitantan ",
    img: "resim/shikanoko.jpg",
    id: "btn24"
  },

  {
    type: "item25",
    name: "Naoya slap ",
    img: "resim/naoya/naoya-slap.jpg",
    id: "btn25"
  },



];
//! JHSON bitti

*/


/*  function searchFunc(itemler){
     var itemler= [
      {type:"item1", name:"Sate sate sate" , img:"resim/meliodas.jpg" , id:"btn1" },
      {type:"item2", name:"tatakae tatakae" , img:"resim/eren.jpg" , id:"btn2"},
      {type:"item3", name:"nee sama", img:"resim/rem.jpg" , id:"btn3"},
      {type:"item4", name:"gambare gambare", img:"resim/sukuna01.jpg", id:"btn4"}, 
      {type:"item5", name:"okawai koto", img:"resim/kaguya03.jpg" , id:"btn5"},
      {type:"item6", name:"yare yare", img:"resim/gojo-maceraları.jpg" , id:"btn6"},
      {type:"item7", name:"tabii efendim!", img:"resim/spiderman.jpg" , id:"btn7"},
      {type:"item8", name:"ara sayanoraa", img:"resim/ara-sayanora.jpg" , id:"btn8"},
      {type:"item9", name:"ara araa", img:"resim/akeno-ara2.jpg" , id:"btn9"},
      {type:"item10", name:"ho mete yaro", img:"resim/sukuna2.jpg" , id:"btn10"},
      {type:"item11", name:"omae wa mou shindeiru", img:"resim/omae-wa.jpg" , id:"btn11"},
      {type:"item12", name:"naniii", img:"resim/nani.jpg" , id:"btn12"},
      {type:"item13", name:"ayayaa ayayaa", img:"resim/ayaya-yeah.gif" , id:"btn13"},
      
    
    ]; 
    
    const searchWrapperDOM =  document.querySelector(".voice-wrapper .voice-list")
    let result= " "
    itemler.forEach((item) => {
        result+=`
        <li class = "voice-item" type = ${item.type} >
        <div class="voice-image">
          
          <img src = ${item.img} alt="" class="search-img"/>
          
        </div>
        <div class="voice-info">
          <button id= ${item.id} class="btn btn-primary"  name=${item.name} >${item.name} </button>
        </div>
      </li>

        `
    })
    searchWrapperDOM.innerHTML = result
    console.log(searchWrapperDOM)

    
  
} */
/* searchFunc()  */


//! Search Başlangıc
/*

const searchInputDOM = document.querySelector("#searchInput"); 
let value = " ";
let filtered = [];

//!1.
searchInputDOM.addEventListener("input", (e) => {
  value = e.target.value;
  value = value.trim().toLowerCase();

  filtered = itemler.filter((item) =>
    item.name.trim().toLowerCase().includes(value)
  );
  let result = "";

  filtered.forEach((item) => {
    result += `
    <li class = "voice-item" type = ${item.type} >
    <div class="voice-image">
      
      <img src = ${item.img} alt="" />
      
    </div>
    <div class="voice-info">
      <button id= ${item.id} class="btn btn-primary"  name=${item.name} >${item.name} </button>
    </div>
  </li>
    `;
  });
  searchWrapperDOM.innerHTML = result;
 

  console.log(filtered);

  var btn1 = document.querySelector("#btn1");
  var btn2 = document.querySelector("#btn2");
  var btn3 = document.querySelector("#btn3");
  var btn4 = document.querySelector("#btn4");
  var btn5 = document.querySelector("#btn5");
  var btn6 = document.querySelector("#btn6");
  var btn7 = document.querySelector("#btn7");
  var btn8 = document.querySelector("#btn8");
  var btn9 = document.querySelector("#btn9");
  var btn10 = document.querySelector("#btn10");
  var btn11 = document.querySelector("#btn11");
  var btn12 = document.querySelector("#btn12");
  var btn13 = document.querySelector("#btn13");
  const btn14 = document.querySelector("#btn14");
  const btn15 = document.querySelector("#btn15");
  const btn16 = document.querySelector("#btn16");
  const btn17 = document.querySelector("#btn17");
  const btn18 = document.querySelector("#btn18");
  const btn19 = document.querySelector("#btn19");
  const btn20 = document.querySelector("#btn20");
  const btn21 = document.querySelector("#btn21");
  const btn22 = document.querySelector("#btn22");
  const btn23 = document.querySelector("#btn23");
  const btn24 = document.querySelector("#btn24");
  const btn25 = document.querySelector("#btn25");

  

  


  if (btn1 != null) {
    btn1.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
      let sayi = localStorage.getItem("clicksayac")
      ++sayi;
      localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn1_sesi.play();
      btn1_sesi.currentTime = 0.5;
    });
  }

  if (btn2 != null) {
    btn2.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
      let sayi = localStorage.getItem("clicksayac")
      ++sayi;
      localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn2_sesi.play();
      btn2_sesi.currentTime = 0;
    });
  }

  if (btn3 != null) {
    btn3.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
      let sayi = localStorage.getItem("clicksayac")
      ++sayi;
      localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn3_sesi.play();
      btn3_sesi.currentTime = 0;

      setTimeout(()=> {
        let itemImage0Element = document.querySelector(".item-image0");
        itemImage0Element.style.opacity = 0;
    
      // "item-image1" sınıfına sahip öğenin görünürlüğünü 1 yap
        let itemImage1Element = document.querySelector(".item-image1");
        itemImage1Element.style.opacity = 1;
    
        let itemImage2Element = document.querySelector(".item-image2");
        itemImage2Element.style.opacity = 0;
    
    
      },4500)
      
      setTimeout(() => {
    
        let itemImage0Element = document.querySelector(".item-image0");
        itemImage0Element.style.opacity = 0;
    
      // "item-image1" sınıfına sahip öğenin görünürlüğünü 1 yap
        let itemImage1Element = document.querySelector(".item-image1");
        itemImage1Element.style.opacity = 0;
    
        let itemImage2Element = document.querySelector(".item-image2");
        itemImage2Element.style.opacity = 1;
    
        
      }, 8000);
    
      setTimeout(() => {
    
        let itemImage0Element = document.querySelector(".item-image0");
        itemImage0Element.style.opacity = 1;
    
      // "item-image1" sınıfına sahip öğenin görünürlüğünü 1 yap
        let itemImage1Element = document.querySelector(".item-image1");
        itemImage1Element.style.opacity = 0;
    
        let itemImage2Element = document.querySelector(".item-image2");
        itemImage2Element.style.opacity = 0;
    
        
      }, 12000);
    });
  }


  if (btn4 != null) {
    btn4.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn4_sesi.play();
      btn4_sesi.currentTime = 0;
    });
  }

  if (btn5 != null) {
    btn5.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
      let sayi = localStorage.getItem("clicksayac")
      ++sayi;
      localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn5_sesi.play();
      btn5_sesi.currentTime = 0.3;
    });
  }

  if (btn6 != null) {
    btn6.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
      let sayi = localStorage.getItem("clicksayac")
      ++sayi;
      localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn6_sesi.play();
      btn6_sesi.currentTime = 0;
    });
  }

  if (btn7 != null) {
    btn7.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn7_sesi.play();
      btn7_sesi.currentTime = 0.6;
    });
  }

  if (btn8 != null) {
    btn8.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
      let sayi = localStorage.getItem("clicksayac")
      ++sayi;
      localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn8_sesi.play();
      btn8_sesi.currentTime = 0;
    });
  }

  if (btn9 != null) {
    btn9.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn9_sesi.play();
      btn9_sesi.currentTime = 0;
    });
  }

  if (btn10 != null) {
    btn10.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn10_sesi.play();
      btn10_sesi.currentTime = 0.7;
    });
  }

  if (btn11 != null) {
    btn11.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn11_sesi.play();
      btn11_sesi.currentTime = 0;
    });
  }

  if (btn12 != null) {
    btn12.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn12_sesi.play();
      btn12_sesi.currentTime = 0;
      e.preventDefault();
    });
  }

  if (btn13 != null) {
    btn13.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn13_sesi.play();
      btn13_sesi.currentTime = 0;
      e.preventDefault();
    });
  }

  if (btn14 != null) {
    btn14.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn14_sesi.play();
      btn14_sesi.currentTime = 0;
      e.preventDefault();
    });
  }

  if (btn15 != null) {
    btn15.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn15_sesi.play();
      btn15_sesi.currentTime = 0;
      e.preventDefault();
    });
  }

  if (btn16 != null) {
    btn16.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn16_sesi.play();
      btn16_sesi.currentTime = 0;
      e.preventDefault();
    });
  }

  if (btn17 != null) {
    btn17.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn17_sesi.play();
      btn17_sesi.currentTime = 0;
      e.preventDefault();
    });
  }

  if (btn18 != null) {
    btn18.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn18_sesi.play();
      btn18_sesi.currentTime = 0;
      e.preventDefault();
    });
  }

  if (btn19 != null) {
    btn19.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn19_sesi.play();
      btn19_sesi.currentTime = 0.3;
      e.preventDefault();
    });
  }

  if (btn20 != null) {
    btn20.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn20_sesi.play();
      btn20_sesi.currentTime = 0;
      e.preventDefault();
    });
  }

  if (btn21 != null) {
    btn21.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn21_sesi.play();
      btn21_sesi.currentTime = 0;
      e.preventDefault();
    });
  }

  if (btn22 != null) {
    btn22.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn22_sesi.play();
      btn22_sesi.currentTime = 0;
      e.preventDefault();
    });
  }

  if (btn23 != null) {
    btn23.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn23_sesi.play();
      btn23_sesi.currentTime = 0;
      e.preventDefault();
    });
  }

  if (btn24 != null) {
    btn24.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn24_sesi.play();
      btn24_sesi.currentTime = 0;
      e.preventDefault();
    });
  }

  if (btn25 != null) {
    btn25.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn25_sesi.play();
      btn25_sesi.currentTime = 0;
      e.preventDefault();
    });
  }




});
*/

//! Search Bitis

//? butonlar eklendi

//const searchWrapperDOM = document.querySelector(".voice-wrapper .voice-list");
var btn_baslangic = document.querySelector("#btn_baslangic");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var btn5 = document.querySelector("#btn5");
var btn6 = document.querySelector("#btn6");
var btn7 = document.querySelector("#btn7");
var btn8 = document.querySelector("#btn8");
var btn9 = document.querySelector("#btn9");
var btn10 = document.querySelector("#btn10");
var btn11 = document.querySelector("#btn11");
var btn12 = document.querySelector("#btn12");
var btn13 = document.querySelector("#btn13");
const btn14 = document.querySelector("#btn14");
const btn15 = document.querySelector("#btn15");
const btn16 = document.querySelector("#btn16");
const btn17 = document.querySelector("#btn17");
const btn18 = document.querySelector("#btn18");
const btn19 = document.querySelector("#btn19");
const btn20 = document.querySelector("#btn20");
const btn21 = document.querySelector("#btn21");
const btn22 = document.querySelector("#btn22");
const btn23 = document.querySelector("#btn23");
const btn24 = document.querySelector("#btn24");
const btn25 = document.querySelector("#btn25");
/* localStorage.setItem("clicksayac","0")
let sayac = localStorage.getItem("clicksayac") //! click sayacın değeri
console.log(sayac) */
var sayitut = document.querySelector("#sayitut");
var sayitut2 = document.querySelector("#sayitut2");
//! data içerisndeki result ve datayı name ve ürün olarak alacagım.

let currentAudio = null; // global değişken
let activeItem = null;
let activeTimeouts = [];

//pagination
function renderPagination(currentPage, totalPages) {

  const pagination = document.querySelector("#pagination");
  pagination.innerHTML = "";

  function createLink(text, page, disabled = false, isActive = false) {

    const link = document.createElement("a");
    link.textContent = text;
    link.classList.add("page-btn");

    if (isActive) link.classList.add("active");
    if (disabled) link.classList.add("disabled");

    if (!disabled) {
      link.href = "page" + page + ".html";
    } else {
      link.href = "#";
    }

    pagination.appendChild(link);
  }

  // ⏮ En baş
  createLink("<<", 1, currentPage === 1);

  // ◀ Geri
  createLink("<", currentPage - 1, currentPage === 1);

  // Aktif ±2 hesaplama
  let start = currentPage - 2;
  let end = currentPage + 2;

  if (start < 1) start = 1;
  if (end > totalPages) end = totalPages;

  for (let i = start; i <= end; i++) {
    createLink(i, i, false, i === currentPage);
  }

  // ▶ İleri
  createLink(">", currentPage + 1, currentPage === totalPages);

  // ⏭ En son
  createLink(">>", totalPages, currentPage === totalPages);
}



document.addEventListener("click", function(e) {

  if (!e.target.classList.contains("btn-primary")) return;

  const parent = e.target.closest(".voice-item");
  const staticImg = parent?.querySelector(".voice-static");
  const animateImgs = parent?.querySelectorAll(".voice-animate");

  // 🔢 GLOBAL SAYAÇ
  let sayi = Number(localStorage.getItem("clicksayac")) || 0;
  sayi++;
  localStorage.setItem("clicksayac", sayi);

  const globalCounterDOM = document.querySelector("#sayitut");
  if (globalCounterDOM) {
    globalCounterDOM.textContent = sayi;
  }

  // 🔊 SES
  const buttonId = e.target.id;
  const soundId = buttonId + "_sesi";
  const sound = document.getElementById(soundId);

  if (sound) {

    // Eğer başka bir ses çalıyorsa durdur
    if (currentAudio && currentAudio !== sound) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    sound.currentTime = 0;
    sound.play();

    currentAudio = sound; // yeni çalan sesi kaydet
  }


  // Eğer başka bir item animasyon oynatıyorsa durdur

if (activeItem && activeItem !== parent) {

  const oldStatic = activeItem.querySelector(".voice-static");
  const oldGifs = activeItem.querySelectorAll(".voice-animate");

  oldGifs.forEach(img => img.style.opacity = "0");
  if (oldStatic) oldStatic.style.opacity = "1";

  // eski timeoutları temizle
  activeTimeouts.forEach(t => clearTimeout(t));
  activeTimeouts = [];
}


  // 🎬 ANİMASYON
if (!e.target.dataset.animate) return;

activeItem = parent;

if (staticImg) staticImg.style.opacity = "0";

animateImgs.forEach(img => img.style.opacity = "0");

let totalDelay = 0;

animateImgs.forEach((img) => {

  const duration = Number(img.dataset.duration) || 3000;

  const timeout = setTimeout(() => {
    img.style.opacity = "1";
  }, totalDelay);

  activeTimeouts.push(timeout);

  totalDelay += duration;
});

const endTimeout = setTimeout(() => {

  animateImgs.forEach(img => img.style.opacity = "0");
  if (staticImg) staticImg.style.opacity = "1";

}, totalDelay);

activeTimeouts.push(endTimeout);


  

});





//arama

const searchInput = document.querySelector("#searchInput");
const voiceList = document.querySelector(".voice-list"); // mevcut liste

// Orijinal HTML’i sakla
const originalHTML = voiceList.innerHTML;

// JSON verisi
let voiceData = [];

// JSON yükle
fetch("data.json")
  .then(res => res.json())
  .then(data => {
    voiceData = data;
  })
  .catch(err => console.error("JSON yüklenemedi:", err));

// Arama input event
searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase().trim();

  // Eğer input boşsa eski sayfa içeriğini geri yükle
  if (!query) {
    voiceList.innerHTML = originalHTML;
    attachAudioEvents(); // eski HTML’deki butonlara ses olayını tekrar bağla
    return;
  }

  // JSON içinde filtrele
  const filtered = voiceData.filter(item =>
    item.name.toLowerCase().includes(query)
  );

  renderResults(filtered);
});

//deneme render fonkisyonu
function renderResults(results) {
  voiceList.innerHTML = ""; // önce temizle

  if (results.length === 0) {
    voiceList.innerHTML = "<li class='voice-item'><p>Sonuç bulunamadı</p></li>";
    return;
  }

  results.forEach(item => {
    const li = document.createElement("li");
    li.classList.add("voice-item");

    // Görsel container
    const voiceImageDiv = document.createElement("div");
    voiceImageDiv.classList.add("voice-image");

    // Static image
    const staticImg = document.createElement("img");
    staticImg.src = item.img.static;
    staticImg.alt = item.name;
    staticImg.classList.add("voice-static");
    voiceImageDiv.appendChild(staticImg);

    // Animate images (dizi)
    if (item.img.animate && Array.isArray(item.img.animate)) {
      item.img.animate.forEach(anim => {
        const animImg = document.createElement("img");
        animImg.src = anim.src;
        animImg.alt = item.name;
        animImg.classList.add("voice-animate");
        animImg.style.opacity = "0"; // başta görünmez
        animImg.dataset.duration = anim.duration || 3000;
        voiceImageDiv.appendChild(animImg);
      });
    }

    // Info container
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("voice-info");
    infoDiv.innerHTML = `
      <button class="btn btn-primary" data-animate="true" name="${item.name}">
        ${item.name}
      </button>
      <audio src="${item.audio}" preload="auto"></audio>
    `;

    li.appendChild(voiceImageDiv);
    li.appendChild(infoDiv);
    voiceList.appendChild(li);
  });

  attachAudioEvents(); // ses ve animasyon olaylarını bağla
}

function attachAudioEvents() {
  const buttons = voiceList.querySelectorAll("button");

  buttons.forEach(btn => {
    const audio = btn.parentElement.querySelector("audio");
    const parent = btn.closest(".voice-item");
    const staticImg = parent.querySelector(".voice-static");
    const animateImgs = parent.querySelectorAll(".voice-animate");

    let activeTimeouts = [];

    btn.addEventListener("click", () => {
      // SES
      if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      audio.currentTime = 0;
      audio.play();
      currentAudio = audio;

      // Animasyon
      // Önce eski animasyonları durdur
      animateImgs.forEach(img => img.style.opacity = "0");
      staticImg.style.opacity = "0";
      activeTimeouts.forEach(t => clearTimeout(t));
      activeTimeouts = [];

      // Her GIF’i sırayla göster
      let totalDelay = 0;
      animateImgs.forEach(img => {
        const duration = Number(img.dataset.duration) || 3000;
        const timeout = setTimeout(() => {
          img.style.opacity = "1";
        }, totalDelay);
        activeTimeouts.push(timeout);
        totalDelay += duration;
      });

      // Son GIF bittikten sonra static img’i geri göster
      const endTimeout = setTimeout(() => {
        animateImgs.forEach(img => img.style.opacity = "0");
        staticImg.style.opacity = "1";
      }, totalDelay);

      activeTimeouts.push(endTimeout);
    });
  });
}




// JSON’dan filtrelenen sonuçları render eden fonksiyon Çalısıyor.

/*
function renderResults(results) {
  voiceList.innerHTML = ""; // önce temizle
 
  if (results.length === 0) {
    const li = document.createElement("li");
    li.classList.add("voice-item");
    li.innerHTML = "<p>Sonuç bulunamadı</p>";
    voiceList.appendChild(li);
    return;
  }

  results.forEach(item => {
    const li = document.createElement("li");
    li.classList.add("voice-item");

    li.innerHTML = `
      <div class="voice-image">
        <img src="${item.img.singleImage}" alt="${item.name}" class="voice-static">
      </div>
      <div class="voice-info">
        <button id="${item.id}" class="btn btn-primary" name="${item.name}">
          ${item.name}
        </button>
      </div>
    `;

    voiceList.appendChild(li);
  });
  

  attachAudioEvents(); // filtrelenen sonuçların butonlarına ses olayını bağla
}


// Tüm .voice-item içindeki butonlara ses olayını bağlayan fonksiyon
function attachAudioEvents() {
  const buttons = voiceList.querySelectorAll("button");
  buttons.forEach(btn => {
    const sound = document.getElementById(btn.id + "_sesi");
    btn.addEventListener("click", () => {
      if (sound) {
        if (currentAudio && currentAudio !== sound) {
          currentAudio.pause();
          currentAudio.currentTime = 0;
        }
        sound.currentTime = 0;
        sound.play();
        currentAudio = sound;
      }
    });
  });
}

*/




/*

// SEARCH ALGORYTMA
const searchInput = document.querySelector("#searchInput");
const voiceItems = document.querySelectorAll(".voice-item");

searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase().trim();

  voiceItems.forEach(item => {
    const button = item.querySelector("button");
    const name = button?.getAttribute("name")?.toLowerCase() || "";

    // Eğer input boşsa tüm itemler görünür
    if (!query || name.includes(query)) {
      item.style.display = "flex"; // veya block, layout’a göre
    } else {
      item.style.display = "none";
    }
  });
});

*/




/*




// ses çalısıyor sayaca ekliyor ama aynı anda 2 ses çalabiliyor

document.addEventListener("click", function(e) {

  if (!e.target.classList.contains("btn-primary")) return;

  const parent = e.target.closest(".voice-item");

  const staticImg = parent?.querySelector(".voice-static");
  const animateImgs = parent?.querySelectorAll(".voice-animate");

  // 🔢 GLOBAL SAYAÇ
  let sayi = Number(localStorage.getItem("clicksayac")) || 0;
  sayi++;
  localStorage.setItem("clicksayac", sayi);

  const globalCounterDOM = document.querySelector("#sayitut");
  if (globalCounterDOM) {
    globalCounterDOM.textContent = sayi;
  }

  // 🔊 SES
  const buttonId = e.target.id;
  const soundId = buttonId + "_sesi";
  const sound = document.getElementById(soundId);

  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }

  // 🎬 ANİMASYON
  if (!e.target.dataset.animate) return;

  if (staticImg) staticImg.style.opacity = "0";

  animateImgs.forEach(img => img.style.opacity = "0");

  animateImgs.forEach((img, index) => {
    setTimeout(() => {
      img.style.opacity = "1";
    }, index * 3000);
  });

});

*/

/*
// çalışan click olayı

document.addEventListener("click", function(e) {

  if (!e.target.classList.contains("btn-primary")) return;

  const parent = e.target.closest(".voice-item");

  const staticImg = parent?.querySelector(".voice-static");
  const animateImgs = parent?.querySelectorAll(".voice-animate");

  // 🔊 SES KISMI
  const buttonId = e.target.id;           // örn: btn2
  const soundId = buttonId + "_sesi";     // btn2_sesi

  const sound = document.getElementById(soundId);

  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }

  // 🎬 ANİMASYON VARSA
  if (!e.target.dataset.animate) return;

  if (staticImg) {
    staticImg.style.opacity = "0";
  }

  animateImgs.forEach(img => {
    img.style.opacity = "0";
  });

  animateImgs.forEach((img, index) => {
    setTimeout(() => {
      img.style.opacity = "1";
    }, index * 3000);
  });

});

*/


//! onclik codları
/*
btn_baslangic.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
    ++sayi;
  localStorage.setItem("clicksayac", sayi)
  console.log(sayi);
  btn_başlangic_sesi.play();
  btn_başlangic_sesi.currentTime = 0;
});


btn1.addEventListener("click", (e) => {

  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
    ++sayi;
  localStorage.setItem("clicksayac", sayi)
  console.log(sayi);
  btn1_sesi.play();
  btn1_sesi.currentTime = 0.6;
});

btn2.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
    ++sayi;
  localStorage.setItem("clicksayac", sayi)
  console.log(sayi);
  btn2_sesi.play();
  btn2_sesi.currentTime = 0;
});

btn3.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
    ++sayi;
  localStorage.setItem("clicksayac", sayi)
  console.log(sayi);
  btn3_sesi.play();
  btn3_sesi.currentTime = 0;

  setTimeout(() => {
    let itemImage0Element = document.querySelector(".item-image0");
    itemImage0Element.style.opacity = 0;

    // "item-image1" sınıfına sahip öğenin görünürlüğünü 1 yap
    let itemImage1Element = document.querySelector(".item-image1");
    itemImage1Element.style.opacity = 1;

    let itemImage2Element = document.querySelector(".item-image2");
    itemImage2Element.style.opacity = 0;


  }, 4500)

  setTimeout(() => {

    let itemImage0Element = document.querySelector(".item-image0");
    itemImage0Element.style.opacity = 0;

    // "item-image1" sınıfına sahip öğenin görünürlüğünü 1 yap
    let itemImage1Element = document.querySelector(".item-image1");
    itemImage1Element.style.opacity = 0;

    let itemImage2Element = document.querySelector(".item-image2");
    itemImage2Element.style.opacity = 1;


  }, 8000);

  setTimeout(() => {

    let itemImage0Element = document.querySelector(".item-image0");
    itemImage0Element.style.opacity = 1;

    // "item-image1" sınıfına sahip öğenin görünürlüğünü 1 yap
    let itemImage1Element = document.querySelector(".item-image1");
    itemImage1Element.style.opacity = 0;

    let itemImage2Element = document.querySelector(".item-image2");
    itemImage2Element.style.opacity = 0;


  }, 12000);


});


btn4.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
    ++sayi;
  localStorage.setItem("clicksayac", sayi)
  console.log(sayi);
  btn4_sesi.play();
  btn4_sesi.currentTime = 0;
});

btn5.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
    ++sayi;
  localStorage.setItem("clicksayac", sayi)
  console.log(sayi);
  btn5_sesi.play();
  btn5_sesi.currentTime = 0.2;
});

btn6.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
    ++sayi;
  localStorage.setItem("clicksayac", sayi)
  console.log(sayi);
  btn6_sesi.play();
  btn6_sesi.currentTime = 0;
});

btn7.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
    ++sayi;
  localStorage.setItem("clicksayac", sayi)
  console.log(sayi);
  btn7_sesi.play();
  btn7_sesi.currentTime = 0.6;
});

btn8.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
    ++sayi;
  localStorage.setItem("clicksayac", sayi)
  console.log(sayi);
  btn8_sesi.play();
  btn8_sesi.currentTime = 0;
});

btn9.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
    ++sayi;
  localStorage.setItem("clicksayac", sayi)
  console.log(sayi);
  btn9_sesi.play();
  btn9_sesi.currentTime = 0;
});

btn10.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
    ++sayi;
  localStorage.setItem("clicksayac", sayi)
  console.log(sayi);
  btn10_sesi.play();
  btn10_sesi.currentTime = 0.7;
});

btn11.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
    ++sayi;
  localStorage.setItem("clicksayac", sayi)
  console.log(sayi);
  btn11_sesi.play();
  btn11_sesi.currentTime = 0;
});

btn12.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
    ++sayi;
  localStorage.setItem("clicksayac", sayi)
  console.log(sayi);
  btn12_sesi.play();
  btn12_sesi.currentTime = 0;
});

btn13.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
    ++sayi;
  localStorage.setItem("clicksayac", sayi)
  console.log(sayi);
  btn13_sesi.play();
  btn13_sesi.currentTime = 0;
});

btn14.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
    ++sayi;
  localStorage.setItem("clicksayac", sayi)
  console.log(sayi);
  btn14_sesi.play();
  btn14_sesi.currentTime = 0;
});

btn15.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
    ++sayi;
  localStorage.setItem("clicksayac", sayi)
  console.log(sayi);
  btn15_sesi.play();
  btn15_sesi.currentTime = 0;
});

btn16.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
    ++sayi;
  localStorage.setItem("clicksayac", sayi)
  console.log(sayi);
  btn16_sesi.play();
  btn16_sesi.currentTime = 0;
});

btn17.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
    ++sayi;
  localStorage.setItem("clicksayac", sayi)
  console.log(sayi);
  btn17_sesi.play();
  btn17_sesi.currentTime = 0;
});

btn18.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
    ++sayi;
  localStorage.setItem("clicksayac", sayi)
  console.log(sayi);
  btn18_sesi.play();
  btn18_sesi.currentTime = 0;
});

btn19.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
    ++sayi;
  localStorage.setItem("clicksayac", sayi)
  console.log(sayi);
  btn19_sesi.play();
  btn19_sesi.currentTime = 0.3;
});

btn20.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
    ++sayi;
  localStorage.setItem("clicksayac", sayi)
  console.log(sayi);
  btn20_sesi.play();
  btn20_sesi.currentTime = 0;
});


btn21.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
    ++sayi;
  localStorage.setItem("clicksayac", sayi)
  console.log(sayi);
  btn21_sesi.play();
  btn21_sesi.currentTime = 0;
});

btn22.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
    ++sayi;
  localStorage.setItem("clicksayac", sayi)
  console.log(sayi);
  btn22_sesi.play();
  btn22_sesi.currentTime = 0;

  let itemImage3Element = document.querySelector(".item-image3");
  itemImage3Element.style.opacity = 0;

  let itemImage4Element = document.querySelector(".item-image4");
  itemImage4Element.style.opacity = 1;

  setTimeout(() => {
    let itemImage3Element = document.querySelector(".item-image3");
    itemImage3Element.style.opacity = 1;

    let itemImage4Element = document.querySelector(".item-image4");
    itemImage4Element.style.opacity = 0;

  }, 3500);

});

btn23.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
    ++sayi;
  localStorage.setItem("clicksayac", sayi)
  console.log(sayi);
  btn23_sesi.play();
  btn23_sesi.currentTime = 0;
});

btn24.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
    ++sayi;
  localStorage.setItem("clicksayac", sayi)
  console.log(sayi);
  btn24_sesi.play();
  btn24_sesi.currentTime = 0;
});

btn25.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
    ++sayi;
  localStorage.setItem("clicksayac", sayi)
  console.log(sayi);
  btn25_sesi.play();
  btn25_sesi.currentTime = 0;
});

*/





/*
var data=[]

var item1 = document.querySelector("#item1")
data.push(item1)

var item2 = document.querySelector("#item2")
data.push(item2) 

var item3 = document.querySelector("#item3")
data.push(item3)

var item4 = document.querySelector("#item4")
data.push(item4) 

var item5 = document.querySelector("#item5")
data.push(item5)
 
 btn içerisindeki değerleri aldım
var result=[]
var data1 = document.querySelector("#btn1")
result.push(data1.innerHTML)

var data2 = document.querySelector("#btn2")
 result.push(data2.innerHTML)  

 var data3 = document.querySelector("#btn3")
 result.push(data3.innerHTML)  

var data4 = document.querySelector("#btn4")
 result.push(data4.innerHTML) 

 var data5 = document.querySelector("#btn5")
result.push(data5.innerHTML)  



data.push(result)

  //! Birinci set Time
  setTimeout(() => {
    let itemImage0Elements = document.getElementsByClassName("item-image0");
  for (let i = 0; i < itemImage0Elements.length; i++) {
    itemImage0Elements[i].style.opacity = 0;
  }

  // Tüm "item-image1" sınıfına sahip öğelerin görünürlüğünü 1 yap
  let itemImage1Elements = document.getElementsByClassName("item-image1");
  for (let i = 0; i < itemImage1Elements.length; i++) {
    itemImage1Elements[i].style.opacity = 1;
  }
  let itemImage2Elements = document.getElementsByClassName("item-image2");
  for (let i = 0; i < itemImage2Elements.length; i++)
    {
      itemImage2Elements[i].style.opacity=0;
    }

  }, 4500);


  //? 2. SetTime
  setTimeout(() => {
    let itemImage0Elements = document.getElementsByClassName("item-image0");
  for (let i = 0; i < itemImage0Elements.length; i++) {
    itemImage0Elements[i].style.opacity = 0;
  }

  // Tüm "item-image1" sınıfına sahip öğelerin görünürlüğünü 1 yap
  let itemImage1Elements = document.getElementsByClassName("item-image1");
  for (let i = 0; i < itemImage1Elements.length; i++) {
    itemImage1Elements[i].style.opacity = 0;
  }
  let itemImage2Elements = document.getElementsByClassName("item-image2");
  for (let i = 0; i < itemImage2Elements.length; i++)
    {
      itemImage2Elements[i].style.opacity=1;
    }


  },8000);

  //! 3. Settime 
  let itemImage0Elements = document.getElementsByClassName("item-image0");
  for (let i= 0; i< itemImage0Elements.length; i++)
  {
    itemImage0Elements[i].style.opacity=1;
  }
*/