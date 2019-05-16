function showSnackbar() {
  console.log("Test");
  var pos = $(this).attr('data-pos');
  var actionText = $(this).attr('data-actionText');
  var actionColor = $(this).attr('data-actionColor');
  if (actionText == null)
    actionText = 'Dismiss'
  if (actionColor == null)
    actionColor = '#f66496';
  var showAction = $(this).attr('data-showAction');
  if (showAction == null)
    showAction = true;
  else if (showAction == 'true')
    showAction = true;
  else
    showAction = false;

  Snackbar.show({
    text: 'Hvala za registracijo.',
    showAction: showAction,
    actionText: actionText,
    actionTextColor: actionColor,
    backgroundColor: '#232323',
    width: 'auto',
    pos: 'bottom-center'
  });
}
