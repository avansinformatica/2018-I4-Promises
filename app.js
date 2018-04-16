const Person = require('./person');

const person = new Person();

// Parallel en wachten totdat
function nameAndUUIDSequential()
{
    let name;

    return new Promise(  (resolve) => {
        person.name()
            .then((username) => {
                name = username;
                return person.uuid();
            })
            .then((uuid) => {
                //console.log( name + ' : ' + uuid);
                resolve( name + ' : ' + uuid );
            });
    })
}

// Parallel en wachten totdat
function nameAndUUIDParallel()
{
    let name;

    const calls = [
        person.name(),
        person.uuid()
    ];

    return new Promise( (resolve) => {
        Promise.all( calls )
            .then ( (results) => {
                resolve(results)
            })
    })
}


const _ = function() {

    // Username
    person.name()
        .then( (username)  => {
            console.log('Alleen name(): ' + username );
        })
        .catch();

    // UUID
    person.uuid()
        .then( (username)  => {
            console.log('Alleen UUID: ' + username );
        })
        .catch();

    // Combinatie van 2 promises die op elkaar wachten (sequentieel en parallel)
    nameAndUUIDSequential()
        .then( (result) => {
            console.log('Sequentieel : ' + result);
        });

    nameAndUUIDParallel()
        .then( (result) => {
            console.log('Parallel : [' + result + ']');
        });

}();