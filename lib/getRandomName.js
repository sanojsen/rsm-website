// Arrays of random words to create funny names
const adjectives = ["Silly", "Wacky", "Goofy", "Crazy", "Funky", "Zany", "Quirky", "Bizarre", "Ludicrous", "Hilarious",  "Doodle", "Sprinkle", "Bubble", "Fizzle", "Twinkle", "Sneaky", "Funny", "Broken", "Creapy", "Fast"];
const animals = [
  "Zippy",
  "Snickers",
  "Wobble",
  "Bubbles",
  "Doodle",
  "Giggles",
  "Noodle",
  "Puddles",
  "Squishy",
  "Tater",
  "Fluffy",
  "Whiskers",
  "Waffles",
  "Biscuit",
  "Pickles",
  "Moose",
  "Nugget",
  "Chirpy",
  "Banjo",
  "Snuggles",
  "Biff",
  "Zeke",
  "Muffin",
  "Twiggy",
  "Pip",
  "Frodo",
  "Bubba",
  "Gizmo",
  "Mookie",
  "Dinky",
  "Fifi",
  "Mimi",
  "Bambi",
  "Dolly",
  "Gidget",
  "Trixie",
  "Lulu",
  "Buffy",
  "Bitsy",
  "Pixie"
];

// Function to generate a random funny name
const generateFunnyName =()=> {
    // Get a random adjective
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    
    // Get a random animal
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    
    // Combine them to form a funny name
    const funnyName = `${randomAdjective} ${randomAnimal}`;
    
    return funnyName;
}

export default generateFunnyName;