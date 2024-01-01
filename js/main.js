function displayNav() {

    let menuIcon = document.querySelectorAll('.menu-icon');
    let navItems = document.querySelector('.nav-items');

    // menuIcon.forEach((value)=>{
    //     value.addEventListener('click', ()=>{
    //         navItems.classList.toggle('active-nav');
    //         document.querySelector('.inactive-menu-icon').classList.remove('inactive-menu-icon');
    //         value.classList.add('inactive-menu-icon');

    //     })
    // })

    // or

    menuIcon.forEach((value) => {

        value.addEventListener('click', () => {

            navItems.classList.toggle('active-nav');

            // if(menuIcon[0].classList.contains('inactive-menu-icon')){
            //     menuIcon[0].classList.remove('inactive-menu-icon');   
            //     menuIcon[1].classList.add('inactive-menu-icon');
            // }
            // else{
            //     menuIcon[1].classList.remove('inactive-menu-icon');
            //     menuIcon[0].classList.add('inactive-menu-icon');
            // }

        })

    })



}

function navHighlight() {

    let anchorNavItems = document.querySelectorAll('.nav-items>a');
    let navItems = document.querySelector('.nav-items');
    let menuIcon = document.querySelectorAll('.menu-icon');

    anchorNavItems.forEach((value) => {

        value.addEventListener('click', () => {
            navItems.classList.toggle('active-nav');

            document.querySelector('.active-item').classList.remove('active-item');
            value.classList.add('active-item');

            // menuIcon.forEach((element)=>{
            //     document.querySelector('.inactive-menu-icon').classList.remove('inactive-menu-icon');
            //     // Means when we open the menu box then click on anchor tag then obv the bars are hidden and the X is being displayed so whenever we click on anchor tag in menu bar remove the inactive class from bars and add the inactive class to X
            //     menuIcon[1].classList.add('inactive-menu-icon');
            // })

        })

    })

}

function animateOnScroll() {

    window.addEventListener('scroll', () => {

        let skillsElement = document.getElementById('skills');

        let skillInsideBar = document.querySelectorAll('.skill-inside-bar');

        let skillsPosition = skillsElement.getBoundingClientRect().top;

        let screenPos = window.innerHeight;

        skillInsideBar.forEach((value) => {

            value.style.opacity = "1";
            if (screenPos > skillsPosition + 400) {
                value.style.animation = "toRight 3s ease-in-out forwards"
            }
            else {
                value.style.animation = "none";
            }
        })

    })

}

function changeBackground() {
    let darkBtn = document.querySelector('.theme');

    let root = document.querySelector(':root');

    let rootStyles = getComputedStyle(root);

    let blue = rootStyles.getPropertyValue('--blue-color');

    let navItems = document.querySelector('.nav-items');



    darkBtn.addEventListener('click', () => {

        // Closes the nav menu when clicking on the change theme button
        navItems.classList.toggle('active-nav');

        if (blue == "#00ABF0") {
            root.style.setProperty('--blue-color', "crimson");
            darkBtn.style.color = "#00ABF0";
            blue = rootStyles.getPropertyValue('--blue-color');
        }
        else {
            root.style.setProperty('--blue-color', "#00ABF0");
            darkBtn.style.color = "crimson";
            blue = rootStyles.getPropertyValue('--blue-color');
        }



    })

}

function main() {

    displayNav();

    navHighlight();

    animateOnScroll();

    changeBackground();

}

main();