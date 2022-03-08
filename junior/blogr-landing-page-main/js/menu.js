
const popupMenu = document.querySelectorAll('.popup-list');
const arrow = document.querySelectorAll('#arrow');

arrow[1].addEventListener('click', () => {
    popupMenu[1].classList.toggle('active');

    arrow[1].classList.toggle('rotate');
    

})

arrow[0].addEventListener('click', () => {
    popupMenu[0].classList.toggle('active');
   
    arrow[0].classList.toggle('rotate');
    

})

arrow[2].addEventListener('click', () => {
    popupMenu[2].classList.toggle('active');
   
    arrow[2].classList.toggle('rotate');
    

})

// popupMenu.forEach((menu) => {
//     const arrow = document.querySelector('#arrow');
//     arrow.style.transform = 'rotate(0deg)';

//     arrow.addEventListener('click', () => {
//         showPopupMenu();
//     })

//     function showPopupMenu () {
//         popupMenu.forEach((item) => {
//             if(item != menu) {
//                 item.classList.remove("active");
//             }
            
//         })
//         menu.classList.toggle("active")
//     }

// })



// arrows.forEach(arrow => {
// arrow.addEventListener('click', () => {

//     if(arrows[1]) {
//         arrows[1].style.transform = 'rotate(180deg)';
//         popupMenu[1].style.transform = '1000';
//         popupMenu[1].style.display = 'flex';
        
//     } else {
//         ''
//     }


    
// })
// })

// const menuPopUp = () => {

// }