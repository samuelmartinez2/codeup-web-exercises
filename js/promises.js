"use strict";

(function(){

// fetch(url, {headers: {'Authorization': 'token PERSONAL_ACCESS_TOKEN'}})

const PAT=PERSONAL_ACCESS_TOKEN


fetch('https://api.github.com/users/samuelmartinez2/events/public',{headers: {'Authorization': `token ${PAT}`}})
    .then( resp=> {
        resp.json()
            .then(data => {
                console.log(data)
                let latestLog = {
                    user: `${data[0].actor.login}`,
                    last_log: `${data[0].created_at}`,
                }
                console.log(latestLog);
                return latestLog;
            })
            .then(user => console.log(user))
    })


    const lasEvent = (username) => {
     return   fetch(`https://api.github.com/users/${username}/events/public`,{headers: {'Authorization': `token ${PAT}`}})
            .then(resp=> {
                resp.json()
                    .then(data => {
                        console.log(data)
                        let latestLog = {
                            user: `${data[0].actor.login}`,
                            last_log: `${data[0].created_at}`,
                        }
                        console.log(latestLog);
                        return latestLog;
                    })
                    .then(user => console.log(user))
            })

    }


    console.log(lasEvent('samuelmartinez2'));


fetch('https://api.github.com/users/samuelmartinez2/events/public',{headers: {'Authorization': `token ${PAT}`}})
.then( resp=> {
    resp.json()
        .then(info =>
        {info.filter(events);

            function events(input) {
                if (info.type === "pushEvent") {
                    return info.type();
                }

            }
            console.log(events("PushEvents"))})
})
//
//     {
//         let pushEvents = {
//             user: `${info.repo[0].name}`,
//             events: `${info.type}`,
//         }
//         console.log(pushEvents);
//
//
//         });
// })



})();