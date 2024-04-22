## 0x00-ES6_basic

- [Installation](#Installation)
- [Configurations](#Configurations)
- [Tasks](#Tasks)

## Installation
* Setup
Install NodeJS 12.11.x
(in your home directory):

curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
Install Jest, Babel, and ESLint
in your project directory, install Jest, Babel and ESList by using the supplied package.json and run npm install.

## Configurations
Add the files below to your project directory

package.json
Click to show/hide file contents
babel.config.js
Click to show/hide file contents
.eslintrc.js
Click to show/hide file contents
Finally…
Don’t forget to run npm install from the terminal of your project folder to install all necessary project dependencies.

## Tasks
0. Const or let?
mandatory
Modify

function taskFirst to instantiate variables using const
function taskNext to instantiate variables using let
1. Block Scope
mandatory
Given what you’ve read about var and hoisting, modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.
2. Arrow functions
mandatory
Rewrite the following standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after)
3. Parameter defaults
mandatory
Condense the internals of the following function to 1 line - without changing the name of each function/variable.
* Hint: The key here to define default parameter values for the function parameters.
4. Rest parameter syntax for functions
mandatory
Modify the following function to return the number of arguments passed to it using the rest parameter syntax
5. The wonders of spread syntax
mandatory
Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.
6. Take advantage of template literals
mandatory
Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.
7. Object property value shorthand syntax
mandatory
Notice how the keys and the variable names are the same?

Modify the following function’s budget object to simply use the keyname instead.
8. No need to create empty objects before adding in properties
mandatory
Rewrite the getBudgetForCurrentYear function to use ES6 computed property names on the budget object
9. ES6 method properties
mandatory
Rewrite getFullBudgetObject to use ES6 method properties in the fullBudget object
10. For...of Loops
mandatory
Rewrite the function appendToEachArrayValue to use ES6’s for...of operator. And don’t forget that var is not ES6-friendly.
11. Iterator
mandatory
Write a function named createEmployeesObject that will receive two arguments:

departmentName (String)
employees (Array of Strings)
12. Let's create a report object
mandatory
Write a function named createReportObject whose parameter, employeesList, is the return value of the previous function createEmployeesObject.
