"use strict"

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

