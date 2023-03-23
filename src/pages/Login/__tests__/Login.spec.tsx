import { fireEvent, render, screen } from "@testing-library/react"
import { Login } from ".."
import configureStore from "redux-mock-store"
import { Provider } from "react-redux"

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUsedNavigate
}))

describe('<Login />', () => {
    const initialStateMock = {
        name: undefined,
        imageUser: undefined,
        emailUser: undefined
    }
    const mockStore = configureStore()
    let store

    it('should render elements in login screen', () => {
        store = mockStore(initialStateMock)
        render(<Provider store={store}><Login /></Provider>)

        const inputEmail = screen.getByTestId("input-email")
        const inputPassword = screen.getByTestId("input-password")

        expect(screen.getByText(/e\-mail/i)).toBeInTheDocument()
        expect(screen.getByText(/senha/i)).toBeInTheDocument()
        expect(inputEmail).toBeInTheDocument()
        expect(inputPassword).toBeInTheDocument()

        expect(screen.getByRole('button', {  name: /entrar/i})).toBeInTheDocument()
    })

    it('should render form login element and submit button', () => {
        store = mockStore(initialStateMock)
        render(<Provider store={store}><Login /></Provider>)

        const inputEmail = screen.getByTestId("input-email")
        const inputPassword = screen.getByTestId("input-password")
        const buttonLogin = screen.getByRole('button', {  name: /entrar/i})

        expect(screen.getByText(/e\-mail/i)).toBeInTheDocument()
        expect(screen.getByText(/senha/i)).toBeInTheDocument()
        expect(inputEmail).toBeInTheDocument()
        expect(inputPassword).toBeInTheDocument()
        expect(buttonLogin).toBeInTheDocument()

        fireEvent.change(inputEmail, {target: {value: 'gabriel@gmail.com'}})
        fireEvent.change(inputPassword, {target: {value: '1234'}})

        expect(inputEmail).toHaveValue('gabriel@gmail.com')
        expect(inputPassword).toHaveValue('1234')

        fireEvent.click(buttonLogin)
    })
})