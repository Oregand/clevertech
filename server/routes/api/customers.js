var connection  = require('../../lib/db');
 

module.exports = (app) => {

  app.get(`/api/customers`, async (req, res) => {
    connection.query('SELECT * FROM customers ORDER BY id desc',function(err,rows)     {
        if(err){
         console.error(err);
        }else{
          return res.status(200).send(rows);
        }                    
    });
  });

  app.post(`/api/customers`, async (req, res) => {
    var user = { id: req.body }
    connection.query('INSERT INTO customers SET ?', user, function(err, result) {
        if (err) {
            console.error(err);
        } else {                
            console.log(res)
        }
    })
  })

  app.put(`/api/customers/:id`, async (req, res) => {
    const {id} = req.params;
    connection.query('SELECT * FROM customers WHERE id = ' + req.params.id, function(err, rows, fields) {
        if (err) {
            console.error(err);
        } else {                
            console.log(res)
        }
    })
  });

  app.delete(`/api/customers/:id`, async (req, res) => {
    const {id} = req.params;
    var user = { id: req.params.id }
     
connection.query('DELETE FROM customers WHERE id = ' + req.params.id, user, function(err, result) {
    if (err) {
        console.error(err);
    } else {                
        console.log(res)
    }
        })
  })
}
 