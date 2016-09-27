'use strict';

;(function (window, document, undefined) {

    var element = document.querySelectorAll('[data-scroll]');

    window.onscroll = function () {
        for (var i = 0; i < element.length; i++) {

            /**
             * enter
             */
            if (element[i].getBoundingClientRect().top - window.innerHeight < 0 && element[0].getBoundingClientRect().top > 0) {
                var attr = element[i].getAttribute('data-scroll-name');
                if (!element[i].getAttribute('class') || element[i].getAttribute('class').indexOf(attr + '-enter') < 0) {
                    var classes = element[i].getAttribute('class').replace(/animate-(leave|enter)/g, '').trim();
                    element[i].setAttribute('class', classes + ' ' + attr + '-enter');
                }
            }

            /**
             * leave
             */
            if (element[i].getBoundingClientRect().top < 0 || element[0].getBoundingClientRect().top - window.innerHeight > 0) {
                var _attr = element[i].getAttribute('data-scroll-name');
                if (!element[i].getAttribute('class') || element[i].getAttribute('class').indexOf(_attr + '-leave') < 0) {
                    var _classes = element[i].getAttribute('class').replace(/animate-(leave|enter)/g, '').trim();
                    element[i].setAttribute('class', _classes + ' ' + _attr + '-leave');
                }
            }
        }
    };
})(window, document, undefined);
