//tipagem estruturada
//eu preciso de um objeto que cumpra regras q o "type" tem

type VerifuUserFn = (user: User, sentValues: User) => boolean;

type User = { username: string; password: string };

const verifyUser: VerifuUserFn = (user, sentValues) => {
    return (
        user.username === sentValues.username &&
        user.password === sentValues.password
    );
};

const bdUser = { username: "sther", password: "32a1" };
const sentUser = { username: "sther", password: "32a1", permissions: "" };

const loggedIn = verifyUser(bdUser, sentUser);

console.log(loggedIn);
