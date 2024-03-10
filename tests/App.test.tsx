import {render, screen} from '@testing-library/react'
import App from '../src/App'
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom"


describe("In my web forum", () => {
  it("the like button should become unlike after clicking", async ()=>{
    render(<App />)


    //Make sure on load the page renders with the "Like" button
    expect(screen.queryByText('Unlike')).toBeFalsy()
    expect(screen.getByText('Like')).toBeInTheDocument()

    //click the button
    await userEvent.click(screen.getByText('Like'))

    //It is replaced with the "Unlike" button
    expect(screen.queryByText('Like')).toBeFalsy()
    expect(screen.getByText('Unlike')).toBeInTheDocument()

  })

});
