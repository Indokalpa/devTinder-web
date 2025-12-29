# DevTinder-web

- create a Vite + React application
- Install Tailwind Css
- Install Daisy UI
- Add NavBar Component to App.jsx
- Install react-router-dom
- Create 'BrowserRouter' -> Routes -> Route=/Body -> RouteChildren inside of <outLet />
- Create a Login Page
- Install axios, to make fetch requests more convinient
- CORS : install cors in backend => add as middleware, with configurations: origin, credentials: true

- whenever you're making API call, pass {withCredential: true}, to pass along cookie in each requestt

- install react-redux + @reduxjs/toolkit
- configure redux store, create slice, use redux dev-tools
- NavBar should update as soon as user logs in
- Refactor code to add constants file + create a components folder

- use 'useEffect()' in Body to avoid data loss from redux store in refreshing.
- You should not be able to access other routes without login
- If token is not Present, redirect user to login page
- Avoid calls, if userData is already present
- Logout feature
- Get the Feed
- Build the user card on the feed
- Edit Profile page
- Show Toast on profile save
- New Page: See all my connections
- New Page: See all my connection Requests
- Feature: Accept/Reject Connection Request
- Send/Ignore the user card form the feed
- Signup the user
- E2E Testing
- modify the BASEURL in frontend project to "/api"