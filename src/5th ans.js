import React from 'react';

var obj  = [
    {
       id : 4,
       name:"manu"
    },

    {
         id : 10,
       name:"raj"
    },

    {
         id : 5,
       name:"guru"
    },
    
    {
    
         id : 6,
       name:"ram"
    }
];
obj.sort((a, b) => {
    return a.id - b.id;
});
obj.forEach((e) => {
    console.log(`${e.id}`);
});

export default obj;
