(function(module) {
var homeController = {};

homeController.index = function(){
$('main > section').hide();
$('#sliderHome').fadeIn();
};

  module.homeController = homeController;
})(window);
