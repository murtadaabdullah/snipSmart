# 🧩 snipJson Test cases

## ✅ Test case 1

Simple JSON embedded in text.

### AI response : 
```
Here’s the data you requested:  
json
{
  "name": "Alice",
  "age": 25
}
```

### snipJson output:
```
{
  status: 'success',
  comments: 'JSON successfully extracted and parsed.',
  data: { name: 'Alice', age: 25 },
  raw: null
}
```
--- 

## ❌ Test case 2

Input is an object, not a string.

### AI response : 
```
[1, 2, 3]
```

### snipJson output:
```
{
  status: 'fail',
  comments: 'Invalid input: content must be a string.',
  data: null,
  raw: null
}
```
---

## ❌ Test case 3

No valid JSON in response.

### AI response : 
```
I couldn’t generate JSON. Please try again.
```

### snipJson output:
```
{
  status: 'fail',
  comments: 'No valid JSON structure found.',
  data: null,
  raw: null
}
```
---

## ❌ Test case 4

Malformed JSON

### AI response : 
```
Here is the json you asked for } "x" : 52, "y" : 43 {
```

### snipJson output:
```
{
  status: 'fail',
  comments: 'No valid JSON structure found.',
  data: null,
  raw: null
}
```
---

## ❌ Test case 5

Bracket not closed properly

### AI response : 
```
Here is the configuration:
{
  "name": "Widget",
  "settings": {
    "theme": "dark",
    "features": {
      "search": true,
      "export": false
    ,
  "version": "1.2.3"
}
```

### snipJson output:
```
{
  status: 'fail',
  comments: 'Bracket mismatch',
  data: null,
  raw: '{\n' +
    '  "name": "Widget",\n' +
    '  "settings": {\n' +
    '    "theme": "dark",\n' +
    '    "features": {\n' +
    '      "search": true,\n' +
    '      "export": false\n' +
    '    ,\n' +
    '  "version": "1.2.3"\n' +
    '}\n'
}
```
---

## ❌ Test case 6

A nested array is incorrectly closed with }, leading to a subtle but critical structural error.

### AI response : 
```
Here's the data you asked for:
{
  "user": {
    "name": "Eve",
    "roles": [
      "admin",
      "editor"
    },
    "active": true
  }
}
```

### snipJson output:
```
{
  status: 'fail',
  comments: 'Bracket mismatch',
  data: null,
  raw: '{\n' +
    '  "user": {\n' +
    '    "name": "Eve",\n' +
    '    "roles": [\n' +
    '      "admin",\n' +
    '      "editor"\n' +
    '    }'
}
```
---

## ⚠️ Test case 7

Closing brace is missing(possibly truncated). When a closing brace is added, the JSON is valid. The status would show as “check” because of the added brace. The user should check if the JSON is valid or is truncated.

### AI response : 
```
Here’s the data you requested:  
json
{
  "name": "Alice",
  "age": 25
}
```

### snipJson output:
```
{
  status: 'check',
  comments: 'Added missing closing brace. Parsing passed',
  data: { status: 'success', data: { id: 123, name: 'Test User' } },
  raw: null
}
```
---

## ⚠️ Test case 8

The last brace is missing, but even when adding it, the parsing fails. Possibility of data truncation.

### AI response : 
```
Here’s the JSON response:
json
{
  "name": "Alice",
  "message": "She said, "Hi there!" and left",
  "details": {
    "role": "admin",
    "access": [ "read", "write"],
   },
```

### snipJson output:
```
{
  status: 'check',
  comments: "Added missing closing brace. But parsing failed. Error: SyntaxError: Expected ',' or '}' after property value in JSON at position 46",
  data: null,
  raw: '{\n' +
    '  "name": "Alice",\n' +
    '  "message": "She said, "Hi there!" and left",\n' +
    '  "details": {\n' +
    '    "role": "admin",\n' +
    '    "access": [ "read", "write"],\n' +
    '   },\n' +
    '}'
}
```
---

## ⚠️ Test case 9

The last brace is missing, but even when adding it, the parsing fails. Possibility of data truncation.

### AI response : 
```
Here’s the JSON response:
json
{
  "name": "Alice",
  "message": "She said, "Hi there!" and left",
  "details": {
    "role": "admin",
    "access": [ "read", "write"],
   },
```

### snipJson output:
```
{
  status: 'check',
  comments: "Added missing closing brace. But parsing failed. Error: SyntaxError: Expected ',' or '}' after property value in JSON at position 46",
  data: null,
  raw: '{\n' +
    '  "name": "Alice",\n' +
    '  "message": "She said, "Hi there!" and left",\n' +
    '  "details": {\n' +
    '    "role": "admin",\n' +
    '    "access": [ "read", "write"],\n' +
    '   },\n' +
    '}'
}
```
---

## ⚠️ Test case 10

Trailing comma in object. 

## AI response : 
```
Here is the config:
{
"theme": "dark",
"layout": "grid",
}
Use this in your frontend.
```

## snipJson output:
```
{
  status: 'check',
  comments: 'Extracted candidate JSON passed bracket validation but failed to parse. Check result.raw. Error : SyntaxError: Expected double-quoted property name in JSON at position 37',
  data: null,
  raw: '{\n"theme": "dark",\n"layout": "grid",\n}\nUse this in your frontend.\n'
}
```
---

## ✅ Test case 11

JSON inside Markdown / Code blocks.

