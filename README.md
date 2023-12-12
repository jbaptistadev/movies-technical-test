# Microfrontends

Technical test for Microfrontends project

#### checklist

- [x] Completed all questions
- [x] microfrontends was implemented
- [x] The styled-component library was implemented
- [x] three 100% independent projects
- [x] easy to scale
- [ ] add tests
- [ ] add language change option

## Getting Started

Run the development server:

```bash

pnpm install

# and then

pnpm dev
```

## Interview Questions

### - What is accessibility? How do you achieve it?

Accessibility is a way of treating everyone equally, allowing a greater number of users to access information effectively.

### - What is the difference between session storage, local storage, and cookies?

Local Storage has a maximum storage of 5MB and the information does not leave with each request to the server, the information will persist even if we close the browser.

Session Storage is similar to Local Storage only that the information is available per tab or browser window. The information will be available only in that tab.

Cookies only have a storage capacity of 4KB, you can set an expiration time, the disadvantage of using it is that when requesting images or data the cookies go along with the request.

### - Explain the javascript event loop (also may explain how promises or async await work in js these are basically all the same question/answer)

Event loop is an internal javaScript loop that is responsible for managing the queue of pending tasks and executing them sequentially. These tasks can be functions, events or any other type of action that needs to be executed.

The async/await statement would be the way we can wait for processes without interrupting with the javascript event loop allowing us to make requests without creating blocking code.

### - If you are getting too many API calls being made from your hooks, what can you do to prevent this?

It must be guaranteed that the hook is as optimized as possible, and the data loading is user-friendly, in case it cannot be modularized.

### - How do you manage the global state? And why in that way?

The global state is a powerful development tool that allows us:

- improve the data management.
- prevent the props hell.
- modularize and encapsulate data reading and future updates.
- allows reading the data and updating it only where it is required without affecting the rendering of other parent or child components.

### - What is progressive rendering?

Progressive rendering is a technique that defines individual style sheets for separate pages or components. It can benefit very large sites where individual pages are built from a many components.
