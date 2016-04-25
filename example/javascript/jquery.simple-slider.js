/*
 * Simple Slider v1.0
 * https://github.com/icu222much/SimpleSlider
 *
 * Dependencies:
 * - jQuery
 * - jQuery UI
 * - jQuery UI Touch Punch (for mobile support)
 * - simple-slider.css (style for Simple Slider)
 *
 * Released under the MIT license
 *
 * Date: April 23, 2016
 */


; (function ($) {

    'use strict';
 
    $.fn.simpleSlider = function() {
        init(this);

        this.click(function(e) {
          moveSlider($(this), e);
        });

        this.find('.simple-slider__slider').draggable({
            containment: 'parent',
            drag: function(e) {
                moveSlider($(this).parent(), e);
            }
        });
    };

    /**
     * Initializes the slider
     * @param {obj} ele - Element that contains the slider (DOM element that contains two <img>)
     */
    function init(ele) {
        prepDom(ele);
        resize(ele);
    };

    /**
     * Adds the necessary classes for Simple Slider to work
     * @param {obj} ele - Element that contains the slider
     */
    function prepDom(ele) {
        var d = document.createElement('div');
        $(d).addClass('simple-slider__slider').appendTo(ele);
        ele.addClass('simple-slider');
        ele.find('img:nth-child(1)').addClass('simple-slider__img-a');
        ele.find('img:nth-child(2)').addClass('simple-slider__img-b');
    };

    /**
     * Resizes the first <img> in ele so it will not overlap on top of the second <img>
     * @param {obj} ele - Element that contains the slider
     */
    function resize(ele) {
        var width = ele.width();
        ele.find('.simple-slider__img-a').css('clip', 'rect(0 ' + width/2 + 'px auto 0)');
        ele.find('.simple-slider__slider').css('left', width/2);
    };

    /**
     * Moves the slider bar
     * @param {obj} ele - Element that contains the slider
     */
    function moveSlider(ele, e) {
        var height = ele.height(),
            parentOffset = ele.offset(),
            relX = e.pageX - parentOffset.left + 1,
            relY = e.pageY - parentOffset.top;

        ele.find('.simple-slider__img-a').css('clip', 'rect(0 ' + relX + 'px auto 0)');
        ele.find('.simple-slider__slider').css('left', relX);
    };
 
}( jQuery ));