

// gsap.set(".threePoint", { xPercent:-50, yPercent:-50, left:"50%", top:"50%"})
// gsap.set(".inair", { xPercent:-35, yPercent:-50, left:"35%", top:"50%"})
// gsap.set(".hoop", {xPercent:-50, yPercent:-50, left:"50%", top:"50%"})
// gsap.set(".threePoint", {autoAlpha:1, visibility: "visible", xPercent:-50, yPercent:-50, left:"50%", top:"50%"})
// gsap.set(".threePoint", {autoAlpha:1, visibility: "visible", xPercent:-50, yPercent:-50, left:"50%", top:"50%"})


function animation() {
  d3.json(`/pvpstats`).then(function(data) {
    const names = [];
    const bpm = [];

    Object.entries(data).forEach(([key, value]) => {
      // console.log(value);
      
      names.push(value.name);
      bpm.push(value['info']['BPM']);
      // console.log(value['info']['BPM']);
    });
// var data = [{"BPM": "15.6", "3P":"125", "2P":"400"}, {"BPM": "11.7", "3P":"250", "2P": "225"}];


  if (bpm[0] > bpm[1]){
    if((data[0]["info"]["3P"])*3>(data[0]["info"]["2P"])*2){
      var timeLine = gsap.timeline();
      timeLine.to("#fThreePoint", {autoAlpha:1, visibility: "visible", position: "static", duration: 2.1, x: 100})
        .to("#fThreePoint", {autoAlpha:0, visbility: "hidden", position: "absolute"})
        .to("#fInair", {autoAlpha:1, visibility: "visible", position: "static", duration: 0.8, x: 100})
        .to("#fInair", {autoAlpha:0, visbility: "hidden", position: "absolute"})
        .to("#fHoop", {autoAlpha:1, visibility: "visible", position: "static", duration: 0.8, x: 100})
        .to("#fHoop", {autoAlpha:0, visbility: "hidden", position: "absolute"})
        .to("#winnerL", {autoAlpha:1, visibility: "visible", position: "static", x: 0})
        .to("#loserR", {autoAlpha:1, visibility: "visible", position: "static", duration: 5, x: 0})
        .to("#winnerL", {autoAlpha:0, visibility: "hidden", position: "static", x: 0})
        .to("#loserR", {autoAlpha:0, visibility: "hidden", position: "static", x: 0});
    } else {
      var timeLine = gsap.timeline();
      timeLine.to("#fLaunch", {autoAlpha:1, visibility: "visible", position: "static", duration: 2.8, x: 100})
        .to("#fLaunch", {autoAlpha:0, visbility: "hidden", position: "absolute"})
        .to("#fAir", {autoAlpha:1, visibility: "visible" , position: "static", duration: 1.8, x: 100})
        .to("#fAir", {autoAlpha:0, visbility: "hidden", position: "absolute"})
        .to("#fDunk", {autoAlpha:1, visibility: "visible", position: "static", duration: 3.8, x: 100})
        .to("#fDunk", {autoAlpha:0, visbility: "hidden", position: "absolute"})
        .to("#winnerL", {autoAlpha:1, visibility: "visible", position: "static", x: 0})
        .to("#loserR", {autoAlpha:1, visibility: "visible", position: "static", duration: 5, x: 0})
        .to("#winnerL", {autoAlpha:0, visibility: "hidden", position: "static", x: 0})
        .to("#loserR", {autoAlpha:0, visibility: "hidden", position: "static", x: 0});
    }
  } else {
    if ((data[1]["info"]["3P"])*3>(data[1]["info"]["2P"])*2){
      var timeLine = gsap.timeline();
      timeLine.to("#threePoint", {autoAlpha:1, visibility: "visible", position: "static", duration: 2.1, x: -100})
        .to("#threePoint", {autoAlpha:0, visbility: "hidden", position: "absolute"})
        .to("#inair", {autoAlpha:1, visibility: "visible", position: "static", duration: 0.8, x: -100})
        .to("#inair", {autoAlpha:0, visbility: "hidden", position: "absolute"})
        .to("#hoop", {autoAlpha:1, visibility: "visible", position: "static", duration: 0.8, x: -100})
        .to("#hoop", {autoAlpha:0, visbility: "hidden", position: "absolute"})
        .to("#winnerR", {autoAlpha:1, visibility: "visible", position: "static", x: 0})
        .to("#loserL", {autoAlpha:1, visibility: "visible", position: "static", duration: 5, x: 0})
        .to("#winnerR", {autoAlpha:0, visibility: "hidden", position: "static", x: 0})
        .to("#loserL", {autoAlpha:0, visibility: "hidden", position: "static", x: 0});
      } else {
        var timeLine = gsap.timeline();
        timeLine.to("#launch", {autoAlpha:1, visibility: "visible", position: "static", duration: 2.8, x: -100})
          .to("#launch", {autoAlpha:0, visbility: "hidden", position: "absolute"})
          .to("#air", {autoAlpha:1, visibility: "visible", position: "static", duration: 1.8, x: -100})
          .to("#air", {autoAlpha:0, visbility: "hidden", position: "absolute"})
          .to("#dunk", {autoAlpha:1, visibility: "visible", position: "static", duration: 3.8, x: -100})
          .to("#dunk", {autoAlpha:0, visbility: "hidden", position: "absolute"})
          .to("#winnerR", {autoAlpha:1, visibility: "visible", position: "static", x: 0})
          .to("#loserL", {autoAlpha:1, visibility: "visible", position: "static", duration: 5, x: 0})
          .to("#winnerR", {autoAlpha:0, visibility: "hidden", position: "static", x: 0})
          .to("#loserL", {autoAlpha:0, visibility: "hidden", position: "static", x: 0});
      }
    }
  });
}
animation();


document.getElementById('pvpWatch').addEventListener('click', function() {
  animation();
});