const companies = [
    { name: 'Google', category: 'product', start:1981, end:2004},
    { name: 'Amazon', category: 'product', start:1991, end:2006},
    { name: 'Paytm', category: 'product', start:1992, end:2008},
    { name: 'Coforge', category: 'service', start:1989, end:2023},
    { name: 'Mindtree', category: 'service', start:1990, end:2012},
];

const ages = [33, 12, 20, 16, 5, 54, 21,44,61,13,45];

companies.forEach(function(company, index){
    // console.log(index);
})

// Filter

ages.filter((age)=>{
    if(age >20){
        console.log(age);

    }
    }
    )
// console.log(filteredAge);