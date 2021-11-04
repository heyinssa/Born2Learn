- POST http://betti.kr:9000/api/users

  ```json
  {
    "data": {
      "id": "ycha",
      "password": "1234"
    }
  }
  {
    "data": {
      "id": "suhshin",
      "password": "1234"
    }
  }
  {
    "data": {
      "id": "echung",
      "password": "1234"
    }
  }
  ```

- POST http://betti.kr:9000/api/users/login

  ```json
  {
    "data": {
      "id": "ycha",
      "password": "1234"
    }
  }
  ```

- GET http://betti.kr:9000/api/users/026bcd81-2899-40c4-be3d-c661b4cffbd9

- put http://betti.kr:9000/api/users/026bcd81-2899-40c4-be3d-c661b4cffbd9

  ```json
  {
    "data": {
      "password": "12345"
    }
  }
  ```

/_ Evaluation (lower FK) _/

- GET http://betti.kr:9000/api/users/026bcd81-2899-40c4-be3d-c661b4cffbd9/evaluation/as/evaluator

- GET http://betti.kr:9000/api/users/026bcd81-2899-40c4-be3d-c661b4cffbd9/evaluation/as/evaluatee

/_ Piscine (Equal FK) _/

- DELETE http://betti.kr:9000/api/users/026bcd81-2899-40c4-be3d-c661b4cffbd9

- GET http://betti.kr:9000/api/users/026bcd81-2899-40c4-be3d-c661b4cffbd9/piscines

- POST http://betti.kr:9000/api/users/026bcd81-2899-40c4-be3d-c661b4cffbd9/piscines/39c11564-c06a-4a8a-958e-b2455993633c

- DELETE http://betti.kr:9000/api/users/026bcd81-2899-40c4-be3d-c661b4cffbd9/piscines/39c11564-c06a-4a8a-958e-b2455993633c

/_ Subject (Equal FK) _/

- GET http://betti.kr:9000/api/users/026bcd81-2899-40c4-be3d-c661b4cffbd9/subjects

- POST http://betti.kr:9000/api/users/026bcd81-2899-40c4-be3d-c661b4cffbd9/subjects/b9902c6d-db1f-4411-b2a3-a5c184fd6789

  - 861fee20-7c30-4ff7-a005-f06340e044c9
  - 0115f157-db7b-4cfa-9310-134a0a8f6902
  - 04678092-db14-466b-a268-39f0c4bbbbf0
  - 78e9fa43-ea67-413c-b017-886b283f66d7

- DELETE http://betti.kr:9000/api/users/026bcd81-2899-40c4-be3d-c661b4cffbd9/subjects/b9902c6d-db1f-4411-b2a3-a5c184fd6789
