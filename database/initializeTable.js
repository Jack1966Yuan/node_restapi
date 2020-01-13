const initializeTable = () => {
    console.log('inside initializeTable')
    const query = `
        DROP TABLE IF EXISTS inventory;
        CREATE TABLE inventory (id serial PRIMARY KEY, name VARCHAR(50), quantity INTEGER);
        INSERT INTO inventory (name, quantity) VALUES ('banana', 15000);
        INSERT INTO inventory (name, quantity) VALUES ('orange', 15400);
        INSERT INTO inventory (name, quantity) VALUES ('apple', 10000);
    `;

    client
        .query(query)
        .then(() => {
            console.log('Table created successfully!');
        })
        .catch(err => console.log(err))
}

module.exports = initializeTable;
