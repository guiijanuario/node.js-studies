const validateUser = (req, res, next) => {
    const newUser = req.body;
    if (!newUser || !newUser.name) {
      return res.status(400).json({ message: 'Nome do usuário é obrigatório.' });
    }
    next();
  };
  
  module.exports = {
    validateUser,
  };
  