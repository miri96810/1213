// This is a JavaScript file
//git テストするよ〜
// information of this app
        var appkey = "e5f71871cd4b14c26292e623f4e333d9830e1dfdc18b4635275ccc1d1db60d57";
        var clientkey = "b38b0bee46821448c3f63dde1165ded8f3b35378ce20ae6c7db8fa80b5364854";
        var appID = "ZujqK1LB4cMB8Spe";
        var commonURL = "https://mb.api.cloud.nifty.com/2013-09-01/applications/"+ appID +"/publicFiles/";

        window.onload = function(){
            // Initialize and set the app to use NCMB in Monaca
            NCMB.initialize(appkey, clientkey);
            var monotest = NCMB.Object.extend("monotest");
            var query = new NCMB.Query(monotest);
        

            query.find({
              success: function(results) {
                  // Get a random image name of the picture from the class "randomFortune" in NCMB  
                  var image_name = results[Math.floor(Math.random()*results.length)].get("image");
                  var image_name2 = results[Math.floor(Math.random()*results.length)].get("image");
                  var image_name3 = results[Math.floor(Math.random()*results.length)].get("image");
                  var image_name4 = results[Math.floor(Math.random()*results.length)].get("image");


                  // Change the css styles and srcs according to the omiukji states  
                  //document.getElementById("test1").src = commonURL +image_name;
                  $(".img1").attr("src",commonURL + image_name);
                  $(".img2").attr("src",commonURL + image_name2);
                  $(".img3").attr("src",commonURL + image_name3);
                  $(".img4").attr("src",commonURL + image_name4);

              },
              error: function(error) {
                  alert(error.toString() + "error occured");
              }

            });
            
        }