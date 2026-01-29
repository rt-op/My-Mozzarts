import { InteractionResponse, SlashCommandBuilder } from "discord.js";
//import { getMeme } from "../helpers/meme.js"; // Not needed
const hintHelper = require('../helpers/hintHelper.js');

export default {
  data: new SlashCommandBuilder()
    .setName("hint")
    .setDescription("Get a hint")
    .addStringOption(option =>
      option
        .setName("song_name")
        .setDescription("Choose a song")
        .setRequired(true)
        /*.addChoices(
          { name: "Pop", value: "pop" },
          { name: "Hip Hop", value: "hiphop" },
          { name: "Rock", value: "rock" },
          { name: "Country", value: "country" },
          { name: "Classical", value: "classical" },
          { name: "Random", value: "random"}
        )*/
    ),

  async execute(interaction) {
    //const meme = await getMeme();
    //const hint = hintHelper.getHint("radioactive");
    const hint = hintHelper.getHint(interaction.options.getString("song_name"));

    await interaction.reply({
      content: "Hint: " + hint,
    });
  },
};