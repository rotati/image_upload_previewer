Image Upload Previewer
========

Image Upload Previewer is a jQuery plugin that preview your uploaded image using browser file upload button in an  tag.

See: [Demo](http://codepen.io/kuyseng/pen/GpxNoV)

How to use
----------

To get started, download the file `jquery.image_upload_previewer.js` and copy to your website/application directory.
Load it in the <head> section of your HTML document. Make sure you also add the jQuery library.

    <head>
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script type="text/javascript" src="/jquery.image_upload_previewer.js"></script>
    </head>

Create your file input with id `uploader`:

    <input type="file" id="uploader">

Then create placeholder for the preview image:

    <img id="placeholder">

Finally initalize it in javascript file.

    $('#placeholder').previewImage({uploader: '#uploader'});
