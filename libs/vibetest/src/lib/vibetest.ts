const VIBETEST_MODES = ['gherkin'] as const;
const VIBETEST_ENGINES = ['cypress'] as const;

type VibetestMode = (typeof VIBETEST_MODES)[number];
type VibetestEngine = (typeof VIBETEST_ENGINES)[number];

type VibetestConfig = {
  mode: VibetestMode;
  engine: VibetestEngine;
};

type GherkinCommands = Record<string, (...args: any[]) => void>;

class Gherkin<TCommands extends GherkinCommands> {
  constructor(private commands: TCommands) {}

  private runCommand = <TKey extends keyof TCommands>(
    key: TKey,
    ...args: Parameters<TCommands[TKey]>
  ) => {
    this.commands[key](...args);
    return this;
  };

  given = this.runCommand;
  when = this.runCommand;
  then = this.runCommand;
  and = this.runCommand;
  or = this.runCommand;
}

const vibetest = <TConfig extends VibetestConfig>(config: TConfig) => {
  if (!VIBETEST_ENGINES.includes(config.engine)) {
    throw Error(
      `Unsupported engine passed to vibetest. Allowed: ${VIBETEST_ENGINES.join(
        ','
      )}`
    );
  }

  if (!VIBETEST_MODES.includes(config.mode)) {
    throw Error(
      `Unsupported mode passed to vibetest. Allowed: ${VIBETEST_MODES.join(
        ','
      )}`
    );
  }

  return <TCommands extends GherkinCommands>(commands: TCommands) =>
    new Gherkin(commands).given;
};

export { vibetest };
