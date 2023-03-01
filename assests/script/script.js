const companies = [
    {name: "Company one", category: "Finance", start: 1981, end: 2003},
    {name: "Company two", category: "Retail", start: 1992, end: 2008},
    {name: "Company three", category: "Auto", start: 1999, end: 2007},
    {name: "Company four", category: "Retail", start: 1989, end: 2010},
    {name: "Company five", category: "Technology", start: 2009, end: 2014},
    {name: "Company six", category: "Finance", start: 1987, end: 2010},
    {name: "Company seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company nine", category: "Retail", start: 1981, end: 1989  },
];


const ages = [33,12,20,15,17,45,65,73,2,89,65,32,36,29,73,61,57,66,54,53];


// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);   
// }

// companies.forEach(function(Company){
//     console.log(Company);
// })

// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i]>20) {
//         canDrink.push(ages[i]); 
//     }
// }

// let canDrink = ages.filter(function(age){
//     if(age>=21){
//         return true
//     }
// })

let canDrink = ages.filter(age => age>=21);


console.log(canDrink);



// const retailCompanies = companies.filter(function(company){
//     if (company.category === "Retail") {
//         return true;
//     }
// });

const retailCompanies = companies.filter(company => company.category==="Retail");
const eightiesCompanies = companies.filter(company => company.start>1980 && company.end <1990)
const lastedTenYearsCompanies = companies.filter(company =>(company.end - company.start >= 10))
const companyNames = companies.map(company => company.name);
const test = companies.map(function(company){
 return "${company.name} [${company.start} - ${company.end}]";
})
console.log(test);
console.log(companyNames);
console.log(lastedTenYearsCompanies);
console.log(eightiesCompanies);
console.log(retailCompanies);







//foreach
//map
//filter
//reduce
//sort
