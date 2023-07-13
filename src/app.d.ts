// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }
}

declare class Product {
	id: string
	name: string
	description: string
	price: number
  image: string
}

declare class CartItem {
	id: string
	quantity: number
}