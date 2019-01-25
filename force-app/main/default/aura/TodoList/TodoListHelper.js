({
    doTaskCompleted : function(component, task) {
        // get the list of incomplete tasks
        var incompleteTasks = component.get('v.incompleteTasks');
        // get the list of completed tasks
        var completedTasks = component.get('v.completeTasks');
        // remove task from list of incompleted.
        incompleteTasks = incompleteTasks.filter(function(item) {
            return item.id !== task.id;
        });

        // add task on top of the completed tasks list
        completedTasks.unshift(task);

        component.set('v.incompleteTasks', incompleteTasks);
        component.set('v.completeTasks', completedTasks);

    }
})
