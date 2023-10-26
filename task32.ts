//---Task 32---//

// list of current users
const current_users: string[] = ['Maria', 'Faraz', 'Ali', 'Hamza', 'Ambreen'];

// list of new users
const new_users: string[] = ['Sana', 'Abida', 'Rida', 'Safa', 'Khuram'];

for (const newUsername of new_users) {
    if (current_users.includes(newUsername)) {
        console.log(`Sorry, the username '${newUsername}' is already taken. Please enter a new username.`);
    } else {
        console.log(`The username '${newUsername}' is available.`);
        current_users.push(newUsername); // Add the new username to the current_users list
    }
}
