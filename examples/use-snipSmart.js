import snipSmart from "../src/index.js";

const input = `
Here is some content:
{ "key": "value", "open": [1, 2 }
Some other text here.
`;

const result = snipSmart(input, { format: "json" }); // Use format: "tag" to extract HTML/XML snippets instead
console.log("snipSmart result:", result);
