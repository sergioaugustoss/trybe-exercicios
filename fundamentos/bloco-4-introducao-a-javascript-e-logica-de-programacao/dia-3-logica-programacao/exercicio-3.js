const a = 50;
const b = 60;
const c = 50;

if (a>b && a>c) {
    console.log(a);
} else if (b>a && b>c) {
    console.log(b);
} else if (c>a && c>b) {
    console.log(c);
} else if (a>b && c>a) {
    console.log(c);  
} else if (b>a && c>b) {
    console.log(c);   
} else {
    console.log("Os valores são iguais");
}