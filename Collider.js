//registering component in collider.js
AFRAME.registerComponent("ships", {
    init: function () {
        for (var i = 1; i <= 20; i++) {
            var id = `hurdle${i}`

            //position variables     
            var posX = (Math.random() * 400 + (-200));
            var posY = (Math.random() * 0);
            var posZ = (Math.random() * -1050 + 0);

            var position = { x: posX, y: posY, z: posZ };

            this.ships(id, position)
        }
    },
    ships: (id, position) => {
        //get the terrain element
        var terrainEl = document.querySelector("#terrain")

        //creating the bird model entity
        var shipsEl = document.createElement("a-entity")

        //setting multiple attributes
        shipsEl.setAttribute("gltf-model", "./assets/scene.glTF")

        //animated models
        shipsEl.setAttribute("animation-mixer", {})

        shipsEl.setAttribute("rotation", { x: 0, y: -90, z: 0 });

        shipsEl.setAttribute("animation", "property: position; to: 0 0 1000; easing:linear; loop: true; dur: 150000")

        shipsEl.setAttribute("scale", { x: 1, y: 1, z: 1 })

        shipsEl.setAttribute("id", id)

        shipsEl.setAttribute("position", position)

        shipsEl.setAttribute("static-body", {
            shape: "sphere",
            sphereRadius: 25
        })

        shipsEl.setAttribute("game-play", {
            elementId: `#${id}`
        })

        //append the bird entity as the child of the terrain entity
        terrainEl.appendChild(shipsEl)
    }
})