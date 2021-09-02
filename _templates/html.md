---
title: HTML
summary: basic html template
---

Basic templates for `html` can be found at [W3C](https://dev.w3.org/html5/html-author/#basic-templates) website, for inclution of external resources one should generate `SRI` hashes (generate [here](https://www.srihash.org/)) to guarantee the integrity/authenticity of the resource.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>HTML Template</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.css" integrity="sha256-QWzsjhiaNlONAp479EIeaY+tQvrt3v1iOYtBMVZ7RJc=" crossorigin="anonymous">
  </head>
  <body>
    <p>Insert content here.</p>
  </body>
</html>
```