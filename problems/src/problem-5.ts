{
    const getProperty = <T, K extends keyof T>(object: T, key: K) => {
        return object[key];
    }
    const person: {
        name: string;
        age: number;
    } = { name: "Alice", age: 30 };
    console.log(getProperty(person, "name"));


}