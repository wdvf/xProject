Template.postSubmit.events({
    'submit form': function(e) {
        e.preventDefault();

        var post = {
            publication: $(e.target).find('[name=publicationText]').val()
        };

        post._id = Posts.insert(post);
        Router.go('postPage', post);
    }
});