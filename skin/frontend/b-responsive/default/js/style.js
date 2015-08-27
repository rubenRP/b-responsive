//Configuración require
requirejs.config({
    baseUrl: '/skin/frontend/b-responsive/default/js',
    paths: {
        jquery: 'lib/jquery',
        bootstrap: 'lib/bootstrap',
        jasnyBootstrap: 'lib/jasny-bootstrap.min',
        holder: 'lib/holder',
        touchSwipe: 'lib/touchSwipe'
    }
});

//Init
define(function (require) {
    /*======================================================================*/
    /* LIBRERIAS                                                            */
    /*======================================================================*/
    require('jquery');
    require('bootstrap');
    require('jasnyBootstrap');
    require('holder');
    require('touchSwipe');

    /*======================================================================*/
    /* PARCIALES                                                            */
    /*======================================================================*/
    var onScroll = require('partials/onScroll');

    /*======================================================================*/
    /* ON READY                                                             */
    /*======================================================================*/
    //function onReadyFunctions(){
    //    
    //}
    //onReadyFunctions();

    /*======================================================================*/
    /* ON RESIZE                                                            */
    /*======================================================================*/
    //function onResizeFunctions(){
    //
    //}
    //onResize(onResizeFunctions);

    /*======================================================================*/
    /* ON SCROLL                                                            */
    /*======================================================================*/
    //function onScrollFunctions(){
    //    
    //}
    //onScroll(onScrollFunctions);
});