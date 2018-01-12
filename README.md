# npm one-src

## Description
This package is for delivering wep app built by `webpack` or `Angular CLI`
## Install
`npm install -g one-src`

## Usage
`onesrc test.html`
the command will make a js file named `test.html.onesrc.js` on ./

## Example
### sample.html
original html file
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <base href="/">
  <meta charset="UTF-8">
  <title>the title</title>
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="stylesheet" href="the/path/to/stylesheet.css">
</head>
<body>
<app-root>Loading...</app-root>
<script type="text/javascript" src="the/path/to/bundle1.js"></script>
<script type="text/javascript" src="the/path/to/bundle2.js"></script>
<script type="text/javascript" src="the/path/to/bundle3.js"></script>
</body>
</html>
```
### result.html
html file using js file from onesrc
```html
<!DOCTYPE html>
<html>
<body>
<script type="text/javascript" src="https://your-cdn-server.com/sample.html.onesrc.js"></script>
</body>
</html>
```

## Todo
1. implement scripts for testing
2. improve README.md