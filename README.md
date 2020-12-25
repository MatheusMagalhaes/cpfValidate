# README.MD



[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://www.instagram.com/dev.matheusguerra/)

# What's it?
 It's a JS class to a easily validate CPF.
 
 # Examples
 ```javascript
1    var cpf = new CPF('00000000000');
2    console.log(cpf.validate())
3    //false
```

 ```javascript
1    var cpf = new CPF('141.130.811-58');
2    console.log(cpf.validate())
3    //true
```
 # Usage
 * Import the library
 `<script src='./CPF.js' type="text/javascript"></script>`
* Instace an object
`var cpf = new CPF('123.456.789-10', true);`
* You'll set two params:
     1. CPF: **String**
    2. Dev Mode: **Boolean** (default = false)
## What does dev mode means?
Dev Mode returns logs to your console and help you to debug possibles errors into code.

**CONTACT ME ON INSTAGRAM: [@dev.matheusguerra](https://www.instagram.com/dev.matheusguerra/)**

