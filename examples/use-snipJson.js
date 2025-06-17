import snipJson from "../src/snipJson.js";

const input = `
Random text...
{ "name": "John", "age": 25, "skills": ["JS", "React"]
...more text
`;

const result = snipJson(input);
console.log("snipJson result:", result);
