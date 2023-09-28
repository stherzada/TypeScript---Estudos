interface PeopleProtocol<T = string, U = number> {
    name: T;
    lastname: T;
    age: U;
}

const student: PeopleProtocol<string, number> = {
    name: "Stherzada",
    lastname: "Linda",
    age: 22,
};

const student2: PeopleProtocol<number, number> = {
    name: 4544,
    lastname: 442,
    age: 22,
};

const student3: PeopleProtocol = {
    name: "Sther",
    lastname: "Alves",
    age: 22,
};

// type ReturnSelfAsMockFetch<T> = {
//     data: T;
//     status: number;
//     isFetching: boolean;
//     hasError: boolean;
// };

// function useReturnSelfAsMockFetch<T>(data: T): ReturnSelfAsMockFetch<T> {
//     //no meu exemplo eu to apenas retornando o que eu recebo, mas vc pode pensar nisso como sendo
//     //uma request numa api
//     return {
//         data,
//         status: 200,
//         isFetching: false,
//         hasError: false,
//     };
// }
// function useReturnSelfAsMockFetchAsAny(data: any) {
//     //no meu exemplo eu to apenas retornando o que eu recebo, mas vc pode pensar nisso como sendo
//     //uma request numa api
//     return {
//         data,
//         status: 200,
//         isFetching: false,
//         hasError: false,
//     };
// }

// type User_ = {
//     id: number;
//     name: string;
// };

// const mockUsers = [
//     {
//         id: 1,
//         name: "pepega",
//     },
//     {
//         id: 2,
//         name: "mamaco",
//     },
// ];

// const users = useReturnSelfAsMockFetch<Array<User_>>(mockUsers);

// //users.data -> vai ter o tipo Array<User> pois informei ele como "parametro" para o generic

// const users2 = useReturnSelfAsMockFetchAsAny(mockUsers as Array<User_>);

// //users2.data -> vai ter o tipo any mesmo eu sabendo que é Array<User>

// const users3 = useReturnSelfAsMockFetch(mockUsers);

// //users3.data vai ter o seu valor inferido pelo ts caso eu esqueça de passar o valor que T deve ter

// type Company = {
//     id: number;
//     name: string;
//     employees: Array<User_>;
// };
// const mockCompanies = [
//     {
//         id: 1,
//         name: "Google",
//         employees: mockUsers,
//     },
//     {
//         id: 2,
//         name: "empresaFalida",
//         employees: [],
//     },
// ];

// //como minha funcao de "fetch" é generica eu consigo usar ela pra outras "requests" e vou ter o retorno
// // tipado corretamente
// const company = useReturnSelfAsMockFetch<Array<Company>>(mockCompanies);

// console.log(users, users2, users3);

// const alfabetoComNumero = {
//     a: 1,
//     b: 2,
//     c: 3,
// };
// //alfabetoComNumero é const mas eu posso mudar o valor dos atributos dele
// alfabetoComNumero.b = 4;

// console.log(alfabetoComNumero.b); //4

// type AlfabetoComNumero2 = {
//     readonly a: number;
//     readonly b: number;
//     readonly c: number;
// };
// const alfabetoComNumero2 = {
//     a: 1,
//     b: 2,
//     c: 3,
// } as AlfabetoComNumero2;

// // o ts reclama que n posso, porem é meio verboso pois tenho que declarar o tipo e definir a variavel com o tipo
// // alfabetoComNumero2.b = 4;

// const alfabetoComNumero3 = {
//     a: 1,
//     b: 2,
//     c: 3,
// } as const;

// //tudo vira readonly sem ter que definir tipo :) (passa o mouse em cima do alfabetoComNumero3 pra ver o tipo)
// // alfabetoComNumero2.b = 4;
