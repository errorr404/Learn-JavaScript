// let the regular expression variable

// let re;
// re = /hello/i; // Declear the RE variable , i= case insensitive

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
// const str = 'Hello There';
// const newStr = str.replace(re,'Hi');
// console.log(newStr);

/* part-2  Metacheracter Symbols */

let re;
// Literal charactes
re = /hello/;
re = /hello/i;

// Metacheracter Symbols
re =/^h/i; // Must start with
re =/rld$/i; // Must Ends with
re = /^hello$/i; // start with hello and end with hello.

re=/h.llo/i; //mathces any ONE of the charachter

re = /h*llo/i; // Matches any character 0 or more

re =/gre?a?y/i;  // optional character 

re =/'gre?a?iy'/i; // Escape chatacter


// Brackets [] -- charcter sets

re =/gr[ae]y/i;  // Must be an a or e;

re =/[GF]ray/i;  // Must be an a or e;


re =/[^GF]rey/i;  // Match anything except a G or F;

re =/[A-Z]rey/;  // Match any uppercase letter;

re =/[a-z]rey/;  // Match any lowercase letter;

re =/[A-Za-z]rey/;  // Match any  letter;

re =/[0-9]rey/;  // Match any digit;

// Braces {} - Quantifiers

re = /hel{2}o/i; // Must occur exactly {m} amount of times in this l occour times

re = /hel{2,4}o/i; // betwwen 2 and 4.

re = /hel{2,}o/i;  // must occour atleast {m} times

// PArantheses () -Gruping

re = /([0-9]x){3}/; // 0-9x three times

// Shorthand character classes

re =/\w/;  //word character -- alphanumeric or _

re =/\w+/;  //+ = one or more

re =/\W/;  //Non word character 

re =/\d/;  //match any digit

re =/\d+/;  //match any digit 0 or more times

re =/\D/;  //match any NON-digit
re =/\s/;  //match whitespace char
re =/\S/;  //match non whitespace char
re = /\Hello\b/i;  // word boundry

// Assertions

re = /x(?=y)/; // Match x only if followed by y;

re = /x(?!y)/; // Match x only if NOT followed by y;








// string to match
const str ='3x3x3x';

// String to match
// const str = 'Hello World';
// const str = 'Hllo';

// Log Results

const result = re.exec(str);
console.log(result);

function reTest(re,str) {
  if(re.test(str)){
  console.log(`${str} matches ${re.source}`);
  }else{
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);