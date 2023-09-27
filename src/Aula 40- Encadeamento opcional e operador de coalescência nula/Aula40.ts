type Archive = {
    title: string;
    text: string;
    data?: Date;
};

const archive: Archive = {
    title: "The title",
    text: " The text",
    // data: new Date(),
};

// o operador de coalescenência só verificar isso quando por nullable ou undefined
console.log(archive.data?.toDateString() ?? "EITAH, don't have a date");
console.log(undefined ?? "2-EITAH, don't have a date");
console.log(null ?? "3-EITAH, don't have a date");
console.log(false ?? "EITAH, don't have a date");
console.log(0 ?? "EITAH, don't have a date");
console.log("_" ?? "EITAH, don't have a date");
