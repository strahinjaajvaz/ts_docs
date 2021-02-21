// type assertion
/**
 * sometimes well end up in a situation where we'll know more about the
 * variable than ts does. type assertion is a way in which we can tell the compiler
 * trust me, i know what im doing!
 */
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;
strLength = (<string>someValue).length; // equivalent
