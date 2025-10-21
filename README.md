
# Project Title

A small React + Next.js project that demonstrates how to implement Undo and Redo functionality using mouse clicks on a canvas-like area. Each click places a circle on the screen, and you can undo or redo your actions using keyboard shortcuts or buttons.


## Features

- Click anywhere inside the canvas to place a circle.
- Undo (Ctrl + Z / Cmd + Z) removes the last circle.
- Redo (Ctrl + Y / Cmd + Shift + Z) restores the last undone circle.
- Circles are placed accurately based on the clicked position.
- Responsive layout built with Tailwind CSS.



## Tech Stack

- Next.js 14 (react 18)
- TypeScript
- Tailwind CSS
- UUID for unique circle ids

## How it Works

1.	Each time you click on the canvas, a new pointer (circle) is added to the pointers state array.
2.	If you perform an undo, the last circle is moved from the pointers stack to a redoStack.
3.	If you perform a redo, it moves back from the redoStack to the pointers stack.
4.	The UI re-renders automatically to reflect the current state.
    
## Keyboard Shortcuts

| **Action** | **Shortcut** |
|--------|-----------|
| **Undo** | `Ctrl + Z or Cmd + Z` |
| **Redo** | `Ctrl + Y or Cmd + Y` |

## Key Learnings

1. Managing undo/redo state using two stacks (undo and redo).
2. Handling keyboard events safely inside React’s useEffect.
3. Using relative positioning to place elements precisely inside a container.
4. Preventing default browser undo/redo behavior using e.preventDefault().

## Setup & Run


```bash
# Clone the repository
git clone https://github.com/CodeLikeBA56/Undo-Redo-Canva.git

# Navigate into the project folder
cd Undo-Redo-Canva

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open http://localhost:3000 in your browser.

    
## License

This project is open source and available under the [MIT License](https://choosealicense.com/licenses/mit/)


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://codelikeba56.github.io/Sameer-Portfolio/)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sameer-shamshad/)

[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/samu101325?s=21)
