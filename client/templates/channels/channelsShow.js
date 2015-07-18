Template.channelsShow.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('channel', Router.current().params._id);
  }.bind(this));
};

Template.channelsShow.rendered = function () {
  this.autorun(function () {
    if (!this.subscription.ready()) {
      IonLoading.show();
    } else {
      IonLoading.hide();
    }
  }.bind(this));
};

Template.registerHelper("prettifyDate", function(timestamp) {
  return moment(new Date(timestamp)).fromNow();
});

Template.channelsShow.helpers({
  channel: function () {
    return Channels.findOne({_id: Router.current().params._id});
  },

  comments: function () {
    return Comments.find({channelId: Router.current().params._id}, {sort: {createdAt: -1}});
  }
});

Template.channelsShow.events({
  'click [data-action=new-comment]': function (event, template) {
    if (Meteor.user()) {
      IonModal.open('newComment', {channelId: this._id});
    } else {
      IonModal.open('signIn');
    }
  }
});
