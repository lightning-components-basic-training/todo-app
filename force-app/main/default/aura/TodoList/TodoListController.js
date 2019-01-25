({
    onTitleChanged : function(component, event, helper) {
        // When the attribute's value is changed in a child component, 
        // our component's value gets updated as well!
        // This means attributes get passed as references to the values and
        // not as immutable values. 
        // The above has some implications around performance. Things might
        // get slow if too many component.set are called, or the component 
        // hierarchy is too deep. 
        console.log('current value', event.getParam('value'));
        console.log('oldValue ', event.getParam('oldValue'));
    },
    onInit : function(component, event, handler) {
        console.log('initializing TodoList component');
    },
    onTitleInit : function(component, event, helper) {
        console.log('Initialized title ');
    }
})
