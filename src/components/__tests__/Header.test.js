import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

test("it should load header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appstore}>
                <Header />
            </Provider>
        </BrowserRouter>
        
    )
})