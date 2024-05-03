let currentVideoIndex = 0;
let currentPlayer;

const videos = document.querySelectorAll('.video');

function showVideo(index) {
  if (currentPlayer) {
    currentPlayer.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  }

  videos.forEach((video, i) => {
    if (i === index) {
      video.classList.add('active');
      currentPlayer = video.querySelector('iframe').contentWindow;
    } else {
      video.classList.remove('active');
    }
  });
}

function redirectToNewPage() {
  // Change the URL to the desired HTML page
  window.location.href = "newdin.html";
}

$(document).ready(function() {
  // Function to scroll to the top of the page
  function scrollToTop() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
  }

  // Show/hide back-to-top button on scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  });


 // Function to scroll to the top of the page when back-to-top button is clicked
 $('.back-to-top').click(function() {
  scrollToTop();
});
});