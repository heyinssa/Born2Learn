- POST https://betti.kr:9000/api/piscines

  ```json
  {
    "data": {
      "name": "asdf",
      "github_link": "asdf",
      "readme_link": "asdf"
    }
  }
  {
    "data": {
      "name": "qwer",
      "github_link": "qwer",
      "readme_link": "qwer"
    }
  }
  {
    "data": {
      "name": "zxcv",
      "github_link": "zxcv",
      "readme_link": "zxcv"
    }
  }
  {
     "data": {
       "name": "rtyu",
       "github_link": "rtyu",
       "readme_link": "rtyu"
     }
  }
  ```

- GET https://betti.kr:9000/api/piscines/39c11564-c06a-4a8a-958e-b2455993633c

- PUT https://betti.kr:9000/api/piscines/39c11564-c06a-4a8a-958e-b2455993633c

  ```json
  {
    "data": {
      "github_link": "nbnm",
      "readme_link": "bnmm"
    }
  }
  ```

- DELETE https://betti.kr:9000/api/piscines/39c11564-c06a-4a8a-958e-b2455993633c

- GET https://betti.kr:9000/api/piscines/39c11564-c06a-4a8a-958e-b2455993633c/subjects
- GET https://betti.kr:9000/api/piscines/39c11564-c06a-4a8a-958e-b2455993633c/users
