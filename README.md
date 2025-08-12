# 🎨 Unlimited Random Colors

This is a simple web application built using HTML, CSS, and JavaScript that changes the background color of the page to a randomly generated RGBA value every 3 seconds.  
The app also displays the current RGBA color code and includes a countdown timer to the next color change.

---

## Table of Contents

- [Live Website](#live-website)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [How It Works](#how-it-works)
- [Installation](#installation)
- [Author](#author)

---

## Live Website

> 🔗 [View Live Project](https://vanshmistry602.github.io/javascript-random-unlimited-colors)

---

## Features

- **Random Color Generation:** Generates a new random RGBA background color every 3 seconds.
- **Live Color Display:** Shows the RGBA value of the currently displayed background color.
- **Countdown Timer:** Animated countdown circle showing time until next color change.
- **Start/Stop Control:** Buttons to start and stop the color changing cycle.
- **Smooth Transitions:** Background color changes smoothly using CSS transitions.
- **Responsive Design:** Works across devices with a clean, minimal interface.

---

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**

---

## How It Works

The core functionality of this project is achieved through JavaScript's `setInterval`, `setTimeout`, and DOM manipulation:

- **`generateRandomColor()`**: Creates a random RGBA color by generating random values for `R`, `G`, `B`, and `A` components.
- **`changeColor()`**: Updates the page background color and the displayed RGBA code.
- **Countdown Timer:** Uses `setInterval` to update the countdown number every second, and `setTimeout` to restart the timer for continuous looping.
- **Start/Stop Buttons:** `startChangingColors()` begins the color change cycle and timer; `stopChangingColors()` halts both.
- **Smooth Visuals:** CSS handles background-color transition effects and the circular countdown design.

---

## Installation

1. **Clone the Repository:**
   First, clone the repository to your local machine using Git. This command downloads the project files from GitHub. Remember to replace \`your-username\` with the actual GitHub username if you forked the repository.

   ```
   git clone https://github.com/vanshmistry602/javascript-random-unlimited-colors
   ```

2. **Navigate to the Project Directory:**
   Once the cloning is complete, you need to move into the project's root folder. All subsequent commands must be run from this directory.

   ```
   cd javascript-random-unlimited-colors
   ```

Since this project uses only HTML, CSS, and JavaScript, you can directly open the `index.html` file in your web browser.

Alternatively, you can use a local server:

- With VS Code, install the “Live Server” extension and click **Go Live**.

---

## Author

**Vansh Mistry**

For any questions or feedback, feel free to contact me at:

- **Email**: [officialvanshmistry@gmail.com](mailto:officialvanshmistry@gmail.com)
- **LinkedIn**: [linkedin.com/in/vanshmistry/](https://www.linkedin.com/in/vanshmistry/)
- **GitHub**: [github.com/vanshmistry602](https://github.com/vanshmistry602)
