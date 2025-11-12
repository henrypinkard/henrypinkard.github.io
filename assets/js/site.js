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
    
    // Desktop: Play on hover
    $(video).parent().on("mouseenter", function() {
      video.play();
    });
    
    // Desktop: Pause when hover ends
    $(video).parent().on("mouseleave", function() {
      video.pause();
      video.currentTime = 0; // Reset to beginning
    });
  });
  
  // Mobile/Tablet: Use Intersection Observer for autoplay when in view
  if ('IntersectionObserver' in window) {
    var isMobile = window.matchMedia("(max-width: 768px)").matches || 'ontouchstart' in window;
    
    if (isMobile) {
      var videoObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          var video = entry.target;
          
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            // Video is at least 50% visible
            video.play().catch(function(e) {
              // Handle autoplay policy restrictions
              console.log("Autoplay prevented:", e);
            });
          } else {
            // Video is out of view
            video.pause();
            video.currentTime = 0;
          }
        });
      }, {
        threshold: [0, 0.5, 1] // Trigger at 0%, 50%, and 100% visibility
      });
      
      // Observe all videos
      $(".work-item video").each(function() {
        videoObserver.observe(this);
      });
    }
  }
  
  // Highlight author name
  $(".author-list").each(function() {
    var html = $(this).html();
    // Replace "Henry Pinkard" with highlighted version
    html = html.replace(/Henry Pinkard/g, '<span style="color: #333; font-weight: 600;">Henry Pinkard</span>');
    $(this).html(html);
  });
});
