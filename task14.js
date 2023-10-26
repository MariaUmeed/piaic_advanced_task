"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ---Task 14 -Guest List -- //
var name_of_friend = ["Asma", "Abida", "Anum", "Samina", "Nazia", "Layla", "Ambreen"];
var message = "I hope this message finds you well. I would like to invite you to join me for a delightful dinner gathering at my place. It's a wonderful opportunity for us to catch up, share stories, and enjoy a delicious meal together.";
for (const guest of name_of_friend) {
    var full_message = `${guest}, ${message}`;
    console.log(full_message);
}
