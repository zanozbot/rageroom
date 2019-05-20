function showSubscriptionSnackbar(snackbarText) {
  Snackbar.show({
    text: snackbarText,
    showAction: true,
    actionText: 'Skrij',
    actionTextColor: '#F7EC13',
    pos: 'bottom-center'
  });
}

const apiRoot = 'https://rageroom.us20.list-manage.com/subscribe/post-json?u=5e1a0fcb535c257a250086ba5&amp;id=5d017def04&EMAIL=';

function subscribe(event) {
  event.preventDefault();
  console.log(event);
  // if (event.target.information.value.length > 0) return false;

  const email = event.target.MERGE0.value;
  if (email != "") {
    const apiURL = apiRoot + email + '&c=?';
    console.log(email);
    console.log(apiURL);

    $.getJSON(apiURL, function (json) {
      console.log(json);
      console.log(json.msg.indexOf(email));
      console.log(json.result);
      if (json.result == 'success') {
        showSubscriptionSnackbar('Hvala za registracijo.')
        event.target.MERGE0.value = '';
      } else if (json.msg.indexOf(email) >= 0) {
        showSubscriptionSnackbar('Email je že registriran.');
        event.target.MERGE0.value = '';
      } else {
        showSubscriptionSnackbar('Prosimo vnesi veljaven email.')
      }
    });
  } else {
    showSubscriptionSnackbar('Prosimo vnesi veljaven email.')
  }
  return false;
}