const createElement = tagName => (strings, ...args) => ({
    type: tagName,
    template: strings.reduce(
        (acc, string, index) => acc + string + (args[index] || ''),
        ''
    )
});

export default createElement;