### AI response : 
```
You can use this JSON:  
~~~json
{"temperature": 23.5}
~~~  
Or this XML: <data><value>1</value></data>
```

### snipJson output:
```
{
  status: 'success',
  comments: 'JSON successfully extracted and parsed.',
  data: { temperature: 23.5 },
  raw: null
}
```
---

## ⚠️ Test case 12

No valid JSON in response.

### AI response : 
```
This looks like JSON but isn’t: {"key": "value",} 
```

### snipJson output:
```
{
  status: 'check',
  comments: 'JSON parsing failed although passing the basic bracket check. Check result.raw for the raw input. Error : SyntaxError: Expected double-quoted property name in JSON at position 16',
  data: null,
  raw: '{"key": "value",}  '
}
```
---

## ✅ Test case 13

Nested JSON with extra text..

### AI response : 
```
The config is:  
{"server": {"host": "localhost", "port": 8080}}.
If you need more info I'm here to help.
```
### snipJson output:
```
{
  status: 'success',
  comments: 'JSON successfully extracted and parsed.',
  data: { server: { host: 'localhost', port: 8080 } },
  raw: null
}
```
---

## ✅ Test case 14

JSON inside markdown and explanatory test.

### AI response : 
```
Sure! Here's the object you requested:


```json
{
  "id": 101,
  "status": "active",
  "roles": ["admin", "editor"]
}
```

### snipJson output:
```
{
  status: 'success',
  comments: 'JSON successfully extracted and parsed.',
  data: { id: 101, status: 'active', roles: [ 'admin', 'editor' ] },
  raw: null
}
```
---

## ⚠️ Test case 15

Unescaped quotes inside string values.

### AI response : 
```
Here’s the payload you asked for:"
{
"message": "The user said, "Hello, world!" and logged out.",
"timestamp": "2025-06-10T08:45:00Z"
}
```

### snipJson output:
```
{
  status: 'check',
  comments: "Extracted candidate JSON passed bracket validation but failed to parse. Check result.raw. Error : SyntaxError: Expected ',' or '}' after property value in JSON at position 30",
  data: null,
  raw: '{\n' +
    '"message": "The user said, "Hello, world!" and logged out.",\n' +
    '"timestamp": "2025-06-10T08:45:00Z"\n' +
    '}'
}
```
---

## ✅ Test case 16

Valid but complex nested structure.

### AI response : 
```
json
{
"user": {
"id": 42,
"profile": {
"name": "John Doe",
"contact": {
"email": "john@example.com",
"phones": ["123-456", "789-012"]
}
}
},
"active": true
}
```

### snipJson output:
```
{
  status: 'success',
  comments: 'JSON successfully extracted and parsed.',
  data: { user: { id: 42, profile: [Object] }, active: true },
  raw: null
}
```
---

## ⚠️ Test case 17

Commas are omitted.

### AI response : 
```
Here is your data:
{
"name": "Jane"
"age": 29
}
```

### snipJson output:
```
{
  status: 'check',
  comments: "Extracted candidate JSON passed bracket validation but failed to parse. Check result.raw. Error : SyntaxError: Expected ',' or '}' after property value in JSON at position 17",
  data: null,
  raw: '{\n"name": "Jane"\n"age": 29\n}\n'
}
```
---

## ✅ Test case 18

Valid JSON embedded in HTML-style content..

### AI response : 
```
<div> Here is your data: <pre> { "item": "Book", "price": 12.99 } </pre> </div>
```

### snipJson output:
```
{
  status: 'success',
  comments: 'JSON successfully extracted and parsed.',
  data: { item: 'Book', price: 12.99 },
  raw: null
}
```
---

## ✅ Test case 19

JSON preceded by explanation followed by garbage..

### AI response : 
```
Please ignore the previous response. Use this:
{
  "status": "ok",
  "value": 42
}
djsklajdsjkla #@!@#! unexpected stuff here
```

### snipJson output:
```
{
  status: 'success',
  comments: 'JSON successfully extracted and parsed.',
  data: { status: 'ok', value: 42 },
  raw: null
}
```
---

## ⚠️ Test case 20

Non-JSON disguised as JSON..

### AI response : 
```
json
{
  "valid": true,
  "invalid": [1, 2, , 4]
}
```

### snipJson output:
```
{
  status: 'check',
  comments: `Extracted candidate JSON passed bracket validation but failed to parse. Check result.raw. Error : SyntaxError: Unexpected token ',', ..."": [1, 2, , 4]\n` +
    '}" is not valid JSON',
  data: null,
  raw: '{\n  "valid": true,\n  "invalid": [1, 2, , 4]\n}'
}
```
---

## ✅ Test case 21

JSON array of objects.

### AI response : 
```
Sure! Here’s the list:
[
  { "id": 1, "name": "Alpha" },
  { "id": 2, "name": "Beta" }
]
```

### snipJson output:
```
{
  status: 'success',
  comments: 'JSON successfully extracted and parsed.',
  data: [ { id: 1, name: 'Alpha' }, { id: 2, name: 'Beta' } ],
  raw: null
}
```
---

## ✅ Test case 22

Minified JSON with misleading prefix.

### AI response : 
```
Here's the full compressed data dump → {"a":1,"b":[2,3],"c":{"d":"x"}}
```

### snipJson output:
```
{
  status: 'success',
  comments: 'JSON successfully extracted and parsed.',
  data: { a: 1, b: [ 2, 3 ], c: { d: 'x' } },
  raw: null
}
```
---
