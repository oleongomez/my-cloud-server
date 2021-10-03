const request = require('supertest')
const app = require('../../../my-cloud-server')

describe("GET /", () => {
    test("It should response the GET method", async() =>{
        const response = await request(app).get("/")
        expect(response.statusCode == 200).toBeTruthy()
    })
}
)
describe("GET /data", () => {
    test("It should response the GET method", async() =>{
        const response = await request(app).get("/data")
        expect(response.statusCode == 200).toBeTruthy()
    })
}
)

describe("POST /add-user", () => {
    test("It should response the POST method", async() =>{
        const data = {id: 1, name: "Miguel Hidalgo",
         email:"mhidalgo@history.mx"}
        const response = await request(app).post("/add-user")
        .send(data)
        expect(response.statusCode == 200).toBeTruthy()
    })
}
)

describe("DEL /delete-user", () => {
    test("It should response the DEL method", async() =>{
        const response = await request(app).del("/delete-user")
        expect(response.statusCode == 200).toBeTruthy()
    })
}
)

describe("PUT /modify-user", () => {
    test("It should response the PUT method", async() =>{
        const response = await request(app).put("/modify-user")
        expect(response.statusCode == 200).toBeTruthy()
    })
}
)

describe("GET /search-user", () => {
    test("It should response the GET method", async() =>{
        const response = await request(app).get("/search-user")
        expect(response.statusCode == 200).toBeTruthy()
    })
}
)