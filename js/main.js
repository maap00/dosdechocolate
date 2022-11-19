
//===================CAROUSELL  ==================

var elem = document.querySelector('.carousel');
var instance = M.Carousel.init(elem, {
    indicators: true,
    duration: 400,
    
});

setInterval(() => {
    if (!instance.pressed) {
        instance.next();
    }
}, 4000)

