AutoForm.hooks({
  'channel-new-form': {
    onSuccess: function (operation, result, template) {
      IonModal.close();
      IonKeyboard.close();
      Router.go('channels.show', {_id: result});
    }
  }
});
