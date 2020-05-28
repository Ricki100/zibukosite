function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}


// Function to add and remove the page transition screen
function pageTransition() {

    var tl = gsap.timeline();
    tl.to('ul.transition li', { duration: .5, scaleY: 1,transformOrigin: "bottom left", stagger:.2});
    tl.to('ul.transition li', { duration: .5, scaleY: 0,transformOrigin: "bottom left", stagger:.1});
   
  }

  // Function to animate the content of each page
function contentAnimation() {

    var tl = gsap.timeline();
    tl.from('.cta', 2, {x: '-190', opacity: 0,  ease: Back.easeOut.config(1.9)})
    tl.from('.sub-head', 2, {y: '200', opacity: 0, ease: Back.easeOut.config(1.9)},'-=2')
    tl.from('h1', 1, { opacity: 0,  ease: Power2.easeOut})
    
  }
  
  
  $(function() {
  
    barba.init({
  
      sync: true,
  
      transitions: [{
  
        async leave(data) {
          
          const done = this.async();
          
          pageTransition();
          await delay(1000);
          done();
  
        },
  
        async enter(data) {
          contentAnimation();
        },
  
        async once(data) {
          contentAnimation();
        }
  
      }]
    });
  
  });