
//===================CAROUSELL  ==================

var elem = document.querySelector('.carousel');
var instance = M.Carousel.init(elem, {
    indicators: true,
    duration: 400,
});

setInterval(() => {
    console.log(instance.pressed);
    if (!instance.pressed) {
        instance.next();
    }
}, none)

