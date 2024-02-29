"use strict";
let Guest_List = ['IMRAN KHAN', 'NAWAZ SHARIF', 'ASIF ALI ZARDARI'];
//for(let i=0; i<Guest_List. length; i++){
// console.log('Dear mr. ' + Guest_List[i] + ',\n\n It is our pleasure to invite you in our party. \n\n Thank you!')
// }
let absent_guest = 'IMRAN KHAN';
let new_guest = 'kamran tessori';
Guest_List[0] = new_guest;
//for(let i=0; i<Guest_List. length; i++){
// console.log('Dear mr. ' + Guest_List[i] + ',\n\n It is our pleasure to invite you in our party. \n\n Thank you!')
// }
console.log(` Mr.${absent_guest} is not coming to the party.`);
console.log('Good News! we find big table so we are inviting 3 more guests.');

//array mai 3 guest add kiai ha.
Guest_List.unshift('sir zia khan');
Guest_List.splice(2, 0, 'Maryam nawaz');
Guest_List.push('Bilawal bhutto');

//yaha par mai nai 6 guest kai array ko print karwaya ha.
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear mr. ' + Guest_List[i] + ',\n\n It is our pleasure to invite you in our party. \n\n Thank you!');
}
//sorry message to guest for not inviting.
console.log('\nSorry we can not arrange big table,only two people will be invited.');

//yaha par mai nai guest remove kiai ha.
while (Guest_List.length > 2) {
    let remove_guest = Guest_List.pop();
    console.log(`Sorry Mr. ${remove_guest}, you are not invited for dinner`);
}
//hamarai bachai huwai 2 invited guest.
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear mr. ' + Guest_List[i] + ',\n\nYou are still invited. \n\n Thank you!');
}
//mai nai sarai guest array sai remove kar diai.
Guest_List.splice(0, 2);
console.log(Guest_List);
