AutoForm.hooks({
  'channels-new-form': {
    onSuccess: function (operation, result, template) {
      IonModal.close();
      IonKeyboard.close();
      Router.go('products.show', {_id: result});
    }
  }
});
