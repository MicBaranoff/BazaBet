(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(window).on('load',function(){
    $('.money .m1').each(function(){
        $(this).addClass('act');
    });

    setTimeout(function(){
        $('.money').css('z-index', '-1');
        $('.money .m1').css('filter', 'blur(3px)');
    }, 500)
});

$(document).ready(function () {
    // $(function(){
    //     $('section.mainbanner > .holder .box').parallax({
    //         yparallax: false,
    //         xparallax: 0
    //         // xorigin: left
    //     });
    //   });

        
    var $layer_0 = $('.truck'),
        $layer_1 = $('.footman'),
        $layer_2 = $('.mainbannerbg'),

        $bg_pl1 = $('.left1'),
        $bg_pl2 = $('.left2'),
        $bg_pl3 = $('.right1'),
        $bg_pl4 = $('.right2'),

        // $x_axis  = $('#x-axis'),
        // $y_axis  = $('#y-axis'),
        $container = $('body'),
        container_w = $container.width(),
        container_h = $container.height();

    $(window).on('mousemove.parallax', function (event) {
        var pos_x = event.pageX,
            pos_y = event.pageY,
            left = 0,
            top = 0;

        left = container_w / 2 - pos_x;
        top = container_h / 2 - pos_y;



        TweenMax.to(
            $layer_0,
            1, {
                css: {
                    transform: 'translateX(' + left / 10 + 'px) '
                },
                ease: Expo.easeOut,
                overwrite: 'all'
            });

        TweenMax.to(
            $layer_1,
            1, {
                css: {
                    transform: 'translateX(' + -left / 25 + 'px) '
                },
                ease: Expo.easeOut,
                overwrite: 'all'
            });

            TweenMax.to(
                $layer_2,
                1, {
                    css: {
                        transform: 'translateX(' + left / 165 + 'px) '
                    },
                    ease: Expo.easeOut,
                    overwrite: 'all'
                });


        TweenMax.to(
            $bg_pl1,
            1, {
                css: {
                    transform: 'translateX(' + left / 105 + 'px) '
                },
                ease: Expo.easeOut,
                overwrite: 'all'
            });


        TweenMax.to(
            $bg_pl2,
            1, {
                css: {
                    transform: 'translateX(' + left / 45 + 'px) '
                },
                ease: Expo.easeOut,
                overwrite: 'all'
            });


        TweenMax.to(
            $bg_pl3,
            1, {
                css: {
                    transform: 'translateX(' + -left / 46 + 'px) '
                },
                ease: Expo.easeOut,
                overwrite: 'all'
            });


        TweenMax.to(
            $bg_pl4,
            1, {
                css: {
                    transform: 'translateX(' + -left / 65 + 'px) '
                },
                ease: Expo.easeOut,
                overwrite: 'all'
            });
    });
});


    



},{}]},{},[1]);
