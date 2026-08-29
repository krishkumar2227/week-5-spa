# NovaSpace – Single Page Application

## Week 5 Final Frontend Internship Task

NovaSpace is a small-scale Single Page Application developed using HTML5, CSS3 and vanilla JavaScript.

The project demonstrates client-side routing, dynamic content rendering, browser history management, responsive design and interactive form validation without requiring a complete webpage reload.

## Project Objective

The objective of this project is to simulate the basic functionality of a Single Page Application.

Instead of loading a separate HTML document for every page, JavaScript dynamically changes the content inside the main application container.

## Technologies Used

* HTML5
* CSS3
* JavaScript
* DOM API
* History API
* `pushState()`
* `popstate`
* CSS Media Queries
* Visual Studio Code
* Google Chrome
* GitHub

## Project Structure

```text
week-5-spa/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Application Routes

The application contains four main routes:

```text
/
 /about
 /services
 /contact
```

An invalid route displays a custom 404 page.

## Main Features

### 1. Dynamic Page Rendering

The application stores page content in JavaScript objects.

When the user selects a navigation link, JavaScript identifies the requested route and renders the corresponding content inside the `#app` element.

### 2. Client-Side Routing

The project uses the browser History API.

The `history.pushState()` method changes the URL without performing a full browser reload.

Example:

```javascript
history.pushState(
    { route },
    "",
    `/${route}`
);
```

### 3. Browser Back and Forward Buttons

The `popstate` event is used to detect browser history navigation.

When the user clicks the Back or Forward button, the correct page is rendered again.

### 4. Responsive Navigation

The navigation changes into a mobile menu on smaller screens.

JavaScript controls whether the mobile navigation is open or closed.

### 5. Smooth Page Transitions

CSS animations are used when new content is rendered.

The `fade-in` class creates a short transition effect.

### 6. Contact Form

The contact page contains a frontend form with JavaScript validation.

The form checks:

* Name
* Email
* Message length

No backend server is used.

### 7. 404 Error Handling

If a user enters a route that does not exist, the application displays a custom 404 page instead of leaving the page blank.

## SPA Architecture

The application follows a simple architecture:

```text
User clicks navigation
        ↓
JavaScript intercepts link
        ↓
Determine requested route
        ↓
Update browser history
        ↓
Find page data
        ↓
Render HTML inside #app
        ↓
Initialize page-specific events
```

## Why History API Was Used

The History API allows the URL to change without causing a complete page reload.

The main methods used are:

```text
history.pushState()
window.addEventListener("popstate", ...)
```

This provides an SPA-like navigation experience while using only vanilla JavaScript.

## Testing

The application was tested by:

* Clicking all navigation links.
* Checking that pages change without a full reload.
* Testing browser Back and Forward buttons.
* Testing invalid routes.
* Testing the contact form.
* Testing mobile navigation.
* Testing desktop and mobile screen sizes.
* Checking browser console errors.

## Responsive Testing

The following viewport sizes can be tested using Chrome Developer Tools:

| Device       | Resolution |
| ------------ | ---------- |
| Desktop      | 1366 × 768 |
| Laptop       | 1024 × 768 |
| Tablet       | 768 × 1024 |
| Mobile       | 390 × 844  |
| Small Mobile | 375 × 667  |

## Challenges Faced

### Challenge 1 – Dynamic Routing

The main challenge was displaying different content without creating separate HTML files.

**Solution:** JavaScript objects were used to store page content and a routing function determines which content should be rendered.

### Challenge 2 – URL Management

Changing the content alone does not change the browser URL.

**Solution:** The History API and `pushState()` were implemented.

### Challenge 3 – Browser Back Button

Using `pushState()` requires handling browser history changes.

**Solution:** The `popstate` event was implemented to render the correct route when the user navigates backward or forward.

### Challenge 4 – Invalid Routes

Users can manually type an invalid URL.

**Solution:** A custom 404 page was created for unknown routes.

### Challenge 5 – Mobile Navigation

The navigation needed to work on smaller screens.

**Solution:** CSS media queries were combined with JavaScript to create a responsive mobile menu.

## Learning Outcomes

This project provided practical experience with:

* SPA architecture
* Client-side routing
* DOM manipulation
* History API
* `pushState()`
* `popstate`
* Event handling
* Dynamic HTML rendering
* Responsive design
* Form validation
* Error handling
* CSS transitions
* JavaScript state management

## Future Improvements

The application could be expanded by:

* Connecting it to a REST API.
* Loading data dynamically from a backend.
* Adding authentication.
* Adding a database.
* Implementing lazy loading.
* Creating reusable JavaScript components.
* Adding a state management system.
* Deploying the application using GitHub Pages or another hosting service.

## Conclusion

NovaSpace successfully demonstrates the fundamental concepts of a Single Page Application using only HTML, CSS and JavaScript.

The application dynamically changes page content without requiring a complete page reload, updates browser URLs using the History API, supports browser navigation, provides responsive layouts and includes basic error handling.

The project strengthened my understanding of DOM manipulation, client-side routing, browser history management and frontend application architecture.
