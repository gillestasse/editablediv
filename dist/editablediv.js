(function($) {

    $.fn.editablediv = function(options) {

        $(this).on('focus',function(){
        	$(this).parent().parent().find('.options').css('visibility','visible')
        	input=$(this)
        })

        $(this).on('focusout',function(){
        	$(this).parent().parent().find('.options').css('visibility','hidden')
        })

         $('.closeoptions').on('click',function(){
         	$(this).parent().parent().find('.options').css('visibility','hidden')
         })

         $('.saveoptions').on('click',function(){
         	//options.actions()
           //console.info($(this))
         	$(this).parent().parent().find('.options').css('visibility','hidden')
         	input.trigger('custom', {value:$(input).html()} );
         })

         this.disable=function(){
         	$(this).parent().parent().find('div[contenteditable]').attr('contenteditable','false')
         }

         return this

    }

}(jQuery));

