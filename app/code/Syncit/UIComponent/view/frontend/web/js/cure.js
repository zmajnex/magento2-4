define([
    'uiComponent',
    'ko'
], function(Component,ko){
    console.log('ko-test UI Component has been loaded');

    return Component.extend({
            initialize: function () {
                this._super();
            }
        }
    );
})
