### f23c1-google-converter

---

#### An app that converts from Fahrenheit to Degree Celsius like Google's mini-app

### Algorithms:

Design a set of instructions to solve a problem

>     		1. Get data from the user
>     		2. When I get the data? to convert to F
>     		3. [?] What data from the user
>     		4. [?] What sort of formula?
>     		5. Show the user the result

> **Get data from the user**

- Data type

1. Number

```js
const userInput = 23;
const userInput = 24.5;
```

> `var` makes variables global  
> `const` are used to declare variables that cannot be reassigned after they are initialized.

2. String

```js
const appName = "Google Converter";
const appVersion = "0.0.1";
const isANewApp = "false";
typeof typeof answer;
```

3. Boolean

```js
const isANewApp = true;
```

> **Making decisions:**

4.  Conditional Operators;

        equal?`===`, `==`, `=`, not equal`!==`, `>`, `<`

5.  Conditional statements;

```js
const isNewApp = true;
if (typeof answer === "number") {
  console.log("This is your conversation");
}
if (typeof answer === "string") {
  console.log("");
}
```

> **Convert to F**

```js
const userInput = 40;
const results = (userInput - 32) * (5 / 9);
console.log(userInput + "°F = " + results + "°C");
```

```js
let fahrenheit = prompt("Enter a temperature in Fahrenheit:");
let celsius = (fahrenheit - 32) * (5 / 9);
console.log(
  fahrenheit +
    " degrees Fahrenheit is equal to " +
    celsius +
    " degrees Celsius."
);
```

```js
const fehrenheit = "°F";
const boldFehrenheit = fehrenheit.bold();
const userInput = 74; //prompt("Enter a temperature in " + fehrenheit);
const results = (userInput - 32) * (5 / 9); //.toFixed(2);
const roundedResults = Math.round(results * 100) / 100;
console.log(userInput + "°F = " + roundedResults + "°C");
console.log(
  "Formula: (" + userInput + "°F - 32) × 5 / 9 = " + roundedResults + "°C"
);
document.getElementById(
  "demo"
).innerHTML = `<span style='background-color: orange;'>Formula</span> ( ${userInput}${boldFehrenheit} - 32) × 5 / 9 = ${roundedResults}<b>°C</b>`;
```

---

- [[Jetbrains]]
  - https://www.jetbrains.com/lp/devecosystem-2022/
  - Here’s the starting point to solve the Google converter problem: [https://jsitor.com/Qg9XumxV2L](https://jsitor.com/Qg9XumxV2L)

---

- [[Template literals]]
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

---

- [[Deliberate practice]]
  - is defined as **being effortful in nature, with the main goal of personal improvement of performance rather than enjoyment, and is often performed without immediate reward**. From: Performance Psychology, 2011.

---

- [[GitHub issues]]
  - https://robinpowered.com/blog/best-practice-system-for-organizing-and-tagging-github-issues

---

- https://playcode.io/1092856 Dele's sample code
- https://jsitor.com/xTWbs1cnrZ my progress
