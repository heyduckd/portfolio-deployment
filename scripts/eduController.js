(function(module) {
  var eduController = {};

  eduController.index = function() {
      $('#work').empty();
      // Edu.fetchAll();
      eduView.initIndexPage();

    $('main > section').hide();
    $('#education').fadeIn();
  };

  module.eduController = eduController;
})(window);
