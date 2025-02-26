import type {Meta, StoryObj} from '@storybook/angular';
import {NavigationBarComponent} from "./navigation-bar.component";

const meta: Meta<NavigationBarComponent> = {
    title: 'Components/NavigationBarComponent',
    component: NavigationBarComponent,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<NavigationBarComponent>;

export const Default: Story = {
    args: {
        title: "Pokedex",
    },
};
