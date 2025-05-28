import bcrypt from 'bcryptjs';

describe('bcrypt hashing and comparing', () => {
  const plainPassword = 'admin';
  const hashedPassword = '$2b$10$fu2OkkbfMWxNqGFGd8JwYOTM7IjxGMQU2rBJJzN6fTQaqMxF8Gma6';

  test('should correctly compare plain password with hashed password', async () => {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    expect(isMatch).toBe(true);
  });

  // otros tests ...
});