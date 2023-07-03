//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 }
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          if (this.data.speedOfRotation < 0.1) {
            this.data.speedOfRotation += 0.001;
          }
        }
        if (e.key === "ArrowLeft") {
          if (this.data.speedOfRotation > -0.1) {
            this.data.speedOfRotation -= 0.001;
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
  
  //Boat Rotation
  AFRAME.registerComponent("boat-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 }
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        //get the data from the attributes
        this.data.speedOfRotation = this.el.getAttribute("rotation");
        var boatRotation = this.data.speedOfRotation;
  
        //Control the attributes with arrow keys
        if (e.key === "ArrowRight") {
          if (boatRotation.y < 10) {
            boatRotation.y += 0.001;
            this.el.setAttribute("rotation", boatRotation);
          }
        }
        if (e.key === "ArrowLeft") {
          if (boatRotation.y > -10) {
            boatRotation.y -= 0.001;
            this.el.setAttribute("rotation", boatRotation);
          }
        }
      })
    }
  })