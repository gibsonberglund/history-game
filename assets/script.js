//Middle East
//Africa
//East Asia
//Central Asia
//Europe
//Americas
//Oceania
//The Steppe


let siteTitle = document.querySelector('#sitetitle');

let mideastThumb = "url('./assets/images/mideast-thumbnail.jpg')";
let americaThumb = "url('./assets/images/inca-thumbnail.jpg')";
let eastAsiaThumb = "url('./assets/images/chinese-thumbnail.jpg')";
let africaThumb = "url('./assets/images/yoruba-thumbnail.jpg')";
let euroThumb = "url('./assets/images/europe-thumbnail.jpg')";
let centralAsiaThumb = "url('./assets/images/seuna-thumbnail.jpg')";
let oceaniaThumb = "url('./assets/images/oceania-thumbnail.jpg')";
let steppeThumb = "url('./assets/images/steppe-thumbnail.jpg')";

let homePageThumbs = [mideastThumb, africaThumb, eastAsiaThumb, centralAsiaThumb, euroThumb, americaThumb, oceaniaThumb, steppeThumb];

let gobekli = "url('./assets/images/mideast/gobekli.jpg')";
let sumer = "url('./assets/images/mideast/sumer.jpg')";
let assyria = "url('./assets/images/mideast/assyria.jpg')";
let persia = "url('./assets/images/mideast/persia.jpg')";
let seleucid = "url('./assets/images/mideast/seleucid.jpg')";
let parthia = "url('./assets/images/mideast/parthia.jpg')";
let sassanid = "url('./assets/images/mideast/sassanid.jpg')";
let umayyad = "url('./assets/images/mideast/umayyad.jpg')";

let mideastImgs = [gobekli, sumer, assyria, persia, seleucid, parthia, sassanid, umayyad];

//Homepage text
let shorttext1 = `Middle East`;
let shorttext2 = `Africa`;
let shorttext3 = `East Asia`;
let shorttext4 = `Central Asia`;
let shorttext5 = `Europe`;
let shorttext6 = `Americas`;
let shorttext7 = `Oceania`;
let shorttext8 = `The Steppe`;

//Mideast page text
let mideastText1 = 'Prehistory 8000 - 3000 B.C.E.';
let mideastText2 = 'Sumeria 3000 - 2000 B.C.E.';
let mideastText3 = 'Assyria 2000 - 650 B.C.E.';
let mideastText4 = 'Persia 650 - 330 B.C.E.';
let mideastText5 = 'Seleucid 300 - 50 B.C.E.';
let mideastText6 = 'Parthia 50 B.C.E. - 300 C.E.';
let mideastText7 = 'Sassania - 300 - 650 C.E.';
let mideastText8 = 'Umayyad Caliphate 650 - 750 C.E.';

let mideastTexts =[mideastText1, mideastText2, mideastText3, mideastText4, mideastText5, mideastText6, mideastText7, mideastText8];

let mideastPreHistText = "Göbekli Tepe (Turkish: [ɟœbecˈli teˈpe],[2] 'Potbelly Hill';[3] known as Girê Mirazan or Xirabreşkê in Kurdish)[4] is a Neolithic archaeological site in the Southeastern Anatolia Region of Turkey. Dated to the Pre-Pottery Neolithic, between c. 9500 and 8000 BCE, the site comprises a number of large circular structures supported by massive stone pillars – the world's oldest known megaliths. Many of these pillars are richly decorated with figurative anthropomorphic details, clothing, and reliefs of wild animals, providing archaeologists rare insights into prehistoric religion and the particular iconography of the period. The 15 m (50 ft)-high, 8 ha (20-acre) tell also includes many smaller buildings, quarries, and stone-cut cisterns from the Neolithic, as well as some traces of activity from later periods. ";

//main text display variable
let maintextDisplay = document.querySelector('#maintextdisplay');

let centerPrompt = document.querySelector('#centerprompt');
let aboutAuthorBtn = document.querySelector('#aboutauthorbtn');

//Author page
let authorInfo = document.querySelector('#authorinfo'); 
let authorPage = document.querySelector('#authorpage');
let profilePic = document.querySelector('#profilepic');
let contactBtn = document.querySelector('#contactbtn');
let webDevLink = document.querySelector('#webdevlink');


//create a variable that stores the 'page' id
//when a button is clicked, update the page id
//use if/else loop to choose which function (to replace the content in the buttons) will fire


