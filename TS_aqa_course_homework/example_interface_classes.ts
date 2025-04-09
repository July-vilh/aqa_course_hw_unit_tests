//TODO: Пример: Необходимо реализовать карзину товаров, принимающую продукты и дающая возможность их оплатить кошельком

interface IProduct {
  name: string;
  price: number;
}

type PaymentMethod = "Cash" | "Card";

class Product implements IProduct {
  constructor(public readonly name: string, public readonly price: number) {}
}

class Checkout {
  private products: Product[] = [];

  constructor(private wallet: Wallet) {}

  public addProduct(product: Product) {
    this.products.push(product);
  }

  pay(paymentMethod: PaymentMethod) {
    const amount = this.products.reduce((total, product) => total + product.price, 0);
    const result = this.wallet.pay(amount, paymentMethod);
    if (result) {
      console.log("Payment successful. Emptying the cart...");
      this.products = []; // Очищаем корзину после оплаты
    } else {
      console.log("Payment failed. Cart remains intact.");
    }
  }
}

class Wallet {
  constructor(private cashBalance: number, private bankBalance: number) {}

  public pay(amount: number, paymentMethod: PaymentMethod) {
    if (paymentMethod === "Cash") {
      if (this.cashBalance >= amount) {
        this.cashBalance -= amount;
        console.log(`Paid: ${amount} with cash. Remaining cash balance: ${this.cashBalance}`);
        return true;
      } else {
        console.log("Insufficient cash balance.");
        return false;
      }
    } else if (paymentMethod === "Card") {
      if (this.bankBalance >= amount) {
        this.bankBalance -= amount;
        console.log(`Paid: ${amount} by card. Remaining bank balance: ${this.bankBalance}`);
        return true;
      } else {
        console.log("Insufficient bank balance.");
        return false;
      }
    } else {
      throw new Error("Invalid payment method");
    }
  }
}

const wallet = new Wallet(500, 1000); // Инициализация с балансами наличных и карты

const checkout = new Checkout(wallet);
const bread = new Product("Bread", 50);
const fish = new Product("Fish", 350);

checkout.addProduct(bread);
checkout.addProduct(fish);

checkout.pay("Card");
checkout.addProduct(bread);
checkout.addProduct(fish);
checkout.addProduct(fish);
checkout.pay("Card");
