# Interafaces

Define contracts in your code as constraints to the types your objects
are

```typescript
function printLabel(labelObj: { label: string }): void {
  console.log("Label: ", labelObj.label);
}
let myObj = { size: 10, label: "Size 10 object" };
printLabel(myObj);
```

The type checker checks that the objet has all the properties defined in the interface. We can also pass in values that aren't defined in the object, ts will igonre them and wont complain as we have passed in the value that we said we need

```typescript
interface LabeledValue {
  label: string;
}
function printLabelOne(labelObj: LabeledValue) {}
```

The benefit of not defining an interface as inline, is that we now have the ability to resue it if we need to. The type checker doesn't care that the order in which the interface was defined was matched

## Optional

There might be a time where you want to pass in a value, but thats not required for every instance. We can then assign that property as optional. Everyother property in the interface still gets validated.

```typescript
interface OptionalProps {
  optional?: boolean;
}
```

## Readonly

Some properties should only be modifiable when an object is first created. We can assign this as readonly. if we try to reassign the value, then well have an error. AWESOME!

```typescript
interface Point {
  readonly x: number;
  readonly y: number;
}
const point: Point = { x: 4, y: 5 };
point.x = 5; // ERROR: Cannot assign to 'x' because it is a read-only
```

TS also comes with a readonly array which is the same as a normal array with all the mutating methods removed. we can wither use `ReadOnlyArray<type>` or we ca define it as `Readonly<type[]>`

```typescript
const readOnlyArr: Readonly<number[]> = [1, 2, 3, 4, 5, 6];
const reacOnlyArrTwo: ReadonlyArray<number> = [1, 2, 3, 4, 5, 6];

readOnlyArr[1] = 0; // ERROR: Index signature in type 'readonly number[]' only permits reading.
```

If we want to define a tuple as readonly we can do so also.

```typescript
const readOnlyTuple: Readonly<[string, number]> = ["value", 5];
readOnlyTuple[0] = "foo"; // ERROR: Cannot assign to '0' because it is a read-only property.
```

If we created as array as read only, we can still change some values if we type assert it as a normal array.

```typescript
const readOnlyArray: Readonly<number[]> = [1, 2, 3, 4, 5];
const arr: number[] = readOnlyArray as number[];
arr[0] = 1;
```

### Nested readonly objects

If an object is labeled as read only, that means that only that reference is readonly you can change the values of that objects properties. Its similar to shallow compare. If you want to make a whole object as readonly.

` TODO: comeback and fill this section out`

```typescript
interface Nested {
  readonly a: { b: number };
  readonly c: { d: number };
}
const obj: Nested = {
  a: { b: 9 },
  c: { d: 10 },
};
obj.a.b = 18;
```

## Excess property checks

If we have a function and it has a typecheck for an argument, if that argument thats passed in is an object literal, then TS gives it extra special treatment and undergoes excess property checking.

When we create a new object and pass it in, we should be doing so with all the properties that it expects, as it is JUST created.

```typescript
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
```

This line will complain as were passing in an object literal and colour doesn't exists in the interface. If its not an object literal, then it will be passed in normally.

```typescript
let mySquare = createSquare({ colour: "red", width: 100 }); // ERROR: Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'. Did you mean to write 'color'
const props = { colour: "white", width: 30 };
let mySquare = createSquare(props); // No issues as its not a literal
```

Again we can get around these issues with type assertion

```typescript
let mySquareTwo = createSquare({ colour: "red", width: 100 } as SquareConfig);
```

As long as one property exists in the interface that were passing as an argument, TS wont complain, if no properties exist, then we get an error.

```typescript
let squareOps = { colour: "red" };
createSquare(squareOps); // ERROR : Type '{ colour: string; }' has no properties in common with type 'SquareConfig'.
```
