/*====================================================================
    plugins.js
======================================================================

    @name       Confused.com Stylguide
    @author     Red Bullet <support@redbullet.co.uk>
    @copyright  Red Bullet 2012

    This contains javascript that will be used across the entire
    application. Feel free to use uncompressed files as this should
    be concatenated and minified. 

    If a plugin is only required on one page - please add it to the
    /libs/ folder instead so it can be served independantly.

======================================================================
    Contents
======================================================================

    - Make it safe to use console.log always
    - jQuery Easing

====================================================================*/

// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,clear,count,debug,dir,dirxml,error,exception,firebug,group,groupCollapsed,groupEnd,info,log,memoryProfile,memoryProfileEnd,profile,profileEnd,table,time,timeEnd,timeStamp,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());


// jQuery Easing Molecules plugin v1.0.0 - https://github.com/gilmoreorless/jquery-easing-molecules/
(function(a,b){function h(a){return function(b){return Math.pow(b,a)}}function g(a,b,g){var h=g?b():b,i=g?b(g):b;c[d+"In"+a]=h;c[d+"Out"+a]=e(h);c[d+"InOut"+a]=f(i)}function f(a){return function(b){return.5*(b<.5?a(2*b):2-a(2-2*b))}}function e(a){return function(b){return 1-a(1-b)}}var c=a.easing,d="ease";g("Quad",h(2));g("Cubic",h(3));g("Quart",h(4));g("Quint",h(5));g("Sine",function(a){return 1-Math.cos(a*Math.PI/2)});g("Expo",function(a){return Math.pow(2,10*(a-1))});g("Circ",function(a){return 1-Math.sqrt(1-a*a)});var i=function(a){if(a===b)a=1.70158;return function(b){return b*b*((a+1)*b-a)}};g("Back",i,1.70158*1.525);g("Bounce",function(a){var b=2.75,c=7.5625,d=0;d=a<.25/b?c*(a-=.125/b)*a+.984375:a<.75/b?c*(a-=.5/b)*a+.9375:a<1.75/b?c*(a-=1.25/b)*a+.75:c*--a*a;return 1-d});var j=function(a){if(a===b)a=.3;return function(b){if(b==!!b)return b;var c=2*Math.PI,d=a/c*Math.asin(1);return-(Math.pow(2,10*--b)*Math.sin((b-d)*c/a))}};g("Elastic",j,.45)})(jQuery);