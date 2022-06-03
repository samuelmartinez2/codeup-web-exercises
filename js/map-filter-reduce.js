const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];



const moreT3 = users.filter(function(x) {
    return x.languages.length >= 3
});
console.log(moreT3);

const moreT32 = users.filter((x => x.languages.length >= 3));
console.log(moreT32);







// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// const evens = numbers.filter((n) => (n % 2 === 0));
// console.log(evens);

const userEmail = users.map(function(email) {
    return email.email;
    })

console.log(userEmail);



const numYears= users.reduce((num1,num2) => {;
    return  num1 + num2.yearsOfExperience
}, 0);

console.log(numYears);



const averAge = numYears/users.length;

console.log(averAge);



// const longestEmail = users.reduce((email,user)=>)    **********// email.reduce((longStr, email)=>(longStr.length>email.length) ? LongStr :email);


const emailStr =users.reduce((num1,longest) => {
    let str = longest.email.toString();
    let length = str.length;
    if (num1 > length) {
        num1 = longest;
    }
    console.log(str);
    console.log(length);
    return  longest.email

},0);

console.log(emailStr);

// const UserNames= users.reduce((num1,names) => {
//     let nameArr =[];
//     let instr = names.name;
//     console.log(name);
//     for (let i =0; i < users.length; i++){
//         nameArr.push(instr[i])
//     }
//
//
//     console.log(nameArr);
//     return num1 + nameArr
//
// })
// console.log(UserNames);


// const UserNames= users.reduce((num1,names) => {
//
// }



const instructors = users.reduce((num1, user,index)=> {
    if (index === users.length-1){
        return`${num1}${user.name}.`;
    }else{
        return `${num1}${user.name},`;
    }
}, "your instructors are: ");

console.log(instructors);




