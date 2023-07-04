//registering component in collider.js
AFRAME.registerComponent("flying-birds", {
    init: function () {
        for (var i = 1; i <= 20; i++) {
            var id = `hurdle${i}`

            //position variables     
            var posX = (Math.random() * 700 + (-400));
            var posY = (Math.random() * 0);
            var posZ = (Math.random() * -850 + 0);

            var position = { x: posX, y: posY, z: posZ};

            this.flyingBirds(id, position)
        }
    },
    flyingBirds: (id, position) => {
        //get the terrain element
        var terrainEl = document.querySelector("#terrain")

        //creating the bird model entity
        var birdEl = document.createElement("a-entity")

        //setting multiple attributes
        birdEl.setAttribute("gltf-model", "./assets/scene.glTF")

        //animated models
        birdEl.setAttribute("animation-mixer", {})

        birdEl.setAttribute("animation", "property: position; to: 1000 0 0; easing:linear; loop: true; dur: 150000")

        birdEl.setAttribute("scale", { x: 1, y: 1, z: 1 })

        birdEl.setAttribute("id", id)

        birdEl.setAttribute("position", position)

        birdEl.setAttribute("static-body", {
            shape: "sphere",
            sphereRadius: 5
          })

        birdEl.setAttribute("game-play", {
            elementId: `#${id}`
        })

        //append the bird entity as the child of the terrain entity
        terrainEl.appendChild(birdEl)
    }
})