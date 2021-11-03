- POST http://betti.kr:9000/api/subjects

  ```json
  {
    "data": {
      "piscine_id": "39c11564-c06a-4a8a-958e-b2455993633c",
      "name": "asdf",
      "readme_link": "asdf",
      "default_repository": "asdf"
    }
  }
  {
    "data": {
      "piscine_id": "39c11564-c06a-4a8a-958e-b2455993633c",
      "name": "qwer",
      "readme_link": "qwer",
      "default_repository": "qwer"
    }
  }
  {
    "data": {
      "piscine_id": "39c11564-c06a-4a8a-958e-b2455993633c",
      "name": "qwer2",
      "readme_link": "qwer",
      "default_repository": "qwer"
    }
  }
  ```

- GET http://betti.kr:9000/api/subjects/0f7b0fba-5493-43dd-b13f-062c318bd54f

- PUT http://betti.kr:9000/api/subjects/0f7b0fba-5493-43dd-b13f-062c318bd54f

  ```json
  {
    "data": {
      "readme_link": "asdf123"
    }
  }
  ```

- DELETE http://betti.kr:9000/api/subjects/0f7b0fba-5493-43dd-b13f-062c318bd54f

- GET http://betti.kr:9000/api/subjects/b9902c6d-db1f-4411-b2a3-a5c184fd6789/users
