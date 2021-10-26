
 /*增加classname active 方法一*/
 // section這個tag的[id]
//  const sections = document.querySelectorAll('section[id]')
//  //console.log(sections);
// function scrollActive(){
//     const scrollY = window.pageYOffset //網頁的y高度
//     console.log(scrollY);
//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight//元素的高度
//         const sectionTop = current.offsetTop - 50;
       
//         sectionId = current.getAttribute('id')
//         console.log(sectionId);
       
//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
//         }
//         else{
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)


/*增加classname active 方法二*/
function addActive(){ 
    const sections = document.querySelectorAll('section[id]')
   //console.log(sections);

    const arrActive = ['home','about','services','menu','contact'];
    arrActive.forEach(element => {
        //console.log(element)
        document.querySelector('.nav__menu a[href*=' + element + ']').classList.remove('active-link');
       
    });
        
    const scrollY = window.pageYOffset //網頁的y高度
   // console.log(scrollY);
    var obj='';
    if(scrollY <= 639){
       obj = 'home'
    }
    else if(scrollY <= 1399 && scrollY >639){
        obj = 'about'
    }
    else if(scrollY <= 2099 && scrollY > 1399){
        obj = 'services'
    }
    else if(scrollY <= 3525 && scrollY > 2099){
        obj = 'menu'
    }
    else{
        obj = 'contact'
    }
  //  console.log(obj);
   
    document.querySelector('.nav__menu a[href*=' + obj + ']').classList.add('active-link')
}
  window.addEventListener('scroll',addActive); //滑動滾輪就執行



/*切換背景顏色*/ 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
// Previously selected topic (if user selected)會得到light or dark
const selectedTheme = localStorage.getItem('selected-theme')
//console.log(selectedTheme);
if(selectedTheme == 'dark'){
    document.getElementById('Sky').src="./img/sun.png";
}
else{
    document.getElementById('Sky').src="./img/night.png";
}

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
}

//按下icon按鈕
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    var OnOff = document.body.classList.toggle(darkTheme)
 
    localStorage.setItem('selected-theme', getCurrentTheme())
    //console.log(OnOff);
    if(OnOff == true){
        document.getElementById('Sky').src="./img/sun.png";
    }
    else{
        document.getElementById('Sky').src="./img/night.png";
    }
})



// SCROLL REVEAL ANIMATION 
//ScrollReveal (滾動觸發CSS動畫的套件)畫面滾動效果套件
const sr = ScrollReveal({
    origin: 'top', //原點
    distance: '30px',
    duration: 2000,//延遲時間
    reset: true
});

//每個要讓它產生延遲效果的classname
sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
     interval: 200 //多久後執行 與 delay不同有分開效果
    //delay: 200
})