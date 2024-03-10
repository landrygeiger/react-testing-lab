import {render, screen} from '@testing-library/react'
import App from '../src/App'
import "@testing-library/jest-dom"


describe("my test suite", () => {
  it("not yet implemented", async ()=>{
    render(<App />)

    await screen.findByRole('heading')

    expect(screen.getByRole('heading')).toBeInTheDocument()
  })

});
