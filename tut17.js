console.log("We are listening from tut17 file");

/**
 * Using the Nested Ternary Operator :-
 * 
 * For more than one conditional expression, we can use a nested ternary operator condition ? expressionIfTrue : expressionIfFalseinstead of if else-if else
 * 
 * If we continue from the example above. If the number of our articles is less than itemsPerPage and we want to show as many results as itemsPerPage our pages variable has to be in 3 different situations.
 * 
 * * First situation: If the number of our articles is less than itemsPerPage , the value of our pages variable should be 1.
   
   * Second situation: If the number of our pages is greater than itemsPerPage the value of our pages variable should be as much as itemsPerPage.
   
   * Third situation: If the number of our pages is less than itemsPerPage , the value of our pages variable should be the same as the number of pages
 
*/

const articles = Array.from({ length: 13 }, (_, index) => index);

const paginate = (items, itemsPerPage = 10) => {
  const pages =
    itemsPerPage > items.length
      ? 1
      : Math.ceil(items.length / itemsPerPage) > itemsPerPage
      ? itemsPerPage
      : Math.ceil(items.length / itemsPerPage);

  return Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  });
};

console.log(paginate(articles));

