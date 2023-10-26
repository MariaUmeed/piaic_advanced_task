function make_shirt(size: string = 'large', message: string = 'I love TypeScript'): void {
    console.log(`Shirt size: ${size}`);
    console.log(`Message printed on the shirt: ${message}`);
}

// Create a large shirt with the default message
make_shirt();

// Create a medium shirt with the default message
make_shirt('medium');

// Create a custom-sized shirt with a different message
make_shirt('small', 'Hello, World!');
