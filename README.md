# Intro to Styled Components

## Fastidious Foodies

## Objectives

- Write modular, contained CSS with Styled Components.
- Use props to write conditional styling.
- Find ways to combine Styled Components with standard CSS selectors to minimize the number of unique styled components you must create.

## Why?

Styled Components strike a balance between several CSS concerns that are often in tension when writing React. Since React combines all the CSS you write into a single document, it can be hard to control the cascade, and the end result is modular HTML in the form of components, but with CSS that isn't quite so modular.

One solution is to be extremely defensive in your naming conventions, as with the [Block - Element - Modifier](http://getbem.com/) methodology. Another is to give every individual item in your React application a totally unique `className` property. Both of these approaches require quite a bit of wraparound work to ensure that all the teams working on CSS for a particular app are very tightly aligned on the conventions of that implementation.

The styled components library allows us to control the cascade while still leveraging it when useful. Styled components also allow for some more elegant conditional rendering based on props without requiring additional CSS rulesets to be written.
