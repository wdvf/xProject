if (Posts.find().count() === 0) {
    Posts.insert({
        author: 'Denis Vasquez',
        publication: 'Hola a todos, Hola a todos, Hola a todos, Hola a todos, Hola a todos, Hola a todos, Hola a todos'
    });

    Posts.insert({
        author: 'Bianca Vasquez',
        publication: 'De compras!'
    });

    Posts.insert({
        author: 'Denis Vasquez',
        publication: 'Aburrido...'
    });
}