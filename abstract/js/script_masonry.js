/**
 * Created by Lily on 24.08.2017.
 */
//$(document).ready(function() {
//    $('#container-masonry').masonry({
//        columnWidth: '.item',
//        itemSelector: '.item',
//        percentPosition: true
//    }).imagesLoaded(function() {
//        $('#container-masonry').masonry('reload');
//    });
//});

$(document).ready(function() {
    var container = $('.gallery');
    container.imagesLoaded(function(){
        container.masonry({
            itemSelector: '.item-masonry',
            columnWidth: 1,
            percentPosition: true
        });
    });
});