// window.onload = function() {
//     //Check File API support
//     if (window.File && window.FileList && window.FileReader) {

//       var filesInput = document.getElementById("files-img-product-add");
//       filesInput.addEventListener("change", function(event) {
//         var files = event.target.files; //FileList object
//         var output = document.getElementById("files-img-product-add-review");
//         for (var i = 0; i < files.length; i++) {
//           var file = files[i];
//           //Only pics
//           if (!file.type.match('image'))
//             continue;
//           var picReader = new FileReader();
//           picReader.addEventListener("load", function(event) {
//             var picFile = event.target;
//             var div = document.createElement("div");
//             div.innerHTML = "<img class='thumbnail' src='" + picFile.result + "'" +
//               "title='" + picFile.name + "'/>";
//             output.insertBefore(div, null);
//           });
//           //Read the image
//           picReader.readAsDataURL(file);
//         }

//         //return files;
//       });
//     } else {
//       console.log("Your browser does not support File API");
//     } 

//    // const fileImgPost = window.onload();
//     console.log("check:  ", files)
//   }

  
function getImgPost(){
    var filesInput = document.getElementById("files-img-product-add");
    filesInput.addEventListener("change", function(event) {
      var files = event.target.files; //FileList object
      var output = document.getElementById("files-img-product-add-review");
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        //Only pics
        if (!file.type.match('image'))
          continue;
        var picReader = new FileReader();
        picReader.addEventListener("load", function(event) {
          var picFile = event.target;
          var div = document.createElement("div");
          div.className="img-review-item"
          div.innerHTML = "<img class='thumbnail' src='" + picFile.result + "'" +
            "title='" + picFile.name + "'/>";
          output.insertBefore(div, null);
        });
        //Read the image
        picReader.readAsDataURL(file);
      }
      console.log("check in function:  ", files)
      return files;
    });
  }
  //document.getElementsByTagName('body')[0].style.backgroundColor  = 'red';
  let imgPostList = getImgPost();
  console.log("check:  ", imgPostList)

  