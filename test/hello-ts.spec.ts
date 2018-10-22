import fetch from 'node-fetch';
import { expect } from 'chai';
import 'mocha';

describe('Hello World', () => {
  it('should return \'Hello BookIt!\'', async () => {
    let response = await fetch('http://localhost:8000/');
    let parsedResponse = await response.json();
    expect(response.status).to.eq(200);
    expect(parsedResponse).to.deep.eq({ hello: 'BookIt!'});
  });
});

