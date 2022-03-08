const arrows = document.querySelectorAll('#arrow');
const popupMenu = document.querySelectorAll('.popup-list');

arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {

        if(arrows[1]) {
            arrows[1].style.transform = 'rotate(180deg)';
            popupMenu[1].style.transform = '1000';
            popupMenu[1].style.display = 'flex';
            
        }

  
       
    })
})

const menuPopUp = () => {

}