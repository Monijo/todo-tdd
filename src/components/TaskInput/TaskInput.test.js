/**
 * * @jest-environment jsdom
 */

import {expect, test} from "@jest/globals"
import {fireEvent, render} from "@testing-library/react"
import TaskInput from "./TaskInput";


test("typing change input value", async()=>{

    const word ="Learn";

    const taskInput = render(<TaskInput/>);
    const input = await taskInput.findByTestId('taskInput');

    fireEvent.change(input, {target: {value: word}});
    expect(input.value).toBe(word)

})

test("press enter clean input", async()=>{
    const taskInput = render(<TaskInput/>);
    const input = await taskInput.findByTestId('taskInput');
    fireEvent.change(input, {target:{value: "Example"}})


    fireEvent.keyUp(input, {key:"Enter",  code: "Enter", charCode: 13})

    expect(input.value).toBe("")

})
