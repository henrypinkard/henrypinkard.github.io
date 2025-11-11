/**
 * Menu
 */
 $("a.menu-icon").on("click", function(event) {
   var w = $(".menu");

   w.css({
     display: w.css("display") === "none"
      ? "block"
      : "none"
   });
 });

/**
 * Wechat widget
 */
function moveWidget(event) {
  var w = $("#wechat-widget");

  w.css({
    left: event.pageX - 25,
    top: event.pageY - w.height() - 60
  });
}

$("a#wechat-link").on("mouseenter", function(event) {
  $("#wechat-widget").css({ display: "block" });
  moveWidget(event);
});

$("a#wechat-link").on("mousemove", function(event) {
  moveWidget(event);
});

$("a#wechat-link").on("mouseleave", function(event) {
  $("#wechat-widget").css({ display: "none" });
});

/**
 * Video hover play/pause
 */
$(document).ready(function() {
  // Find all video elements in work items
  $(".work-item video").each(function() {
    var video = this;
    
    // Remove autoplay attribute and pause initially
    $(video).removeAttr("autoplay");
    video.pause();
    
    // Play on hover
    $(video).parent().on("mouseenter", function() {
      video.play();
    });
    
    // Pause when hover ends
    $(video).parent().on("mouseleave", function() {
      video.pause();
      video.currentTime = 0; // Reset to beginning
    });
  });
  
  // Highlight author name
  $(".author-list").each(function() {
    var html = $(this).html();
    // Replace "Henry Pinkard" with highlighted version
    html = html.replace(/Henry Pinkard/g, '<span style="color: #333; font-weight: 600;">Henry Pinkard</span>');
    $(this).html(html);
  });
});
