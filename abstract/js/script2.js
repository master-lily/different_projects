/**
 * Created by losik on 11.08.17.
 */
//ALSO i CAN WRITE document.onclick = function () { .... }
window.onclick = function() {
    var showVideo = function (videoId) {
        var shareVideo = document.getElementById("shareVideo");
        var videoBlock = document.getElementById("photoblock__video");
        var video = document.getElementById(videoId);
        shareVideo.style.display = "block";
        videoBlock.style.display = "block";
        video.style.display = "block";
    };

    var hideVideo = function (videoId) {
        var shareVideo = document.getElementById("shareVideo");
        var videoBlock= document.getElementById("photoblock__video");
        var video = document.getElementById(videoId);
        shareVideo.style.display = "block";
        videoBlock.style.display = "none";
        video.style.display = "none";
    };

    document.getElementById("shareVideo").onclick = function(){
        showVideo("video");
    };

    document.getElementById("closeBtn2").onclick = function(){
        hideVideo("video");
    };


};

