# NAMASTE REACT


# package.json is the configration for our npm


# there are two types of dependencies that can be installed one is depth dependencies that is required at developemnt and normal one are required at the production


# parcel is depth dependency so -D is used while installing
 

# in package.json carot(^) and tilda(-) is used while specifying versions
- ensures that every minor update is installed automatically
- ensures that only major updates are installed(this could sometime break different things in the app)


# package-lock.json keeps track of all the exact versions of dependencies installed


# if package-lock.json and package.json are already there then we can re genereate node_modules by entering 
npm install
so it is not necessary to push node_modules onto git


# whatever you can regenerate, is not necessary to push onto the git


# npx means executing a package


# using cdn links to fetch react is not a healty practice but to install it as an dependency by 
npm install react
npm install react-dom


# parcel-
- dev build
- local server
- HMR = Hot Module Replacement(jaise hi save karo automatically browser mai changes ho jate hai(same as live server))
- File Watching Algorithm - written in c++
- cashing - faster builds
- Image Optimisation
- Minification of files
- Bundling of files
- Compress the files
- Consistent Hashing
- Code Splitting
- Differential Bundling - supports older browsers
- Diagnostics
- Better error handling
- HTTPs
- tree shaking - remove unused codes
- Different dev and prod bundles
to prod build use
npx parcel build index.html
for this to work remove "main": "app.js", from package.json (conflicts the entry point i.e. index.html and main)
- more can be read on the parcel documentation - parceljs.org


# dist is created by parcel and development buid is sttored in it


# since parcel-cashe and dist is regeneratable so it is not necesary to upload on git


# browerslist.dev - documentation for browserslist - differential bundling


# we can use scripts in package.json for short forms to run:
npm run start == npm start == npx parcel index.html
npm run build == npx parcel build index.html != num build
only start can be used without run in scripts


# JSX is not HTML in JS but HTML-like or XML-like syntax


# JSX code is transpilled by parcel before it reaches the browser engine. Parcel does it by package Babel


#  JSX => Babel transpiles it to React.createElement => ReatElement-JS Object => HTMLElement(Render)


# attributes are little different in JSX


# in fucntional componenet


const HeadingComponent = () => {
    return <h1>Namaste React Finctional Component</h1>
};


const HeadingComponent2 = () => (
    <h1 className = "heading">Namaste React Functional Component</h1>
);


const HeadingComponene3 = () => <h1 className = "heading">Namaste React Functional Component</h1>


- here HeadingComponent1 == HeadingComponent2 == HeadingComponent3
- () is used when there is multiple lines
- normal function keyword can also be used to create functional component


# passing props to a functional component is same as passing arguments to a function


# config driven ui: all the ui is driven by config(backend json data drives the ui)


# whenever doing map reduce 9n js always use key for cashe collection


# react saya to don't use index as keys in doing map


# in a file you cannot have multipule default export
- so if to export multiple things use export just before the name - named export
- import named export by writing the name in {}


# React Hooks
(normal JS uitility functions)multiple are there but these two are most imp ones: 
- useState() - super powerful state varibles in js
- useEffect()


# whenever state variable is updated react will rerender the components


# Reconciliation Algorithim (React Fiber)
- in React 16 a new algorithm came out to find the dif and update the dom
- if in a container there are 7 cards and ui changes and filter it to 3 cards
- react uses virtual dom - representation of actual dom (div mai div mai img aisa kuch)
- virtual dom is nothing but a js object
# Diff Algorithim
- it finds out the difference between old virtual dom and new virtual dom after occurance of the event
- once the difference is found by react then it actually updates the ui
- this whole updatation of ui is k/a reconciliatoin algorithim
- this makes react fast - because it is doing effective DOM manipulation


# Monolith and Microservices architectures
- industries are moving from monolith to microservices

# 2 approaches by which we make api calls
- first is when page loads -> api comes(ui is waiting) -> then after api comes page is rendered
- secound is when page loads -> skeleton is rendered -> api call -> and as soon as api responds page is rerendered 
- in react we use the second approach since it is better ux
- two renders are okay since react renders very fast and it is better Ux


# useEffect() function's callback function(1st/2 arguments passed in this hook function) is called after the whole component is rendered
- therefore in body.js first whole body is rendered and then the callback function is called
# dependency array:
- if there is no dependency array then useEffect() is called eveytime the whole body is rendered
- is dependency array is empty then it is only called in the first render of the component
- if dependency array any depency in it then it is called whenever that dependency is changed


# fetch is not given by js but by browsers


# shimmer ui - conditional rendering
- until the page is rendered and api is called, we use shimmer ui which is fake cards that are loaded before

# whenever useState vriable is set, whole component is re-rendered thereore const variable is modified - reconciliation cycle


# hook calls must always be called inside the componenet and as a good practice create it in the start
- also don't create these inside conditions,loops,funtions commands since it can create inconsistancies


# dont use anchor tag in react since it rerenders whole page
- use Link component instead and instead of href use link 
- this is why react apps are know as single page applications


# 2 types of routing is web pages
- Client side routing - used here in swiggy project
- Server side routing - making network calls and the routing is done from server


# make state variables in class components like this:
this.state = {
    count1: 1;
    count2: 2;
    count3: 3;
}
- three state variables are created with initial values 1,2 and 3 respectively


