type Commands = Record<string, (...args: any[]) => void>;

function gherkin<C extends Commands>(commands: C) {
  function given<K extends keyof C>(key: K, ...args: Parameters<C[K]>) {
    commands[key](...args);

    return {
      then,
      when,
      and,
    };
  }

  function then<K extends keyof C>(key: K, ...args: Parameters<C[K]>) {
    commands[key](...args);

    return {
      and,
      when,
    };
  }

  function when<K extends keyof C>(key: K, ...args: Parameters<C[K]>) {
    commands[key](...args);

    return {
      and,
      then,
    };
  }

  function and<K extends keyof C>(key: K, ...args: Parameters<C[K]>) {
    commands[key](...args);

    return {
      then,
      when,
      and,
    };
  }

  return { given };
}

export { gherkin };
