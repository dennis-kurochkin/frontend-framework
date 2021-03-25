const createElement = tagName => (strings, ...args) => ({
    type: tagName,
    template: strings.reduce(
        (acc, string, index) => acc + string + (args[index] || ''),
        ''
    )
});

export const div = createElement('div');
export const p = createElement('p');
export const h1 = createElement('h1');
