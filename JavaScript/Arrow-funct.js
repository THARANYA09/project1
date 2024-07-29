//1) without argument and without return type
/* 
var Eligibility = () => {
    age=19;
    if(age>=18)
    {
        console.log("Eligible");
    }
    else
    {
        console.log("Not Eligible");
    }
}
*/

//2) without argument and with return type
/* 
var Eligibility = () => {
    age=20;
    if(age>=18)
    {
        return("Eligible");
    }
    else
    {
        return("Not Eligible");
    }
}
console.log(Eligibility());
*/

//3) With argument and without return type
/*
var Eligibility = (age) => {
    if(age>=18)
    {
        console.log("Eligible");
    }
    else
    {
        console.log("Not Eligible");
    }
}
Eligibility(17);
*/

//4) With argument and with return type
/* 
var Eligibility = (age) => {
    if(age>=18)
    {
        return("Eligible");
    }
    else
    {
        return("Not Eligible");
    }
}
Eligibility(12);
console.log(Eligibility());
*/