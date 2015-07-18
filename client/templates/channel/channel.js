Template.channel.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('channels');
  }.bind(this));
};

Template.channel.rendered = function () {
  this.autorun(function () {
    if (!this.subscription.ready()) {
      IonLoading.show();
    } else {
      IonLoading.hide();
    }
  }.bind(this));
};

Template.channel.helpers({
  channels: function () {
    return Channels.find({}, {sort: {createdAt: -1, name: -1}});
  }
});
