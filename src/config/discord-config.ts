import dotenv from "dotenv";
dotenv.config();

type configKey = "DISCORD_TOKEN" | "CLIENT_ID" | "GUILD_ID";

const { DISCORD_TOKEN, CLIENT_ID, GUILD_ID } = process.env;

if (!DISCORD_TOKEN || !CLIENT_ID || !GUILD_ID)
  throw new Error("Missing variables");

const config: Record<configKey, string> = {
  DISCORD_TOKEN,
  CLIENT_ID,
  GUILD_ID,
};

export default config;
