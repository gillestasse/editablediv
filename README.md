editablediv
===========


## Install with 
bower install git://github.com/gillestasse/editablediv

## Dependencies

Bootstrap3 css for the glyicons


## Use html
```

<!DOCTYPE html>
<html lang="en">
  <head>


<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>	
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">

<!-- include editable div -->
<script src="../dist/editablediv.js"></script>
<link href="../dist/editablediv.css" rel="stylesheet">


  </head>
 <body>
 </body>
 <div style="line-height:12px;width:150px" class="editable-textarea"></div>


 </html>

 ```
 ## use javascript 
 
```
	
        var myeditablediv=$('.editable-textarea').editablediv(
          {val:$(mine).html(),
            actions:function(){ console.info('lllllllllllll')}
          })
        
        myeditablediv.on('custom',function(evt, myData) {
          setTimeout(function() {myplung.done_loading()}, 1000);
        })


 ```
 
 Options are : 
 
 val : the value of the div
 actions , value 
