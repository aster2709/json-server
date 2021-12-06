const shell = require("shelljs")
const path = require("path")

const tokens = []
const skillAttributes = ["mana gain", "heal gain", "power gain", "speed gain"]
const categoryAttributes = ["weapons", "assets", "food", "attire"]
const heroClass = ["paladin", "dragoon", "astrologer", "ninja"]

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function getRandomNumber(upperBound) {
  return Math.floor(Math.random() * upperBound) + 1
}

for (let i = 1; i <= 10; i++) {
  tokens.push({
    id: i,
    name: `robo${i}`,
    description: `My NFT ${i}`,
    image: `https://robohash.org/nft${i}.png`,
    attributes: [
      {
        type: "property",
        name: "skill",
        value: getRandom(skillAttributes),
      },
      {
        type: "property",
        name: "category",
        value: getRandom(categoryAttributes),
      },
      {
        type: "property",
        name: "hero class",
        value: getRandom(heroClass),
      },
      {
        type: "stat",
        name: "ATK",
        value: getRandomNumber(100),
      },
      {
        type: "stat",
        name: "DEF",
        value: getRandomNumber(100),
      },
      {
        type: "stat",
        name: "HP",
        value: getRandomNumber(100),
      },
      {
        type: "stat",
        name: "skill value",
        value: getRandomNumber(10),
      },
    ],
  })
}

shell.ShellString(JSON.stringify({ tokens }, null, 2)).to(path.resolve("db.json"))
