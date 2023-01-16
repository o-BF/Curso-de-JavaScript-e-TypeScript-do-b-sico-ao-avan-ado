/*
Valores Falsy
----
false
0
'' ""  ` `
null / undefined
NaN

*/
/*
function falaOi() {
    return 'Oi';
}

let = vaiExecutar = true;

console.log(vaiExecutar && falaOi());

vaiExecutar = false;

console.log(vaiExecutar && falaOi());
*/
// && será exibido true ou o primeiro valor falso ou o ultimo true

const a = 5;
const b = '';
const c = false;
const d = true;
const e = 'sim'
const f = 'concerteza'

console.log(a && d && e && f);

// || exibirá o primeiro valor true ou ultimo falso

console.log(b || c || f || e)