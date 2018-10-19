import fetch from 'node-fetch';
import { expect } from 'chai';
import 'mocha';

describe('Hello World', () => {
  it('should return \'Hello BookIt!\'', async () => {
    let response = await fetch('http://localhost:3000/')

  });
});

