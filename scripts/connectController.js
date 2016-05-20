(function(module) {
  var connectController = {};

  connectController.index = function(ctx) {
    connectView.initIndexPage(ctx.connect);

    $('main > section').hide();
    $('#connect').fadeIn();

  };

  module.connectController = connectController;
})(window);
