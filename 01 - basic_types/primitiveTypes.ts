// boolean
let isDone: boolean = false;

// number
let decimal: number = 5;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;

// string
let color: string = "blue";
color = "red";

// array
let list: number[] = [1, 2, 3, 4, 5, 6];
let list1: Array<number> = [1, 2, 3, 4, 5, 6];

// tuple
let x: [string, number];
x = ["test", 5];

// enum
/**
 * An enum is a way of giving more friendlt names to sets of numeric values
 * By default, enums begin numbering their members starting with 0
 * You can change this by manuall giving it anoter value and it will start from there
 *
 */
enum Color {
  Red = 9,
  Green,
  Blue,
}
console.log(Color.Green); // 10
/**
 * A handy feature is that you can get the name of the enum by passing it the index
 * or value of the value you're after
 */
console.log(Color[10]); // Green as a string

// unknown
let notSure: unknown = 4;
notSure = "this should work";
/**
 * if we have a variable thats type is unknown, we can do a check on it using the typeof
 * operator and see what we need to do with it
 */
if (typeof notSure === "string") {
  console.log("string");
}

// any
const temp: any = {
  here: "is any object",
};

// void
/**
 * void can only be have null or undefined assigned to it if the `--strictNullChecks` is not
 * specified. Should be solely used for function return types. If you want something to be
 * null or undefined, use null or undefined.
 */
const func: () => void = () => {};

// never
/**
 * represents the type of values that never occur. If a function throws an error,
 * then that variable will be of type never
 */
const value = function () {
  throw Error("this is an error");
};

// object
/**
 * object represents anything that isnt a primitive type
 */
function create(object: object | null) {}
create({ test: "asd" });
