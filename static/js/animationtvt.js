

// gsap.set(".threePoint", { xPercent:-50, yPercent:-50, left:"50%", top:"50%"})
// gsap.set(".inair", { xPercent:-35, yPercent:-50, left:"35%", top:"50%"})
// gsap.set(".hoop", {xPercent:-50, yPercent:-50, left:"50%", top:"50%"})
// gsap.set(".threePoint", {autoAlpha:1, visibility: "visible", xPercent:-50, yPercent:-50, left:"50%", top:"50%"})
// gsap.set(".threePoint", {autoAlpha:1, visibility: "visible", xPercent:-50, yPercent:-50, left:"50%", top:"50%"})




function animation() {

  d3.json(`/tvtstats`).then(function(data) {
    // console.log(data);
    var bpmOne = 0;
    var bpmTwo = 0;
    var threeOne = 0;
    var twoOne = 0;
    var threeTwo = 0;
    var twoTwo = 0;


  
    for (var i=0; i < data.length; i +=2){
        // console.log(value);
        
        bpmOne = bpmOne + (data[i]['info']['BPM']);
        threeOne = threeOne + (data[i]['info']['3P']);
        twoOne = twoOne + (data[i]['info']['2P']);
        // console.log(value['info']['BPM']);
    };

    for (var j=1; j < data.length; j +=2){
        // console.log(value);
        
        bpmTwo = bpmTwo + (data[j]['info']['BPM']);
        threeTwo = threeTwo + (data[j]['info']['3P']);
        twoTwo = twoTwo + (data[j]['info']['2P']);
        // console.log(value['info']['BPM']);
    };

    if (bpmOne > bpmTwo){
      if((threeOne)*3>(twoOne)*2){
        var timeLine = gsap.timeline();
        timeLine.to("#fThreePoint", {autoAlpha:1, visibility: "visible", position: "static", duration: 2.1, x: 25})
          .to("#fThreePoint", {autoAlpha:0, visbility: "hidden", position: "absolute"})
          .to("#fInair", {autoAlpha:1, visibility: "visible", position: "static", duration: 0.8, x: 25})
          .to("#fInair", {autoAlpha:0, visbility: "hidden", position: "absolute"})
          .to("#fHoop", {autoAlpha:1, visibility: "visible", position: "static", duration: 0.8, x: 25})
          .to("#fHoop", {autoAlpha:0, visbility: "hidden", position: "absolute"})
          .to("#winnerL", {autoAlpha:1, visibility: "visible", position: "static", x: 0})
          .to("#loserR", {autoAlpha:1, visibility: "visible", position: "static", duration: 5, x: 0})
          .to("#winnerL", {autoAlpha:0, visibility: "hidden", position: "static", x: 0})
          .to("#loserR", {autoAlpha:0, visibility: "hidden", position: "static", x: 0});
      } else {
        var timeLine = gsap.timeline();
        timeLine.to("#fLaunch", {autoAlpha:1, visibility: "visible", position: "static", duration: 2.8, x: 25})
          .to("#fLaunch", {autoAlpha:0, visbility: "hidden", position: "absolute"})
          .to("#fAir", {autoAlpha:1, visibility: "visible" , position: "static", duration: 1.8, x: 25})
          .to("#fAir", {autoAlpha:0, visbility: "hidden", position: "absolute"})
          .to("#fDunk", {autoAlpha:1, visibility: "visible", position: "static", duration: 3.8, x: 25})
          .to("#fDunk", {autoAlpha:0, visbility: "hidden", position: "absolute"})
          .to("#winnerL", {autoAlpha:1, visibility: "visible", position: "static", x: 0})
          .to("#loserR", {autoAlpha:1, visibility: "visible", position: "static", duration: 5, x: 0})
          .to("#winnerL", {autoAlpha:0, visibility: "hidden", position: "static", x: 0})
          .to("#loserR", {autoAlpha:0, visibility: "hidden", position: "static", x: 0});
      }
    } else if (bpmTwo > bpmOne)  {
      if ((threeTwo)*3>(twoTwo)*2){
        var timeLine = gsap.timeline();
        timeLine.to("#threePoint", {autoAlpha:1, visibility: "visible", position: "static", duration: 2.1, x: -25})
          .to("#threePoint", {autoAlpha:0, visbility: "hidden", position: "absolute"})
          .to("#inair", {autoAlpha:1, visibility: "visible", position: "static", duration: 0.8, x: -25})
          .to("#inair", {autoAlpha:0, visbility: "hidden", position: "absolute"})
          .to("#hoop", {autoAlpha:1, visibility: "visible", position: "static", duration: 0.8, x: -25})
          .to("#hoop", {autoAlpha:0, visbility: "hidden", position: "absolute"})
          .to("#winnerR", {autoAlpha:1, visibility: "visible", position: "static", x: 0})
          .to("#loserL", {autoAlpha:1, visibility: "visible", position: "static", duration: 5, x: 0})
          .to("#winnerR", {autoAlpha:0, visibility: "hidden", position: "static", x: 0})
          .to("#loserL", {autoAlpha:0, visibility: "hidden", position: "static", x: 0});
      } else {
        var timeLine = gsap.timeline();
        timeLine.to("#launch", {autoAlpha:1, visibility: "visible", position: "static", duration: 2.8, x: -25})
          .to("#launch", {autoAlpha:0, visbility: "hidden", position: "absolute"})
          .to("#air", {autoAlpha:1, visibility: "visible", position: "static", duration: 1.8, x: -25})
          .to("#air", {autoAlpha:0, visbility: "hidden", position: "absolute"})
          .to("#dunk", {autoAlpha:1, visibility: "visible", position: "static", duration: 3.8, x: -25})
          .to("#dunk", {autoAlpha:0, visbility: "hidden", position: "absolute"})
          .to("#winnerR", {autoAlpha:1, visibility: "visible", position: "static", x: 0})
          .to("#loserL", {autoAlpha:1, visibility: "visible", position: "static", duration: 5, x: 0})
          .to("#winnerR", {autoAlpha:0, visibility: "hidden", position: "static", x: 0})
          .to("#loserL", {autoAlpha:0, visibility: "hidden", position: "static", x: 0});
      }
    }
    bpmOne = 0;
    bpmTwo = 0;
    threeOne = 0;
    twoOne = 0;
    threeTwo = 0;
    twoTwo = 0;
  });

  
}
animation();
  
  
document.getElementById('tvtWatch').addEventListener('click', function() {
  animation();
});