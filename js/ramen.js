(function(){

  // Modelの作成
  var Task = Backbone.Model.extend({
    defaults: {
      title: "default",
      completed: false
    }
    // Modelのメソッドを作成
    //toggle: function(){
    //  this.set('completed', !this.get('completed'));
    //}
  });
  var task1 = new Task();

  var Task2 = Backbone.Model.extend({
    defaults: {
      title: "default2",
      completed: true
    }
  });
  var task2 = new Task2();


  // VIew
  var TaskView = Backbone.View.extend({
    tagName: 'li',
    events: {
      "click": "startTimer"
    },
    startTimer: function(){
      alert("start");
    },
    template: _.template( $('#task-template').html() ),
    render: function() {
      var template = this.template( this.model.toJSON() );
      this.$el.html(template);
      return this;
    }
  });


  // Collection
  var Tasks = Backbone.Collection.extend({
    model: Task2
  });

  var TasksView = Backbone.View.extend({
    tagName: 'ul',
    render: function(){
      this.collection.each(function(task){
        var taskView = new TaskView({model: task});
        this.$el.append(taskView.render().el);
      },this);
      return this;
    }
  });

  var tasks = new Tasks([
    {
      completed: true
    },
    {
      title: 'task2'
    },
    {
      title: 'task3'
    }
  ]);

  var tasksView = new TasksView({collection: tasks});
  $('#tasks').html(tasksView.render().el);
}
)();
