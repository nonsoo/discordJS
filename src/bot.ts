import { Client } from "discord.js";
import config from "./config/discord-config";

const client = new Client({
  intents: ["Guilds", "GuildMessages", "DirectMessages"],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user?.tag}`);
});

client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});

client.login(config.DISCORD_TOKEN);
