// Import the Command class from NukeJS
const { Command } = require('nukejs');

module.exports = class extends Command {
    constructor(file) {
        super(file, {
            // Command Options refer to https://nukejs.xyz/#/command for more info
            name: "test",
            runIn: ["text"],
            aliases: ["pang"],
            description: "ping pong; ching chong",
        });
    }

    async run(message, args, client) {
        message.channel.send("Pong!");
    }
}