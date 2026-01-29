import { SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("rules")
    .setDescription("Explains the rules for the trivia game!"),

  async execute(interaction) {
    await interaction.reply({
    // The rules which will need better phrasing, this is just a general explanation for the game for now.
      content:
        "**Playing the trivia game and the rules`:**\n" +
        "Firstly we hope you enjoy the trivia! The game provides a\n" + 
        "variety of genres to test your music knowledge.\n\n" +
        "***There are a variety of different difficulties:***\n" +
        "- Easy\n- Medium\n- Hard\n" +
        "\n**For all difficulties the rules are as follows:**\n" +
        "- You will listen to a 5 second clip of a song\n- You have 4 multiple choice options to choose from\n- You are awarded points for guessing right",
        // only the user that requested the rules to be explained again can see this
      ephemeral: true, 
    });
  },
};


