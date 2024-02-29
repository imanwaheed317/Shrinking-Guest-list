let Guest_List :string[] = ['IMRAN KHAN', 'NAWAZ SHARIF', 'ASIF ALI ZARDARI'];
//for(let i=0; i<Guest_List. length; i++){
// console.log('Dear mr. ' + Guest_List[i] + ',\n\n It is our pleasure to invite you in our party. \n\n Thank you!')
// }

let absent_guest :string = 'IMRAN KHAN';
let new_guest :string = 'kamran tessori';
Guest_List [0] = new_guest;

//for(let i=0; i<Guest_List. length; i++){
// console.log('Dear mr. ' + Guest_List[i] + ',\n\n It is our pleasure to invite you in our party. \n\n Thank you!')
// }

console.log(` Mr.${absent_guest} is not coming to the party.`)
console.log('Good News! we find big table so we are inviting 3 more guests.')

Guest_List.unshift('sir zia khan');
Guest_List.splice(2,0, 'Maryam nawaz');
Guest_List.push('Bilawal bhutto');

for(let i=0; i<Guest_List. length; i++){
    console.log('Dear mr. ' + Guest_List[i] + ',\n\n It is our pleasure to invite you in our party. \n\n Thank you!');
}

console.log('\nSorry we can not arrange big table,only two people will be invited.');
while (Guest_List.length > 2){
let remove_guest = Guest_List.pop();
console.log(`Sorry Mr. ${remove_guest}, you are not invited for dinner`);
}
for(let i=0; i<Guest_List. length; i++){
    console.log('Dear mr. ' + Guest_List[i] + ',\n\nYou are still invited. \n\n Thank you!');
}
Guest_List.splice(0,2);
console.log(Guest_List);
