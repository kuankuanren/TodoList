const {
    app
  } = require('../src/app');
  const {
    asyncReadFile,
    asyncWriteFile
  } = require('../src/dao')
  const request = require('supertest');
  
  describe("app", () => {
    describe("get request", () => {
      it("should get all TodoList when request url pattern is '/api/tasks'", (done) => {
        app.locals.dataFilePath = "./test/fixture.json"
        request(app).get('/api/tasks').expect(200).expect([{
            "id": 1,
            "content": "Restful API homework",
            "createdTime": "2020-03-19T00:00:00Z"
          },{
            "id": 2,
            "content": "good good study,day day up",
            "createdTime": "2020-03-19T00:00:00Z"
          }
        ]).end((err, res) => {
          if (err) throw err;
          done()
        })
      })
  
      it("should get specific  Todo when request url patten is '/api/tasks/:id'", (done) => {
        request(app).get('/api/tasks/1').expect(200).expect({
            "id": 1,
            "content": "Restful API homework",
            "createdTime": "2020-03-19T00:00:00Z"
        }).end((err, res) => {
          if (err) throw err;
          done()
        })
      })
    
    })
  })