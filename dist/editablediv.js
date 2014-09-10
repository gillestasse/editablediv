(function($) {

    $.fn.editablediv = function(options) {

        html='<div style="width:150px;display:inline-flex">\
        <div contenteditable="true" style="border:1px solid #rgba(0,0,0,0);width:150px" class="editable-div"></div>\
        <span class="glyphicon glyphicon-question-sign" style="top:0" id="help"></span></div>\
        <div class="options">\
        <span class="glyphicon glyphicon-remove closeoptions" style="border-right:1px solid black;padding-right:4px;"></span>\
        <span class="glyphicon glyphicon-ok saveoptions" ></span>\
        </div>'

        if(options.html){
            html = options.html
        }

        $(this).html(html)

        setTimeout(function() {
            $(element).find('div[contenteditable]').html(options.val)
        }, 10);

        var element=this
        var old_value

        element.on('mouseenter',function(){
            $(this).find('div[contenteditable]').css('border','1px dotted #428bca')
        })

        element.on('mouseleave',function(){
            $(this).find('div[contenteditable]').css('border','white')
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
            $(element).find('#help').removeClass("glyphicon-question-sign")
            $(element).find('#help').addClass("spinner")

            element._input.trigger('saving', {value:element._input.html()} );

            if(options.actions){options.actions()}

         })

         this.disable=function(){
            $(element).find('div[contenteditable]').attr('contenteditable','false')
         }

         this.done_loading=function(){
            $(element).find('#help').removeClass("spinner")
            $(element).find('#help').addClass("glyphicon-question-sign")          
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

