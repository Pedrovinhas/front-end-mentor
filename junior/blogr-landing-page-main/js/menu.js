const arrows = document.querySelectorAll('#arrow');

arrows.forEach(arrow => {
    arrow.addEventListener('mouseover', () => {
        console.log('oi')
    })
})