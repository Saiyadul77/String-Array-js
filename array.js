function friendsName(friends) {
    if (Array.isArray(friends) == false) {
        return 'please provide valid array';
    }
    let name = friends[0];
    for (const friend of friends) {
        if (name.length < friend.length) {
            name = friend;
        }
    }
    return name;
}
const friends = ['rahim', 'karim', 'shuvo', 'abir']
const result = friendsName(122);
// console.log(result);

if (friends.indexOf('lion') != -1) {
    // console.log('abir here');
}
else {
    // console.log('no here');
}
if (friends.includes('rahim') == true) {
    console.log('here')
}
const first = [1, 2, 3, 5, 7];
const second = [5, 6, 9, 1, 8];
const combine = first.concat(second);
console.log(combine);