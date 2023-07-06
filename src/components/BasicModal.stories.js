import React, { useState } from 'react';
import BasicModal from './BasicModal';

/**
 * Generates information for storybook
 */

export default {
  title: 'BasicModal',
  component: BasicModal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'closeModal' },
    closeModal: { action: 'closeModal' },
    textContent: { control: 'text' },
  },
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return <BasicModal isOpen={isOpen} closeModal={closeModal} {...args} />
}

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  textContent: 'Default modal content',
};

export const Opened = Template.bind({});
Opened.args = {
  isOpen: true,
  textContent: 'Modal opened',
};

export const Closed = Template.bind({});
Closed.args = {
  isOpen: false,
  textContent: 'Modal closed',
};