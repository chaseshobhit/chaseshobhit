// const filled=document.querySelector('.filled');
// function update(){
//     filled.style.width=`${((window.scrollY)/(document.body.scrollHeight-window.innerHeight)*100)}`
//     requestAnimationFrame(update);
// }
// update();

// $(function() {
//     $("body").prognroll();
//   });

//   $(function() {
//     $("body").prognroll({
//       height: 5, // progress bar height
//       color: "#50bcb6", // progress bar background color
//       custom: false // if you make it true, you can add your custom div and see it's scroll progress on the page
//     });
//   });

// function updateProgressBar(){
//     const {scrollTop, scrollHeight} = document.documentElement;
//     const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%';
//     document.querySelector('#progress-bar').style.setProperty('--progress', scrollPercent);
//   }

//   document.addEventListener('scroll', updateProgressBar);

// window.addEventListener('scroll', function() {
//   let scrollPosition = window.scrollY;
//   let documentHeight = document.documentElement.scrollHeight;
//   let windowHeight = window.innerHeight;
//   let progressWidth = (scrollPosition / (documentHeight - windowHeight)) * 100;
//   document.querySelector('.progress-bar').style.width = progressWidth + '%';
// });

const documentHeight = document.documentElement.scrollHeight;

// Add an event listener to the window object that listens for the 'scroll' event
// window.addEventListener('scroll', function() {
//   // Get the current scroll position of the window
//   const scrollPosition = window.scrollY;

//   // Calculate the percentage of the page that has been scrolled
//   const scrolled = (scrollPosition / (documentHeight - window.innerHeight)) * 100;

//   // Update the width of the progress bar with the calculated percentage
//   document.getElementById('progress-bar').querySelector('.bar').style.width = scrolled + '%';
// });

// Get the div element by its ID
var myDiv = document.getElementById("particular_portfolio");

// Add a click listener to the div element
myDiv.addEventListener("click", function () {
  // Redirect to the specified URL
  window.location.href =
    " https://play.google.com/store/apps/details?id=com.rider_infinity.lastone";
});
