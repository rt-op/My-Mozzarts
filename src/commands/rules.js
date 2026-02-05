/**
 * This method will explain the rule to the user using a 
 * helper method to get the json file with the gameplay elements
 *  
 * */ 
import {EmbedBuilder, SlashCommandBuilder } from "discord.js";
// Allows for the path of the rules.json to be used for ease of changing the rules
// A helper for the rules
import {getRules} from "../helpers/rules.js";

export default {
    data: new SlashCommandBuilder()
        .setName("rules")
        .setDescription("Music Trivia Rules! An explanation for the rules for the trivia game.")
    ,
    async execute(interaction) {
        // Gets the rules from the helper 
        const rules = getRules();
        // embeds the rules with a 
        const embed = new EmbedBuilder()
        .setColor("#FF0000")
        .setTitle("Music Trivia Game Rules")
        .setDescription(rules.intro)
        .addFields(
            // The rules.difficulties are mapped to make a bulleted list with a new line.
            { name: 'Difficulties:', value: rules.difficulties.map(g =>`- ${g}`).join('\n'), inline: true },
            // The rules.gameplay are mapped to make a bulleted list with a new line.
            { name: 'How to Play', value: rules.gameplay.map(g => `- ${g}`).join('\n') }
        )
        // Pluck, great spirit and courage :)
        .setFooter({ text: "May you have PLUCK!" });

        //Ephemeral allows for only the user that requested the rules to see it
        await interaction.reply({
        content: "Here are the rules",
        embeds: [embed],
        ephemeral: true,
        });
    },
};

