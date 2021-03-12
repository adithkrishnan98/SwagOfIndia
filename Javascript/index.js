// Changing image and number onclick
document.getElementById('lang-select').addEventListener('change', changeFunc);

function changeFunc() {
  var selectBox = document.getElementById('lang-select');
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  if (selectedValue == 'India') {
    document.getElementById('flag-icon').src = 'Images/langicon.png';
    document.getElementById('ph-number').innerHTML = '+91 9838203708';
  } else if (selectedValue == 'UK') {
    document.getElementById('flag-icon').src = 'Images/UK-flag.png';
    document.getElementById('ph-number').innerHTML = '+44 1632 960846';
  } else if (selectedValue == 'Canada') {
    document.getElementById('flag-icon').src = 'Images/canada-flag.png';
    document.getElementById('ph-number').innerHTML = '+1 202 555 0156';
  } else {
    document.getElementById('flag-icon').src = 'Images/german-flag.png';
    document.getElementById('ph-number').innerHTML = '+49-163-5556-667';
  };
}
// Adding the sticky navbar
window.onscroll = () => {
  myFunction1(), show_scroller();
};
var navbar = document.getElementById("sticky-section");
var sticky = navbar.offsetTop;

function myFunction1() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    navbar.classList.add("sticky-shadow");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("sticky-shadow");
  }
}

// Scroll to Top 

let scroll = document.getElementById('scroll-btn')

function show_scroller() {
  if (window.pageYOffset > 34) {
    scroll.style.visibility = "visible";
  } else {
    scroll.style.visibility = "hidden";
  }
}
scroll.addEventListener('click', scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}


// Code to show icons upon hover of products in Homepage
document.querySelectorAll('div[id="card_id"]').forEach(card => {
  card.children[0].style.visibility = 'hidden';
})

document.querySelectorAll('div[id="card_id"]').forEach(card => {
  card.addEventListener('mouseover', func => {
    card.children[1].style.opacity = 0.2;
    card.children[0].style.visibility = 'visible';
  })
})

document.querySelectorAll('div[id="card_id"]').forEach(card => {
  card.addEventListener('mouseout', func => {
    card.children[1].style.opacity = 1;
    card.children[0].style.visibility = 'hidden';
  })
})

// Code to make individual icons change color on hover
// a) Heart icon
document.querySelectorAll('div[id="card_id"]').forEach(img => {
  let img_1 = img.childNodes[1].childNodes[1].childNodes[0]
  img_1.addEventListener('mouseover', func2 => {
    img_1.src = 'Images/heart-icon.png';
  })
});
document.querySelectorAll('div[id="card_id"]').forEach(img => {
  let img_1 = img.childNodes[1].childNodes[1].childNodes[0]
  img_1.addEventListener('mouseout', func2 => {
    img_1.src = 'Images/heart-icon-trans.png';
  })
});
// b) Eye icon
document.querySelectorAll('div[id="card_id"]').forEach(img => {
  let img_2 = img.childNodes[1].childNodes[3].childNodes[0]
  img_2.addEventListener('mouseover', func3 => {
    img_2.src = 'Images/eye-icon.png';
  })
});
document.querySelectorAll('div[id="card_id"]').forEach(img => {
  let img_2 = img.childNodes[1].childNodes[3].childNodes[0]
  img_2.addEventListener('mouseout', func3 => {
    img_2.src = 'Images/eye-icon-trans.png';
  })
});
// b) Cart icon
document.querySelectorAll('div[id="card_id"]').forEach(img => {
  let img_3 = img.childNodes[1].childNodes[5].childNodes[0]
  img_3.addEventListener('mouseover', func4 => {
    img_3.src = 'Images/shopping-icon.png';
  })
});
document.querySelectorAll('div[id="card_id"]').forEach(img => {
  let img_3 = img.childNodes[1].childNodes[5].childNodes[0]
  img_3.addEventListener('mouseout', func4 => {
    img_3.src = 'Images/shopping-icon-trans.png';
  })
});




// Code for products listings page through JSON 

let productsListUrl = 'https://my-json-server.typicode.com/adithkrishnan98/swagofindia/db';
let productsList;
let htmlToReturn = "",
  htmlToReturn2 = "",
  reviews = "",
  lowStar = 0,
  i = 0

