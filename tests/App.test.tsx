import {render, screen} from '@testing-library/react'
import App from '../src/App'
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom"


describe("In my web forum", () => {
  it("the like button should become unlike after clicking", async ()=>{
    render(<App />);


    //Make sure on load the page renders with the "Like" button
    expect(screen.queryByText('Unlike')).toBeFalsy();
    expect(screen.getByText('Like')).toBeInTheDocument();

    //click the button
    await userEvent.click(screen.getByText('Like'));

    //It is replaced with the "Unlike" button
    expect(screen.queryByText('Like')).toBeFalsy();
    expect(screen.getByText('Unlike')).toBeInTheDocument();

  })

  it("the like button should increment number of likes after clicking", async ()=>{
    render(<App />);

    
    const likesRegex = /^\d+ Likes$/;

    const originalNumberOfLikes:number = parseInt(screen.getByText(likesRegex).textContent!.split(" ")[0]);
    


    //click the button
    await userEvent.click(screen.getByText('Like'));

    const updatedNumberOfLikes:number = parseInt(screen.getByText(likesRegex).textContent!.split(" ")[0]);

    
    expect(updatedNumberOfLikes).toEqual(originalNumberOfLikes + 1);
    
  })

  it("the unlike button should decrement number of likes after clicking", async ()=>{
    //TODO: complete unit test
    throw new Error('Test Not Yet Implemented')
  })

  it("the Comment button should be disabled on load", async ()=>{
    render(<App />);

    //HELPFUL NOTE: Aria-labels are a great replacement for "test-ids" because they accomplish the same goal (A unique element identifier) while providing value to users with screen-readers.
    expect(screen.getByLabelText('Submit Comment')).toBeDisabled();
    
  })

  it("the Comment button should be enabled once text has been input but not submitted", async ()=>{
    //TODO: complete unit test (hint: use the userEvent.type method to simulate user keyboard entry! )
    throw new Error('Test Not Yet Implemented')
  })

  it("the Comment button should be disabled once text has been input and submitted", async ()=>{

    //TODO: complete unit test
    throw new Error('Test Not Yet Implemented')
  })

  it("a submitted comment should appear in the list of comments below the post", async ()=>{
    //TODO: complete unit test (hint: use screen.getAllByLabelText('User Comment') to get a list of HTMLElements representing the comments below a post)
    throw new Error('Test Not Yet Implemented')
  })

  it("a forum post's text should be black on load", async ()=>{
    render(<App />);
    const post = screen.getByLabelText("Forum Post Content");
    
    //HELPFUL NOTE: You can use the built-in window.getComputedStyle to generate a special JSON object that details a component's css
    const textColor = window.getComputedStyle(post).getPropertyValue("color");
    expect(textColor).toEqual("black");
    
    
  })

  it("a forumn post's text should be blue after clicking blue mode toggle", async ()=>{
    //TODO: complete unit test (hint: you can use getByLabelText to isolate the blue mode checkbox)
    throw new Error('Test Not Yet Implemented')
    
  })

  it("a forumn post's text should be black after clicking blue mode toggle twice (toggling and then untoggling)", async ()=>{
    //TODO: complete unit test
    throw new Error('Test Not Yet Implemented')
  })

});
