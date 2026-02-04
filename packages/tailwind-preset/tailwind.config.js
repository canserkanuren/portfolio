/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@spartan-ng/ui-core/hlm-tailwind-preset')],
  theme: {},
  plugins: [],
  safelist: [
    'overflow-hidden',
    // Sheet animations
    'animate-in',
    'animate-out',
    'fade-in-0',
    'fade-out-0',
    'slide-in-from-top',
    'slide-in-from-bottom',
    'slide-in-from-left',
    'slide-in-from-right',
    'slide-out-to-top',
    'slide-out-to-bottom',
    'slide-out-to-left',
    'slide-out-to-right',
    'duration-300',
    'duration-500'
  ]
};
