import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
        '@storybook/addon-docs',
        '@storybook/addon-controls',
    ],
    framework: {
        name: '@storybook/angular',
        options: {},
    },
    env: (config) => ({
        ...config,
        NODE_ENV: process.env.NODE_ENV || 'development', // Force NODE_ENV
    })
};

export default config;
