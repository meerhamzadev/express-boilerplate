const app = require('../app');
const request = require('supertest');
const db = require('../models/index');

beforeAll(async () => {
  await db.sequelize.sync()
})

describe('Test cases for api/item/ endpoints', () => {
  let id;

  test('POST /api/item/addtask', async () => {
    const { statusCode, body } = await request(app).post('/api/item/addtask').send({
      newTask: "Hello World"
    });
    expect(body.created).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String)
      })
    )
    expect(body.message).toMatch(/created successfully/);
    expect(statusCode).toBe(200);
    id = body.created.id;
  });

  test('GET /api/item/', async () => {
    const { statusCode, body } = await request(app).get('/api/item/');
    expect(body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String)
        })
      ])
    )
    expect(statusCode).toBe(200)
  });

  test('PUT /api/item/updateTask/:id', async () => {
    const { statusCode, body } = await request(app).put(`/api/item/updateTask/${id}`).send({
      name: "Haha World"
    });
    expect(body.message).toMatch(/updated successfully/);
    expect(statusCode).toBe(200)
  });

  test('DELETE /api/item/deleteTask/:id', async () => {
    const { statusCode, body } = await request(app).delete(`/api/item/deleteTask/${id}`);
    expect(body.message).toMatch(/deleted successfully/);
    expect(statusCode).toBe(200)
  });

})