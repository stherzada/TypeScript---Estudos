export class ShoppingCart {
    private readonly product: Product[] = [];

    insertProduct(...products: Product[]): void {
        for (const product of products) {
            this.product.push(product);
        }
    }

    amountProducts(): number {
        return this.product.length;
    }

    totalProducts(): number {
        // vai somar o preço dos produtos do carrinho
        return this.product.reduce((soma, product) => soma + product.price, 0);
    }
}

export class Product {
    name: string;
    public price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

const product1 = new Product("Shirt", 89.9);
const product2 = new Product("Shorts", 55.7);
const product3 = new Product("Pen", 0.7);

console.log(product2);

const shoppingCart = new ShoppingCart();

shoppingCart.insertProduct(product1, product2, product3);

console.log(shoppingCart);

console.log(shoppingCart.amountProducts());
console.log(shoppingCart.totalProducts());
