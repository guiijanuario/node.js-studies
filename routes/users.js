const express = require('express');
const router = express.Router();

let users = [
  { id: 1, name: 'Usuário 1' }
];

router.get('/', (req, res) => {
  res.json(users);
});

router.get('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'Usuário não encontrado.' });
  }
});

router.post('/', (req, res) => {
   const newUser = req.body;
   
   const lastUserId = users.length > 0 ? users[users.length - 1].id : 0;
   newUser.id = lastUserId + 1;
 
   users.push(newUser);
   res.status(201).json(newUser);
});
  
router.put('/:id', (req, res) => {
   const userId = parseInt(req.params.id);
   const updatedUser = req.body;
  
   const existingUser = users.find(u => u.id === userId);
   if (existingUser) {
     users = users.map(u => (u.id === userId ? updatedUser : u));
     res.json(updatedUser);
   } else {
     res.status(404).json({ message: 'Usuário não encontrado.' });
   }
});

router.delete('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter(u => u.id !== userId);
  res.status(204).end();
});

module.exports = router;
