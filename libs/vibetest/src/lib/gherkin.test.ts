import { gherkin } from './gherkin';
import { describe, it, expect } from 'vitest';

describe(gherkin.name, () => {
  it(`allows to call in sequence chain of operations`, () => {
    const clickSpy = vi.fn();
    const typeSpy = vi.fn();
    const goToSpy = vi.fn();
    const seeTextSpy = vi.fn();

    const { given } = gherkin({
      'click button': (title: string) => {
        clickSpy(title);
      },
      'type in input': (selector: string, value: string) => {
        typeSpy(selector, value);
      },
      'go to home page': () => {
        goToSpy();
      },
      'see text': (text: string) => {
        seeTextSpy(text);
      },
    });

    given('click button', 'sign-in')
      .when('type in input', 'username', 'hello')
      .and('type in input', 'password', 'hello')
      .then('see text', 'welcome to the app')
      .and('see text', 'account details')
      .when('go to home page')
      .then('see text', 'home page');

    expect(clickSpy).toHaveBeenCalledWith('sign-in');
    expect(typeSpy).toHaveBeenCalledWith('username', 'hello');
    expect(typeSpy).toHaveBeenCalledWith('password', 'hello');
    expect(seeTextSpy).toHaveBeenCalledWith('welcome to the app');
    expect(seeTextSpy).toHaveBeenCalledWith('account details');
    expect(goToSpy).toHaveBeenCalled();
    expect(seeTextSpy).toHaveBeenCalledWith('home page');
  });
});
