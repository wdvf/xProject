if (Posts.find().count() === 0) {

    var now = new Date().getTime();

    // create two users
    var biancaId = Meteor.users.insert({
        profile: { name: 'Bianca Vasquez' }
    });
    var bianca = Meteor.users.findOne(biancaId);


    var elvisId = Meteor.users.insert({
        profile: { name: 'Elvis Munhoz' }
    });
    var elvis = Meteor.users.findOne(elvisId);

    var biancaPostId = Posts.insert({
        userId: bianca._id,
        author: bianca.profile.name,
        publication: 'Hola a todos, Hola a todos, Hola a todos, Hola a todos, Hola a todos, Hola a todos, Hola a todos',
        submitted: new Date(now - 7 * 3600 * 1000)
    });

    Comments.insert({
        postId: biancaPostId,
        userId: elvis._id,
        author: elvis.profile.name,
        submitted: new Date(now - 5 * 3600 * 1000),
        body: 'Interesting project Bi, can I get involved?'
    });

    Comments.insert({
        postId: biancaPostId,
        userId: bianca._id,
        author: bianca.profile.name,
        submitted: new Date(now - 3 * 3600 * 1000),
        body: 'You sure can Elvis!'
    });

    Posts.insert({
        userId: bianca._id,
        author: bianca.profile.name,
        publication: 'De compras!',
        submitted: new Date(now - 4 * 3600 * 1000)
    });

    Posts.insert({
        userId: elvis._id,
        author: elvis.profile.name,
        publication: 'Aburrido...',
        submitted: new Date(now - 10 * 3600 * 1000)
    });
}