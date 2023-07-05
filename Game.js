AFRAME.registerComponent("game-play", {
    schema: {
        elementId: {
            type: "string", default: "#ring1"
        }
    },

    update: function () {
        this.isCollided(this.data.elementId)
    },

    isCollided: function (elementId) {
        const element = document.querySelector(elementId)
        element.addEventlistener("collide", e => {
            if (elementId.includes("#ring")) {
                console.log("ring collision")
            }
            else if (elementId.includes("#hurdle")) {
                console.log("ship collision")
            }
        });
    },
})