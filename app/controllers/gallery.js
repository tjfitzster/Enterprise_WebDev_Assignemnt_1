'use strict';

const ImageStore = require('../utils/image-store');

const Gallery = { uploadFile: {
    handler: async function(request, h) {
      try {
        const file = request.payload.imagefile;
        if (Object.keys(file).length > 0) {
          await ImageStore.uploadImage(request.payload.imagefile);
          return h.redirect('/');
        }
        return h.view('gallery', {
          title: 'Cloudinary Gallery',
          error: 'No file selected'
        });
      } catch (err) {
        console.log(err);
      }
    },
    payload: {
      multipart: true,
      output: 'data',
      maxBytes: 209715200,
      parse: true
    }
  }
};

module.exports = Gallery;