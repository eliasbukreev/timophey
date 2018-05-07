import './style.scss';
import './media.scss';
import '../node_modules/open-iconic/sprite/open-iconic.svg';
import './computer-support.svg';
import './computer-repair.jpg';



jQuery(document).ready(function($){


function HTMLReady (){
$("#header").load("header.html");
$("#footer").load("footer.html");
};
HTMLReady();

(function(){ 
	ymaps.ready(init);
    var myMap;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [43.11654608, 131.91677168],
            zoom: 14,
            controls: []
        });
    }
})();
	
});