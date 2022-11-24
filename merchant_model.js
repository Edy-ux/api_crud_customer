const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'my_user',
  host: 'localhost',
  database: 'my_database',
  password: 'root',
  port: 5432,
});

const getMerchants = async (request, res) => {
  return new Promise((resolve, reject) => {

    pool.query('SELECT name, phone, email, id FROM merchants ORDER BY id ASC', (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows)
    })
  })

};

const getMerchantById = (request, response) => {
 return new Promise((resolve, reject) => {
  const id = parseInt(request.params.id)
   
    pool.query('(SELECT name, phone, email, id FROM merchants WHERE id = $1)',
     [id], (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows)
    })
  })
}

const createMerchant = (body) => {
  const { name, email, phone } = body;
  return new Promise((resolve, reject) => {
    pool.query(
      'INSERT INTO merchants (name, email, phone) VALUES ($1, $2, $3) RETURNING *',
      [name, email, phone],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      }
    );
  });
};

const deleteMerchant = (req, res) => {
  const id = parseInt(req.params.id);
  return new Promise((resolve, reject) => {
    pool.query(
      'DELETE FROM merchants WHERE id = $1',
      [id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`Cliente deletado com sucesso!`);
      }
    );
  });
};


const updateMerchant = (req, res) => {
  const id = parseInt(req.params.id)
  const { name, email, phone } = req.body
  return new Promise((resolve, reject) => {
    pool.query('UPDATE merchants SET name = $1, email = $2, phone = $3 WHERE id = $4',
      [name, email, phone, id],
      (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows)
      }
    )
  });
}

module.exports = {
  getMerchants,
  createMerchant,
  deleteMerchant,
  updateMerchant,
  getMerchantById
};

