
# The significance of union and intersection types in Typescript.

TypeScript’s **union** and **intersection types** gives us more control over data structure.With this we can easily write code with best logic.
## Union Types (`|`)

With Union types we can hold multiple data type  like (`string`, `number`, .........) on the same variable.

### Example:

```typescript
type StringOrNumber = string | number;

let value: StringOrNumber = "hello";
value = 42;
```

In this example, `value` can be a `string` or a `number`. By using a union type, TypeScript takes the type based on its value we provide.

### Why Use Union Types?
- **Flexibility:** Use them when we want to hold multiple data on the same variable.
- **Type Checking:** TypeScript helps us work safely with every type based on conditions.


## Intersection Types (`&`)

Intersection types combine multiple type in a single variable.SO that we can use it easily and logicaly.

### Example:

```typescript
 type user1 = {
        name: string,
        age: number
    };
    
    type user2 = {
        address: string
    };
    
    type person = user1 & user2;
    
    const maruf: person = {
        name: "Maruf Ahamed",
        age: 23,
        address: "Gazirchat, Ashulia, Savar, Dhaka"
    };
```

Here, `person` combines both `user1` and `user2` types, meaning `maruf` must have all properties from both types.

### Why Use Intersection Types?
- **Useful Condition:** When we need a variable that can hold multiple data type or like that something then we can use it to fulfill our condition
- **Type Safety:** We can use all nedded type in one type.


Together, union and intersection types help make TypeScript code more adaptable and reliable, with this you can handle complex data types with ease.
