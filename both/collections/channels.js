Channels = new Mongo.Collection('channels');

Channels.before.insert(function (userId, doc) {
  doc.createdAt = new Date();
});

Channels.helpers({
  datePosted: function () {
    return moment(this.createdAt).format('M/D');
  },
  author: function () {
    return Meteor.users.findOne({_id: this.userId});
  },
  voters: function () {
    return Meteor.users.find({_id: {$in: this.voterIds}});
  }
});

RegExp.escape = function(s) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

Channels.search = function(query) {
  if (!query) {
    return;
  }
  return Channels.find({
    name: { $regex: RegExp.escape(query), $options: 'i' }
  }, {
    limit: 20
  });
};

Channels.attachSchema(new SimpleSchema({
  name: {
    type: String,
    autoform: {
      'label-type': 'placeholder',
      placeholder: 'Channel Name'
    },
    max: 200
  },
  tagline: {
    type: String,
    autoform: {
      'label-type': 'placeholder',
      placeholder: 'Tagline'
    },
    max: 200
  },
  userId: {
    type: String,
    autoValue: function () {
      if (this.isSet) {
        return;
      }
      if (this.isInsert) {
        return Meteor.userId();
      } else {
        this.unset();
      }
    }
  },
  voterIds: {
    type: [String],
    optional: true,
    defaultValue: []
  },
  numberOfVotes: {
    type: Number,
    optional: true,
    defaultValue: 0
  },
  numberOfComments: {
    type: Number,
    optional: true,
    defaultValue: 0
  },
  createdAt: {
    type: Date
  }
}));
