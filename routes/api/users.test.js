const request = require('supertest');

describe("The User API", () => {

    it("Returns the list of all users", async () => {
        const res = await request('http://localhost:3000')
        .get('/api/users/all')
        .expect(200)
        .expect('Content-Type', /json/);

        //These expects come from jest
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThan(0);
    })
})