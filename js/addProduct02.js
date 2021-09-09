var imagesReview = [];
var imagesPost = []
   
   
function image_select() {
    var image = document.getElementById('image-product-add').files;
    for (i = 0; i < image.length; i++) {
          if (check_duplicate(image[i].name)) {
                imagesReview.push({
                        "name" : image[i].name,
                        "url" : URL.createObjectURL(image[i]),
                        "file" : image[i],
                });
                imagesPost.push(image[i]);
          } else 
          {
               alert(image[i].name + " is already added to the list");
          }
    }

    document.getElementById('form-add-img-product').reset();
    document.getElementById('image-product-add-review').innerHTML = image_show();
}
   
function image_show() {
    var image = "";
    imagesReview.forEach((i) => {
         image += `<div class="image_container d-flex justify-content-center position-relative">
                <img src="`+ i.url +`" alt="Image">
                <span class="position-absolute" onclick="delete_image(`+ imagesReview.indexOf(i) +`)">&times;</span>
          </div>`;
    })
    return image;
}


 
   
function delete_image(e) {
    imagesPost.splice(e, 1);
    imagesReview.splice(e, 1);
    document.getElementById('image-product-add-review').innerHTML = image_show();
}

function check_duplicate(name) {
    var image = true;
    if (imagesReview.length > 0) {
        for (e = 0; e < imagesReview.length; e++) {
            if (imagesReview[e].name == name) {
                image = false;
                break;
            }
        }
    }
    return image;
}


function get_image_data() {
    var form = new FormData()
   for (let index = 0; index < imagesReview.length; index++) {
       form.append("file[" + index + "]", imagesReview[index]['file']);
   }
   return form;
}