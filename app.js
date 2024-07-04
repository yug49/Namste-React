const heading = React.createElement("h1", {
    id: "heading"
}, "Hello World from React");
//react.createElement gives an object



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
//takes the object, converts it into html that browser understands and putting it up 

//console.log(heading);   //object

/*
<div id = "parent">
    <div id = "child">
        <h1> I'am an h1 tag </h1>
        <h2> I'am an h2 tag </h2>
    </div>
</div>
*/

const parent = React.createElement(
    "div",
    {
        id: "parent"
    },
    React.createElement(
        "div",
        {
            id: "child"
        },
        [
            React.createElement(
                "h1",
                {},
                "I'm an h1 tag"
            ),
            React.createElement(
                "h2",
                {},
                "I'm an h2 tag"
            )  
        ]
    )
);

root.render(parent);
console.log(parent);
//here root is updated so if want to print last one use another container

//JSX is used so that the code does not become complex

/*
<div id = "parent2">
    <div id = "child1">
        <h1> I'am an h1 tag </h1>
        <h2> I'am an h2 tag </h2>
    </div>
    <div id = "child2">
        <h1> I'am an h1 tag </h1>
        <h2> I'am an h2 tag </h2>
    </div>
</div>
*/

const parent2 = React.createElement(
    "div",
    {
        id: "parent2"
    },
    [
        React.createElement(
            "div",
            {
                id: "child1"
            },
            [
                React.createElement(
                    "h1",
                    {},
                    "I'am an h1 tag"
                ),
                React.createElement(
                    "h2",
                    {},
                    "Iam an h2 tag"
                )
            ]
        ),
        React.createElement(
            "div",
            {
                id: "child2"
            },
            [
                React.createElement(
                    "h1",
                    {},
                    "I'am an h1 tag"
                ),
                React.createElement(
                    "h2",
                    {},
                    "Iam an h2 tag"
                )
            ]
        )
    ]
);

root.render(parent2);