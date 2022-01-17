// Importação completa com node
/* 
let mod1 = require('./mod1')
*/
// Importação com destructuring
/*
let { firstName, lastName } = require('./mod1')
*/
// Importação individual com node
let name = require('./mod1').firstName

console.log(name)