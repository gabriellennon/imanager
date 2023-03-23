import { render, screen } from "@testing-library/react"
import { ButtonPrimary } from '..'

describe('<ButtonPrimary />', () => {
    it('should render button with props', () => {
        render(<ButtonPrimary title="Clicar" /> )
        const buttonElement = screen.getByRole('button', { name: /clicar/i})

        expect(buttonElement).toBeInTheDocument()
    })
})