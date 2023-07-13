<script lang="ts">
    import { get } from "svelte/store";
    import { cartItems, addToCart, removeFromCart } from "../cart";
    export let product : Product = {id: "", name:"", price: 0};
    let cart = get(cartItems);
    
    let cartItemIndex = cart.findIndex((item) => { return item.id === product.id });
    let cartProduct = cart[cartItemIndex];
    cartItems.subscribe((newCartValue) => {
        cart = newCartValue;
        cartItemIndex = cart.findIndex((item) => { return item.id === product.id });
        cartProduct = cart[cartItemIndex];
    });
</script>

<div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full" src="{product.image}">
    <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{product.name}</div>
    <p class="text-gray-700 text-base">
        {product.description}
    </p>
    </div>
    {#if cartProduct !== undefined}
        <div class="card-body px-4">
            Quantity: <strong>{cartProduct.quantity}</strong>
        </div>
    {/if}
    <div class="card-body px-4">
        Price: ${product.price}
    </div>  
    <div class="px-6 pt-4 pb-2">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full" on:click={() => addToCart(product.id)}>Add</button>
        {#if cartProduct !== undefined && cartProduct.quantity !== undefined}
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full" on:click={() => removeFromCart(product.id)}>Remove</button>
        {/if}
    </div>
</div>