import Component from '@ember/component';
import layout from '../templates/components/sortable-container';
import { get } from '@ember/object';

export default Component.extend({
    layout,
    classNames: ['sortable-container'],
    didInsertElement() {
        this._super(...arguments);
        get(this, 'group.sortable').addContainer(this.element);
    },
    willDestroyElement() {
        this._super(...arguments);
        get(this, 'group.sortable').removeContainer(this.element);
    },
});
