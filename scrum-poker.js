Array.from(document.querySelectorAll('.poker_cube_container')).map(function(elem){
    console.info('%c %s: %s ', 'color:#111;background:#FBCEC5', elem.querySelector('.cube__header .username').innerText, elem.querySelector('.cube__footer .pokerNumber').innerText)
})
