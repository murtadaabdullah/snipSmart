snipSmart

Extract clean JSON or HTML/XML snippets from messy AI outputs or raw text.
A lightweight utility with no dependencies. Just copy the function(s) you need and go.

✨ Features
snipSmart – Unified function that calls either snipJson or snipByTag

snipJson – Attempts to extract a valid JSON object from a noisy string

snipByTag – Extracts a valid snippet enclosed by matching tags (e.g., <div>...</div>)

🔧 How to Use
You can either use the unified function snipSmart, or call the individual helpers directly.

✅ Option 1: Use snipSmart (recommended)

import snipSmart from "./src/index.js";

const input = `Broken JSON: { "name": "Alice", "age": 30 `;
const result = snipSmart(input, { format: "json" }); // Or use format: "tag"

console.log(result);

✅ Option 2: Use snipJson directly

import snipJson from "./src/snipJson.js";

const input = `Some content with { "key": [1, 2] `;
const jsonResult = snipJson(input);

console.log(jsonResult);

✅ Option 3: Use snipByTag directly

import snipByTag from "./src/snipByTag.js";

const input = `<div><p>Hello <b>World</p>`;
const htmlSnippet = snipByTag(input);

console.log(htmlSnippet);

📂 Examples

Each file in the /examples folder shows how to use a function with one working case.

Run one with:

node examples/use-snipSmart.js

🔓 License

This project is released under the MIT License.
Use it freely in personal or commercial projects — just keep the license notice.
