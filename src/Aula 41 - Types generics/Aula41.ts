//como fazer um filtro original
type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

function myFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (callbackfn(array[i])) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "A"];

const arrayFilterOriginal = myFilter(array, (value) => {
    if (typeof value === "number") return value < 5;
    return false;
});

console.log(arrayFilterOriginal);
