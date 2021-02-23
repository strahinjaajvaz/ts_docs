# Primitive types

## Booleans

```typescript
let isDone: boolean = false;
```

## Number

```typescript
let decimal: number = 5;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;
```

## String

```typescript
let color: string = "blue";
color = "red";
```

## Array

```typescript
let list: number[] = [1, 2, 3, 4, 5, 6];
let list1: Array<number> = [1, 2, 3, 4, 5, 6];
```

## Tuple

A tuple is an array with a set, predetermined order in which the elements are to be placed.

```typescript
let x: [string, number];
x = ["test", 5];
```

## Enum

An enum is a way of giving more friendly names to sets of numeric values. By default, enums begin numbering their properties starting with 0. You can change starting integer to be something other than 0 and the other properties will be incremented from there.

```typescript
enum Color {
  Red = 9,
  Green,
  Blue,
}

console.log(Color.Green); // 10
```

A handy feature is that you can get the name of the enum by passing it the index or value of the value you're after

```typescript
console.log(Color[10]); // Green as a string
```

## Unknown

```typescript
let notSure: unknown = 4;
notSure = "this should work";
```

if we have a variable who's type is unknown, we can do a check on it using the typeof operator and see what we need to do with it

```typescript
if (typeof notSure === "string") {
  console.log("string");
}
```

## Any

```typescript
const temp: any = {
  here: "is any object",
};
```

## Void

Void can only have null or undefined assigned to it if the `--strictNullChecks` is not specified.
**Should be solely used for function return types**. If you want something to be null or undefined, use null or undefined.

```typescript
const func: () => void = () => {};
```

## Never

Represents the type of values that never occur. If a function throws an error, then that variable will be of type never

```typescript
const value = function () {
  throw Error("this is an error");
};
```

## Object

Object represents anything that isn't a primitive type.

```typescript
function create(object: object | null) {}
create({ test: "asd" });
```

It's also more restrictive than any.

```typescript
let a: any;
let b: Object;

a.nomethod(); // Transpiles just fine
b.nomethod(); // Error: Property 'nomethod' does not exist on type 'Object'.
```
