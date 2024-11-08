{
    const removeDuplicates = (array: number[]): number[] => {
        let newArray: number[] = [... new Set(array)];
        return newArray;
    }
    console.log(removeDuplicates([1, 4, 2, 3, 4, 4, 5]));
}