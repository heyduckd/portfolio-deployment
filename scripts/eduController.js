(function(module) {
  var eduController = {};

  eduController.index = function() {
      $('#work').empty();
      eduView.initIndexPage();

    $('main > section').hide();
    $('#education').fadeIn();
  };

  module.eduController = eduController;
})(window);
