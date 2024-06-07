import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import { __ } from '@wordpress/i18n';
registerBlockType( 'task-block/shapedplugin-accordion-item', {
	title: __('Accordion Item', 'shapedplugin-accordion'),
    description: __('An Accordion Item', 'shapedplugin-accordion'),
    parent: ['task-block/shapedplugin-accordion'],
    icon: 'menu',
    supports: {
        reusable: false,
        html: false
    },
	usesContext: ['shapedplugin-accordion/icon'],
	attributes: {
		title: {
			type: 'string',
			source: "html",
			selector: 'h4'
		},
		icon: {
            type: 'string',
            default: 'fas fa-chevron-down'
        }
	},

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
