export default {
    root: ({ props }) => ({
        class: [
            // Sizing and Shape
            'min-w-[12rem]',
            'rounded-md',

            // Colors
            'bg-surface-0  ',
            'text-surface-700  ',
            'border',
            { 'border-surface-300  ': !props.invalid },

            // Invalid State
            { 'border-red-500  ': props.invalid }
        ]
    }),
    wrapper: {
        class: [
            // Overflow
            'overflow-auto'
        ]
    },
    list: {
        class: 'py-3 list-none m-0'
    },
    item: ({ context }) => ({
        class: [
            // Font
            'font-normal',
            'leading-none',

            // Position
            'relative',

            // Shape
            'border-0',
            'rounded-none',

            // Spacing
            'm-0',
            'py-3 px-5',

            // Color
            { 'text-surface-700  ': !context.focused && !context.selected },
            { 'bg-surface-200   text-surface-700  ': context.focused && !context.selected },
            { 'bg-primary-100   text-primary-700  ': context.focused && context.selected },
            { 'bg-primary-50   text-primary-700  ': !context.focused && context.selected },

            //States
            { 'hover:bg-surface-100  ': !context.focused && !context.selected },
            { 'hover:text-surface-700 hover:bg-surface-100    ': context.focused && !context.selected },
            'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-inset focus-visible:ring-primary-400/50  ',

            // Transitions
            'transition-shadow',
            'duration-200',

            // Misc
            'cursor-pointer',
            'overflow-hidden',
            'whitespace-nowrap'
        ]
    }),
    itemgroup: {
        class: [
            //Font
            'font-bold',

            // Spacing
            'm-0',
            'py-3 px-5',

            // Color
            'text-surface-800  ',
            'bg-surface-0  ',

            // Misc
            'cursor-auto'
        ]
    },
    header: {
        class: [
            // Spacing
            'py-3 px-5',
            'm-0',

            //Shape
            'border-b',
            'rounded-tl-md',
            'rounded-tr-md',

            // Color
            'text-surface-700  ',
            'bg-surface-100  ',
            'border-surface-300  '
        ]
    },
    filtercontainer: {
        class: 'relative'
    },
    filterinput: {
        class: [
            // Font
            'font-sans',
            'leading-none',

            // Sizing
            'pr-7 py-3 px-3',
            '-mr-7',
            'w-full',

            //Color
            'text-surface-700  ',
            'bg-surface-0  ',
            'border-surface-200  ',

            // Shape
            'border',
            'rounded-lg',
            'appearance-none',

            // Transitions
            'transition',
            'duration-200',

            // States
            'hover:border-primary-500  ',
            'focus:ring focus:outline-none focus:outline-offset-0',
            'focus:ring-primary-400/50  ',

            // Misc
            'appearance-none'
        ]
    },
    filtericon: {
        class: ['absolute', 'top-1/2 right-3', '-mt-2']
    },
    emptymessage: {
        class: [
            // Font
            'leading-none',

            // Spacing
            'py-3 px-5',

            // Color
            'text-surface-800  ',
            'bg-transparent'
        ]
    }
};
