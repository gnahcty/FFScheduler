export default {
    listbutton: ({ props }) => ({
        class: [
            // Font
            'leading-none',

            // Flex Alignment
            'inline-flex items-center align-bottom text-center',

            // Shape
            'border rounded-md rounded-r-none',

            // Spacing
            'px-4 py-3',

            // Color
            props.modelValue === 'list'
                ? 'bg-primary-500   border-primary-500   text-white  '
                : 'bg-surface-0   border-surface-200   text-surface-700  ',

            // States
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50  ',
            props.modelValue === 'list' ? 'hover:bg-primary-600  ' : 'hover:bg-surface-50  ',

            // Transition
            'transition duration-200',

            // Misc
            'cursor-pointer select-none overflow-hidden'
        ]
    }),
    gridbutton: ({ props }) => ({
        class: [
            // Font
            'leading-none',

            // Flex Alignment
            'inline-flex items-center align-bottom text-center',

            // Shape
            'border rounded-md rounded-l-none',

            // Spacing
            'px-4 py-3',

            // Color
            props.modelValue === 'grid'
                ? 'bg-primary-500   border-primary-500   text-white  '
                : 'bg-surface-0   border-surface-200   text-surface-700  ',

            // States
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50  ',
            props.modelValue === 'grid' ? 'hover:bg-primary-600  ' : 'hover:bg-surface-50  ',

            // Transition
            'transition duration-200',

            // Misc
            'cursor-pointer select-none overflow-hidden'
        ]
    })
};
