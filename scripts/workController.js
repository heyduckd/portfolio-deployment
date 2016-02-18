(function(module) {

  var workController = {};

  workController.index = function() {
    $('#work').empty();
    // Project.fetchAll();
    workView.initIndexPage();

    $('main > section').hide();
    $('#work').fadeIn();
  };

  module.workController = workController;
})(window);
