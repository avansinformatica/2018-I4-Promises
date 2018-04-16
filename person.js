const uuidv4 = require('uuid/v4');

class Person {

    constructor() {
        console.log('>> Person constructor() ');
        this._usernames = ['Diederich', 'Piet', 'Klaas', 'Harrie', 'Marietje'];
        this._uuids = [0xBEEF, 12345, 8, 0x12345, 0xABCD];
    }

    // Return after 3 sec with Promise
    name() {
        const error = false;

        //return this._usernames;

        return new Promise(
            (resolve, reject)  => {
            setTimeout( () => {
                if( error ) {
                    reject( new Error('00000-ERROR----'));
                } else {
                    const index = Math.floor(Math.random() * this._usernames.length );
                    resolve( this._usernames[index]);
                }
            }, 3000);
        });
    }

    // Return after 5 sec with Promise
    uuid() {
        const error = false;

        return new Promise(
            (resolve, reject)  => {
                setTimeout( () => {
                    if( error ) {
                        reject( new Error('00000-ERROR----'));
                    } else {
                        const index = Math.floor(Math.random() * this._uuids.length );
                        //resolve( this._uuids[index]);
                        resolve( uuidv4() );
                    }
                }, 5000);
            });
    }

}

module.exports = Person;