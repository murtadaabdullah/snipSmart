# 🏷️ snipByTag Test cases

## ✅ Test case 1

Well-formed basic HTML.

### AI response : 
```
Here is the code you asked for <html><body><p>Hello</p></body></html>.
```

### snipByTag  output:
```
{
  status: 'success',
  comments: 'Valid tag structure found.',
  data: '<html><body><p>Hello</p></body></html>',
  raw: null
}
```
---

## ✅ Test case 2

Self-closing tags.

### AI response : 
```
Image here: <img src="foo.jpg"/> and that’s it.
```

### snipByTag  output:
```
{
  status: 'success',
  comments: 'Valid tag structure found.',
  data: '<img src="foo.jpg"/>',
  raw: null
}
```
---

## ✅ Test case 3

React fragment syntax.

### AI response : 
```
Try this: <><div>Hello</div></> now!
```

### snipByTag  output:
```
{
  status: 'success',
  comments: 'Valid tag structure found.',
  data: '<><div>Hello</div></>',
  raw: null
}
```
---

## ❌ Test case 4

Unclosed opening tag

### AI response : 
```
Start with <div><p>Hello
```
### snipByTag  output:
```
{
  status: 'fail',
  comments: 'Unclosed tag <p>',
  data: null,
  raw: '<div><p>Hello'
}
```
---

## ❌ Test case 5

Incorrect tag nesting.

### AI response : 
```
<b><i>Text</b></i>
```

### snipByTag  output:
```
{
  status: 'fail',
  comments: 'Mismatched closing tag: expected </i> but found </b>',
  data: null,
  raw: '<b><i>Text</b>'
}
```
---

## ❌ Test case 6

Closing tag without opening.

### AI response : 
```
Here is an orphan </div> tag.
```

### snipByTag  output:
```
{
  status: 'fail',
  comments: 'Mismatched closing tag: expected </undefined> but found </div>',
  data: null,
  raw: '</div>'
}
```
---

## ✅ Test case 7

Valid snippet embedded in fluff

### AI response : 
```
Sure! Here's the code: <section><h1>Title</h1></section>. Let me know if you need more.
```

### snipByTag  output:
```
{
  status: 'success',
  comments: 'Valid tag structure found.',
  data: '<section><h1>Title</h1></section>',
  raw: null
}
```
---

## ❌ Test case 8

Garbage inside tag.

### AI response : 
```
<html><pLorem ipsum dolor</p></html>.Feel free to ask more.
```

### snipByTag  output:
```
{
  status: 'fail',
  comments: 'Mismatched closing tag: expected </plorem> but found </html>',
  data: null,
  raw: '<html><pLorem ipsum dolor</p></html>'
}
```
---

## ✅ Test case 9

Empty fragment

### AI response : 
```
Just this: <> </>.
```

### snipByTag  output:
```
{
  status: 'success',
  comments: 'Valid tag structure found.',
  data: '<> </>',
  raw: null
}
```
---

## ❌ Test case 10

Starts with text, no tags.

### AI response : 
```
No tags here, just plain text.
```

### snipByTag  output:
```
{ status: 'fail', comments: 'No tags found.', data: null, raw: null }
```
---

## ✅ Test case 11

Case matches exactly — Valid.

### Function call:
```
snipByTag(response, { caseSensitive: true })
```

### AI response : 
```
Here is your info: <Data><Item>One</Item></Data>
```

### snipByTag  output:
```
{
  status: 'success',
  comments: 'Valid tag structure found.',
  data: '<Data><Item>One</Item></Data>',
  raw: null
}
```
---

## ❌ Test case 12

Case mismatch — Invalid

### Function call:
```
snipByTag(response, { caseSensitive: true })
```

### AI response : 
```
Broken structure: <Data><Item>One</item></data>
```

### snipByTag  output:
```
{
  status: 'fail',
  comments: 'Mismatched closing tag: expected </Item> but found </item>',
  data: null,
  raw: '<Data><Item>One</item>'
}
```
---

## ✅ Test case 13

Case mismatch but allowed — Valid only when caseSensitive: false.

### Function call:
```
snipByTag(response);
```

### AI response : 
```
Flexible parse: <Data><Item>One</item></data>
```

### snipByTag  output:
```
{
  status: 'success',
  comments: 'Valid tag structure found.',
  data: '<Data><Item>One</item></data>',
  raw: null
}
```
---

