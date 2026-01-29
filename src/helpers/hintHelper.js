
const hints = new Map([
    ["never gonna give you up", "Rick Astley"],
    ["bohemian rhapsody", "queen"],
    ["radioactive", "imagine dragons"]
]);

function getHint(songName){
    return hints.get(songName);
}

module.exports = {
    getHint,
};