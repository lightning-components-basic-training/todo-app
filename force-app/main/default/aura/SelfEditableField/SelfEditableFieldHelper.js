/**
 * Helper is like a service: 
 *  - Static
 *  - Shared between all instances of the same component.
 *  - Does heavylifting
 *  - Can call its own methods! (AKA "this" is a thing!)
 */
({
    toggleEdit : function(component) {
        // get the current value of the "editMode" attribute
        var editMode = component.get('v.editMode');
        // toggle the value
        editMode = !editMode;
        // set the attribute so the view gets refreshed. 
        component.set('v.editMode', editMode);
    },
    saveValue : function(component) {
        component.set('v.value', component.get('v.tempValue'));
        component.set('v.tempValue', null);
        this.toggleEdit(component);
    }
})
