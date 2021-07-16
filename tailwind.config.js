const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.js', './components/**/*.js', './layout/**/*.js', './lib/**/*.js'],
    darkMode: 'class',
    theme: {
        extend: {
            backgroundColor: ['active'],
            textColor: ['active'],
            spacing: {
                '9/16': '56.25%',
            },
            lineHeight: {
                11: '2.75rem',
                12: '3rem',
                13: '3.25rem',
                14: '3.5rem',
                15: '4rem',
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                prompt: ['"Prompt"', 'cursive'],
                nunito: ['"Nunito"'],
            },
            colors: {
                // blue: colors.violet,
                green: '#b5f4a5',
                yellow: '#d79922', //theme color
                purple: '#d9a9ff',
                red: '#f13c1f', //theme color
                blue: '#4056a1', //theme color
                white: '#fff', //theme color
                code: {
                    green: '#b5f4a5',
                    yellow: '#d79922', //theme color
                    purple: '#d9a9ff',
                    red: '#f13c1f', //theme color
                    blue: '#4056a1', //theme color
                    white: '#fff', //theme color
                },
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.700'),
                        a: {
                            color: theme('colors.blue.500'),
                            '&:hover': {
                                color: theme('colors.blue.600'),
                            },
                            code: {color: theme('colors.blue.400')},
                        },
                        h1: {
                            fontWeight: '700',
                            letterSpacing: theme('letterSpacing.tight'),
                            color: theme('colors.red.900'),
                        },
                        h2: {
                            fontWeight: '700',
                            letterSpacing: theme('letterSpacing.tight'),
                            color: theme('colors.gray.900'),
                        },
                        h3: {
                            fontWeight: '600',
                            color: theme('colors.gray.900'),
                        },
                        'h4,h5,h6': {
                            color: theme('colors.gray.900'),
                        },
                        code: {
                            color: theme('colors.pink.500'),
                            backgroundColor: theme('colors.gray.100'),
                            paddingLeft: '4px',
                            paddingRight: '4px',
                            paddingTop: '2px',
                            paddingBottom: '2px',
                            borderRadius: '0.25rem',
                        },
                        hr: {borderColor: theme('colors.gray.200')},
                        'ol li:before': {
                            fontWeight: '600',
                            color: theme('colors.gray.500'),
                        },
                        'ul li:before': {
                            backgroundColor: theme('colors.gray.500'),
                        },
                        strong: {color: theme('colors.gray.600')},
                        blockquote: {
                            color: theme('colors.gray.900'),
                            borderLeftColor: theme('colors.gray.200'),
                        },
                    },
                },
                dark: {
                    css: {
                        color: theme('colors.gray.300'),
                        a: {
                            color: theme('colors.blue.500'),
                            '&:hover': {
                                color: theme('colors.blue.400'),
                            },
                            code: {color: theme('colors.blue.400')},
                        },
                        h1: {
                            fontWeight: '700',
                            letterSpacing: theme('letterSpacing.tight'),
                            color: theme('colors.gray.100'),
                        },
                        h2: {
                            fontWeight: '700',
                            letterSpacing: theme('letterSpacing.tight'),
                            color: theme('colors.gray.100'),
                        },
                        h3: {
                            fontWeight: '600',
                            color: theme('colors.gray.100'),
                        },
                        'h4,h5,h6': {
                            color: theme('colors.gray.100'),
                        },
                        code: {
                            backgroundColor: theme('colors.gray.800'),
                        },
                        hr: {borderColor: theme('colors.gray.700')},
                        'ol li:before': {
                            fontWeight: '600',
                            color: theme('colors.gray.400'),
                        },
                        'ul li:before': {
                            backgroundColor: theme('colors.gray.400'),
                        },
                        strong: {color: theme('colors.gray.100')},
                        thead: {
                            color: theme('colors.gray.100'),
                        },
                        tbody: {
                            tr: {
                                borderBottomColor: theme('colors.gray.700'),
                            },
                        },
                        blockquote: {
                            color: theme('colors.gray.100'),
                            borderLeftColor: theme('colors.gray.700'),
                        },
                    },
                },
            }),
        },
    },
    variants: {
        typography: ['dark'],
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
