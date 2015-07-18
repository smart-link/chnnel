var onSubmitHook = function(error, state){
  if (!error) {
    console.log(state)
    if (state === "signIn") {
      IonModal.close();
      Router.go('/');
    }
    if (state === "signUp") {
      IonModal.close();
      Router.go('/');
    }
  }
};

AccountsTemplates.configure({
  negativeValidation: false,
  negativeFeedback: false,
  positiveValidation: false,
  positiveFeedback: false,
  onSubmitHook: onSubmitHook
});
