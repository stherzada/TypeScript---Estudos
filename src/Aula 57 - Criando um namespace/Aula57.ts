/*eslint-+disable @typescript-eslint/no-namespace*/

namespace MyNameSpace {
    export const nameOfNameSpace = "Stherzada";

    export class PeopleNameSpace {
        constructor(public name: string) {}
    }

    const peopleNameSpace = new PeopleNameSpace("Sther");
    console.log(peopleNameSpace);

    export namespace OtherNameSpace {
        export const nameOfNameSpace = "Stherzada";
    }
}

const peopleNameSpace = new MyNameSpace.PeopleNameSpace("Sther");
console.log(peopleNameSpace);
console.log(MyNameSpace.nameOfNameSpace);
console.log(MyNameSpace.OtherNameSpace.nameOfNameSpace);
export default 1;
