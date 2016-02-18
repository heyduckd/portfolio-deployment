(function(module) {
  var connectController = {};

  connectController.index = function() {
    connectView.initIndexPage();

    $('main > section').hide();
    $('#connect').fadeIn();

  };

  module.connectController = connectController;
})(window);
