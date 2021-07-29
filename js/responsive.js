//hide/show menu button with media screen css
const responsive_menu_btn = document.getElementsByClassName('responsive_menu')[0]
const navbar_links = document.getElementsByClassName('nav_links')[0]

//adding active to css
responsive_menu_btn.addEventListener('click', () =>{
    navbar_links.classList.toggle('active')
})

//
//
//     POP UP WINDOWS
//
//

document.getElementById('popup_contact_form').addEventListener('click', function(){
    document.querySelector('.popup').style.display = 'flex';   
    document.querySelector('body').style.position = 'fixed';
})

document.querySelector('.close_form').addEventListener('click', function(){
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('body').style.position = 'static';
})

//
//
//     NAVBAR FIXED ON SCROLL DOWN
//
//

document.addEventListener('scroll', function(){ 
    //let s1 = document.getElementById('section1').offsetTop;
    let s2 = document.getElementById('section2').offsetTop;
    let s3 = document.getElementById('section3').offsetTop;


    let current_link = document.getElementsByClassName('nav_menu_a');
    if(scrollY > window.innerHeight / 2){
        document.getElementById('nav_menu').style.display = 'flex';
    } else if(scrollY < 1){
        document.getElementById('nav_menu').style.display = 'none';
    } 
    
    if(scrollY < s2 - 50){
        current_link[0].style.color = '#FFA900';
        current_link[1].style.color = '#FFFFFF';
        current_link[2].style.color = '#FFFFFF';
    } else if(scrollY < s3 - 50){
        current_link[0].style.color = '#FFFFFF';
        current_link[1].style.color = '#FFA900';
        current_link[2].style.color = '#FFFFFF';

    } else if(scrollY > s3 - 50){
        current_link[0].style.color = '#FFFFFF';
        current_link[1].style.color = '#FFFFFF';
        current_link[2].style.color = '#FFA900';
    }
})

function section1_scroll(){
    window.scrollTo(0, document.getElementById('section1').offsetTop)
}
function section2_scroll(){
    window.scrollTo(0, document.getElementById('section2').offsetTop)
}
function section3_scroll(){
    window.scrollTo(0, document.getElementById('section3').offsetTop)
}

//
//
//     Social media mouse over effect
//
//
function fb_media(){
    document.getElementById('fb_media').style.background = '#3B5998';
}
function fb_media_out(){
    document.getElementById('fb_media').style.background = '#FFFFFF';
}


function ig_media(){
    document.getElementById('ig_media').style.background = 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D2D)';
}
function ig_media_out(){
    document.getElementById('ig_media').style.background = '#FFFFFF';
}

function in_media(){
    document.getElementById('in_media').style.background = '#0077B5 ';
}
function in_media_out(){
    document.getElementById('in_media').style.background = '#FFFFFF';
}

function git_media(){
    document.getElementById('git_media').style.background = '#6e5494';
}
function git_media_out(){
    document.getElementById('git_media').style.background = '#FFFFFF';
}