async function showProducts(Url) {
  fetch('https://my-json-server.typicode.com/adithkrishnan98/swagofindia/db')
    .then(response => response.json())
    .then(json => {
      productsList = json;
      productsList.products.forEach((product) => {
        htmlToReturn =
          `<div class="col col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div class="card mb-4" id="card_id">
              <div class="icons d-flex justify-content-center" id="card_icons">
                <a href="#"><img class='img1' src="Images/heart-icon-trans.png" alt="inner heart icon"></a>
                <a href="#"><img src="Images/eye-icon-trans.png" alt="inner eye icon"></a>
                <a href="#"><img src="Images/shopping-icon-trans.png" alt="inner shopping icon"></a>
              </div>
              <img class="card-img-top" src="Images/${product.imageName}.png" alt="Card image cap">
              <div class="card-body d-flex flex-column align-items-center">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text mb-0"><strong>Rs.${product.priceAfterDiscount}</strong> <del>Rs.${product.price}</del><span class="offer">(60%Off)</span></p>
                <div class="stars-group d-flex align-items-center mt-2" id="starsgroup">`
        lowStar = 5 - Math.floor(product.ratings);
        for (i = 1; i <= product.ratings; i++) {
          reviews += `
                  <img class="stars" src="Images/star.png" alt="star-rating" role="icon" aria-label='star rating'>`;
        }
        for (i = 1; i <= lowStar; i++) {
          reviews += `<img class="stars" src="Images/star-empty.png" alt="star-rating" role="icon" aria-label='star rating'>`;
        }
        lowStar = 0;
        htmlToReturn += reviews + product.ratings + "/5";
        reviews = " ";
        htmlToReturn += `
                </div>
              </div>
            </div>
          </div>`;
        document.querySelector('#productListArea').innerHTML += htmlToReturn;

        htmlToReturn2 =
          `
             <div class="col col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div class="card mb-4" id="card_id">
                <div class="icons d-flex justify-content-center" id="card_icons">
                  <a href="#"><img class='img1' src="Images/heart-icon-trans.png" alt="inner heart icon"></a>
                  <a href="#"><img src="Images/eye-icon-trans.png" alt="inner eye icon"></a>
                  <a href="#"><img src="Images/shopping-icon-trans.png" alt="inner shopping icon"></a>
                </div>
                <img class="card-img-top" src="Images/${product.imageName}.png" alt="Card image cap">
                <div class="card-body d-flex flex-column align-items-center">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text mb-0"><strong>Rs.${product.priceAfterDiscount}</strong> <del>Rs.${product.price}</del><span class="offer">(60%Off)</span></p>
                  <div class="stars-group d-flex align-items-center mt-2" id="starsgroup">`
        lowStar = 5 - Math.floor(product.ratings);
        for (i = 1; i <= product.ratings; i++) {
          reviews += `
                    <img class="stars" src="Images/star.png" alt="star-rating" role="icon" aria-label='star rating'>`;
        }
        for (i = 1; i <= lowStar; i++) {
          reviews += `<img class="stars" src="Images/star-empty.png" alt="star-rating" role="icon" aria-label='star rating'>`;
        }
        lowStar = 0;
        htmlToReturn2 += reviews + product.ratings + "/5";
        reviews = " ";
        htmlToReturn2 += `
                  </div>
                </div>
              </div>
            </div>`;
        document.querySelector('#productListArea2').innerHTML += htmlToReturn2;
      });
      // Code to show icons upon hover of products
      document.querySelectorAll('div[id="card_id"]').forEach(card => {
        card.children[0].style.visibility = 'hidden';
      })

      document.querySelectorAll('div[id="card_id"]').forEach(card => {
        card.addEventListener('mouseover', func => {
          card.children[1].style.opacity = 0.2;
          card.children[0].style.visibility = 'visible';
        })
      })

      document.querySelectorAll('div[id="card_id"]').forEach(card => {
        card.addEventListener('mouseout', func => {
          card.children[1].style.opacity = 1;
          card.children[0].style.visibility = 'hidden';
        })
      })

      // Code to make individual icons change color on hover
      // a) Heart icon
      document.querySelectorAll('div[id="card_id"]').forEach(img => {
        let img_1 = img.childNodes[1].childNodes[1].childNodes[0]
        img_1.addEventListener('mouseover', func2 => {
          img_1.src = 'Images/heart-icon.png';
        })
      });
      document.querySelectorAll('div[id="card_id"]').forEach(img => {
        let img_1 = img.childNodes[1].childNodes[1].childNodes[0]
        img_1.addEventListener('mouseout', func2 => {
          img_1.src = 'Images/heart-icon-trans.png';
        })
      });
      // b) Eye icon
      document.querySelectorAll('div[id="card_id"]').forEach(img => {
        let img_2 = img.childNodes[1].childNodes[3].childNodes[0]
        img_2.addEventListener('mouseover', func3 => {
          img_2.src = 'Images/eye-icon.png';
        })
      });
      document.querySelectorAll('div[id="card_id"]').forEach(img => {
        let img_2 = img.childNodes[1].childNodes[3].childNodes[0]
        img_2.addEventListener('mouseout', func3 => {
          img_2.src = 'Images/eye-icon-trans.png';
        })
      });
      // b) Cart icon
      document.querySelectorAll('div[id="card_id"]').forEach(img => {
        let img_3 = img.childNodes[1].childNodes[5].childNodes[0]
        img_3.addEventListener('mouseover', func4 => {
          img_3.src = 'Images/shopping-icon.png';
        })
      });
      document.querySelectorAll('div[id="card_id"]').forEach(img => {
        let img_3 = img.childNodes[1].childNodes[5].childNodes[0]
        img_3.addEventListener('mouseout', func4 => {
          img_3.src = 'Images/shopping-icon-trans.png';
        })
      })
    })
};
showProducts(productsListUrl);




