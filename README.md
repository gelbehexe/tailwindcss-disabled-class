# Enables ':disabled' classes also for '.disabled' class 

It enables ':disabled' classes also for '.disabled' class to allow
consistently usage also for button-like a tags.

*** NOT FOR PRODUCTION USE ***

## Installation

Install the plugin from npm:

```shell
# Using npm
npm install @gelbehexe/tailwindcss-disabled-class

# Using Yarn
yarn add @gelbehexe/tailwindcss-disabled-class
```

Then add the plugin to your tailwind.config.js file:

```javascript
// tailwind.config.js
module.exports = {
  plugins: [
    // ...
    require('@gelbehexe/tailwindcss-disabled-class'),
    // ...
  ],
}
```

## Generated css

```css
svg {
  pointer-events: none
}
```
