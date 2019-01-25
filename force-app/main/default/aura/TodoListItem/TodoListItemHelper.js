({
    completeTask : function(component) {
        var task = component.get('v.task');
        task.completed = true;
        var taskCompletedEvent = component.getEvent('taskCompleted');
        taskCompletedEvent.setParam('task', task);
        taskCompletedEvent.fire();
    }
})
