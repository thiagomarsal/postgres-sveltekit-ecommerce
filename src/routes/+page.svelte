<script lang="ts">
  import ProductCard from "$lib/productCard.svelte";
  import { get } from "svelte/store";
  import { cartItems } from "../cart";

  export let data;
  const products: Product[] = [];

  console.log(data)

  data.products.data.forEach((element) => {
    if(element.active) {
      products.push({
        id: element.default_price,
        name: element.name,
        price: 9.99,
        image: element.images[0]
      });
    }
  });

  async function checkout() {
    const items = get(cartItems);

    if(items == undefined || items.length === 0) {
      alert('Cart is empty. Please add your items before checkout.');
      return
    }

    await fetch("stripeCheckout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: items }),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        window.location.replace(data.url);
      });
  }
</script>

<div class="container h-full mx-auto flex justify-center items-center">
  <div class="grid grid-cols-3 gap-4">
    <div class="col-span-3">
      <h1>Products</h1>
    </div>
    {#each products as product}
      <ProductCard {product} />
    {/each}
    <div class="col-span-3">
      <button
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        on:click={() => checkout()}>Checkout</button
      >
    </div>
  </div>
</div>
