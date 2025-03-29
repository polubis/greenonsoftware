# @greenonsoftware/vibetest

A test interpreter that gives you **vibe testing** experience.

Key Benefits:

1. Minimizes test file refactoring
2. Centralizes testing logic
3. Provides robust AI interpretation support (leveraging natural language processing)
4. Offers **strong TypeScript support**, reducing typos and improving IDE integration
5. Provides test isolation - each test can be configured independently without affecting others
6. Makes tests readable for humans

## Installation & Setup

Install the package using npm or yarn:

```bash
npm install --save-dev @greenonsoftware/vibetest
```

or

```bash
yarn add -D @greenonsoftware/vibetest
```

Alternative Installation (ShadCN approach):

1. Visit the [repository](https://github.com/polubis/greenonsoftware/tree/main/libs/vibetest/src/lib)
2. Copy the utility implementation file (self-contained) and optionally the test file (100% isolated from other dependencies)

## Configuration

Currently, we support `Cypress` as the primary testing engine, with `Playwright` and other adapters in development.

For test syntax, we currently support the [Gherkin convention](https://cucumber.io/docs/gherkin/reference/), with more options planned for future releases.

Initialize the test configuration as follows:

```ts
import { vibetest } from '@greenonsoftware/vibetest';

// Create a configuration instance for your preferred engine and mode

// Typically, one instance suffices as most projects use a single E2E framework
export const gherkin = vibetest({
  mode: 'gherkin',
  engine: 'cypress',
});
```

## Writing E2E Tests with Cypress in Gherkin Convention

```ts
// @@@ user-tests.cy.ts
import { gherkin } from './your-file';

// Define reusable base commands
const BASE_COMMANDS = {
  'click button': (title: string) => {
    cy.get(
      `button:contains("${title}"), [aria-label="${title}"], button[value="${title}"]`
    )
      .should('be.visible')
      .click();
  },
};

describe('Documents Management', () => {
  const background = gherkin({
    ...BASE_COMMANDS,
    // Custom commands per describe
    'type in input': (selector: string, value: string) => {
      cy.get(
        `[data-testid="${selector}"], input[name="${selector}"], input[placeholder="${selector}"]`
      )
        .should('be.visible')
        .clear()
        .type(value, { delay: 50 });
    },
    'go to home page': () => {
      cy.visit('/');
      cy.url().should('include', '/');
      cy.get('[data-testid="loading"]').should('not.exist');
    },
    'see text': (text: string) => {
      cy.contains(text).should('be.visible').and('have.text', text);
    },
  });

  it('allows users to browse their documents', () => {
    background('click button', 'sign-in')
      .given('type in input', 'username', 'hello')
      .and('type in input', 'password', 'hello')
      .then('see text', 'welcome to the app')
      .or('see text', 'account details')
      .when('go to home page')
      .then('see text', 'home page');
  });

  it('allows users to remove documents', () => {
    const background = gherkin({
      ...BASE_COMMANDS,
      // Custom commands per test
      'go to home page': () => {
        cy.visit('/');
        cy.url().should('include', '/');
        cy.get('[data-testid="loading"]').should('not.exist');
      },
      'see text': (text: string) => {
        cy.contains(text).should('be.visible').and('have.text', text);
      },
    });

    background('click button', 'sign-in')
      .given('type in input', 'username', 'hello')
      .and('type in input', 'password', 'hello')
      .then('see text', 'welcome to the app')
      .or('see text', 'account details')
      .when('go to home page')
      .then('see text', 'home page');
  });
});
```

### License

MIT License
