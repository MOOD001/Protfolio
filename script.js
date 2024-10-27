// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Initialize Typed.js to type the H1 text
  document.addEventListener('DOMContentLoaded', () => {
    const options = {
      strings: ["Hi, I'm <span class='highlight'>MOOD</span>"],
      typeSpeed: 80,
      showCursor: false,
      onComplete: () => {
        // After typing is complete, reveal all content sections
        const contentWrappers = document.querySelectorAll('.hidden'); // Select all hidden sections
        contentWrappers.forEach(wrapper => {
          wrapper.classList.add('visible'); // Add the visible class to each wrapper
          
        });
      }
    };
  
    const typed = new Typed('#typed-text', options);
  });
  

  // Array of project objects
const projects = [
    {
        img: "./assets/GIFMaker_me.gif",
        desc: "Developed AI pathfinding where the NPC roams freely and follows players only when visible, adding strategy through line-of-sight tracking.",
        link: "https://youtu.be/Y3ABeXdFGv0"
    },
    {
        img: "./assets/spinner.png",
        desc: "Designed a 2D UI-based spinner game where players upgrade spinners and enjoy smooth spin animations, aiming for longer spin times and better rewards.",
        link: "https://www.roblox.com/games/18218843683/Spinner#!/about"
    },
    {
        img: "./assets/spec.png",
        desc: "Created a spectating system allowing players to seamlessly switch views and observe others.",
        link: "https://youtu.be/iodNwtta8pE"
    },
    {
      img: "./assets/invsys.png",
      desc: "Implemented a single-slot system that forces players to equip only one tool at a time.",
      link: "https://youtu.be/XGNMvu0Pu-Q"
  },
  {
    img: "./assets/door.gif",
    desc: "Developed an AI that can open and close doors, enhancing interactivity and realism within the game environment.",
    link: "https://youtu.be/nGEx2DCy_Sc"
  },
  {
    img: "./assets/Rc.png",
    desc: "Designed an RC car system that players can control remotely, featuring responsive handling and smooth movement.",
    link: "https://youtu.be/HzGXhxMjEfg"
  },
  {
    img: "./assets/mov.png",
    desc: "Developed an advanced movement system featuring sprinting with shift, direction locking, tilting mechanics, edge climbing, and falling animations for enhanced realism.",
    link: "https://youtu.be/O_qb3lskWAU"
  },
  {
    img: "./assets/chain.png",
    desc: "Created a chain system similar to the 'Chain Together' game, allowing dynamic connections between objects and enhancing gameplay mechanics.",
    link: "https://youtu.be/4ogSmqDBTBw"
  },
  {
    img: "./assets/fire.png",
    desc: "Implemented a fire magic system that allows players to throw fire by charging; longer charges result in larger, more powerful fireballs that deal increased damage.",
    link: "https://youtu.be/4NXuFcIEVFg"
  },
  {
    img: "./assets/smdoor.png",
    desc: "Developed a smooth door system that can be unlocked with a key, providing a realistic opening and closing animation for enhanced interactivity.",
    link: "https://youtu.be/-B9lEltnG0k"
  },

];

// Function to create project cards
function createProjectCards() {
    const projectCardsContainer = document.getElementById('project-cards');

        // Check if the container exists
        if (!projectCardsContainer) {
            console.error("Project cards container not found!");
            return;
        }
        
    projects.forEach(project => {
        // Create card element
        const card = document.createElement('div');
        card.classList.add('card');

        if(project.img){
        // Create image element
        const img = document.createElement('img');
        img.src = project.img; // Set image source
        img.alt = project.desc; // Alt text for accessibility
        card.appendChild(img);
        }

        // Create description element
        const desc = document.createElement('p');
        desc.textContent = project.desc;
        card.appendChild(desc);

        if(project.link){
              // Create button element
        const button = document.createElement('a');
        button.classList.add('btn');
        button.href = project.link; // Set link
        button.textContent = 'View Project';
        card.appendChild(button);
        }
      

        // Append card to the container
        projectCardsContainer.appendChild(card);
    });
}

// Call the function to create project cards
// Function to create random shapes in the background
function createShape() {
    const shape = document.createElement('div');
    shape.classList.add('shape');

    // Set random size
    const size = Math.random() * (100 - 30) + 30; // Random size between 30px and 100px
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;

    // Set random position within the viewport
    shape.style.top = `${Math.random() * 90}vh`;
    shape.style.left = `${Math.random() * 95}vw`;

    // Set a gradient color
    shape.style.background = `radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 70%)`;

    // Randomize animation duration between 0.1s and 0.7s
    const animationDuration = (Math.random() * (1 - 0.1) + 0.5).toFixed(2);
    shape.style.animationDuration = `${animationDuration}s`;

    // Append shape to the body
    document.body.appendChild(shape);

    // Remove shape after animation duration
    shape.addEventListener('animationend', () => {
        shape.remove();
    });
}

// Create a shape every 2 seconds
setInterval(createShape, 20); // Adjust frequency as necessary


createProjectCards();