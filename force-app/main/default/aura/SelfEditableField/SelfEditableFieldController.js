({
    /**
     * Copies over tempValue whatever comes in "value"
     * @param {*} component 
     * @param {*} event 
     * @param {*} helper 
     */
    doInit : function(component, event, helper) {
        component.set('v.tempValue', component.get('v.value'));
    },
    toggleEdit : function(component, event, helper) {
        // get the current value of the "editMode" attribute
        var editMode = component.get('v.editMode');
        // toggle the value
        editMode = !editMode;
        // set the attribute so the view gets refreshed. 
        component.set('v.editMode', editMode);
    },
    saveValue : function(component, event, helper) {
        console.log('saving');
        component.set('v.value', component.get('v.tempValue'));
        // need to call toggleEdit... 
        // but can't call a controller method from the controller!!
        
    }
})
