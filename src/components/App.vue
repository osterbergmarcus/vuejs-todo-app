<template>
  <div class="container-fluid col-centered todo-app">
    <center><h1><strong>my todos</strong></h1></center>
    <input class="form-control" v-model="newTodo" v-on:keyup.enter="addTodo(todo)">
    <h2><i>tasks </i><span v-show="remaining">({{ remaining.length }})</span></h2>
    <ul class="list-group" v-show="todos.length">
      <li class="list-group-item list-group-item-info" v-for="todo in remaining">
        <span>{{ todo.task }}</span>

        <button class="btn btn-default" v-on:click="removeTodo(todo)"><span class="glyphicon glyphicon-remove"></span>

        </button>
        <button class="btn btn-default" v-on:click="editTodo(todo)"><span class="glyphicon glyphicon-edit"></span>

        </button>
        <button class="btn btn-default" @click="completed(todo)"><span class="glyphicon glyphicon-ok"></span>

        </button>
      </li>
    </ul>
    <p v-else>Start hacking and add some tasks!</p>
    <div v-if="complete.length">
      <h2><i>completed</i> ({{ complete.length }})</h2>

      <ul class="list-group">
        <li class="list-group-item list-group-item-success" v-for="todo in complete">
          {{ todo.task }}
          <button class="btn btn-default" @click="completed(todo)"><span class="glyphicon glyphicon-ok"></span>
          </li>
        </ul>
        <button class="btn btn-danger" @click="clearAllCompleted()">clear <span class="glyphicon glyphicon glyphicon-remove-sign"></span>
        </div>
        <div class="json-output">
          <br/>
          <br/>
          <!-- <h4>JSON output:</h4>
          {{ $data | json }} -->
        </div>
      </div>
      <div class="container-fluid col-centered footer">
        <center><h6>Made by <a href="http://marcusosterberg.com/">Marcus Osterberg</a></center>
          <center>
            <a href="http://www.twitter.com/osterbergmarcus" target="_new"><i class="fa fa-twitter"></i></a>
            <a href="http://www.github.com/osterbergmarcus" target="_new"><i class="fa fa-github-square"></i></a>
            <a href="http://www.codepen.io/osterbergmarcus" target="_new"><i class="fa fa-codepen"></i></a>
          </center>
        </div>
    </template>

<script>
export default {
  data() {
    return {
      newTodo: '',
      todos: [{
        task: 'Learn vuejs',
        completed: false
      }, {
        task: 'Build a todo app',
        completed: true
      }]
    }
  },

  computed: {
    complete(todo) {
      return this.todos.filter(this.isCompleted);
    },

    remaining(todo) {
      return this.todos.filter(this.inProgress);
    }
  },

  methods: {
    isCompleted(todo) {
      return todo.completed;
    },

    inProgress(todo) {
      return ! this.isCompleted(todo);
    },

    addTodo(todo) {
      let text = this.newTodo.trim();
      this.todos.push({
        task: text,
        completed: false
      });
      this.newTodo = '';
    },

    removeTodo(todo) {
      this.todos.$remove(todo);
    },

    editTodo(todo) {
      this.removeTodo(todo);
      this.newTask = todo.task;
    },

    completed(todo) {
      todo.completed = ! todo.completed;
    },

    clearAllCompleted() {
      this.todos = this.todos.filter(this.inProgress);
    }
  }
}
</script>
