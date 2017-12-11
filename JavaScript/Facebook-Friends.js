/*
 * Programming Quiz: Facebook Friends (7-5)
 * Create an object called facebookProfile. The object should have 3 properties:
 *
 *   your name
 *   the number of friends you have, and
 *   an array of messages you've posted (as strings)
 *
 *   The object should also have 4 methods:

 *   postMessage(message) - adds a new message string to the array
 *   deleteMessage(index) - removes the message corresponding to the index provided
 *   addFriend() - increases the friend count by 1
 *   removeFriend() - decreases the friend count by 1
 *
 */

var facebookProfile = {
    name: "James Bedford",
    friends: 500,
    messages: ["Hello, how are you?", "Long time no see", "See you later"],
    postMessage: function postMessage(message){
        facebookProfile.messages.push("What time are you coming down?");
    },
    deleteMessage: function deleteMessage(index){
        facebookProfile.messages.splice(index - 1, 1);
    },
    addFriend: function addFriend(){
        facebookProfile.friends++;
    },
    removeFriend: function removeFriend(){
        facebookProfile.friends--;
    }
    
};