let pageId = "homepage";

let text1Card = document.querySelector('#text1card');
let text2Card = document.querySelector('#text2card');
let text3Card = document.querySelector('#text3card');
let text4Card = document.querySelector('#text4card');
let text5Card = document.querySelector('#text5card');
let text6Card = document.querySelector('#text6card');
let text7Card = document.querySelector('#text7card');
let text8Card = document.querySelector('#text8card');

let textCards = [text1Card, text2Card, text3Card, text4Card, text5Card, text6Card, text7Card, text8Card];

let text1 = document.querySelector('#text1');
let text2 = document.querySelector('#text2');
let text3 = document.querySelector('#text3');
let text4 = document.querySelector('#text4');
let text5 = document.querySelector('#text5');
let text6 = document.querySelector('#text6');
let text7 = document.querySelector('#text7');
let text8 = document.querySelector('#text8');

let texts = [text1, text2, text3, text4, text5, text6, text7, text8];

let shorttexts = [shorttext1, shorttext2, shorttext3, shorttext4, shorttext5, shorttext6, shorttext7, shorttext8];

window.onload = homePage();

function homePage() {
  for (var i = 0; i < textCards.length; i++) {
    textCards[i].style.backgroundImage = homePageThumbs[i];
    texts[i].textContent = shorttexts[i];
  };

};

function midEast() {
  for (var i = 0; i < textCards.length; i++) {
    textCards[i].style.backgroundImage = mideastImgs[i];
    centerPrompt.textContent = "Middle East";
    texts[i].textContent = mideastTexts[i];
    pageId = "mideast";
  };
};

function midEastPreHist() {
  text1Card.setAttribute('class', 'infocard');
  for (var i = 1; i < textCards.length; i++) {
    textCards[i].setAttribute('class', 'smallbubble');
  };
  centerPrompt.textContent = mideastPreHistText;
  centerPrompt.setAttribute('style', 'font-size: 18px;');
  // text2Card.setAttribute('style', 'justify-content: flex-end');
};


//textCARD 1
//set variables



let modal1 = document.querySelector('#modal1');
let modalContent1 = document.querySelector('#modalcontent1');
let text1Button = document.querySelector('#text1button');

let aboutButton1 = document.querySelector('#aboutbutton1');

siteTitle.addEventListener('click', function() {
  homePage();
})


//listens for click on one of the text cards
text1Card.addEventListener('click', function(event) {
//changes size and content when clicked
    event.preventDefault();
    if (pageId === "homepage") {
      // openInca();
      midEast();
      console.log('hello');
    } else if (pageId === "mideast") {
      midEastPreHist();
    }
});


// function openInca() {
//   text1Card.setAttribute('style', worldbackground);
// };

// if (text1.textContent === midtext1) {
//   window.onclick = function(event) {
//     if (event.target == text1Card) {
//       text1Button.setAttribute('class', 'hidden');
//       aboutButton1.setAttribute('class', 'hidden');
//       text1.textContent = shorttext1;
//     }
//   };
// };


//listens on 'Keep Reading' button
text1Button.addEventListener('click', function() {
    openModal();
    window.onclick = function(event) {
      if (event.target == modal1) {
        modal1.style.display = "none";
        centerPrompt.setAttribute('class', 'inherit');
      }
    }
});

aboutButton1.addEventListener('click', function() {
  abouttext();
});

//textCARD 2

let modal2 = document.querySelector('#modal2');
let modalContent2 = document.querySelector('#modalcontent2');
let text2Button = document.querySelector('#text2button');

let aboutButton2 = document.querySelector('#aboutbutton2');




  text2Card.addEventListener('click', function(event) {
    closeAnyOpen();
    midtext(event.target);
});

text2Button.addEventListener('click', function() {
    openModal();
    window.onclick = function(event) {
      if (event.target == modal2) {
        modal2.style.display = "none";
        centerPrompt.setAttribute('class', 'inherit');
      }
    }
});

  aboutButton2.addEventListener('click', function() {
    abouttext();
  });
  
//textCARD 3

let modal3 = document.querySelector('#modal3');
let modalContent3 = document.querySelector('#modalcontent3');
let text3Button = document.querySelector('#text3button');

let aboutButton3 = document.querySelector('#aboutbutton3');




  text3Card.addEventListener('click', function(event) {
    closeAnyOpen();
    midtext(event.target);
});

