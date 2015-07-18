Meteor.publish('channels', function() {
  return Channels.find();
});


Meteor.publishComposite('channel', function(_id) {
  return {
    find: function() {
      return Channels.find({_id: _id});
    },
    children: [
      {
        find: function(channel) {
          return Meteor.users.find({_id: channel.userId});
        }
      },
      {
        find: function(channel) {
          return Meteor.users.find({_id: channel.voterIds});
        }
      },
      {
        find: function(channel) {
          return Comments.find({channelId: channel._id});
        },
        children: [
          {
            find: function(comment) {
              return Meteor.users.find({_id: comment.userId});
            }
          }
        ]
      }
    ]
  };
});

Meteor.publishComposite('user', function(_id) {
  return {
    find: function() {
      return Meteor.users.find({_id: _id});
    },
    children: [
      {
        find: function(user) {
          // return Products.find({_id: {$in: user.profile.votedProductIds}});
        }
      }
    ]
  };
});
