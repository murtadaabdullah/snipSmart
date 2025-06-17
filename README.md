# ✂️🧠 snipSmart

Extract clean **JSON** or **HTML/XML** snippets from messy AI outputs or raw text.  
A lightweight utility with **no dependencies** — just copy the function(s) you need and go.

---

## ✨ Features

- **`snipSmart`** – Unified function that calls either `snipJson` or `snipByTag`
- **`snipJson`** – Attempts to extract a valid JSON object from a noisy string
- **`snipByTag`** – Extracts a valid snippet enclosed by matching tags (e.g., `<div>...</div>`)

---

## 🔧 How to Use

You can either use the unified function `snipSmart`, or call the individual helpers directly.

### ✅ Option 1: Use `snipSmart` (recommended)

```js
import snipSmart from "./src/index.js";

const input = `Broken JSON: { "name": "Alice", "age": 30 `;
const result = snipSmart(input, { format: "json" }); // Or use format: "tag"

console.log(result);
```

### ✅ Option 2: Use snipJson directly

```js
import snipJson from "./src/snipJson.js";

const input = `Some content with { "key": [1, 2] `;
const jsonResult = snipJson(input);

console.log(jsonResult);
```

### ✅ Option 3: Use snipByTag directly

```js
import snipByTag from "./src/snipByTag.js";

const input = `<div><p>Hello <b>World</p>`;
const htmlSnippet = snipByTag(input);

console.log(htmlSnippet);
```
---

## 📂 Examples

Each file in the 📂 /examples folder shows how to use a function with one working case.

Run one with:
```
node examples/use-snipSmart.js
```
---

## 🧪 TestCases

The folder 📂 /testCases contains manually curated test cases for the `snipSmart` utility and its helper functions.

Use these to understand, verify, or extend the behavior of:

- 🧩 `snipJson` – Extract valid JSON from noisy text
- 🏷️ `snipByTag` – Extract valid HTML/XML enclosed by matching tags
- 🤖 `snipSmart` – Unified wrapper that delegates based on format

### 📄 File Overview

| File Name              | Description                                      |
|------------------------|--------------------------------------------------|
| `snipJson-cases.md`    | JSON-specific test inputs and expected outputs   |
| `snipByTag-cases.md`   | HTML/XML tag-based test cases                    |
| `snipSmart-cases.md`   | Tests format handling and delegation in snipSmart|

### 📝 Contributing

Want to add more test cases?  
Just follow the same format and open a pull request!

---

## 🚀 Roadmap & Contributions

### 🛠️ Future Plans

More snippet types (e.g., `snipCsv`, `snipCode`, etc.) are in the pipeline to make `snipSmart` even more versatile.

### 🤝 Contributions Welcome!

Have an idea, edge case, or improvement? Feel free to open an issue or submit a pull request — we'd love your help!

---

## 🔓 License

This project is released under the MIT License.
Use it freely in personal or commercial projects — just keep the license notice.
