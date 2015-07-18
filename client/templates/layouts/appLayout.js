Template.appLayout.rendered = function () {
  Session.set('currentTab', 'channel');
};

Template.appLayout.events({
  'click [data-action=share-channel]': function (event, template) {
    IonActionSheet.show({
      titleText: 'Share Channel',
      buttons: [
        { text: '<i class="icon ion-social-twitter"></i> Tweet' },
        { text: '<i class="icon ion-ios-email"></i> Email' },
      ],
      cancelText: 'Cancel',
      buttonClicked: function(index) {
        if (index === 0) {
          console.log('Tweet!');
        }
        if (index === 1) {
          console.log('Email!');
        }
        return true;
      }
    });
  }
});
