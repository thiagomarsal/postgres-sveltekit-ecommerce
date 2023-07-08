<script>
    export let data;

    const submitForm = (event) => {
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        // Validate the form fields
        if (!email || !password) {
            console.log('Input fields are required: email: ' + email + ' password: ' + password);
            return;
        }

        const userIndex = data.users.findIndex((user) => { return user.email === email });
        if(userIndex > 0) {
            window.location.replace('/');
        } else {
            alert('Authentication Failed!')
        }
    };
</script>

<body class="bg-gray-100 flex items-center justify-center h-screen">
    <div class="bg-white shadow p-6 rounded">
        <h1 class="text-2xl font-semibold mb-4">Login</h1>
        <form on:submit|preventDefault={submitForm}>
            <div class="mb-4">
                <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" required class="border rounded px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300">
            </div>
            <div class="mb-4">
                <label for="password" class="block text-gray-700 font-bold mb-2">Password</label>
                <input type="password" id="password" name="password" required class="border rounded px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300">
            </div>
            <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Log In</button>
        </form>
    </div>
</body>