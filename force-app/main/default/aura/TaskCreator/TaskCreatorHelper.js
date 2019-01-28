({
    /**
     * creates a new task based on taskTitle, firing a TaskCreatedEvent event
     * and resetting the task's title in this component.
     * @param {Object} component 
     */
    createTask : function(component) {
        var taskContent = component.get('v.taskContent');
        // do the actual task creation only if the task's title exists 
        if (taskContent) {
            // create a new task object
            var task = { 
                content: taskContent, 
                completed: false,
                id: Date.now() // a "secure" id for our app
            };
            // inform the parent (TodoList) a new task has been created
            this.fireTaskCreatedEvent(component, task);
            // reset the task's title.
            component.set('v.taskContent', null);
            
        }
    },
    /**
     * Fires a TaskCreatedEvent event, including task as its parameter.
     * @param {Object} component 
     * @param {Object} task 
     */
    fireTaskCreatedEvent: function(component, task) {
        var taskCreatedEvent = component.getEvent('taskCreated');
        taskCreatedEvent.setParam('task', task);
        taskCreatedEvent.fire();
    }
})
