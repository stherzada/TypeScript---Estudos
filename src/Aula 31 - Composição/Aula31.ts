export class Car {
    private readonly engine = new Engine();

    turnOn(): void {
        this.engine.turnOn();
    }
    speedUp(): void {
        this.engine.speedUp();
    }
    stop(): void {
        this.engine.stop();
    }
    turnOff(): void {
        this.engine.turnOff();
    }
}

export class Engine {
    turnOn(): void {
        console.log("vrum vrum vrum");
    }
    speedUp(): void {
        console.log("vruuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuum");
    }
    stop(): void {
        console.log("vrummm  ᴠʀᴜᴍ  ᵛʳᵘᵐ   ");
    }
    turnOff(): void {
        console.log("turum....");
    }
}

const car = new Car();

car.speedUp();
