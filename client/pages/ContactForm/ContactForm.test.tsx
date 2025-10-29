import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { fireEvent, screen } from '@testing-library/dom';
import { act } from 'react';
import ContactForm from './ContactForm';
import { render } from '@testing-library/react';

jest.mock('@emailjs/browser');
const mockedEmailJs = emailjs as jest.Mocked<typeof emailjs>;

it('sends email if form is complete', async () => {
  render(<ContactForm />);

  fireEvent.change(screen.getByLabelText('user-name'), {target: {value: 'Test Name'}});
  fireEvent.change(screen.getByLabelText('user-email'), {target: {value: 'test@example.com'}});
  fireEvent.change(screen.getByLabelText('message'), {target: {value: 'Hello there'}});

  mockedEmailJs.sendForm.mockResolvedValue(new EmailJSResponseStatus(200, 'OK'));
  await act(async () => fireEvent.click(screen.getByText('SEND')));

  expect(mockedEmailJs.sendForm).toHaveBeenCalled();
});