var onSubmitHook = function(error, state){
  if (!error) {
    if (state === "signIn") {
      console.log('signUp signIn');
      IonModal.close();
      
    }
    if (state === "signUp") {
      console.log('signUp success');
      IonModal.close();
      
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