text3Button.addEventListener('click', function() {
    openModal();
    window.onclick = function(event) {
      if (event.target == modal3) {
        modal3.style.display = "none";
        centerPrompt.setAttribute('class', 'inherit');
      }
    }
});

aboutButton3.addEventListener('click', function() {
  abouttext();
});


//textCARD 4

let modal4 = document.querySelector('#modal4');
let modalContent4 = document.querySelector('#modalcontent4');
let text4Button = document.querySelector('#text4button');

let aboutButton4 = document.querySelector('#aboutbutton4');



  text4Card.addEventListener('click', function(event) {
    closeAnyOpen();
    midtext(event.target);
});

text4Button.addEventListener('click', function() {
    openModal();
    window.onclick = function(event) {
      if (event.target == modal4) {
        modal4.style.display = "none";
        centerPrompt.setAttribute('class', 'inherit');
      }
    }
});

aboutButton4.addEventListener('click', function() {
  abouttext();
});

//textCARD 5

let modal5 = document.querySelector('#modal5');
let modalContent5 = document.querySelector('#modalcontent5');
let text5Button = document.querySelector('#text5button');

let aboutButton5 = document.querySelector('#aboutbutton5');



  text5Card.addEventListener('click', function(event) {
    closeAnyOpen();
    midtext(event.target);
});

text5Button.addEventListener('click', function() {
    openModal();
    window.onclick = function(event) {
      if (event.target == modal5) {
        modal5.style.display = "none";
        centerPrompt.setAttribute('class', 'inherit');
      }
    }
});

aboutButton5.addEventListener('click', function() {
  abouttext();
});

//text 6

let modal6 = document.querySelector('#modal6');
let modalContent6 = document.querySelector('#modalcontent6');
let text6Button = document.querySelector('#text6button');

let aboutButton6 = document.querySelector('#aboutbutton6');



//listens for click on one of the text cards
text6Card.addEventListener('click', function(event) {
//changes size and content when clicked
    closeAnyOpen();
    midtext(event.target);
});

//listens for click on 'keep reading' button
text6Button.addEventListener('click', function() {
    openModal();
    window.onclick = function(event) {
      if (event.target == modal1) {
        modal1.style.display = "none";
        centerPrompt.setAttribute('class', 'inherit');
      }
    }
});

aboutButton6.addEventListener('click', function() {
  abouttext();
});

//textCARD 7
//set variables

let modal7 = document.querySelector('#modal7');
let modalContent7 = document.querySelector('#modalcontent7');
let text7Button = document.querySelector('#text7button');

let aboutButton7 = document.querySelector('#aboutbutton7');




//listens for click on one of the text cards
text7Card.addEventListener('click', function(event) {
//changes size and content when clicked
    closeAnyOpen();
    midtext(event.target);
});

//listens for click on 'keep reading' button
text7Button.addEventListener('click', function() {
    openModal();
    window.onclick = function(event) {
      if (event.target == modal7) {
        modal7.style.display = "none";
        centerPrompt.setAttribute('class', 'inherit');
      }
    }
});

aboutButton7.addEventListener('click', function() {
  abouttext();
});

//textCARD 8
//set variables

let modal8 = document.querySelector('#modal8');
let modalContent8 = document.querySelector('#modalcontent8');
let text8Button = document.querySelector('#text8button');

let aboutButton8 = document.querySelector('#aboutbutton8');




//listens for click on one of the text cards
text8Card.addEventListener('click', function(event) {
//changes size and content when clicked
    closeAnyOpen();
    if (text8.textContent === 'CONTACT ME') {
      contactMe();
    } else {
    midtext(event.target);
    }
});

//listens for click on 'keep reading' button
text8Button.addEventListener('click', function() {
  openModal();
  window.onclick = function(event) {
    if (event.target == modal8) {
      modal8.style.display = "none";
      centerPrompt.setAttribute('class', 'inherit');
    }
  }
});

aboutButton8.addEventListener('click', function() {
  abouttext();
});

// var shufflePuzzle = document.querySelector('#shufflepuzzle');

// $('.shufflepuzzle').sortable({
//   grid: [1, 4]
// });




