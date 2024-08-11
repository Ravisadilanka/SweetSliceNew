const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../index');
const { User } = require('../models/User');

describe('API-Database Integration Tests', () => {
  beforeAll(async () => {
    // Connect to the test database
    await mongoose.connect('mongodb://localhost:27017/SweetSliceTest', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
  });


  it('should return a user token on successful login', async () => {
    await request(app).post('/api/signup').send({
      email: 'testuser@example.com',
      password: 'Password123',
      firstName: 'John',
      lastName: 'Doe',
    });

    const response = await request(app).post('/api/login').send({
      email: 'testuser@example.com',
      password: 'Password123',
    });

    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });
});
