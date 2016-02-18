(function(module) {

  var workController = {};

  workController.index = function() {
    $('#work').empty();
    workView.initIndexPage();

    $('main > section').hide();
    $('#work').fadeIn();
  };

  module.workController = workController;
})(window);
