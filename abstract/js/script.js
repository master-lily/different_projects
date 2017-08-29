/**
 * Created by losik on 14.07.17.
 */
//$( function() {
//
//    $('#container-masonry').masonry({
//        itemSelector: '.item',
//        columnWidth: 70
//    });
//
//});

window.onload = function() {
    var showPopup = function (popupId) {
        var share = document.getElementById("share");
        var overlay = document.getElementById("overlay");
        var popupShare = document.getElementById(popupId);
        share.style.display = "none";
        overlay.style.display = "block";
        popupShare.style.display = "block";
    };

    var hidePopup = function (popupId) {
        var share = document.getElementById("share");
        var overlay = document.getElementById("overlay");
        var popupShare = document.getElementById(popupId);
        share.style.display = "block";
        overlay.style.display = "none";
        popupShare.style.display = "none";
    };

    document.getElementById("share").onclick = function(){
        showPopup("popupShare");
    };

    document.getElementById("CloseBtn").onclick = function(){
        hidePopup("popupShare");
    };


};






