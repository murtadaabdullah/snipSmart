import snipByTag from "../src/snipByTag.js";

const input = `
Here is some broken HTML:
<div><p>Hello <strong>World</p>
`;

const result = snipByTag(input);
console.log("snipByTag result:", result);
