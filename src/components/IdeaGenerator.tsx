"use client";

import { useState } from "react";

const size = [
  "tiny",
  "average",
  "medium",
  "large",
  "giant",
  "small",
  "elongated",
  "compact",
];
const bodytype = [
  "muscular",
  "jacked af",
  "slim",
  "average",
  "lanky",
  "toned",
  "overweight",
  "thicc",
];
const opacity = [
  "dark",
  "dark af",
  "medium dark",
  "medium light",
  "almost transparent",
  "light",
  "translucent",
  "shiny",
  "cloudy",
  "shimmering",
  "dull",
  "matte",
  "irridescent",
  "pale",
];
const color = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "brown",
  "grey",
  "white",
  "black",
  "gold",
  "silver",
  "copper",
];
const chartype = ["plant-like", "humanoid", "terrestrial", "avian", "aquatic", "mechanical"];
const charfeature = [
  "a horn",
  "a tail",
  "spikes",
  "wings",
  "claws",
  "fangs",
  "feathers",
  "a beak",
  "nails",
  "a mane",
  "scales",
  "multiple horns",
  "strange teeth",
  "glowing markings",
  "stripes",
  "dots",
  "patches",
  "plates",
  "multiple heads",
  "multiple tails",
  "multiple limbs",
  "multiple eyes",
  "long ears",
  "gills",
  "2 ears",
  "whiskers",
  "hooves",
  "fins",
];
const gender = ["male", "female", "androgynous"];
const stage = [
  "newborn",
  "baby",
  "toddler",
  "young child",
  "teenager",
  "young adult",
  "adult",
  "middle aged adult",
  "elder",
];
const humanhaircolor = [
  "blonde",
  "sandy",
  "brown",
  "caramel",
  "black",
  "grey",
  "silver",
  "red",
  "orange",
  "dyed neon blue",
  "dyed neon orange",
  "dyed neon green",
  "dyed neon rainbow",
  "dark brown with blonde highlights",
  "dark brown with red highlights",
  "blonde with colored streaks",
];
const humanskin = ["dark", "medium-dark", "ghost-like pale", "fair", "medium"];
const undertone = ["warm", "cool"];
const faceshape = [
  "round",
  "heart-shaped",
  "long",
  "trianglular",
  "oval",
  "rectanglular",
  "square",
  "oblong",
  "diamond-shaped",
  "pear-shaped",
];
const shadeofhair = ["dark", "light", "medium", "highlighted and"];
const texture = [
  "dull",
  "glossy",
  "smooth",
  "coarse",
  "greasy",
  "rough",
  "fluffy",
  "stiff",
  "scupted",
  "dry",
  "bumpy",
];
const hairtype = ["curly", "very curly", "straight", "wavy", "wispy", "fuzzy"];
const length = ["long", "very long", "medium", "very short", "short"];
const facialfeatures = ["harsh", "defined", "angular", "soft", "boxy", "rounded"];
const personalitybase = [
  "friendly",
  "bubbly",
  "hyper",
  "gentle",
  "shy",
  "chill",
  "anxious",
  "active",
  "sedentary",
  "reserved",
  "mischievous",
  "outgoing",
  "introverted",
  "prideful",
  "optimistic",
  "mysterious",
];
const clothes = [
  "old-fashioned",
  "stiff clothes",
  "flowly clothes",
  "formal clothes",
  "floral clothes",
  "silky clothes",
  "futuristic looking clothes",
  "hipster clothes",
  "jeans and a T-shirt",
  "casual clothes",
  "athletic clothes",
  "a costume",
  "a poncho",
  "armor",
  "vest",
  "plaid",
  "swim wear",
  "business clothes",
];
const accessories = [
  "a scarf",
  "a piercing",
  "boots",
  "a watch",
  "socks with exciting patterns",
  "a backpack",
  "a bracelet/wristband",
  "a necklace",
  "a visor",
  "a baseball cap",
  "a hat",
  "sunglasses",
  "glasses",
];
const personalityneg = ["arrogant", "short-tempered", "blunt", "sneaky", "pessimistic", "pathological", "sad", "jealous"];
const frequency = ["almost always", "rarely", "occasionally", "often"];
const atmosphere = ["arid", "humid", "tropical", "cloudy"];
const amount = ["a little", "a lot", "some", "no"];
const environment = [
  "a river",
  "lake",
  "pond",
  "mountain",
  "hill",
  "valley",
  "strange rock formations",
  "icy formations",
  "a volcano",
  "a fire",
  "storms",
  "a tornado",
  "sand",
  "wispy clouds",
  "stormy clouds",
  "pits",
  "gravel",
  "arches",
  "a cliff",
  "litter",
  "metallic objects",
  "flowers",
  "long grass",
  "mushrooms",
  "gas clouds",
  "a cave",
  "clay objects",
  "plastic objects",
];
const shape = [
  "triangle",
  "rectangle",
  "box",
  "sphere",
  "prism",
  "cylinder",
  "pyramid",
  "ellipse",
  "ellipse",
  "circle",
  "diamond",
  "heart",
  "star",
  "octohedron",
];
const angle = ["3/4", "upward", "tilted", "eye level", "downward"];
const perspective = ["1 point", "2 point", "3 point"];
const stiffness = ["very relaxed", "relaxed", "neutral", "slightly stiff", "rigid"];
const posebase = ["sitting", "laying down", "jumping", "standing", "leaning", "falling", "kicking", "punching", "walking", "running", "skipping"];
const bentness = ["slightly bent", "neutral", "very bent", "mostly staight", "very straight"];
const direction = ["up", "down"];
const placement = [
  "above",
  "above and to the right",
  "above and to the left",
  "below and to the left",
  "below",
  "underneath",
  "underneath and to the right",
  "close to",
  "flush to",
  "next to",
];
const number = ["0", "2", "4", "6", "3"];

