// 1. Sum and difference of first two numbers
const sumAndDifference = ([a, b]) =>
  `Sum: ${a + b}, Difference: ${Math.abs(a - b)}`;
console.log(sumAndDifference([5, 3]));
console.log(sumAndDifference([10, 7]));

// 2. Extract first and last characters from a string
const extractFirstAndLast = (str) =>
  `First character: ${str[0]}, Last character: ${str[str.length - 1]}`;
console.log(extractFirstAndLast("hello"));
console.log(extractFirstAndLast("world"));

// 3. Calculate rectangle area
const calculateRectangleArea = ({ length, width }) =>
  `The area of the rectangle is: ${length * width}`;
console.log(calculateRectangleArea({ length: 5, width: 3 }));
console.log(calculateRectangleArea({ length: 8, width: 4 }));

// 4. Get first two colors
const getFirstTwoColors = ([color1, color2]) =>
  `The first two colors are: ${color1} and ${color2}`;
console.log(getFirstTwoColors(["red", "blue", "green", "yellow"]));
console.log(getFirstTwoColors(["orange", "purple", "pink"]));

// 5. Extract nested object information
const extractNestedInfo = ({ data: { name, age, country } }) =>
  `${name} is ${age} years old and lives in ${country}.`;
console.log(
  extractNestedInfo({ data: { name: "John", age: 35, country: "USA" } })
);
console.log(
  extractNestedInfo({ data: { name: "Emma", age: 28, country: "Canada" } })
);

// 6. Product of first two numbers and subtract third
const productAndDifference = ([a, b, c]) =>
  `Product and Difference: ${a * b - c}`;
console.log(productAndDifference([5, 3, 5, 6]));
console.log(productAndDifference([10, 7, 35, 30]));

// 7. Extract object information
const extractData = ({
  product: { itemName, description, manufacturingCountry },
}) =>
  `Item name: ${itemName}, Description: ${description}, Manufacturing Country: ${manufacturingCountry}`;
console.log(
  extractData({
    id: 1,
    product: {
      itemName: "Pencil",
      description: "Extra Dark Pencil",
      manufacturingCountry: "USA",
    },
  })
);
console.log(
  extractData({
    id: 2,
    product: {
      itemName: "Sharpener",
      description: "Faber Castell Premium",
      manufacturingCountry: "Germany",
    },
  })
);
