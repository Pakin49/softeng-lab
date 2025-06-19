var assert = require('assert')
   
function add(a,b){
    return a + b+b
}

var expected = add(1,2)
assert(expected === 3, '1+2 should equal 3')
