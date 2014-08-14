(function($) {


    $.fn.editablediv = function(options) {


        html='<div style="width:150px;display:inline-flex">\
        <div contenteditable="true" style="border:1px solid #DEDEDE;width:150px" class="editable-div"></div>\
        <span class="glyphicon glyphicon-question-sign" style="top:0"></span></div>\
        <div class="options">\
        <span class="glyphicon glyphicon-remove closeoptions" style="border-right:1px solid black;padding-right:4px;"></span>\
        <span class="glyphicon glyphicon-ok saveoptions" ></span>\
        </div>'

         $(this).html(html)

         setTimeout(function() {
            $(element).find('div[contenteditable]').html(options.val)
         }, 10);

         var element=this

     
        $(element).find('div[contenteditable]').on('focus',function(){
            setTimeout(function() {$(element).find('.options').css('display','block')}, 10);
            element._input=$(this)
        })


        $('.closeoptions').on('click',function(){
            $(element).find('.options').css('display','none')
        })

         $(element).find('.saveoptions').on('click',function(){
            $(element).find('.options').css('display','none')
            $(element).find('.glyphicon').removeClass("glyphicon-pencil")
            $(element).find('.glyphicon').addClass("glyphicon-remove-circle")
            $(element).find('.glyphicon-remove-circle').css("color","#D9534F")
            element._input.trigger('saving', {value:element._input.html()} );

            if(options.actions){options.actions()}

         })

         this.disable=function(){
            $(element).find('div[contenteditable]').attr('contenteditable','false')
         }

         this.done_loading=function(){
//            console.info('done done_loading',element)
            $(element).find('.glyphicon').removeClass("glyphicon-remove-circle")
            $(element).find('.glyphicon').addClass("glyphicon-pencil")
            $(element).find('.glyphicon').css("color","#333")            
         }

         function getinput(){
            return element._input
         }

         function getelement(){
            return this.element
         }

         return this

    }

}(jQuery));

