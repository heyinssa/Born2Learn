- POST http://betti.kr:9000/api/evaluations

  ```json
  {
    "data": {
      "evaluatee_id": "026bcd81-2899-40c4-be3d-c661b4cffbd9",
      "subject_id": "0115f157-db7b-4cfa-9310-134a0a8f6902"
    }
  }
  ```

- GET http://betti.kr:9000/api/piscines/39c11564-c06a-4a8a-958e-b2455993633c

- PUT http://betti.kr:9000/api/piscines/39c11564-c06a-4a8a-958e-b2455993633c

  ```json
  {
    "data": {
      "github_link": "nbnm",
      "readme_link": "bnmm"
    }
  }
  ```

- DELETE http://betti.kr:9000/api/piscines/39c11564-c06a-4a8a-958e-b2455993633c

- GET http://betti.kr:9000/api/piscines/39c11564-c06a-4a8a-958e-b2455993633c/subjects
- GET http://betti.kr:9000/api/piscines/39c11564-c06a-4a8a-958e-b2455993633c/users
