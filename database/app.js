var config = require('./config');

const pgp = require("pg-promise")({});
const db = pgp(config);

/*
db.connect()
    .then(obj => {
        initializeTable();
        obj.done(); // success, release the connection;
        console.log('finished');
    })
    .catch(error => {
        console.log('ERROR:', error.message || error);
    });

    const initializeTable = () => {
        console.log('inside initializeTable')
        const query = `
            DROP TABLE IF EXISTS products;
            CREATE TABLE products (id serial PRIMARY KEY, name VARCHAR(50), price float);
            INSERT INTO products (name, price) VALUES ('banana', 1.50);
            INSERT INTO products (name, price) VALUES ('orange', 1.54);
            INSERT INTO products (name, price) VALUES ('apple', 1.00);
        `;
    
        db
            .query(query)
            .then(() => {
                console.log('Table created successfully!');
            })
            .catch(err => console.log(err))
    }

*/
/*
db.none('INSERT INTO inventory (name, quantity) VALUES($1, $2)', ['book', 101])
      .then(() => {
          console.log("success");
      })
      .catch(error => console.log(error))
*/
/*
db.one('INSERT INTO inventory (name, quantity) VALUES($1, $2) RETURNING id', ['phone', 102])
      .then((data) => {
          console.log(data);
      })
      .catch(error => console.log(error))
*/
db.any('SELECT name, quantity from inventory;')
.then((inventory) => {
    console.log(inventory);
}).catch(error => console.log(error))

/*
db.none('UPDATE inventory SET name= $1, value = $2 WHERE id = $3;', [])
.then(() => {
    console.log("UPDATED")
}).catch(error => console.log(error))
*/



