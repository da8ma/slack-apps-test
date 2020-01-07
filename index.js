const sample = (req, res) => {
    res.send('Hello Next World')
}
exports.function = (req, res) => {
    const paths = {
        '/sample': sample,
        '/': () => res.send(Object.keys(paths)),
    };
    for (const [path, route] of Object.entries(paths)) {
        if (req.path.startsWith(path)) {
            return route(req, res);
        }
    };
    res.send('No path found');
}
