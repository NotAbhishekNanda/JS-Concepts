console.log("We are listening from tut15 files");

// Promise.any
/**
 * Promise.any() takes an iterable of Promise objects.
 * It returns a single promise that fulfills as soon as any of the promises in the iterable fulfills,
 * with the value of the fulfilled promise.
 * If no promises in the iterable fulfill (if all of the given promises are rejected),
 * then the returned promise is rejected with an AggregateError, a new subclass of Error that groups together individual errors.
 */

 const promise1 = Promise.reject(0);
 const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
 const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));
 
 const promises = [promise1, promise2, promise3];
 
 Promise.any(promises).then((value) => console.log(value));

 /**
  * Promise.any() fulfills with the first promise to fulfill, even if a promise rejects first.
  * This is in contrast to Promise.race(), which fulfills or rejects with the first promise to settle.
  */

 const pErr = new Promise((resolve, reject) => {
    reject("Always fails");
  });
  
  const pSlow = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Done eventually");
  });
  
  const pFast = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Done quick");
  });
  
  Promise.any([pErr, pSlow, pFast]).then((value) => {
    console.log(value);
    // pFast fulfills first
  });
  // expected output: "Done quick"

  /**
   * Rejections with AggregateError
   * Promise.any() rejects with an AggregateError if no promise fulfills.
   */

   const failure = new Promise((resolve, reject) => {
    reject("Always fails");
  });
  
  Promise.any([failure]).catch((err) => {
    console.log(err);
  });
  // expected output: "AggregateError: No Promise in Promise.any was resolved"

/**
 * Example: Displaying the first image Loaded
 */
 
 function fetchAndDecode(url) {
    return fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        return response.blob();
      }
    });
  }
  
  const coffee = fetchAndDecode("coffee.jpg");
  const tea = fetchAndDecode("tea.jpg");
  
  Promise.any([coffee, tea])
    .then((value) => {
      const objectURL = URL.createObjectURL(value);
      const image = document.createElement("img");
      image.src = objectURL;
      document.body.appendChild(image);
    })
    .catch((e) => {
      console.error(e);
    });


