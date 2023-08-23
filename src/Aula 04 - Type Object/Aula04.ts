const objectA: {
    readonly keyA: string;
    readonly keyB: string;
    readonly keyC?: string;
    //index signature para poder adicionar mais coisas dentro deste objeto
    [key: string]: unknown;
} = {
    keyA: "Value A",
    keyB: "Value B",
};

console.log(objectA);
