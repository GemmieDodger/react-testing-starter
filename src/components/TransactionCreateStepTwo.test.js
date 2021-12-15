const { render, screen } = require("@testing-library/react");
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

// https://www.youtube.com/watch?v=OVNjsIto9xM



test('on initial render, the pay button is disabled', async () => {
    render(<TransactionCreateStepTwo sender={{id: '5'}} receiver={{id: '20'}}/>)
    // screen.getByRole("")
    expect(await screen.findByRole('button', {name: /pay/i})).toBeDisabled();
    // screen.debug();

})

test('if amount is entered, the pay button becomes enabled', async () => {
    render(<TransactionCreateStepTwo sender={{id: '5'}} receiver={{id: '20'}}/>)
    
    userEvent.type(screen.getByPlaceholderText(/amount/i), "50"); //search for amount and then replace as 50
    userEvent.type(screen.getByPlaceholderText(/note/i), "Dinner"); //search for amount and then replace to be a word
    expect(await screen.findByRole('button', {name: /pay/i})).toBeEnabled();
})