const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

const phraseGenerators: Array<() => string> = [
  () =>
    `SHAPE CHALLENGE: Start with a ${pick(opacity)}, ${pick(texture)} looking ${pick(shape)} that is ${pick(
      size
    )}. This shape is viewed at an ${pick(angle)} angle and from a ${pick(
      perspective
    )} perspective. Now add a ${pick(opacity)} ${pick(size)} sized, ${pick(texture)}, ${pick(shape)} ${pick(
      placement
    )} the first shape. [Optional color:${pick(opacity)} ${pick(color)} .]`,
  () =>
    `POSE: This character is ${pick(posebase)} in a ${pick(stiffness)} manner. The back is ${pick(
      bentness
    )}, the neck is in a ${pick(bentness)} position, with the head tilted ${pick(direction)}wards. Relatively, the arms are ${pick(
      bentness
    )} and the legs are ${pick(bentness)}.`,
  () =>
    `CONCEPT CHARACTER: The ${pick(chartype)} character has a ${pick(size)} and ${pick(bodytype)} body type with coloration that features ${pick(
      opacity
    )}, ${pick(color)} ish ${pick(color)} and ${pick(opacity)} ${pick(color)}. Has ${pick(length)} ${pick(
      number
    )} limbs, a ${pick(length)} neck, and ${pick(length)}, ${pick(texture)}, body. Other notable features include ${pick(
      texture
    )} ${pick(charfeature)}, ${pick(charfeature)}, and ${pick(charfeature)} and ${pick(shape)} shaped markings.`,
  () =>
    `HUMAN CHARACTER: This person is a ${pick(gender)} ${pick(stage)} that is ${pick(size)} in size, ${pick(
      bodytype
    )} in build, and has a ${pick(humanskin)} complexion with a ${pick(undertone)} undertone. The eyes are ${pick(
      opacity
    )} ${pick(color)} and ${pick(size)} in size. The person has ${pick(length)} length hair that is ${pick(
      texture
    )} and ${pick(hairtype)} and ${pick(shadeofhair)} ${pick(humanhaircolor)} in color. Face is rather ${pick(
      faceshape
    )}, and other facial features can be described as ${pick(facialfeatures)} and ${pick(size)}. Personality is ${pick(
      personalitybase
    )} and sometimes ${pick(personalitybase)}, yet ${pick(frequency)} ${pick(personalityneg)}. The character enjoys wearing ${pick(
      clothes
    )} and accessorizing with ${pick(accessories)}. Prefers the following colors: ${pick(opacity)} ${pick(
      color
    )} and ${pick(opacity)} ${pick(color)}.`,
  () =>
    `ENVIRONMENT: The environment, viewed at an ${pick(angle)} angle and from a ${pick(
      perspective
    )} perspective has an ${pick(atmosphere)} atmosphere. There is ${pick(amount)} plant life, ${pick(amount)} fauna, and ${pick(
      amount
    )} humans. Notable features include ${pick(environment)}, ${pick(environment)}, ${pick(
      environment
    )}, ${pick(environment)}, and ${pick(environment)}. The foreground is mainly dominated by ${pick(
      opacity
    )} ${pick(color)} and ${pick(opacity)} ${pick(color)}, while ${pick(opacity)} ${pick(color)} can be seen in the midground, and ${pick(
      opacity
    )} ${pick(color)} can be seen in the background. Some aspects of the environment seem to look like ${pick(texture)} ${pick(shape)}s.`,
];

const generatePrompt = () => pick(phraseGenerators)();

const BATCH_SIZE = 5;
const generateBatch = (count: number) => Array.from({ length: count }, () => generatePrompt());

export default function IdeaGenerator() {
  const [ideas, setIdeas] = useState<string[]>(() => generateBatch(BATCH_SIZE));
  const [favorites, setFavorites] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerateMore = () => {
    setIdeas((prev) => [...prev, ...generateBatch(BATCH_SIZE)]);
  };

  const handleCopy = async () => {
    if (typeof navigator === "undefined" || !navigator.clipboard) {
      return;
    }
    try {
      await navigator.clipboard.writeText(favorites);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.warn("Clipboard copy failed", error);
    }
  };

  return (
    <div className="idea-generator">
      <div className="generator-header">
        <button type="button" onClick={handleGenerateMore} className="pulse-btn">
          Make It Rain 5 More Ideas!
        </button>
      </div>
      <div className="generator-list">
        <ul>
          {ideas.map((idea, index) => {
            const colonIndex = idea.indexOf(":");
            const label =
              colonIndex !== -1 ? idea.slice(0, colonIndex) : "Prompt";
            const body =
              colonIndex !== -1 ? idea.slice(colonIndex + 1).trim() : idea;

            return (
              <li key={`${idea}-${index}`}>
                <div className="prompt-card">
                  <span className="prompt-label">{label}</span>
                  <p className="prompt-body">{body}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="favorites-panel">
        <div className="favorites-info">
          <p className="favorites-title">Favorite ideas</p>
          <p className="favorites-description">
            Save the ideas you want to explore later then copy them into your notes when
            you're ready to build.
          </p>
        </div>
        <div className="favorites-controls">
          <textarea
            className="favorites-input"
            value={favorites}
            onChange={(event) => setFavorites(event.currentTarget.value)}
            rows={5}
            placeholder="Capture the prompts you want to sketch."
          />
          <div className="favorites-actions">
            <button
              type="button"
              onClick={handleCopy}
              className="copy-btn"
              disabled={!favorites.trim()}
            >
              {copied ? "Copied!" : "Copy to clipboard"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
