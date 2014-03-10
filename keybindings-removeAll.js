if (Meteor.isClient) {
  function append(t) {
    $('#out').text(t+"\n"+$('#out').text());
  }

  Template.hello.events({
    'click #add': function () {
      Meteor.Keybindings.add({
          'a': function(e) {
            append(e.type+":"+e.timeStamp);
          }
      });
      append('Meteor.Keybindings.all(`a`);');
    },
    'click #remove': function () {
      Meteor.Keybindings.removeAll();
      append('Meteor.Keybindings.removeAll();');
    },
    'click #removeOne': function () {
      Meteor.Keybindings.removeOne('a');
      append('Meteor.Keybindings.removeOne  ();');
    }
  });
}
