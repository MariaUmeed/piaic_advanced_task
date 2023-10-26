const usernames: string[] = ['admin', 'Sana', 'Ali', 'Bilal', 'Faraz'];

for (const username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report of your website?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
