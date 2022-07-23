const { Client } = require('pg');


function FetchTranslations(){
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        }
      });
      
      client.connect();
      
      client.query('SELECT translation FROM Translations;', (err, res) => {
        if (err) return err;
        var finishedArray = []
        for (let row of res.rows) {
          console.log(JSON.stringify(row));
          finishedArray.concat(row);
        }
        return finishedArray;
        client.end();
      });
}//end FetchTranslations

module.exports(FetchTranslations)
