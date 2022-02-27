function sum (a,b,c) {  
    return (a+b+c)
}
let First=Number(process.argv[2]);
let Second=Number(process.argv[3]);
let Third=Number(process.argv[4]);

console.log(sum(First,Second,Third))