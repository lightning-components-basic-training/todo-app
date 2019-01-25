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
        helper.toggleEdit(component);
    },
    saveValue : function(component, event, helper) {
        helper.saveValue(component);
    }
})
