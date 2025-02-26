import type {Meta, StoryObj} from '@storybook/angular';
import {StatBarComponent} from "./stat-bar.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<StatBarComponent> = {
    title: 'Components/StatsBarComponent',
    component: StatBarComponent,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<StatBarComponent>;


export const Default: Story = {
    args: {
        value: 90,
        progressColor: '#FF0000'
    },
};
