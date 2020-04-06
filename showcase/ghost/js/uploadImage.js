function selectFileImage(fileObj) {  
    var file = fileObj.files['0'];
    var Orientation = null;  
      
    if (file) {
        EXIF.getData(file, function() {
            EXIF.getAllTags(this);  
            Orientation = EXIF.getTag(this, 'Orientation');
        });  
          
        var oReader = new FileReader();  
        oReader.onload = function(e) {
            var image = new Image();  
            image.src = e.target.result;  
            image.onload = function() {  
                var expectWidth = this.naturalWidth;  
                var expectHeight = this.naturalHeight;  
                  
                if (this.naturalWidth > this.naturalHeight && this.naturalWidth > 800) {  
                    expectWidth = 800;  
                    expectHeight = expectWidth * this.naturalHeight / this.naturalWidth;  
                } else if (this.naturalHeight > this.naturalWidth && this.naturalHeight > 1200) {  
                    expectHeight = 1200;  
                    expectWidth = expectHeight * this.naturalWidth / this.naturalHeight;  
                }  
                var canvas = document.createElement("canvas");  
                var ctx = canvas.getContext("2d");  
                canvas.width = expectWidth;  
                canvas.height = expectHeight;  
                ctx.drawImage(this, 0, 0, expectWidth, expectHeight);  
                var base64 = null;
                
                if (navigator.userAgent.match(/iphone/i)) {  
                    console.log('iphone');
                    if(Orientation != "" && Orientation != 1){ 
                        switch(Orientation){  
                            case 6: 
                                rotateImg(this,'left',canvas);  
                                break;  
                            case 8: 
                                rotateImg(this,'right',canvas);  
                                break;  
                            case 3:
                                rotateImg(this,'right',canvas);
                                rotateImg(this,'right',canvas);  
                                break;  
                        }         
                    } 
                    base64 = canvas.toDataURL("image/jpeg", 0.8);  
                }
                // else if (navigator.userAgent.match(/Android/i)) {  
                //     var encoder = new JPEGEncoder();  
                //     base64 = encoder.encode(ctx.getImageData(0, 0, expectWidth, expectHeight), 80);  
                // }
                else{ 
                    if(Orientation != "" && Orientation != 1){
                        switch(Orientation){  
                            case 6: 
                                rotateImg(this,'left',canvas);  
                                break;  
                            case 8:
                                rotateImg(this,'right',canvas);  
                                break;  
                            case 3:
                                rotateImg(this,'right',canvas);
                                rotateImg(this,'right',canvas);  
                                break;  
                        }         
                    }  
                    base64 = canvas.toDataURL("image/jpeg", 0.8);  
                } 
                draw(base64,1);
            };  
        };  
        oReader.readAsDataURL(file);  
    }  
}  
  
function rotateImg(img, direction,canvas) {
        var min_step = 0;    
        var max_step = 3;
        if (img == null)return; 
        var height = img.height;    
        var width = img.width;  
        var step = 2;    
        if (step == null) {    
            step = min_step;    
        }    
        if (direction == 'right') {    
            step++;   
            step > max_step && (step = min_step);    
        } else {    
            step--;    
            step < min_step && (step = max_step);    
        }
        var degree = step * 90 * Math.PI / 180;    
        var ctx = canvas.getContext('2d');    
        switch (step) {    
            case 0:    
                canvas.width = width;    
                canvas.height = height;    
                ctx.drawImage(img, 0, 0);    
                break;    
            case 1:    
                canvas.width = height;    
                canvas.height = width;    
                ctx.rotate(degree);    
                ctx.drawImage(img, 0, -height);    
                break;    
            case 2:    
                canvas.width = width;    
                canvas.height = height;    
                ctx.rotate(degree);    
                ctx.drawImage(img, -width, -height);    
                break;    
            case 3:    
                canvas.width = height;    
                canvas.height = width;    
                ctx.rotate(degree);    
                ctx.drawImage(img, -width, 0);    
                break;    
        }    
    }    