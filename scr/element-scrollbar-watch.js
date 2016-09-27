
;(function (window, document, undefined) {

    let element = document.querySelectorAll('[data-scroll="true"]');

    window.onscroll = () => {
        for (let i = 0; i < element.length; i++) {
            let event = element[i].getAttribute('data-scroll');

            /**
             * enter
             */
            if (element[i].getBoundingClientRect().top - window.innerHeight < 0 && element[0].getBoundingClientRect().top > 0) {
                let attr = element[i].getAttribute('data-scroll-name');
                if (!element[i].getAttribute('class') || element[i].getAttribute('class').indexOf(`${attr}-enter`) < 0) {
                    let classes = element[i].getAttribute('class').replace(/animate-(leave|enter)/g, '').trim();
                    element[i].setAttribute('class', `${classes} ${attr}-enter`);
                }
            }

            /**
             * leave
             */
            if (element[i].getBoundingClientRect().top < 0 || element[0].getBoundingClientRect().top - window.innerHeight > 0) {
                let attr = element[i].getAttribute('data-scroll-name');
                if (!element[i].getAttribute('class') || element[i].getAttribute('class').indexOf(`${attr}-leave`) < 0) {
                    let classes = element[i].getAttribute('class').replace(/animate-(leave|enter)/g, '').trim();
                    element[i].setAttribute('class', `${classes} ${attr}-leave`);
                }
            }
        }
    }

})(window, document, undefined);
