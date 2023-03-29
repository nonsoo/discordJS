import { REST, Routes } from "discord.js";
import commands from "./command";
import config from "../config/discord-config";

const rest = new REST({ version: "10" }).setToken(config.DISCORD_TOKEN);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(config.CLIENT_ID), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
