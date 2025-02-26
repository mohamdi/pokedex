import type {Meta, StoryObj} from '@storybook/angular';
import {StatsComponent} from "./stats.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<StatsComponent> = {
    title: 'Components/StatsComponent',
    component: StatsComponent,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<StatsComponent>;


export const Default: Story = {
    args: {
        color: '#FF0000',
        stats: [
            {
                base_stat: 50,
                stat: {
                    name: 'HP',
                }
            },
            {
                base_stat: 40,
                stat: {
                    name: 'ATTCK',
                }
            },
            {
                base_stat: 90,
                stat: {
                    name: 'SPD',
                }
            }
        ]
    },
};
