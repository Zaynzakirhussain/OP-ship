AFRAME.registerComponent("game-play", {
    schema: {
        elementId: {
            type: "string", default: "#ring1"
        }
    },

    init: function () { var duration = 62; var timerEl = document.querySelector("#timer"); this.startTimer(duration, timerEl); },

    update: function () {
        this.isCollided(this.data.elementId)
    },

    startTimer: function (duration, timerEl) {
        var minutes;
        var seconds;
        setInterval(() => {
            if (duration >= 0) {
                minutes = parseInt(duration / 60);
                seconds = parseInt(duration % 60);
                if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                if (seconds < 10) {
                    seconds = "0" + seconds;
                }
                timerEl.setAttribute("text", { value: minutes + ":" + seconds, });
                duration -= 1;
            } else {
                this.gameOver();
            }
        }, 1000)
    },

    isCollided: function (elementId) {
        const element = document.querySelector(elementId)
        element.addEventlistener("collide", e => {
            if (elementId.includes("#ring")) {
                console.log("ring collision")
            }
            else if (elementId.includes("#hurdle")) {
                this.gameOver();
            }
        });
    },

    gameOver: function () {
        var planeEl = document.querySelector("#sub");
        var element = document.querySelector("#game_over_text");
        element.setAttribute("visible", true);
        planeEl.setAttribute("dynamic-body", { mass: 1 });
    }
})