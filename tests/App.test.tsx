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

  it("the like button should increment number of likes after clicking", async ()=>{
    render(<App />)

    
    const likesRegex = /^\d+ Likes$/;

    const originalNumberOfLikes:number = parseInt(screen.getByText(likesRegex).textContent!.split(" ")[0]);
    


    //click the button
    await userEvent.click(screen.getByText('Like'))

    const updatedNumberOfLikes:number = parseInt(screen.getByText(likesRegex).textContent!.split(" ")[0]);

    
    expect(updatedNumberOfLikes).toEqual(originalNumberOfLikes + 1);
    
  })

  it("the unlike button should decrement number of likes after clicking", async ()=>{
    render(<App />)

    
    const likesRegex = /^\d+ Likes$/;
    
    //click the button to add a like
    await userEvent.click(screen.getByText('Like'))
    expect(screen.queryByText('Like')).toBeFalsy()
    expect(screen.getByText('Unlike')).toBeInTheDocument()

    const originalNumberOfLikes:number = parseInt(screen.getByText(likesRegex).textContent!.split(" ")[0]);

    //click the button again to remove the like
    await userEvent.click(screen.getByText('Unlike'))

    const updatedNumberOfLikes:number = parseInt(screen.getByText(likesRegex).textContent!.split(" ")[0]);

    
    expect(updatedNumberOfLikes).toEqual(originalNumberOfLikes - 1);
    
  })

});
