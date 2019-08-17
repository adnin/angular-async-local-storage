import { browser, $ } from 'protractor';

/* Prevent https://github.com/cyrilletuzi/angular-async-local-storage/issues/162 */
describe('reload issue', () => {

  beforeAll((done) => {

    browser.get('/reload').then(() => {

      /* Wait for a few seconds as operations are asynchronous */
      setTimeout(() => {
        done();
      }, 2000);

    });

  });

  it('reload', async () => {

    const data1 = await $('#item').getText();

    expect(data1).toBe('');

    await $('button').click();

    await browser.refresh();

    const data2 = await $('#item').getText();

    expect(data2).toBe('hello');

  });

});
