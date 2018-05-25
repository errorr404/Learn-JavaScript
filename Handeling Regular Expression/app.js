// let the regular expression variable

let re;
re = /hello/i; // Declear the RE variable , i= case insensitive

// re = /hello/g; // Global search

// console.log(re);
// console.log(re.source); // .source gives the varible without / /.

// exec() -- Return result in an array or null

// const result = re.exec('hello world');  // now the exec() function match the re varible to the input string and return the index number of the string where it matches the first character
// console.log(result);
// console.log(result[0]); // it gives the matched string
// console.log(result.index); // it gives the starting index of the matched string

// console.log(result.input); // it gives the passed string in the exec() function.

// test() -- Return true of false

// const result = re.test('Hello');
// console.log(result); // here it gives false because the 'Hello' contain the Upper case but the source string re contain the lower case of h so it gives false bcz re = /hello/ 

// const result = re.test('Hello');
// console.log(result); // gives true


// match()  -- return result array or null

// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

// search() - return the index of first match and if not found then return -1

// const str = 'Hello world';
// const result = str.search(re);
// console.log(result);

// replace() -- Return new string with some of all matches of a pattern
const str = 'Hello There';
const newStr = str.replace(re,'Hi');
console.log(newStr);