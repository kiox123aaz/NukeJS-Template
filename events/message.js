const { Event } = require("nukejs");

module.exports = class extends Event {
    constructor() {
        super({
            // Event Options, refer to https://nukejs.xyz/#/event for more info and https://discord.js.org/#/docs/main/stable/class/Client
            name: "message",
            enabled: true,
        });
    }

    async run(message) {
        // Logs the message onto the console
        console.log(message.content)
    }
};
