Router.route('/', {
  name: 'channel'
});

Router.route('/products/:_id', {
  name: 'products.show'
});

Router.route('/channels/:_id', {
  name: 'channels.show'
});

Router.route('/users/:_id', {
  name: 'users.show'
});

Router.route('/notifications', {
  name: 'notifications'
});

Router.route('/profile', {
  name: 'profile'
});
