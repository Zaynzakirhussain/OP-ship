// Registering component in Target.js

AFRAME.registerComponent("target-ring", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `ring${i}`;
  
        //position variables     
        var posX = (Math.random() * 400 + (-200));
        var posY = (4);
        var posZ = (Math.random() * -950 + 0);
  
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

      ringEl.setAttribute("animation", {
        property: "rotation",
        to: "0 360 0",
        loop: "true",
        dur: 9000,
      });

      //set the static body attribute of the physics system
      ringEl.setAttribute("static-body", {
        shape: "sphere",
        sphereRadius: 5
      })
  
      ringEl.setAttribute("game-play", {
        elementId: `#${id}`
      })
  
      terrainEl.appendChild(ringEl);
    }
  });
  
  