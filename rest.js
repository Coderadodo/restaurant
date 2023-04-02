const dataBase = [
    {
      id: 0,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "food1.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
  
    {
      id: 1,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "food2.jpg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 1,
      title: "diner double",
      category: "idiot",
      price: 13.99,
      img: "food3.jpg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 2,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "food4.jpg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 3,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "food5.jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 4,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "food6.jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 5,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "food2.jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 6,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "food4.jpg",   
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 7,
      title: "american classic",
      category: "lunch",
      price: 12.99,
     img: "food2.jpg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "ede",
      price: "1000.99",
      img: "food3.jpg", 
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 9,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "food6.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 9,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "food5.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 9,
      title: "bison steak",
      category: "idiot",
      price: 22.99,
      img: "food7.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    
    {
      id: 11,
      title: "Egusi and pandedyam ",
      category: "idiot",
      price: 50.99,
      img: "food1.jpg",
     // desc: `<button><h4>order<h4></button>`,
      desc: ` <button><h4>Place Order<h4></button>
                Click on the order button your meal will be available im 4minutes
        `,
      //desc: `  skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.<button>order</button>`,
    },
    
  ];
  const sectionCenter = document.querySelector('.section-center')
  //const victor= document.querySelectorAll('.filter-btn')
  const container = document.querySelector('.btn-container')
  window.addEventListener('DOMContentLoaded', function(){
  idiot(dataBase)
  displayadodo()
  })
  function idiot(dog){
    let dataBase = dog.map(function(vic){
       return `<article class="menu-item">
       <img src=${vic.img} class="photo" alt=${vic.title}  />
       <div class="item-info">
         <header>
           <h4>${vic.title}</h4>
           <h4 class="price">${vic.price}</h4>
         </header>
         <p class="item-text">${vic.desc}
         </p>
       </div>
       </article>`
      })
     dataBase = dataBase.join('')
     sectionCenter.innerHTML = dataBase 
  }
  function displayadodo(){
  const category = dataBase.reduce(function(lion,newButton){
    if(!lion.includes(newButton.category)){
      lion.push(newButton.category)
    }
  return lion
  },
  ['all'])
  // console.log(category)
  const categoryBtns = category.map(function(plate){
    return  `<button type="button" class="filter-btn" data-id=${plate}>${plate}</button>`
  })
  .join('')
  container.innerHTML =categoryBtns
  const victor= document.querySelectorAll('.filter-btn')
  victor.forEach(function(button){
    button.addEventListener('click', function(e){
      const category = e.currentTarget.dataset.id
      const govt = dataBase.filter(function(dataBaseAdo){
        if(dataBaseAdo.category ===category){
          return dataBaseAdo
        }
      })
      if (category === "all"){
       idiot(dataBase)
      }
      else{
        idiot(govt)
      }
    })
  })
  }