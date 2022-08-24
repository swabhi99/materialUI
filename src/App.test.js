import { render,screen } from "@testing-library/react";
import App from './App'



test('render componenet',()=>{
    const component = render(<App/>)
    const childElement = component.getByText("Quick Notes");
    expect(childElement).toBeTruthy()
})