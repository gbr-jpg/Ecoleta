const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
// db.serialize(() => {
// // Criando a tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)
// // Inserindo dados
//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
//     `

//     const values = [
//         "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
//         "Zé dos Papéis",
//         "Ze Gemballa, Jardim América",
//         "Número 300",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Papéis e Papelão"
//     ]
    
//     function afterInsertData(err) {
//         if (err) {
//             return console.log(err)
//         }
        
//         console.log("Cadastrado com sucesso")
//         console.log(this) 
//     }

//     db.run(query, values, afterInsertData)
       
// // consultar dados na tabela 
//     db.all(`SELECT * FROM places`, function(err, rows) {
//         if (err) {
//             return console.log(err)
//         }

//         console.log("Aqui estão o seus registros")
//         console.log(rows)
//     })
// // deletar um dado da tabela
//     db.run(`DELETE FROM places WHERE id = ?`, [62], function(err) {
//         if (err) {
//             return console.log(err)
//         }

//         console.log("Registro deleteado com sucesso")
//     })
// })