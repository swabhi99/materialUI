import { render,screen } from "@testing-library/react";
import App from './App'

test("render learn react link",()=>{
    render(<App/>)
    const linkElement = screen.getByText(/learn/react/);
    expect(linkElement).toBeInTheDocument()
})