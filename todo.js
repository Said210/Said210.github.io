angular.module('todoApp', [])
  .controller('TodoController', ['$scope', function($scope) {
    $scope.todos = [
      {text:'Repaso', done:false, url: '#'},
      {text:'Que es un ArrayList', done:false, url: '#'},
      {text:'Validaciones', done:false, url: '#'}];
     $scope.doneThings = [
      {text:'Try Catch', url:'https://github.com/Said210/Asesorias-Java/tree/master/files'},
      {text:'Batalla Naval', url:'https://github.com/Said210/Asesorias-Java/tree/master/Batalla'},
      {text:'Ahorcado', url:'https://github.com/Said210/Asesorias-Java/tree/master/Ahorcado'},
      {text:'Gato', url:'https://github.com/Said210/Asesorias-Java/tree/master/Gato'},
      {text:'Herencia', url:'https://github.com/Said210/Asesorias-Java/tree/master/herencia'},
      {text:'Arrglos Lineales', url:'#'},
      {text:'private, public y protected', url: '#'}];
 
    $scope.addTodo = function() {
      $scope.todos.push({text:$scope.todoText, done:false});
      $scope.todoText = '';
    };
 
    $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    $scope.archive = function() {
      var oldTodos = $scope.todos;
      $scope.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) $scope.todos.push(todo);
      });
    };
  }])
  .directive('tfFloat', function() {
    return {
      restrict: 'E',
      replace: true,
      scope : {
        fid : '@?',
        value : '='
      },
      compile : function() {
        return {
          pre : function(scope, element, attrs) {
            // transpose `disabled` flag
            if ( angular.isDefined(attrs.disabled) ) {
              element.attr('disabled', true);
              scope.isDisabled = true;
            }

            // transpose the `label` value
            scope.label = attrs.label || "";
            scope.fid = scope.fid || scope.label;

            // transpose optional `type` and `class` settings
            element.attr('type', attrs.type || "text");
            element.attr('class', attrs.class );
          }
        }
      },
      template:
        '<material-input-group ng-disabled="isDisabled">' +
          '<label for="{{fid}}">{{label}}</label>' +
          '<material-input id="{{fid}}" ng-model="value">' +
        '</material-input-group>'
    };
  });
