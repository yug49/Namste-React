import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("contact us page test cases", () => {
    test("checking heading", () => {
        render(<Contact />);
        const result = screen.getAllByRole("heading");
        expect(result.length).toBe(4);
    });

    // test("checking button", () => {
    //     render(<Contact />);
    //     const result = screen.getByRole("button");
    //     expect(result.length).toBe(4);
    // });
})



