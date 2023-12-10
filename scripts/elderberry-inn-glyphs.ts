import fs from "fs"
export const ElderberryInnGlyphs = {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    "libro-juego": "",
    "pantalla-DM": "",
    blinded: "",
    charmed: "",
    deaftened: "",
    exhaustion1: "",
    exhaustion2: "",
    exhaustion3: "",
    exhaustion4: "",
    exhaustion5: "",
    exhaustion6: "",
    frightened: "",
    grappled: "",
    incapacitated: "",
    unconscious: "",
    invisible: "",
    paralyzed: "",
    petrified: "",
    poisoned: "",
    prone: "",
    restrained: "",
    stunned: "",
    acid: "",
    bludgeoning: "",
    cold: "",
    fire: "",
    force: "",
    lightning: "",
    necrotic: "",
    piercing: "",
    poison: "",
    psychic: "",
    radiant: "",
    slashing: "",
    thunder: "",
    "barbarian-rage": "",
    "barbarian-reckless-attack": "",
    "bard-inspiration": "",
    "cleric-channel-divinity": "",
    "druid-wild-shape": "",
    "fighter-action-surge": "",
    "fighter-second-wind": "",
    "monk-flurry-of-blows": "",
    "monk-patient-defense": "",
    "monk-step-of-the-wind": "",
    "monk-step-of-the-wind2": "",
    "monk-step-of-the-wind3": "",
    "monk-stunning-strike": "",
    "monk-stunning-strike2": "",
    "paladin-divine-smite": "",
    "paladin-lay-on-hands": "",
    "barbarian-abilities": "",
    barbarian: "",
    "bard-abilities": "",
    bard: "",
    "cleric-abilities": "",
    cleric: "",
    "druid-abilities": "",
    druid: "",
    "fighter-abilities": "",
    fighter: "",
    "monk-abilities": "",
    monk: "",
    "paladin-abilities": "",
    paladin: "",
    "ranger-abilities": "",
    ranger: "",
    "rogue-abilities": "",
    rogue: "",
    "sorcerer-abilities": "",
    sorcerer: "",
    "warlock-abilities": "",
    warlock: "",
    "wizard-abilities": "",
    wizard: "",
    movement: "",
    action: "",
    "bonus-action": "",
    reaction: "",
    "acid-arrow": "",
    action1: "",
    "alter-self": "",
    "alter-self2": "",
    "alubias-magicas": "",
    "animal-friendship4": "",
    "animate-dead": "",
    "animate-objects": "",
    "animate-objects2": "",
    bane: "",
    bless: "",
    blur: "",
    bonus: "",
    "branding-smite": "",
    "burning-hands": "",
    "chill-touch": "",
    cloudkill: "",
    "comprehend-languages": "",
    "cone-of-cold": "",
    "conjure-elemental": "",
    "conjure-minor-elemental": "",
    "control-water": "",
    counterspell: "",
    "cure-wounds": "",
    "dancing-lights": "",
    darkness: "",
    "detect-magic": "",
    "disguise-self": "",
    disintegrate: "",
    "dispel-evil-and-good": "",
    "dispel-magic": "",
    "dominate-monster": "",
    "dominate-person": "",
    "eldritch-blast": "",
    "enlarge-reduce": "",
    entangle: "",
    "faerie-fire": "",
    "faerie-fire2": "",
    "feather-fall": "",
    "find-familiar": "",
    "finger-of-death": "",
    fireball: "",
    "floating-disk": "",
    fly: "",
    "fog-cloud": "",
    "gaseous-form": "",
    "gaseous-form2": "",
    "gentle-repose": "",
    "gentle-repose2": "",
    "globe-of-invulnerability": "",
    "guiding-bolt": "",
    "healing-word": "",
    "heat-metal": "",
    "hellish-rebuke": "",
    "heroes-feast": "",
    heroism: "",
    "hideous-laughter": "",
    identify: "",
    "illusory-script": "",
    "inflict-wounds": "",
    light: "",
    longstrider: "",
    "mage-armor": "",
    "mage-hand": "",
    "magic-missile": "",
    "mass-cure-wounds": "",
    "mass-healing-word": "",
    Mending: "",
    message: "",
    "Minor-illusion": "",
    movement1: "",
    polymorph: "",
    "power-word-kill": "",
    "power-word-stun": "",
    "prayer-of-healing": "",
    prestidigitation: "",
    "protection-from-evil-and-good": "",
    "raise-read": "",
    "raise-read2": "",
    reaction1: "",
    resurrection: "",
    resurrection2: "",
    revivify: "",
    revivify2: "",
    "sacred-flame": "",
    sanctuary: "",
    "scorching-ray": "",
    sending: "",
    shatter: "",
    shield: "",
    "silent-image": "",
    sleep: "",
    "speak-with-animals": "",
    telekinesis: "",
    "true-strike": "",
    "vicious-mockery": "",
    "wall-of-fire": "",
    "wall-of-force": "",
    "wall-of-ice": "",
    "wall-of-stone": "",
    "wall-of-thorns": "",
    wish: "",
} as const

const files = fs.readdirSync("./public/icons").map((file) => {
    console.log(file.split(".")[0])
    return [file.split(".")[0], `/icons/${file}`]
})

const mapper = Object.fromEntries(files)
console.log(mapper)
fs.writeFileSync(
    "./scripts/elderberry-inn-icons.json",
    JSON.stringify(mapper, null, 4),
    "utf-8"
)
