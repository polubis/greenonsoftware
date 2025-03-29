import { vibetest } from './vibetest';

describe(vibetest.name, () => {
  describe(`for Cypress engine`, () => {
    describe('works with Gherkin when', () => {
      it('runs sequence of commands in ascending order', () => {
        const gherkin = vibetest({
          mode: 'gherkin',
          engine: 'cypress',
        });

        const clickSpy = vi.fn();
        const typeSpy = vi.fn();
        const goToSpy = vi.fn();
        const seeTextSpy = vi.fn();
        const result: string[] = [];

        const background = gherkin({
          'click button': (title: string) => {
            clickSpy(title);
            result.push('click button');
          },
          'type in input': (selector: string, value: string) => {
            typeSpy(selector, value);
            result.push('type in input');
          },
          'go to home page': () => {
            goToSpy();
            result.push('go to home page');
          },
          'see text': (text: string) => {
            seeTextSpy(text);
            result.push('see text');
          },
        });

        background('click button', 'sign-in')
          .given('type in input', 'username', 'hello')
          .and('type in input', 'password', 'hello')
          .then('see text', 'welcome to the app')
          .or('see text', 'account details')
          .when('go to home page')
          .then('see text', 'home page');

        expect(clickSpy).toHaveBeenCalledWith('sign-in');
        expect(typeSpy).toHaveBeenCalledWith('username', 'hello');
        expect(typeSpy).toHaveBeenCalledWith('password', 'hello');
        expect(seeTextSpy).toHaveBeenCalledWith('welcome to the app');
        expect(seeTextSpy).toHaveBeenCalledWith('account details');
        expect(goToSpy).toHaveBeenCalled();
        expect(seeTextSpy).toHaveBeenCalledWith('home page');
        expect(result).toEqual([
          'click button',
          'type in input',
          'type in input',
          'see text',
          'see text',
          'go to home page',
          'see text',
        ]);
      });
    });
  });
});
