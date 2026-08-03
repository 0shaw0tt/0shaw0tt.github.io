console.log("footnotes loaded");

$(function() {

    $('div.footnotes').addClass('footnotes-side');

    console.log($('div.footnotes').attr('class'));

    $('#article').addClass('footnotes-processed');

    var place_footnotes = function() {
        var minTop = 0;
        $('div.footnotes-side li').each( function() {
        
            var anchor = $(this).attr('id');

            fnAnchor = $('a[href=#'+anchor+']')

            var top = fnAnchor.parents('p, blockquote').position().top;
            
            top = Math.max(top, minTop);           
            var fnHeight = $(this).css('top', top).height();
        
            minTop = top+fnHeight;
            
        });
    };
    
    $(window).bind('resize', place_footnotes);

    place_footnotes();

    

});
