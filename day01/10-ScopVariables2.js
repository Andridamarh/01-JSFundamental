// hoisting
function scope1(){
    var top = "top";
    bottom = "bottom";
    console.log(bottom);
    var bottom;
}

// console.log(scope1());

function scope2(print) {
    if (print) {
        var insideIf = 15;
    }
    console.log(insideIf);
}

console.log(scope2(true));

function scope3(print) {
    var insideIF;
    if (print) {
        insideIf = 15;
    }
    console.log(insideIf);
}

console.log(scope2(true));

// ------

var s = "bootcamp";
function scope4(print){
    if (print){
        var s = "codeid"
    }
    s= "codeid academy";
    console.log(s);
}

console.log(scope4(true));

function scope5(print){
    if (print){
        let s = "codeid"
    }
    console.log(s);
}

console.log(scope5(true));