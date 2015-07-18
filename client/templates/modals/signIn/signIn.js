Template.signIn.events({
  'click [data-action=sign-in]': function (event, template) {
    console.log('test');
    IonModal.close();
  },
  'click [data-action=sign-up]': function (event, template) {
    IonModal.close();
  }
});

