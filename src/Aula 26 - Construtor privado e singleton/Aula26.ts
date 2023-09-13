//singleton  - GoF | Factory Method - GoF

export class DataBase {
    private static database: DataBase;
    private host: string;
    private user: string;
    private password: string;

    private constructor(host: string, user: string, password: string) {
        this.host = host;
        this.user = user;
        this.password = password;
    }

    connect(): void {
        console.log(`Connect: ${this.host} ${this.user} ${this.password}`);
    }

    //criado nossa instância
    static getDatabase(host: string, user: string, password: string): DataBase {
        if (DataBase.database) {
            console.log("This is my instance");
            return DataBase.database;
        }
        DataBase.database = new DataBase(host, user, password);
        return DataBase.database;
    }
}

const database1 = DataBase.getDatabase("localhost", "rest", "123342");
database1.connect();

const database2 = DataBase.getDatabase("localhost", "rest", "123342");
database2.connect();

const database3 = DataBase.getDatabase("localhost", "rest", "123342");
database3.connect();

const database4 = DataBase.getDatabase("localhost", "rest", "123342");
database3.connect();

console.log(database1 === database2);
