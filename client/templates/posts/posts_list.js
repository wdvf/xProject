var postsData = [
    {
        author: 'Denis Vasquez',
        publication: 'Hola a todos, Hola a todos, Hola a todos, Hola a todos, Hola a todos, Hola a todos, Hola a todos'
    },
    {
        author: 'Bianca Vasquez',
        publication: 'De compras!'
    },
    {
        author: 'Denis Vasquez',
        publication: 'Aburrido...'
    }
];

Template.postsList.helpers({
    posts: postsData
});