export default {
    root: {
        class: [
            // Flexbox
            'flex'
        ]
    },
    controls: {
        class: [
            // Flexbox & Alignment
            'flex flex-col justify-center gap-2',

            // Spacing
            'p-5'
        ]
    },
    moveupbutton: {
        root: ({ context }) => ({
            class: [
                // Flexbox & Alignment
                'relative inline-flex items-center justify-center',

                // Shape
                'rounded-md',

                // Color
                'text-white  ',
                'bg-primary-500  ',
                'border border-primary-500  ',

                // Spacing & Size
                'w-12',
                'm-0',
                'px-0 py-3',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-primary-600   hover:border-primary-600  ',
                'focus:outline-none focus:outline-offset-0 focus:ring',
                'focus:ring-primary-400/50  ',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                // Flexbox
                'flex-initial',

                // Size
                'w-0'
            ]
        }
    },
    movedownbutton: {
        root: ({ context }) => ({
            class: [
                // Flexbox & Alignment
                'relative inline-flex items-center justify-center',

                // Shape
                'rounded-md',

                // Color
                'text-white  ',
                'bg-primary-500  ',
                'border border-primary-500  ',

                // Spacing & Size
                'w-12',
                'm-0',
                'px-0 py-3',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-primary-600   hover:border-primary-600  ',
                'focus:outline-none focus:outline-offset-0 focus:ring',
                'focus:ring-primary-400/50  ',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                // Flexbox
                'flex-initial',

                // Size
                'w-0'
            ]
        }
    },
    movetopbutton: {
        root: ({ context }) => ({
            class: [
                // Flexbox & Alignment
                'relative inline-flex items-center justify-center',

                // Shape
                'rounded-md',

                // Color
                'text-white  ',
                'bg-primary-500  ',
                'border border-primary-500  ',

                // Spacing & Size
                'w-12',
                'm-0',
                'px-0 py-3',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-primary-600   hover:border-primary-600  ',
                'focus:outline-none focus:outline-offset-0 focus:ring',
                'focus:ring-primary-400/50  ',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                // Flexbox
                'flex-initial',

                // Size
                'w-0'
            ]
        }
    },
    movebottombutton: {
        root: ({ context }) => ({
            class: [
                // Flexbox & Alignment
                'relative inline-flex items-center justify-center',

                // Shape
                'rounded-md',

                // Color
                'text-white  ',
                'bg-primary-500  ',
                'border border-primary-500  ',

                // Spacing & Size
                'w-12',
                'm-0',
                'px-0 py-3',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-primary-600   hover:border-primary-600  ',
                'focus:outline-none focus:outline-offset-0 focus:ring',
                'focus:ring-primary-400/50  ',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                // Flexbox
                'flex-initial',

                // Size
                'w-0'
            ]
        }
    },
    container: {
        class: ['flex-auto']
    },
    header: {
        class: [
            'font-bold',

            // Shape
            'border-b-0 rounded-t-md',

            // Spacing
            'p-5',

            // Color
            'text-surface-700  ',
            'bg-surface-50  ',
            'border border-surface-200  '
        ]
    },
    list: {
        class: [
            // Spacing
            'list-none m-0 p-0',

            // Size
            'min-h-[12rem] max-h-[24rem]',

            // Shape
            'rounded-b-md',

            // Color
            'text-surface-600  ',
            'bg-surface-0  ',
            'border border-surface-200  ',

            // Spacing
            'py-3 px-0',

            // Focus & Outline
            'outline-none',

            // Misc
            'overflow-auto'
        ]
    },
    item: ({ context }) => ({
        class: [
            // Position
            'relative',

            // Spacing
            'py-3 px-5 m-0',

            // Shape
            'border-none',

            // Transition
            'transition duration-200',

            // Color
            'text-surface-700  ',
            { 'bg-primary-500/20  ': context.active && !context.focused },
            { 'bg-primary-500/30  ': context.active && context.focused },
            { 'bg-surface-100  ': !context.active && context.focused },

            // State
            'hover:bg-surface-100  ',

            // Misc
            'cursor-pointer overflow-hidden'
        ]
    })
};
