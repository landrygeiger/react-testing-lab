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
    render(<App />);

    
    const likesRegex = /^\d+ Likes$/;
    
    //click the button to add a like
    await userEvent.click(screen.getByText('Like'));

    expect(screen.queryByText('Like')).toBeFalsy();
    expect(screen.getByText('Unlike')).toBeInTheDocument();

    const originalNumberOfLikes:number = parseInt(screen.getByText(likesRegex).textContent!.split(" ")[0]);

    //click the button again to remove the like
    await userEvent.click(screen.getByText('Unlike'));

    const updatedNumberOfLikes:number = parseInt(screen.getByText(likesRegex).textContent!.split(" ")[0]);

    
    expect(updatedNumberOfLikes).toEqual(originalNumberOfLikes - 1);
    
  })

  it("the Comment button should be disabled on load", async ()=>{
    render(<App />);

    expect(screen.getByLabelText('Submit Comment')).toBeDisabled();
    
  })

  it("the Comment button should be enabled once text has been input but not submitted", async ()=>{
    render(<App />);

    expect(screen.getByLabelText('Submit Comment')).toBeDisabled();
    const input = screen.getByLabelText('Comment Input');

    await userEvent.type(input, "Test String");

    expect(screen.getByLabelText('Submit Comment')).toBeEnabled();
    
  })

  it("the Comment button should be disabled once text has been input and submitted", async ()=>{
    render(<App />);

    expect(screen.getByLabelText('Submit Comment')).toBeDisabled();
    const input = screen.getByLabelText('Comment Input');
    await userEvent.type(input, "Test String");
    expect(screen.getByLabelText('Submit Comment')).toBeEnabled();

    await userEvent.click(screen.getByLabelText('Submit Comment'));
    expect(screen.getByLabelText('Submit Comment')).toBeDisabled();
    
  })

  it("a submitted comment should appear in the list of comments below the post", async ()=>{
    render(<App />);

    expect(screen.getByLabelText('Submit Comment')).toBeDisabled();
    const input = screen.getByLabelText('Comment Input');
    await userEvent.type(input, "Test String");
    expect(screen.getByLabelText('Submit Comment')).toBeEnabled();

    await userEvent.click(screen.getByLabelText('Submit Comment'));
    expect(screen.getAllByLabelText('User Comment').includes(screen.getByText('Test String'))).toBeTruthy();
    
  })

  it("a forum post's text should be black on load", async ()=>{
    render(<App />);
    const post = screen.getByLabelText("Forum Post Content");

    const textColor = window.getComputedStyle(post).getPropertyValue("color");
    expect(textColor).toEqual("black");
    
    
  })

  it("a forumn post's text should be blue after clicking blue mode toggle", async ()=>{
    render(<App />);
    const blueModeToggle = screen.getByLabelText("Blue Mode Toggle");
    const post = screen.getByLabelText("Forum Post Content");
    await userEvent.click(blueModeToggle);
    const textColor = window.getComputedStyle(post).getPropertyValue("color");
    expect(textColor).toEqual("blue");
    
    
  })

  it("a forumn post's text should be black after clicking blue mode toggle twice", async ()=>{
    render(<App />);
    const blueModeToggle = screen.getByLabelText("Blue Mode Toggle");
    const post = screen.getByLabelText("Forum Post Content");

    await userEvent.click(blueModeToggle);

    const textColor = window.getComputedStyle(post).getPropertyValue("color");
    expect(textColor).toEqual("blue");

    await userEvent.click(blueModeToggle);
    
    const updatedTextColor = window.getComputedStyle(post).getPropertyValue("color");
    expect(updatedTextColor).toEqual("black");
    
  })

});
