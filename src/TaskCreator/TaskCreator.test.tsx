import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskCreator from './TaskCreator';

describe('Given an input component', () => {
  test('when a button is click then show the input text', () => {
    render(<TaskCreator task={() => {}} />);
    const inputElement = screen.getByTestId('task-input');
    const buttonElement = screen.getByText('Add new task');
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});
