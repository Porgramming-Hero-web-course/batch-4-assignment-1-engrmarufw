{
    const sumArray = (array: number[]): number => {
        let sum: number = 0;
        for (const value of array) {
            sum = sum + value;
        }
        return sum;
    }
    console.log(sumArray([1, 5, 10]))
}