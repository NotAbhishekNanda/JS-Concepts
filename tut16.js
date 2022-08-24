console.log("We are listening from tut-16 files");

/**
 *  Paginating the Articles According to the Number We Want
 */

// Suppose there are 120 articles in an array
const articles = Array.from({ length: 120 }, (_, index) => index);

const paginate = (items, itemsPerPage = 10) => {
  const pages = Math.ceil(items.length / itemsPerPage);

  return Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  });
};

console.log(paginate(articles));
console.log(paginate(articles, 7));

// P:S- We have used ternary operator to paginate based on some condition in the next tutorial schema.

