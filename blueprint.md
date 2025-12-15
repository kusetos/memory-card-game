# Concentration Card Game Blueprint

## Overview

A simple and engaging Concentration card game built with Vue.js. The game will feature a card grid, match tracking, and a timer. It will also include a user registration form and a leaderboard.

## Features

*   Game board with a grid of cards
*   Card flipping animation
*   Match and mismatch logic
*   Move and time tracking
*   A welcome page with game instructions
*   A game page to play the game
*   A registration form for users to save their scores
*   A leaderboard page to display high scores
*   404 Not Found page
*   Global time display

## Implemented Features & Design

*   **Initial Project Setup:** Basic Vue project structure.
*   **Blueprint:** This `blueprint.md` file.
*   **Routing:** Set up with `vue-router`, including routes for Home, Game, Leaderboard, Register, and a 404 page.
*   **State Management:** Initial setup of Pinia stores for the game, player, and leaderboard.
*   **Game Board:**
    *   Created the `GameBoard.vue` and `Card.vue` components.
    *   Implemented card flipping with a 3D animation effect.
    *   Implemented the core game logic, including shuffling, matching, and mismatching cards.
    *   Added a move and time tracker.
    *   Added a "You Won!" message and a "Play Again" button.
*   **User Registration:**
    *   Created the `Register.vue` view with a form to collect the player's name.
    *   Saved the player's name to the `player` store.
*   **Leaderboard:**
    *   Created the `Leaderboard.vue` view.
    *   Fetched and displayed leaderboard data (hardcoded for now).
    *   Saved the player's score to the leaderboard.
*   **Styling and UI Improvements:**
    *   Created a global stylesheet.
    *   Improved the layout and styling of the main `App.vue` component.
    *   Enhanced the visual design of the game components.
    *   Improved the `Home.vue` component with instructions and a better design.
*   **Final Touches:**
    *   Reviewed and refined the code.
    *   Added comments to the code.
    *   Ensured the application is running without errors.
*   **Global Time Display:**
    *   Added a global time display to the header of the application.
    *   Fetches time from `worldtimeapi.org` and updates it every second.

## Next Steps

*   Connect the game to a leaderboard API.
*   Add tests for the components and stores.
