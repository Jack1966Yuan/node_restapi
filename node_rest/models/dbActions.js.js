const config = require('./config');
const pgp = require('pg-promise')({});

const db = pgp(config);

const dbGetProducts = ( async (id) => {
    //db = pgp(config);
    let query;

    if(id) {
        query = 'SELECT name, price from products where id = ' + id;
    } else {     
        query = 'SELECT name, price from products;';
    }
    return await db.any(query);
});

const dbInsert = ( async (name, price) => {
    //db = pgp(config);
    let query = "INSERT INTO products (name, price) VALUES ('" + name + "', " + price + ');';
    console.log(query);

    return await db.any(query);
});

const dbDeleteProduct = ( async (id) => {
    //db = pgp(config);
    let query = 'DELETE FROM products WHERE id = ' + id;

    return await db.none(query);
});

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

/*
db.none('UPDATE inventory SET name= $1, value = $2 WHERE id = $3;', [])
.then(() => {
    console.log("UPDATED")
}).catch(error => console.log(error))
*/





module.exports = { dbGetProducts, dbInsert, dbDeleteProduct };