let modals = [modal1, modal2, modal3, modal4, modal5, modal6, modal7, modal8];
let modalContents = [modalContent1, modalContent2, modalContent3, modalContent4, modalContent5, modalContent6, modalContent7, modalContent8];
let midtexts = [midtext1, midtext2, midtext3, midtext4, midtext5, midtext6, midtext7, midtext8];

let longtexts = [longtext1, longtext2, longtext3, longtext4, longtext5, longtext6, longtext7, longtext8];
let textButtons = [text1Button, text2Button, text3Button, text4Button, text5Button, text6Button, text7Button, text8Button];
let aboutButtons = [aboutButton1, aboutButton2, aboutButton3, aboutButton4, aboutButton5, aboutButton6, aboutButton7, aboutButton8];
let abouttexts = [abouttext1, abouttext2, abouttext3, abouttext4, abouttext5, abouttext6, abouttext7, abouttext8];

//FOR REFACTOR: REUSE THE SAME text BTN AND ABOUT BTN

function closeAnyOpen() {
  for(var i=0; i < texts.length; i++) {
    if (texts[i].textContent === midtexts[i]) {
      texts[i].textContent = shorttexts[i];
      textButtons[i].setAttribute('class', 'hidden');
      aboutButtons[i].setAttribute('class', 'hidden');
      texts[i].setAttribute('style', 'color: inherit');
    } else if (texts[i].textContent === abouttexts[i]) {
      texts[i].textContent = shorttexts[i];
      textButtons[i].setAttribute('class', 'hidden');
      aboutButtons[i].setAttribute('class', 'hidden');
      texts[i].setAttribute('style', 'color: inherit');
    } else if (texts[i].textContent === authorBlurb) {
      texts[i].textContent = shorttexts[i];
      texts[i].setAttribute('style', 'color: inherit');
      profilePic.setAttribute('class', 'hidden');
      textButtons[i].setAttribute('class', 'hidden');
      aboutButtons[i].setAttribute('class', 'hidden');
      contactBtn.setAttribute('class', 'hidden');
    };
  }
};


//DON'T NEED TO USE A NEW MODAL FOR EACH ONE
//REUSE THE SAME MODAL AND SWITCH THE TEXTCONTENT
function openModal() {
  for(var i=0; i < texts.length; i++) {
    if (texts[i].textContent === midtexts[i]) {
      textButtons[i].setAttribute('class', 'hidden');
      aboutButtons[i].setAttribute('class', 'hidden');
    //displays modal with text content
      modals[i].style.display = "flex";
      modalContents[i].textContent = longtexts[i];
    //reverts text card to original state
      texts[i].textContent = shorttexts[i];
      textCards[i].setAttribute('style', 'max-width: 250px');
    }
  }
};

function abouttext() {
  for(var i=0; i < texts.length; i++) {
    if (texts[i].textContent === midtexts[i]) {
      textButtons[i].setAttribute('class', 'hidden');
      aboutButtons[i].setAttribute('class', 'hidden');
      textCards[i].setAttribute('style', 'max-width: 400px');
      texts[i].setAttribute('style', 'color: black');
      texts[i].textContent = abouttexts[i];
      aboutAuthorBtn.setAttribute('class', 'button');
    }
  }
};

function midtext(event) {
  for(var i=0; i < texts.length; i++) {
    if (event === textCards[i] || event === texts[i]) {
    centerPrompt.setAttribute('class', 'hidden');
    texts[i].textContent = midtexts[i];
    textButtons[i].setAttribute('class', 'button');
    aboutButtons[i].setAttribute('class', 'button');
    textCards[i].setAttribute('style', 'max-width: 550px');
    texts[i].setAttribute('style', 'color: black');
    }
  }
};

let formEmail = document.querySelector('#formemail');
let formName = document.querySelector('#formname');
let formMessage = document.querySelector('#formmessage');
let contactSubBtn = document.querySelector('#formsubmit');

function contactMe() {
  for(var i=0; i < textCards.length; i++) {
    textCards[i].setAttribute('class', 'hidden');
  }
  formEmail.setAttribute('class', 'contactform');
  formEmail.textContent = 'Email';
  formName.setAttribute('class', 'contactform');
  formName.textContent = 'Name';
  formMessage.setAttribute('class', 'contactform');
  formMessage.textContent = 'Message';
  contactSubBtn.setAttribute('class', 'button');
  //displayForm();
};


//Start the game


let question1texts = [text1Q1, text2Q2];

