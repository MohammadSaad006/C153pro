//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 }    
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          if (this.data.speedOfRotation < 0.1) {
            this.data.speedOfRotation += 0.01;
          }
        }
        if (e.key === "ArrowLeft") {
          if (this.data.speedOfRotation > -0.1) {
            this.data.speedOfRotation -= 0.01;
          }
        }
  
      });
    },
    tick: function () {
      var mapRotation = this.el.getAttribute("rotation");
  
      mapRotation.y += this.data.speedOfRotation;
  
      this.el.setAttribute("rotation", {
        x: mapRotation.x,
        y: mapRotation.y,
        z: mapRotation.z
      });
    }
  });
  
  AFRAME.registerComponent("player-rotation-reader",{
    schema:{
      speedOfRotation:{type:"number", default:0},
      speedOfAscent: {type: "number", default:0}
    },
    init:function(){
      window.addEventListener("keydown",(e)=>{
        this.data.speedOfRotation=this.el.getAttribute("rotation")
        this.data.speedOfAscent= this.el.getAttribute("position")
        var playerRotation=this.data.speedOfRotation
        var playerPosition= this.data.speedOfAscent
  
        if(e.key === "ArrowRight"){
          if(playerRotation.x < 5){
            playerRotation.x += 0.5
            this.el.setAttribute("rotation", playerRotation)
          }
        }
        if(e.key === "ArrowLeft"){
          if(playerRotation.x >-5){
            playerRotation.x -= 0.5
            this.el.setAttribute("rotation", playerRotation)
          }
        }
      })
    }
    
  })
  
  
  