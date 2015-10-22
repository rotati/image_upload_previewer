(function($) {
  $.fn.previewImage = function(options) {
    var previewer = new ImagePreviewer(this, options.uploader);
        previewer.perform();
  };

  function ImagePreviewer(placeholder, uploader) {
    this.perform = function() {
      $(placeholder).click(function() {
        $(uploader).trigger('click');
      });

      $(uploader).change(function(e) {
        var files = e.target.files;
        if(FileReader && files && files.length) {
          reader = new FileReader();
          reader.onload = function() {
            placeholder[0].src = reader.result;
          };
          reader.readAsDataURL(files[0]);
        }
        else {
          alert("Your browser doesn't support file upload!");
        }
      });
    };
  };
})(jQuery);
