import { useRouteError } from "react-router-dom";

const ErrorComponenet = () => {
    const err = useRouteError();
    console.log(err);
    
    return(
        <div className="error">
            <h1>OOPPS!!!</h1>
            <h3>something Went wrong</h3>
            <h3>error code: {err.status}</h3>
            <h3>error status: {err.statusText}</h3>
        </div>
    )
}

export default ErrorComponenet;