# never update state variables directly in class components but use like this(updateing count and count2 by 1)
this.setState({
    count: this.state.count+1;
    count2: this.state.count2+1;
})
- it will not touch any other variables in this.state{}, only count1 and count2 wil be touched


# class called == instance of class is created
- first constructor is called and then render is called whenever instance of a class is created
- there is one more method componentDidMount() {} then it will be called after constructor and render will be mounted(ended)
- therefore, in a parent child relation:
parent constructor > parent render > child constructor > child render > child componentDidMount > parent componenetDidMount


# if a parent has two childs (siblings) child1 and child2 then:
- parent.c > parent.r > child1.c > child1.r > child2.c > child2.r > child1.d > child2.d > parent.d
- read more at this diagram: 
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
- react badge the render phase together of the siblings and then the commit phase is badged so first render phase is completed and the commit phase is completed
- this is because render phase is really fast and the commit phase is slow since manipulating the dom is an expensive process
- so the dom is updated in a single batch
- after eveything is updated, there is also one more method componentDidUpdate() {} this is called at the end 
componentWillUnmount() {} will be caled just before the component is unmounted(when the webpage is changed)
- this is shared between every methods of a class


# to use componetWillUnmount() {} in functional component, use return () => {/*code here*/} inside the useEffect() hook.
 

# therefore componentDidMount is generally used to make api calls, i.e. it works as hook useEffect() 


# chunking / code splitting / dynamic bundling / lazy loading / on demand loading / dynamic loading / dynamic import => when size of the bundle is increasing we should use chunking to spil the bundles into different parts
- always use lazy() with Suspense component, if not then it will throw error that the webpage does not exists
- use fallback() inside Suspense component to use shimmer ui


# sass & scss adds some more powers to css and helps us add css more efficiently
- styled-componenet is also a good method: styled-componenet.com
- material ui is also a good css library and framework same is bootstarp, chakra ui, ant design and many more


# tailwind css
- tailwind css use postCSS(a tool that runs css thorugh js)


# Props-Drilling: 
- to pass on props from a component to its lower sub-components
- there are many ways to avoid prop drilling and one of the prominent one is context
- context is a global type of object
- useContext is the hook that allows us to fetch data from the context
- there can be multiple contexts in one react application
- in class-based components, use 
<UserContext.consumer>
    {
        (data) => (*code here*)
    }
</userContext.consumer>
- to provide a new value in context, overriding the value:
<UserContext.provider value={newValue}>
    *here wrap the part of the application in which you want to override the value of context*
</UserContext.provider>
- nested usercontext.provider are also valid and the latest provider is considered
- setFunctions can also be passed in the context


# redux - state management library
- redux is not mendatory
- redux is not the only library, one more is zustand
- redux offers state management
- redux is better for large scale application
- therefore redux is prefered over context
- when building a normal small or medium sized app, context can be used without any problem
- rtk - redux toolkit!


# Redux store
- click on add button -> it dispatches an action -> this calls a function -> lastly this function updates the slice of our redux store(slice holding cart)
- this function is known as a reducer function
- above is used to write data, to read data:
- selector is used to read data from the store and it gives data to the app
- this selector phenomenon is know as 'suscribing to the store'
- finally:
- add > action > reducer funciton updates slice > cart will be automatically updated since it is subscribed to the slice using a selector
- Checkout ReduxStore.png


# Redux Toolkit
- install @reduxjs/toolkit and react-redux
- Build our store
- connect our store to our app
- slice (cartSlice)
- dispatch (action)
- selector

- selector is nothing but a hook in react
- useSelector is used to subscribe to the store
- while using selector, always subscribe to the right part of the store, i.e. right slice, this increases efficiency
- while writing in store, there is one big reducer so use reducer, and in slice there are many reducers so we use reducers and we export cartSlice.reducer(w/o s)


# Types of testing (developer)
- Unit Testing -> testing one unit or one part in insolation ( ex: testin the header )
- Integration Testing -> testing something in which multiple componenets are invoved, code is involved in this testing
- End to End testing - e2e testing -> test the whole application's flow


# Testing
- React Testing Library uses jest behind the scenes so we need to install both


# Setting up testing for our app
- Install React Testing Library
- Install Jest
- Install Babel dependencies
- Configure Babel
- since parcel also uses babel and we are configuring babel here for the jest, it will conflict with the new configuration.
- so mack changes as told in parcel docs -> get started -> Javascript -> babel -> usage with other tools
- therefore, configure Parcel config to disable default babel tranpilation
- npx jest --init
- install jsdom library
- install @babel/preset-react - to make our jsx work
- onfig @babel/preset-react in babel.config so with runtime = "automatic"
- install @testing-library/jest-dom
- then "import "@testing-library/jest-dom"" whole library in the test file so that assertion will be enabled

# enter: npx jest --init
- 1 -> no
- 2 -> jsdom (it is a enviornment where testing is run since it does not run on the browser)
- 3 -> yes
- 4 -> babel
- 5-> yes

# when you console.log in test() it gives us array of reactDOM objects/jsx objects/etc

# when there are multiple elements, use getAllBy... instead of getBy...

# opposite of ...).toBe(..) is ...).not.toBe(..);


# while testing......you can use either test() or it(), both are exactly same