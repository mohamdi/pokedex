import type {Meta, StoryObj} from '@storybook/angular';
import {UnderConstructionComponent} from "./under-construction.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<UnderConstructionComponent> = {
    title: 'Components/UnderConstructionComponent',
    component: UnderConstructionComponent,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<UnderConstructionComponent>;


export const Default: Story = {};
