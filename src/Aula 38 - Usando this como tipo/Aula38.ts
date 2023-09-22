export class Calculator {
    constructor(public numero: number) {}

    add(n: number): this {
        this.numero += n;
        return this;
    }
    sub(n: number): this {
        this.numero -= n;
        return this;
    }

    div(n: number): this {
        this.numero /= n;
        return this;
    }

    mul(n: number): this {
        this.numero *= n;
        return this;
    }
}

export class SubCalculator extends Calculator {
    pow(n: number): this {
        this.numero **= n;
        return this;
    }
}

const calculator = new SubCalculator(10);

calculator.add(5).mul(2).div(2).pow(2);
console.log(calculator);

//Buider - Gof

export class RequestBuilder {
    private method: "get" | "post" | null = null;
    private url: string | null = null;

    setMethod(method: "get" | "post"): this {
        this.method = method;
        return this;
    }
    setUrl(url: string): this {
        this.url = url;
        return this;
    }

    send(): void {
        console.log(`Enviando dados via ${this.method} para ${this.url}`);
    }
}

const request = new RequestBuilder();

request.setUrl("http://www.google.com").setMethod("post").send();
