export default {
    root: ({ props }) => ({
        class: [
            // Flexbox and Position
            'inline-flex',
            'relative',

            // Shape
            'rounded-md',
            { 'shadow-lg': props.raised }
        ]
    }),
    button: {
        root: ({ parent }) => ({
            class: [
                'relative',

                // Alignments
                'items-center inline-flex text-center align-bottom justify-center',

                // Sizes & Spacing
                'leading-[normal]',
                {
                    'px-4 py-3': parent.props.size === null,
                    'text-sm py-2 px-3': parent.props.size === 'small',
                    'text-xl py-3 px-4': parent.props.size === 'large'
                },
                {
                    'min-w-12 p-0 py-3': parent.props.label == null && parent.props.icon !== null
                },

                // Shape
                'rounded-r-none',
                'border-r-0',
                { 'rounded-l-full': parent.props.rounded },
                { 'rounded-md': !parent.props.rounded, 'rounded-full': parent.props.rounded },

                // Link Button
                { 'text-primary-600 bg-transparent border-transparent': parent.props.link },

                // Plain Button
                { 'text-white bg-gray-500 border border-gray-500': parent.props.plain && !parent.props.outlined && !parent.props.text },
                // Plain Text Button
                { 'text-surface-500': parent.props.plain && parent.props.text },
                // Plain Outlined Button
                { 'text-surface-500 border border-gray-500': parent.props.plain && parent.props.outlined },

                // Text Button
                { 'bg-transparent border-transparent': parent.props.text && !parent.props.plain },

                // Outlined Button
                { 'bg-transparent border': parent.props.outlined && !parent.props.plain },

                // --- Severity Buttons ---

                // Primary Button
                {
                    'text-white  ': !parent.props.link && parent.props.severity === null && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-primary-500  ': !parent.props.link && parent.props.severity === null && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'border border-primary-500  ': !parent.props.link && parent.props.severity === null && !parent.props.text && !parent.props.outlined && !parent.props.plain
                },
                // Primary Text Button
                { 'text-primary-500  ': parent.props.text && parent.props.severity === null && !parent.props.plain },
                // Primary Outlined Button
                { 'text-primary-500 border border-primary-500 hover:bg-primary-300/20': parent.props.outlined && parent.props.severity === null && !parent.props.plain },

                // Secondary Button
                {
                    'text-white  ': parent.props.severity === 'secondary' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-surface-500  ': parent.props.severity === 'secondary' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'border border-surface-500  ': parent.props.severity === 'secondary' && !parent.props.text && !parent.props.outlined && !parent.props.plain
                },
                // Secondary Text Button
                { 'text-surface-500  ': parent.props.text && parent.props.severity === 'secondary' && !parent.props.plain },
                // Secondary Outlined Button
                { 'text-surface-500 border border-surface-500 hover:bg-surface-300/20': parent.props.outlined && parent.props.severity === 'secondary' && !parent.props.plain },

                // Success Button
                {
                    'text-white  ': parent.props.severity === 'success' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-green-500  ': parent.props.severity === 'success' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'border border-green-500  ': parent.props.severity === 'success' && !parent.props.text && !parent.props.outlined && !parent.props.plain
                },
                // Success Text Button
                { 'text-surface-500  ': parent.props.text && parent.props.severity === 'secondary' && !parent.props.plain },
                // Success Outlined Button
                { 'text-green-500 border border-green-500 hover:bg-green-300/20': parent.props.outlined && parent.props.severity === 'success' && !parent.props.plain },

                // Info Button
                {
                    'text-white  ': parent.props.severity === 'info' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-blue-500  ': parent.props.severity === 'info' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'border border-blue-500  ': parent.props.severity === 'info' && !parent.props.text && !parent.props.outlined && !parent.props.plain
                },
                // Info Text Button
                { 'text-blue-500  ': parent.props.text && parent.props.severity === 'info' && !parent.props.plain },
                // Info Outlined Button
                { 'text-blue-500 border border-blue-500 hover:bg-blue-300/20 ': parent.props.outlined && parent.props.severity === 'info' && !parent.props.plain },

                // Warning Button
                {
                    'text-white  ': parent.props.severity === 'warning' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-orange-500  ': parent.props.severity === 'warning' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'border border-orange-500  ': parent.props.severity === 'warning' && !parent.props.text && !parent.props.outlined && !parent.props.plain
                },
                // Warning Text Button
                { 'text-orange-500  ': parent.props.text && parent.props.severity === 'warning' && !parent.props.plain },
                // Warning Outlined Button
                { 'text-orange-500 border border-orange-500 hover:bg-orange-300/20': parent.props.outlined && parent.props.severity === 'warning' && !parent.props.plain },

                // Help Button
                {
                    'text-white  ': parent.props.severity === 'help' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-purple-500  ': parent.props.severity === 'help' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'border border-purple-500  ': parent.props.severity === 'help' && !parent.props.text && !parent.props.outlined && !parent.props.plain
                },
                // Help Text Button
                { 'text-purple-500  ': parent.props.text && parent.props.severity === 'help' && !parent.props.plain },
                // Help Outlined Button
                { 'text-purple-500 border border-purple-500 hover:bg-purple-300/20': parent.props.outlined && parent.props.severity === 'help' && !parent.props.plain },

                // Danger Button
                {
                    'text-white  ': parent.props.severity === 'danger' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-red-500  ': parent.props.severity === 'danger' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'border border-red-500  ': parent.props.severity === 'danger' && !parent.props.text && !parent.props.outlined && !parent.props.plain
                },
                // Danger Text Button
                { 'text-red-500  ': parent.props.text && parent.props.severity === 'danger' && !parent.props.plain },
                // Danger Outlined Button
                { 'text-red-500 border border-red-500 hover:bg-red-300/20': parent.props.outlined && parent.props.severity === 'danger' && !parent.props.plain },

                // --- Severity Button States ---
                'focus:outline-none focus:outline-offset-0 focus:ring',

                // Link
                { 'focus:ring-primary-400/50  ': parent.props.link },

                // Plain
                { 'hover:bg-gray-600 hover:border-gray-600': parent.props.plain && !parent.props.outlined && !parent.props.text },
                // Text & Outlined Button
                { 'hover:bg-surface-300/20': parent.props.plain && (parent.props.text || parent.props.outlined) },

                // Primary
                { 'hover:bg-primary-600   hover:border-primary-600  ': !parent.props.link && parent.props.severity === null && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus:ring-primary-400/50  ': !parent.props.link && parent.props.severity === null && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                // Text & Outlined Button
                { 'hover:bg-primary-300/20': (parent.props.text || parent.props.outlined) && parent.props.severity === null && !parent.props.plain },

                // Secondary
                { 'hover:bg-surface-600   hover:border-surface-600  ': parent.props.severity === 'secondary' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus:ring-surface-400/50  ': parent.props.severity === 'secondary' },
                // Text & Outlined Button
                { 'hover:bg-surface-300/20': (parent.props.text || parent.props.outlined) && parent.props.severity === 'secondary' && !parent.props.plain },

                // Success
                { 'hover:bg-green-600   hover:border-green-600  ': parent.props.severity === 'success' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus:ring-green-400/50  ': parent.props.severity === 'success' },
                // Text & Outlined Button
                { 'hover:bg-green-300/20': (parent.props.text || parent.props.outlined) && parent.props.severity === 'success' && !parent.props.plain },

                // Info
                { 'hover:bg-blue-600   hover:border-blue-600  ': parent.props.severity === 'info' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus:ring-blue-400/50  ': parent.props.severity === 'info' },
                // Text & Outlined Button
                { 'hover:bg-blue-300/20': (parent.props.text || parent.props.outlined) && parent.props.severity === 'info' && !parent.props.plain },

                // Warning
                { 'hover:bg-orange-600   hover:border-orange-600  ': parent.props.severity === 'warning' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus:ring-orange-400/50  ': parent.props.severity === 'warning' },
                // Text & Outlined Button
                { 'hover:bg-orange-300/20': (parent.props.text || parent.props.outlined) && parent.props.severity === 'warning' && !parent.props.plain },

                // Help
                { 'hover:bg-purple-600   hover:border-purple-600  ': parent.props.severity === 'help' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus:ring-purple-400/50  ': parent.props.severity === 'help' },
                // Text & Outlined Button
                { 'hover:bg-purple-300/20': (parent.props.text || parent.props.outlined) && parent.props.severity === 'help' && !parent.props.plain },

                // Warning
                { 'hover:bg-red-600   hover:border-red-600  ': parent.props.severity === 'danger' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus:ring-red-400/50  ': parent.props.severity === 'danger' },
                // Text & Outlined Button
                { 'hover:bg-red-300/20': (parent.props.text || parent.props.outlined) && parent.props.severity === 'danger' && !parent.props.plain },

                // Transitions
                'transition duration-200 ease-in-out',

                // Misc
                'cursor-pointer overflow-hidden select-none'
            ]
        }),
        icon: {
            class: [
                // Margins
                'mr-2'
            ]
        }
    },
    menubutton: {
        root: ({ parent }) => ({
            class: [
                'relative',
                // Alignments
                'items-center inline-flex text-center align-bottom justify-center',

                // Sizes & Spacing
                'leading-[normal]',
                {
                    'px-4 py-3': parent.props.size === null,
                    'text-sm py-2 px-3': parent.props.size === 'small',
                    'text-xl py-3 px-4': parent.props.size === 'large'
                },
                {
                    'min-w-12 p-0 py-3': parent.props.label == null && parent.props.icon !== null
                },

                // Shape
                'rounded-l-none',
                { 'rounded-l-full': parent.props.rounded },
                { 'rounded-md': !parent.props.rounded, 'rounded-full': parent.props.rounded },

                // Link Button
                { 'text-primary-600 bg-transparent border-transparent': parent.props.link },

                // Plain Button
                { 'text-white bg-gray-500 border border-gray-500': parent.props.plain && !parent.props.outlined && !parent.props.text },
                // Plain Text Button
                { 'text-surface-500': parent.props.plain && parent.props.text },
                // Plain Outlined Button
                { 'text-surface-500 border border-gray-500': parent.props.plain && parent.props.outlined },

                // Text Button
                { 'bg-transparent border-transparent': parent.props.text && !parent.props.plain },

                // Outlined Button
                { 'bg-transparent border': parent.props.outlined && !parent.props.plain },

                // --- Severity Buttons ---

                // Primary Button
                {
                    'text-white  ': !parent.props.link && parent.props.severity === null && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-primary-500  ': !parent.props.link && parent.props.severity === null && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'border border-primary-500  ': !parent.props.link && parent.props.severity === null && !parent.props.text && !parent.props.outlined && !parent.props.plain
                },
                // Primary Text Button
                { 'text-primary-500  ': parent.props.text && parent.props.severity === null && !parent.props.plain },
                // Primary Outlined Button
                { 'text-primary-500 border border-primary-500 hover:bg-primary-300/20': parent.props.outlined && parent.props.severity === null && !parent.props.plain },

                // Secondary Button
                {
                    'text-white  ': parent.props.severity === 'secondary' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-surface-500  ': parent.props.severity === 'secondary' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'border border-surface-500  ': parent.props.severity === 'secondary' && !parent.props.text && !parent.props.outlined && !parent.props.plain
                },
                // Secondary Text Button
                { 'text-surface-500  ': parent.props.text && parent.props.severity === 'secondary' && !parent.props.plain },
                // Secondary Outlined Button
                { 'text-surface-500 border border-surface-500 hover:bg-surface-300/20': parent.props.outlined && parent.props.severity === 'secondary' && !parent.props.plain },

                // Success Button
                {
                    'text-white  ': parent.props.severity === 'success' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-green-500  ': parent.props.severity === 'success' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'border border-green-500  ': parent.props.severity === 'success' && !parent.props.text && !parent.props.outlined && !parent.props.plain
                },
                // Success Text Button
                { 'text-surface-500  ': parent.props.text && parent.props.severity === 'secondary' && !parent.props.plain },
                // Success Outlined Button
                { 'text-green-500 border border-green-500 hover:bg-green-300/20': parent.props.outlined && parent.props.severity === 'success' && !parent.props.plain },

                // Info Button
                {
                    'text-white  ': parent.props.severity === 'info' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-blue-500  ': parent.props.severity === 'info' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'border border-blue-500  ': parent.props.severity === 'info' && !parent.props.text && !parent.props.outlined && !parent.props.plain
                },
                // Info Text Button
                { 'text-blue-500  ': parent.props.text && parent.props.severity === 'info' && !parent.props.plain },
                // Info Outlined Button
                { 'text-blue-500 border border-blue-500 hover:bg-blue-300/20 ': parent.props.outlined && parent.props.severity === 'info' && !parent.props.plain },

                // Warning Button
                {
                    'text-white  ': parent.props.severity === 'warning' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-orange-500  ': parent.props.severity === 'warning' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'border border-orange-500  ': parent.props.severity === 'warning' && !parent.props.text && !parent.props.outlined && !parent.props.plain
                },
                // Warning Text Button
                { 'text-orange-500  ': parent.props.text && parent.props.severity === 'warning' && !parent.props.plain },
                // Warning Outlined Button
                { 'text-orange-500 border border-orange-500 hover:bg-orange-300/20': parent.props.outlined && parent.props.severity === 'warning' && !parent.props.plain },

                // Help Button
                {
                    'text-white  ': parent.props.severity === 'help' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-purple-500  ': parent.props.severity === 'help' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'border border-purple-500  ': parent.props.severity === 'help' && !parent.props.text && !parent.props.outlined && !parent.props.plain
                },
                // Help Text Button
                { 'text-purple-500  ': parent.props.text && parent.props.severity === 'help' && !parent.props.plain },
                // Help Outlined Button
                { 'text-purple-500 border border-purple-500 hover:bg-purple-300/20': parent.props.outlined && parent.props.severity === 'help' && !parent.props.plain },

                // Danger Button
                {
                    'text-white  ': parent.props.severity === 'danger' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-red-500  ': parent.props.severity === 'danger' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'border border-red-500  ': parent.props.severity === 'danger' && !parent.props.text && !parent.props.outlined && !parent.props.plain
                },
                // Danger Text Button
                { 'text-red-500  ': parent.props.text && parent.props.severity === 'danger' && !parent.props.plain },
                // Danger Outlined Button
                { 'text-red-500 border border-red-500 hover:bg-red-300/20': parent.props.outlined && parent.props.severity === 'danger' && !parent.props.plain },

                // --- Severity Button States ---
                'focus:outline-none focus:outline-offset-0 focus:ring',

                // Link
                { 'focus:ring-primary-400/50  ': parent.props.link },

                // Plain
                { 'hover:bg-gray-600 hover:border-gray-600': parent.props.plain && !parent.props.outlined && !parent.props.text },
                // Text & Outlined Button
                { 'hover:bg-surface-300/20': parent.props.plain && (parent.props.text || parent.props.outlined) },

                // Primary
                { 'hover:bg-primary-600   hover:border-primary-600  ': !parent.props.link && parent.props.severity === null && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus:ring-primary-400/50  ': !parent.props.link && parent.props.severity === null && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                // Text & Outlined Button
                { 'hover:bg-primary-300/20': (parent.props.text || parent.props.outlined) && parent.props.severity === null && !parent.props.plain },

                // Secondary
                { 'hover:bg-surface-600   hover:border-surface-600  ': parent.props.severity === 'secondary' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus:ring-surface-400/50  ': parent.props.severity === 'secondary' },
                // Text & Outlined Button
                { 'hover:bg-surface-300/20': (parent.props.text || parent.props.outlined) && parent.props.severity === 'secondary' && !parent.props.plain },

                // Success
                { 'hover:bg-green-600   hover:border-green-600  ': parent.props.severity === 'success' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus:ring-green-400/50  ': parent.props.severity === 'success' },
                // Text & Outlined Button
                { 'hover:bg-green-300/20': (parent.props.text || parent.props.outlined) && parent.props.severity === 'success' && !parent.props.plain },

                // Info
                { 'hover:bg-blue-600   hover:border-blue-600  ': parent.props.severity === 'info' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus:ring-blue-400/50  ': parent.props.severity === 'info' },
                // Text & Outlined Button
                { 'hover:bg-blue-300/20': (parent.props.text || parent.props.outlined) && parent.props.severity === 'info' && !parent.props.plain },

                // Warning
                { 'hover:bg-orange-600   hover:border-orange-600  ': parent.props.severity === 'warning' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus:ring-orange-400/50  ': parent.props.severity === 'warning' },
                // Text & Outlined Button
                { 'hover:bg-orange-300/20': (parent.props.text || parent.props.outlined) && parent.props.severity === 'warning' && !parent.props.plain },

                // Help
                { 'hover:bg-purple-600   hover:border-purple-600  ': parent.props.severity === 'help' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus:ring-purple-400/50  ': parent.props.severity === 'help' },
                // Text & Outlined Button
                { 'hover:bg-purple-300/20': (parent.props.text || parent.props.outlined) && parent.props.severity === 'help' && !parent.props.plain },

                // Warning
                { 'hover:bg-red-600   hover:border-red-600  ': parent.props.severity === 'danger' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus:ring-red-400/50  ': parent.props.severity === 'danger' },
                // Text & Outlined Button
                { 'hover:bg-red-300/20': (parent.props.text || parent.props.outlined) && parent.props.severity === 'danger' && !parent.props.plain },

                // Transitions
                'transition duration-200 ease-in-out',

                // Misc
                'cursor-pointer overflow-hidden select-none'
            ]
        }),
        label: {
            class: ['hidden']
        }
    },
    menu: {
        root: {
            class: [
                // Shape
                'rounded-md',

                // Size
                'min-w-[12rem]',
                'py-1',

                // Colors
                'bg-surface-0  ',
                'border border-surface-200  '
            ]
        },
        menu: {
            class: [
                // Spacings and Shape
                'list-none',
                'm-0',
                'p-0',
                'outline-none'
            ]
        },
        menuitem: {
            class: [
                // Position
                'relative'
            ]
        },
        content: ({ context }) => ({
            class: [
                //Shape
                'rounded-none',

                //  Colors
                {
                    'text-surface-500  ': !context.focused && !context.active,
                    'text-surface-500   bg-surface-200  ': context.focused && !context.active,
                    'text-primary-700   bg-primary-50  ': context.focused && context.active,
                    'text-primary-700   bg-primary-50  ': !context.focused && context.active
                },

                // Hover States
                {
                    'hover:bg-surface-100  ': !context.active,
                    'hover:bg-primary-500/50   text-primary-700  ': context.active
                },

                // Transitions
                'transition-shadow',
                'duration-200'
            ]
        }),
        action: {
            class: [
                'relative',
                // Flexbox

                'flex',
                'items-center',

                // Spacing
                'py-3',
                'px-5',

                // Color
                'text-surface-700  ',

                // Misc
                'no-underline',
                'overflow-hidden',
                'cursor-pointer',
                'select-none'
            ]
        },
        icon: {
            class: [
                // Spacing
                'mr-2',

                // Color
                'text-surface-600  '
            ]
        },
        label: {
            class: ['leading-none']
        },
        submenuicon: {
            class: [
                // Position
                'ml-auto'
            ]
        },
        submenu: {
            class: [
                // Size
                'w-full sm:w-48',

                // Spacing
                'py-1',
                'm-0',
                'list-none',

                // Shape
                'shadow-none sm:shadow-md',
                'border-0',

                // Position
                'static sm:absolute',
                'z-10',

                // Color
                'bg-surface-0  '
            ]
        },
        separator: {
            class: 'border-t border-surface-200   my-1'
        }
    }
};
