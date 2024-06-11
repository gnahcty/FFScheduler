export default {
    root: ({ props, state }) => ({
        class: [
            // Display and Position
            'inline-flex',
            'relative',

            // Shape
            'rounded-md',

            // Color and Background
            'bg-surface-0  ',
            'border',
            { 'border-surface-300  ': !props.invalid },

            // Invalid State
            { 'border-red-500  ': props.invalid },

            // Transitions
            'transition-all',
            'duration-200',

            // States
            { 'hover:border-primary-500  ': !props.invalid },
            { 'outline-none outline-offset-0 ring ring-primary-400/50  ': state.focused },

            // Misc
            'cursor-pointer',
            'select-none',
            { 'opacity-60': props.disabled, 'pointer-events-none': props.disabled, 'cursor-default': props.disabled }
        ]
    }),
    label: ({ props }) => ({
        class: [
            //Font
            'font-sans',
            'leading-none',

            // Flex & Alignment
            ' flex flex-auto',

            // Sizing and Spacing
            'w-[1%]',
            'p-3',

            //Shape
            'rounded-none',

            // Color and Background
            'bg-transparent',
            'border-0',
            { 'text-surface-800  ': props.modelValue, 'text-surface-400  ': !props.modelValue },
            'placeholder:text-surface-400  ',

            // Transitions
            'transition',
            'duration-200',

            // States
            'focus:outline-none focus:shadow-none',

            // Misc
            'relative',
            'cursor-pointer',
            'overflow-hidden overflow-ellipsis',
            'whitespace-nowrap',
            'appearance-none'
        ]
    }),
    dropdownbutton: {
        class: [
            // Flexbox
            'flex items-center justify-center',
            'shrink-0',

            // Color and Background
            'bg-transparent',
            'text-surface-500',

            // Size
            'w-12',

            // Shape
            'rounded-tr-md',
            'rounded-br-md'
        ]
    },
    panel: {
        class: [
            // Position
            'absolute top-0 left-0',

            // Shape
            'border-0  ',
            'rounded-md',
            'shadow-md',

            // Color
            'bg-surface-0  ',
            'text-surface-800  ',
            ' '
        ]
    },
    wrapper: {
        class: [
            // Sizing
            'max-h-[200px]',

            // Misc
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

            // Shape
            'border-0',
            'rounded-none',

            // Spacing
            'm-0',

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
            'duration-200',

            // Misc
            'cursor-pointer',
            'overflow-hidden',
            'whitespace-nowrap'
        ]
    }),
    content: {
        class: [
            'relative',

            // Flexbox
            'flex',
            'items-center',

            // Spacing
            'py-3',
            'px-5',

            // Misc
            'no-underline',
            'overflow-hidden',
            'cursor-pointer',
            'select-none'
        ]
    },
    groupicon: {
        class: [
            // Alignment
            'ml-auto'
        ]
    },
    sublist: {
        class: [
            // Size
            'w-full',

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
    },
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
