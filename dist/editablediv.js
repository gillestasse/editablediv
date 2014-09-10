(function($) {

    $.fn.editablediv = function(options) {

        html='<div style="width:128px;display:inline-flex">\
        <div contenteditable="true" style="border:1px solid #DEDEDE;width:150px" class="editable-div"></div>\
        <span class="glyphicon glyphicon-pencil" style="top:0" id="editicon"></span></div>\
        <div class="options">\
       <button><span class="glyphicon glyphicon-remove closeoptions"></span></button>\
        <button><span class="glyphicon glyphicon-ok saveoptions" ></span></button>\
        </div>'

        if(options.html){
            html = options.html
        }

        $(this).html(html)

        setTimeout(function() {
            $(element).find('div[contenteditable]').html(options.val)
            $(this).find('div[contenteditable]').css('border','1px solid #dedede')
             $(this).find('.glyphicon-pencil').hide()
        }, 10);

        var element=this
        var old_value

        element.on('mouseenter',function(){
            $(this).find('div[contenteditable]').css('border','1px solid #428bca')
             $(this).find('.glyphicon-pencil').show()
        })

        element.on('mouseleave',function(){
             $(this).find('div[contenteditable]').css('border','1px solid #dedede')
             $(this).find('.glyphicon-pencil').hide()
        })

        $(element).find('div[contenteditable]').on('focus',function(){
            setTimeout(function() {$(element).find('.options').css('display','block')}, 10);
            element._input=$(this)
            old_value = element._input.html()
        })

        $('.closeoptions').on('click',function(){
            element._input.html(old_value)
            $(element).find('.options').css('display','none')
        })

        $(this).on('focusout',function(){

            $('body').click(function(e){
                if(!$(e.target).hasClass('saveoptions')){
                    element._input.html(old_value)
                }
            });

            setTimeout(function() {
                $(element).find('.options').css('display','none')
                $('body').off('click')
            }, 100);
        })


         $(element).find('.saveoptions').on('click',function(){
            
            $(element).find('.options').css('display','none')
            $(element).find('#editicon').removeClass("glyphicon-pencil")
            $(element).find('#editicon').addClass("spinner")

            element._input.trigger('saving', {value:element._input.html()} );

            if(options.actions){options.actions()}

         })

         this.disable=function(){
            $(element).find('div[contenteditable]').attr('contenteditable','false')
         }

         this.done_loading=function(){
            $(element).find('#editicon').removeClass("spinner")
            $(element).find('#editicon').addClass("glyphicon-pencil")          
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

