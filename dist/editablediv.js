(function($) {

    $.fn.editablediv = function(options) {


        html='<div style="width:150px;display:inline-flex">\
        <div contenteditable="true" style="border:1px solid #DEDEDE;width:150px" class="editable-div"></div>\
        <span class="glyphicon glyphicon-pencil edit"></span></div>\
        <div class="options">\
        <span class="glyphicon glyphicon-remove closeoptions" style="border-right:1px solid black;padding-right:4px;color: #D9534F; "></span>\
        <span class="glyphicon glyphicon-ok saveoptions" style="color: #5CB85C; "></span>\
        </div>'

         $(this).html(html)
         var element=this
         var input
     
        $(this).find('div[contenteditable]').on('focus',function(){
            console.info($(this).find('.options'))
            $(element).find('.options').css('visibility','visible')
            input=$(this)
        })

 
        $(this).on('focusout',function(){
        	$(element).find('.options').css('visibility','hidden')
        })

        $('.closeoptions').on('click',function(){
         	$(element).find('.options').css('visibility','hidden')
        })

         $('.saveoptions').on('click',function(){
         	//options.actions()
           //console.info($(this))
         	$(element).find('.options').css('visibility','hidden')
         	input.trigger('custom', {value:$(input).html()} );
         })

         this.disable=function(){
         	$(element).find('div[contenteditable]').attr('contenteditable','false')
         }

         return this

    }

}(jQuery));

