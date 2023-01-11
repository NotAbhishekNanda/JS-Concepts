const companies = [
    { name: 'Google', category: 'product', start: 1981, end: 2004 },
    { name: 'Amazon', category: 'product', start: 1991, end: 2006 },
    { name: 'Paytm', category: 'product', start: 1992, end: 2008 },
    { name: 'Coforge', category: 'service', start: 1989, end: 2023 },
    { name: 'Mindtree', category: 'service', start: 1990, end: 2012 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 45];

companies.forEach(function (company, index) {
    console.log(company);
});

// Filter

const filterAge = ages.filter((age) => {
    if (age > 20) {
        return age;
    }
});

console.log(filterAge);

// Map

const companiesWithCategory = companies.map((company) => {
    return `${company.name} - ${company.category}`;
});
console.log(companiesWithCategory);

// Sort
const sortedComapny = companies.sort((c1, c2) =>
    c1.start > c2.start ? 1 : -1
);
console.log(sortedComapny);

const sortedDeAge = ages.sort((a, b) => b - a);
console.log(sortedDeAge);

const sortedInAge = ages.sort((a, b) => a - b);
console.log(sortedInAge);

// reduce:

const redueImplementedAge = ages.reduce((total, age) => total + age, 0);
console.log(redueImplementedAge);
