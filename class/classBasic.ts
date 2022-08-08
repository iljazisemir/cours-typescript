class Invoice {
    client :string;
    product: string; 
    price: number;

    constructor(client : string, product : string, price: number) {
        this.client = client
        this.product = product
        this.price = price
    }
}

const invoice1 = new Invoice("Dora", "Template" , 200)
const invoice2 : Invoice = { client: "Nore", product : "SEO", price: 200}

// Array

let invoiceArray : Invoice[] = []
invoiceArray.push(invoice1, invoice2, { client: "Nore", product : "SEO", price: 200})