// parsing info from local storage for my profile page

let returnedHTML = " ";
returnedHTML += `<div class="flex-item flex-item-1 d-flex justify-content-between">
        <p class='key'>Mobile</p>
        <p class='value'>`
        if (localStorage.getItem('Mobile Number') == null){
            returnedHTML += `${9000000009}`
        }
        else{
            returnedHTML += `${localStorage.getItem('Mobile Number')}`
        }
    returnedHTML += `</p>
    </div>
    <br>
    <div class="flex-item flex-item-2 d-flex justify-content-between">
        <p class='key'>Full Name</p>
        <p class='value'>`
        if (localStorage.getItem('Full Name') == null){
            returnedHTML += `${"Mark Mathhews"}`
        }
        else{
            returnedHTML += `${localStorage.getItem('Full Name')}`
        }
    returnedHTML += `</p>
    </div>
    <br>
    <div class="flex-item flex-item-3 d-flex justify-content-between">
        <p class='key'>Email ID</p>
        <p class='value'>`
        if(localStorage.getItem('Email') == null){
            returnedHTML += `${"markmathhews@xyz.com"}`
        }
        else{
            returnedHTML += `${localStorage.getItem('Email')}`
        }
    returnedHTML += `</p>
    </div>
    <br>
    <div class="flex-item flex-item-4 d-flex justify-content-between">
        <p class='key'>Gender</p>
        <p class='value'>Male</p>
    </div>
    <br>
    <div class="flex-item flex-item-5 d-flex justify-content-between">
        <p class='key'>Date of Birth</p>
        <p class='value'>`
        if(localStorage.getItem('Birthday') == null){
            returnedHTML += `${"-Not Added-"}`
        }
        else{
            returnedHTML += `${localStorage.getItem('Birthday')}`
        }
    returnedHTML += `</p>
    </div>
    <br>
    <div class="flex-item flex-item-6 d-flex justify-content-between">
        <p class='key'>Location</p>
        <p class='value'>`
        if(localStorage.getItem('Location') == null){
            returnedHTML += `${"-Not Added-"}`
        }
        else{
            returnedHTML += `${localStorage.getItem('Location')}`
        }
    returnedHTML += `</p>
    </div>
    <br>
    <div class="flex-item flex-item-7 d-flex justify-content-between">
        <p class='key'>Alternate Mobile</p>
        <p class='value'>`
        if(localStorage.getItem('Alternate Mobile Number') == null){
            returnedHTML += `${9898989890}`
        }
        else{
            returnedHTML += `${localStorage.getItem('Alternate Mobile Number')}`
        }
    returnedHTML += `</p>
    </div>
    <br>
    <div class="flex-item flex-item-8 d-flex justify-content-between">
        <p class='key'>Customer ID</p>
        <p class='value'>453729864</p>
    </div>`
    document.querySelector('#profile-info').innerHTML += returnedHTML; 



  
// setting local storage in edit profile page

const mobile = document.getElementById('profileInputMobileNum');
const full_name = document.getElementById('profileInputFullname');
const email = document.getElementById('profileInputEmail1');
const birthday = document.getElementById('profileInputBirthday');
const area = document.getElementById('profileInputLocation');
const mobile_alt = document.getElementById('profileInputAltMobile');
const nickname = document.getElementById('profileInputNickname');
const btn_save = document.querySelector('#save-btn');
const gender = document.getElementById('gender-select');

btn_save.addEventListener('click', () => {
    console.log('click!')
    setLocalStorage(),
    goToProfilePage()
});

function setLocalStorage() {
    const mobile_key = mobile.value;
    const name_key = full_name.value;
    const email_key = email.value;
    const birthday_key = birthday.value;
    const location_key = area.value;
    const mobile2_key = mobile_alt.value;
    const nickname_key = nickname.value;

    if (mobile_key && name_key && email_key &&  birthday_key && location_key && mobile2_key && nickname_key){
        localStorage.setItem("Mobile Number", mobile_key);
        localStorage.setItem("Full Name", name_key);
        localStorage.setItem("Email", email_key);
        localStorage.setItem("Birthday", birthday_key);
        localStorage.setItem("Location", location_key);
        localStorage.setItem("Alternate Mobile Number", mobile2_key);
        localStorage.setItem("Nickname", nickname_key);
    }  
};

function goToProfilePage() {
    location.href="My-profile.html"
};





  
// scrolling to div section on click of stars
// let stars = document.getElementById('starsgroup');
// stars.addEventListener('click', scroller);

// function scroller() {
//   let review = document.getElementById('review-box')
//   review.scrollIntoView({
//     behavior: "smooth"
//   });
// }