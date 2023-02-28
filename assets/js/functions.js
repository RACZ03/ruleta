let integrants = [
  // { fillStyle: "#A2D9CE", text: "Jerry M" },
  { fillStyle: "#F4D03F", text: "Orlando" },
  { fillStyle: "#D2B4DE", text: "Jose C" },
  // { fillStyle: "#82E0AA", text: "Smithers" },
  { fillStyle: "#F8C471", text: "Obed Diaz" },
  // { fillStyle: "#85C1E9", text: "Hamilton" },
  // { fillStyle: "#9B59B6", text: "Jesus R" },
  { fillStyle: "#9B5000", text: "Cesar" },
  { fillStyle: "#EC7063", text: "Corco" },
  { fillStyle: "#808B96", text: "Roberto" },
  { fillStyle: "#82FFAA", text: "Yuriel" },
    // { fillStyle: "#c0c0c0", text: "Morty" },
    // { fillStyle: "#F4DF55", text: "Irvin" },

]

var myRoulette = new Winwheel({
    numSegments: integrants.length,
    outerRadius: 150,
    segments: integrants,
    animation: {
      type: "spinToStop",
      duration: 3,
      callbackFinished: "mensaje()",
      callbackAfter: "dibujarIndicador()",
      // add more time 
      spins: 1000,
    },
  });
  
  dibujarIndicador();
  
  function mensaje() {
    var SegmentoSeleccionado = myRoulette.getIndicatedSegment();
    
    myRoulette.stopAnimation(false);
    Swal.fire({
        title: SegmentoSeleccionado.text,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
    }).then((result) => {
        // delete elemnt from array
        integrants = integrants.filter(function(item) {
            return item.text !== SegmentoSeleccionado.text
        });
        myRoulette.rotationAngle = 0;
        myRoulette.draw();
        dibujarIndicador();    
    }).catch((err) => {
        
    });;
  
    
  }
  
  function dibujarIndicador() {
    var ctx = myRoulette.ctx;
    ctx.strokeStyle = "navy";
    ctx.fillStyle = "red";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(190, 10);
    ctx.lineTo(230, 10);
    ctx.lineTo(200, 70);
    ctx.lineTo(170, 10);
    ctx.stroke();
    ctx.fill();
  }
  