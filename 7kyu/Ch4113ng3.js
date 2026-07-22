// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' 
// with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"


function nerdify(str) {
    return str
        .replace(/a/gi, "4")
        .replace(/e/gi, "3")
        .replace(/l/g, "1");
}

console.log(nerdify("Fundamentals")); 
console.log(nerdify("Apple"));        
console.log(nerdify("Hello"));  