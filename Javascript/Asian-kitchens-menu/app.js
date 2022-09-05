const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
  {
    id: 10,
    title: "Kuru Fasulye",
    category: "Turkey",
    price: 5.99,
    img:
      "https://pratikevyemekleritarifi.com/image/yemek-tarifleri/sebzeli-yemek-tarifleri/sulu-yemek-tarifleri/kuru-fasulye-5e789accca071.jpg",
    desc: `Kuru fasulyemiz bol protein kaynakli besinlerimizden birisidir.`,
  },
];

// Kategorileri olusturuyoruz

const categories = menu.reduce((values, item) => {  // reduce metotu ile butonlarin isimlerini diziden cekecegiz.
  if (!values.includes(item.category)) {   // includes ile sürekli dönen elemanlar icerisinde aynisi var mi bakiyoruz.
    values.push(item.category)  // Eger tekrari olmayan eleman olursa categories dizisine pushluyoruz.
  }
  return values;  //  Dönen isimleri dizi halinde cikariyoruz.
},
["All"]   // Reduce metotu ek olarak ilk elemani bizden ister. İlk elemana "All" ekliyoruz.
);

// Buttonlari olusturuyoruz

for (let i = 0; i < categories.length; i++) {   // kategorilere aldigimiz isimlerin sayisi kadar döngü olusturuyoruz.
  const btnContainer = document.querySelector(".btn-container");  // Container tagini seciyoruz.
  const newButton = document.createElement("button"); // newButton degiskenine button olusturma kodunu yaziyoruz.
  newButton.setAttribute("type", "button"); // button taginin icerisine type = "button" ifadesini veriyoruz.
  newButton.setAttribute("data", categories[i]);  // ayni sekilde data = "All"... olacak şekilde 0. indisten döndürüyoruz.
  newButton.addEventListener("click", buttonClick); // buttonumuza click event olusturuyoruz.
  newButton.classList.add("btn", "btn-item", "btn-outline-dark"); // butonumuza classlar ekliyoruz.
  newButton.innerHTML = categories[i];  // button olusturma degiskenimize isimleri yazdiriyoruz.
  btnContainer.append(newButton); // Ardindan container taginin içerisinde buttonlarimizi yerleştiriyoruz.
}

// Buttonlarin calistiriyoruz

function buttonClick() { 
  let filter = menu.filter(item => item.category == this.getAttribute("data"))  // filter metotu ile tikladigimiz buttonun datasindaki degeri filtreliyoruz.
  this.getAttribute("data") == "All" ? filter = menu : ""; // Eger All esitse filter degiskenini tekrar menuye esitliyoruz.
  let result = filter.map((itemResult) => {  // Filtrelenmiş olan bilgileri map metotu ile şekillendiriyoruz.
    return `<div class="menu-items col-lg-6 col-sm-12">
      <img src="${itemResult.img}" alt="" class = "photo"> 
      <div class="menu-info">
      <div class="menu-title">
        <h4>${itemResult.title}</h4>
        <h4 class = "price">${itemResult.price}</h4>
      </div>
      <div class = "menu-text">${itemResult.desc}</div>
      </div>
    </div>
    `;
  }).join("");    // Bu sekillendirdiğimiz bilgiler dizi olarak döndüğü için join metotu ile stringe çeviriyoruz.
  const sectionCenter = document.querySelector(".section-center");  
  sectionCenter.innerHTML = result; // Daha sonra ekrana yazdiriyoruz.
}

// Sayfa acilir acilmaz hepsini göstermesini sagliyoruz.

let result = menu.map((itemResult) => {   
  return `<div class="menu-items col-lg-6 col-sm-12">
    <img src="${itemResult.img}" alt="" class = "photo">
    <div class="menu-info">
    <div class="menu-title">
      <h4>${itemResult.title}</h4>
      <h4 class = "price">${itemResult.price}</h4>
    </div>
    <div class = "menu-text">${itemResult.desc}</div>
    </div>
  </div>
  `;
}).join("");
const sectionCenter = document.querySelector(".section-center");
sectionCenter.innerHTML = result;
