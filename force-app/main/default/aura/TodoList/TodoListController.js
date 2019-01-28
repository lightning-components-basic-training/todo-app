({
    onInit : function(component, event, helper) {
    },
    onTaskCompleted : function(component, event, helper) {
        helper.doTaskCompleted(component, event.getParam('task'));
    },
    onTaskCreated : function(component, event, helper) {
        helper.doTaskCreated(component, event.getParam('task'));
    }
})
