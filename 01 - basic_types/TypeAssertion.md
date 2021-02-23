# Type assertion

Sometimes we'll end up in a situation where we'll know more about the variable than ts does. Type assertion is a way in which we can tell the compiler trust me, I know what im doing!

```typescript
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;
strLength = (<string>someValue).length; // equivalent
```
