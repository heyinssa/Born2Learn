import supertest from 'supertest';

const request = supertest('http://betti.kr:9000');

console.log('--- USER ---');
request.get('/');

request.get('/');
