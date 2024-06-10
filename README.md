## Wolt Frontend Assignment - Delivery Fee Calculator App

This project is a React-based web application with TypeScript, providing a user interface for calculating delivery fees based on cart value, delivery distance, number of items, and order time.


# Table of Contents

1. Features
2. Prerequisites
3. Installation
4. Usage
5. Components
6. Testing

# Features

* Calculate delivery fees with a user-friendly UI.
* Handles small order surcharge, distance fees, item surcharge, bulk fees, and rush hour multiplier.
* Material-UI components for a responsive and visually appealing design.


# Installation

1. Main folder: WOLTFRONTENDASSIGNMENT
    ~~~
        cd deliveryfeecalculator
    ~~~
2. Install Dependencies:
    ~~~
        npm install
    ~~~

# Usage

1. Start Application
    ~~~
       npm start
    ~~~
2. Access the application in a web browser at `http://localhost:3000`.
3. Input relevant details (cart value, delivery distance, number of items, and delivery date-time).
4. Click on the "Calculate Delivery Price" button to get the calculated delivery fee.

# Components

1. `App.tsx`
    * State Management: Utilizes React useState hooks for managing input fields and the calculated delivery fee.
    * Input Fields: Accepts cart value, delivery distance, number of items, and delivery date-time from the user.
    * Calculate Button: Triggers the delivery fee calculation when clicked.
    * Display: Shows the calculated delivery fee with a user-friendly UI.

2. `calculateDeliveryFee.ts`
    * Main Function: Takes in cart value, delivery distance, number of items, and delivery date-time as parameters and    returns the calculated delivery fee.
    * Fee Calculation: Implements the specified rules  (based on the initial question) for calculating the delivery fee based on cart value, distance, item count, and delivery time.
    
