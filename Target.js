// Registering component in Target.js

AFRAME.registerComponent("target-ring", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `ring${i}`;
  
        //position variables     
        var posX = (Math.random() * 700 + (-400));
        var posY = (Math.random() * 6);
        var posZ = (Math.random() * -850 + 0);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createRings(id, position);
      }
    },
  
    createRings: function (id, position) {
  
      var terrainEl = document.querySelector("#terrain");
  
      var ringEl = document.createElement("a-entity");
  
      ringEl.setAttribute("id", id);
      ringEl.setAttribute("position", position);
  
      ringEl.setAttribute("material", "color", "#ff9100");
  
      ringEl.setAttribute("geometry", { primitive: "torus", radius: 6 });
  
      //set the static body attribute of the physics system
      ringEl.setAttribute("static-body", {
        shape: "sphere",
        sphereRadius: 2
      })
  
      ringEl.setAttribute("game-play", {
        elementId: `#${id}`
      })
  
      terrainEl.appendChild(ringEl);
    }
  });
  
  