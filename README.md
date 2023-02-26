# JS-Concepts
This is the repo for ES-6 Advanced Concept Demo Examples, Basic and Advanced Concepts - Including Debouncing, Throttling, Closures, Hoisting etc
Both stopPropagation and stopImmediatePropagation are methods in JavaScript used to prevent event propagation or bubbling to parent elements. However, they have some differences in their behavior.


# stopPropagation() vs stopImmediatePropagation()
-------------------------------------------------
stopPropagation is a method that prevents further propagation of the current event in the capturing and bubbling phases. When you call stopPropagation on an event object, the event will no longer trigger any additional event listeners on parent elements. However, any other event listeners attached to the current element will still be triggered.

Here's an example:
```
<div id="parent">
  <button id="child">Click me</button>
</div>

<script>
  const parent = document.getElementById('parent');
  const child = document.getElementById('child');

  parent.addEventListener('click', () => {
    console.log('Clicked parent');
  });

  child.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('Clicked child');
  });
</script>
```
In this example, there is a parent div element and a child button element inside it. Two event listeners are attached to the elements: one to the parent element, and one to the child element. When you click the child button element, the stopPropagation method is called on the event object to prevent the event from bubbling up to the parent element. As a result, only the click event listener on the child element is triggered, and the console output is:

`Clicked child` \n
On the other hand, stopImmediatePropagation is a method that does everything that stopPropagation does, but it also prevents other event listeners on the current element from being triggered. When you call stopImmediatePropagation on an event object, not only is the event propagation stopped, but also any other event listeners attached to the current element are skipped.

Here's an example:
```
<div id="parent">
  <button id="child">Click me</button>
</div>

<script>
  const parent = document.getElementById('parent');
  const child = document.getElementById('child');

  parent.addEventListener('click', () => {
    console.log('Clicked parent');
  });

  child.addEventListener('click', (event) => {
    event.stopImmediatePropagation();
    console.log('Clicked child');
  });

  child.addEventListener('click', () => {
    console.log('Clicked child again');
  });
</script>
```
In this example, there is a parent div element and a child button element inside it, just like the previous example. Two event listeners are attached to the child element: one that calls stopImmediatePropagation on the event object, and one that logs a message to the console. When you click the child button element, the stopImmediatePropagation method is called on the event object to prevent the event from bubbling up to the parent element, and also to prevent the other event listener on the child element from being triggered. As a result, only the first click event listener on the child element is triggered, and the console output is:

`Clicked child` \n
The second event listener on the child element is skipped because of the stopImmediatePropagation method.
