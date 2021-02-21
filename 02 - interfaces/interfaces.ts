// interafaces
/**
 * define contracts in your code as constraints to the types your objects
 * are
 */
function printLabel(labelObj: { label: string }): void {
  console.log("Label: ", labelObj.label);
}
let myObj = { size: 10, label: "Size 10 object" };
printLabel(myObj);
/**
 * the type checker checks that the objet has all the properties defined in the
 * interface. We can also pass in values that aren't defined in the object, ts will
 * igonre them and wont complain as we have passed in the value that we said we need
 */
interface LabeledValue {
  label: string;
}
function printLabelOne(labelObj: LabeledValue) {}
/**
 * the benefit of not defining an interface as inline, is that we now have the
 * ability to resue it if we need to. The type checker doesn't care that the order
 * in which the interface was defined was matched,
 */

// optional
/**
 * there might be a time where you want to pass in a value, but thats not required
 * for every instance. we can then assign that property as optional. everyother property
 * in the interface still gets validated.
 */

interface OptionalProps {
  optional?: boolean;
}

// readonly
/**
 * some properties should only be modifiable when an object is first created.
 * we can assign this as readonly. if we try to reassign the value, then well have
 * an error. AWESOME!
 */
interface Point {
  readonly x: number;
  readonly y: number;
}
const point: Point = { x: 4, y: 5 };
// point.x = 5; // ERROR!
/**
 * ts also comes with a readonly array which is the same as a normal array with all
 * the mutating methods removed.
 * we can wither use ReadOnlyArray<type> or we ca define it as Readonly<type[]>
 */
const readOnlyArr: Readonly<number[]> = [1, 2, 3, 4, 5, 6];
const reacOnlyArrTwo: ReadonlyArray<number> = [1, 2, 3, 4, 5, 6];
// readOnlyArr[1] = 0;
/**
 * if we want to define a touple as readonly we can do so also.
 */
const readOnlyTouple: Readonly<[string, number]> = ["value", 5];
/**
 * if we created as array as read only, we can still change some values if we type
 * assert it as a normal array.
 */
const readOnlyArray: Readonly<number[]> = [1, 2, 3, 4, 5];
const arr: number[] = readOnlyArray as number[];
arr[0] = 1;
/**
 * nested readonly objects.
 * if an object is labeled as read only, that means that only that reference is readonly
 * you can change the value of that objects children. its similar to shallow compare.
 * if you want to make a whole object as readonly, TODO: comeback and fill this section out
 *
 */
interface Nested {
  readonly a: { b: number };
  readonly c: { d: number };
}
const obj: Nested = {
  a: { b: 9 },
  c: { d: 10 },
};
obj.a.b = 18;

// excess property checks
/**
 * if we have a function and it has a typecheck for an argument, if the argument
 * thats passed in is a object literal, then ts gives it extra special treatment and undergoes
 * excess property checking. When we create a new object and pass it in, we should be doing so
 * with all the properties that it expects, as it is JUST created.
 */
interface SquareConfig {
  color?: string;
  width?: number;
}
function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width ** 2 : 20,
  };
}
/**
 * this line will complain as were passing in an object literal and colour doesn't
 * exists in the interface. if its not an object literal, then it will be passed in
 * normally.
 */
// let mySquare = createSquare({ colour: "red", width: 100 });
const props = { colour: "white", width: 30 };
let mySquare = createSquare(props);
/**
 * again we can get around these issues with type assertion
 */
let mySquareTwo = createSquare({ colour: "red", width: 100 } as SquareConfig);
/**
 * as long as one property exists in the interface that were passing as an argument, ts
 * wont complain, if no properties exist, then we get an error.
 */
let squareOps = { colour: "red" };
// createSquare(squareOps); // ERROR
