//sidebar
const menuItems = document.querySelectorAll('.menu-item');

//messages
const messagesNotification = document.querySelector('#messages-notification');

const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme')

const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelectorAll(':root');
const colorPalette = document.querySelectorAll('.choose-color span')

const Bg1=document.querySelector('.bg-1');
const Bg2=document.querySelector('.bg-2');
const Bg3=document.querySelector('.bg-3');




//remove active class from all menu items
const changeActionItem = () => {
    menuItems.forEach((item) => {
        item.classList.remove("active")
    })
}

menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        changeActionItem();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').style.display = 'block';
            //remove notification count when click
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

//messages************

//seach chat
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach((user) => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    })
}
messageSearch.addEventListener('keyup', searchMessage);


//hight message card when click on message icon in menu section
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(----color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 1000)
})


//theme customization *************

//open modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

theme.addEventListener('click', openThemeModal);

//close model
const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}
themeModal.addEventListener('click', closeThemeModal);



//fonts**************
//remove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach((size) => {
        size.classList.remove('active');
    })
}

fontSizes.forEach((size) => {

    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        // console.log(size.classList)
        if (size.classList.contains('font-size-1')) {
            console.log(root[0])
            fontSize = '10px';
            root[0].style.setProperty('----sticky-top-left', '5.4rem');
            root[0].style.setProperty('----sticky-top-right', '5.4rem');

        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root[0].style.setProperty('----sticky-top-left', '5.4rem');
            root[0].style.setProperty('----sticky-top-right', '-7rem');

        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root[0].style.setProperty('----sticky-top-left', '-2rem');
            root[0].style.setProperty('----sticky-top-right', '-17rem');

        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root[0].style.setProperty('----sticky-top-left', '-5rem');
            root[0].style.setProperty('----sticky-top-right', '-25rem');

        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root[0].style.setProperty('----sticky-top-left', '-12rem');
            root[0].style.setProperty('----sticky-top-right', '-35rem');
        }
        //change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    })
})


//change primary colors***
//remove active class from colors
const changeActiveColorClass=()=>{
    colorPalette.forEach((colorPicker)=>{
        colorPicker.classList.remove('active');
    })
}

colorPalette.forEach((color) => {
    color.addEventListener('click', () => {
        let primaryHue;
        changeActiveColorClass();
        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        } else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        } else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        } else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        color.classList.add('active');

        root[0].style.setProperty('--primary-color-hue', primaryHue);
    })
})

//bacground***

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//change bg color
const changeBG=()=>{
    root[0].style.setProperty('--light-color-lightness',lightColorLightness);
    root[0].style.setProperty('--white-color-lightness',whiteColorLightness);
    root[0].style.setProperty('--dark-color-lightness',darkColorLightness);
}
//click on bg1
Bg1.addEventListener('click',()=>{
    //add active class
    Bg1.classList.add('active');
    //remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    //remove customize changes from local storage
    window.location.reload();
})
//click on bg2
Bg2.addEventListener('click',()=>{
    darkColorLightness='95%';
    whiteColorLightness='20%';
    lightColorLightness='15%';

    //add active class
    Bg2.classList.add('active');
    //remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})
//click on bg3
Bg3.addEventListener('click',()=>{
    darkColorLightness='95%';
    whiteColorLightness='10%';
    lightColorLightness='0%';

    //add active class
    Bg3.classList.add('active');
    //remove active class from the others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})