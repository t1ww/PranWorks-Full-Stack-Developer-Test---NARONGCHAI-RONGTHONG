// backend/src/dtos/userDTO.js
function createUserDTO(data) {
  const { name, email, is_active } = data;
  return {
    name: name || 'Anonymous',
    email: email || '',
    is_active: typeof is_active === 'boolean' ? is_active : true,
  };
}

module.exports = { createUserDTO };
