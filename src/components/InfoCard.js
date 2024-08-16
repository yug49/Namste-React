import React from "react";

class InfoCard extends React.Component {

    constructor(props){
        super(props);
    }

    

    render() {
        const {name, location, email, phNo} = this.props;

        return(
            <div className="border-solid border-gray-500 border-1 p-9 w-96  m-auto" >
                <h3 className="mb-3">Name: {name}</h3>
                <h3 className="mb-3">Location: {location}</h3>
                <h3 className="mb-3">Email: {email}</h3>
                <h3>Ph. Number: {phNo}</h3>
            </div>
        )
    }
}

export default InfoCard;