const { Client } = require('pg');
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

const queryGetTranslations = `
  SELECT translation
  FROM Translations
  ;
`

module.exports.FetchTranslations = async function(){
    try {
        await client.connect();
        let result =  await client.query(queryGetTranslations);
        if (!result){
            return {
                stat: 0,
                data: "There was an error fetching your data"
            }
        }
        var finishedArray = []
        for (let row of result.rows) {
          console.log(JSON.stringify(row));
          finishedArray.push(row);
        }
        client.end();
        const toReturn = {
            stat: 1,
            data: finishedArray
        }
        return toReturn;
        //let results = { 'results': (result) ? result.rows : null};
        //finalToReturn.averagehoursspent = results.results[0].averagehoursspent;
        // console.log("1st result:"+result);
        // console.log("1st result rows: "+result.rows);
        // console.log("1st resultS"+ results.results[0]);
        // console.log("1st, results.results.ahs "+ results.results[0].averagehoursspent);
        // console.log("result.averagehoursspent " + result.rows[0].averagehoursspent); 
      } catch (err) {
        console.error(err);
        return ({stat: 0, data: err});
      }
}//end FetchTranslations

// async function FetchTranslations(){
//       await client.connect();
      
//       await client.query('SELECT translation FROM Translations;', (err, res) => {
//         if (err){
//             const toReturn = {
//                 stat: 0,
//                 data: err
//             }
//             return toReturn
//         }
//         var finishedArray = []
//         for (let row of res.rows) {
//           console.log(JSON.stringify(row));
//           finishedArray.concat(row);
//         }
//         client.end();
//         const toReturn = {
//             stat: 1,
//             data: finishedArray
//         }
//         return toReturn;
//       });
// }//end FetchTranslations

// module.exports = FetchTranslations
