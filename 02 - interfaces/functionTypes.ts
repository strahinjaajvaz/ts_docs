// function types
/**
 * when we define a function type, we're essentially giving a function
 * declaration to it
 */
interface SearchFunction {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunction;
mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};
/**
 * when we define a function type, in the definition, we can use other parameter names
 * as to the ones we used when we did the declaration.
 */
mySearch = function (src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
};
/**
 * function parameters are checked one at a time. if you dont want to specify
 * types in the function declaration, then the values for those types will be
 * infered from the function declaration.
 */
mySearch = function (src, sub): boolean {
  let result = src.search(sub);
  return result > -1;
};
