(function( $ ) {
 
    $.fn.pwTooltip = function( text, pos = 'bottom' ) {
        this.css( "cursor", "pointer" );
        var position = $(this).offset();
        var width = $(this).outerWidth();
        var height = $(this).outerHeight();
        var top = position.top;
        var left = position.left;
        var obj = $(`<div style="position:absolute;padding:5px 15px;background:rgba(0, 0, 0, 0.7);color:white;border-radius:10px;visibility:hidden;opacity:0" class="pwtooltip">${text}</div>`);
        $(this).hover(
        function() {
           
            if (pos == 'bottom') {
                top = position.top + height + 5;
                left = position.left - 10;
                obj.css('left', left + 'px');
                obj.css('top', top + 'px');
                
            }
            if (pos == 'right') {
                left = position.left + width + 15;
                top = position.top;
                obj.css('left', left + 'px');
                obj.css('top', top + 'px');
            }
            if (pos == 'top') {
                $(obj).insertAfter('body');
                var h = obj.outerHeight();
                var w = obj.width();
                obj.remove();
                top = position.top - h - 10;
                left = position.left - 10;
                obj.css('left', left + 'px');
                obj.css('top', top + 'px');
            }
            if (pos == 'left') {
                var rt = ($(window).width() - (position.left + width));
                left = rt + width + 10;
                top = position.top;
                obj.css('right', left + 'px');
                obj.css('top', top + 'px');
            }

            obj.css('visibility', 'visible');
            obj.css('opacity', 1);
            $(obj).insertAfter(this);
            
        }, function() {
            //Скорее всего плохая идея через next() это делать, но что поделаешь
            $( this ).next('.pwtooltip').remove();
        }
        );
    };

}( jQuery ));