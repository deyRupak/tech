### Screen Recording Script: Walking Through the Tasks

---

#### **Opening Scene: Introduction**

*Camera shows the file structure of the project on the screen.*

**Voiceover:**

"Hello! This is Rupak Dey. In this screen recording, I’ll be walking you through the series of tasks to complete the assessment. I’ll cover four main parts: Node Abstraction, Styling, Text Node Logic, and Backend Integration. Let’s dive in!"

---

### **Part 1: Node Abstraction**

*Camera zooms in on the `frontend/src/nodes` folder.*

**Voiceover:**

"First, let’s look at the `nodes` folder inside `frontend/src`. Here we have different types of nodes: Inputs, Outputs, LLMs, and Text nodes. Each node has specific code for its functionality, but there’s a lot of shared logic, and it can get messy as the number of nodes grows."

*Show opening of a Node file (e.g., Input.js).*

**Voiceover:**

"Right now, if you wanted to add a new node, you’d have to duplicate an existing one and modify it, which leads to a lot of duplicated code. The goal here is to create an abstraction that makes it easier to create and style new nodes."

*Switch to the code editor and show the creation of an abstract Node class.*

**Voiceover:**

"Here I have created an abstract `BaseNode` class that will handle the shared logic. We’ll create a base class with common properties like `Handles`, `content`, and `text`. Then, specific node types can extend this class and customize the functionality."

*Type code for the Node abstraction, showing the base class and its methods (e.g., `Node.js`).*

**Voiceover:**

"This `Node` class will contain all the shared behavior, so when we add new nodes, we can simply extend this class and avoid duplicating code."

*Show example of creating five new nodes by extending the `Node` class, e.g., `NewInputNode.js`, `NewOutputNode.js`, etc.*

**Voiceover:**

"As you can see, I’ve created five new nodes here by extending the base `Node` class. This approach is scalable, so adding more nodes in the future will be much faster."

---

### **Part 2: Styling**

*Camera zooms out to show the frontend files.*

**Voiceover:**

"Now, let’s move on to styling. The frontend doesn’t have much styling right now, so our task is to give it a more polished look."

*Switch to the style file or open the CSS/SCSS file.*

**Voiceover:**

"We’ll be focusing on creating a unified, appealing design. You can use existing styles or build from scratch. For now, I’ll create a custom design that fits well with the node-based layout."

*Type code for basic styling using CSS/SCSS, focusing on node appearance, color scheme, and layout adjustments.*

**Voiceover:**

"I’ve added some basic styling here. Each node will now have consistent padding, borders, and colors, and we’ve also adjusted the font sizes for better readability."

*Show a quick before-and-after comparison of the old and styled UI.*

**Voiceover:**

"Now, the nodes look much more cohesive and user-friendly. You can always tweak the design later depending on your preferences."

---

### **Part 3: Text Node Logic**

*Camera zooms in on the Text node file (e.g., `TextNode.js`).*

**Voiceover:**

"Next, let’s move to the Text Node logic. The current Text node has a simple text input field, but we want to enhance this with two features."

*Highlight the current text input logic in the code.*

**Voiceover:**

"First, we want the width and height of the Text node to adjust dynamically based on user input. Second, we want to allow the user to define variables inside the text input using double curly braces, like `{{ input }}`. When this happens, we’ll automatically create a new Handle to the left side of the Text node."

*Type code to dynamically adjust the width/height based on text input.*

**Voiceover:**

"To adjust the width and height of the node dynamically, I’ll use an event listener that updates the node size as more text is entered."

*Show code for detecting and handling JavaScript variable names inside the text input.*

**Voiceover:**

"Now, for the second part. We need to detect JavaScript variable names inside double curly braces. When we find one, we’ll create a new Handle on the left side of the node. Let me show you how that works."

*Show the code for handling the variable detection and creation of new handles.*

**Voiceover:**

"I’ve added the logic for detecting variables and creating new Handles dynamically. This way, users can easily define and visualize variables within their text."

*Show a demo in the browser where a user types `{{ input }}` into the Text node and a Handle appears.*

**Voiceover:**

"As you can see, when we type `{{ input }}`, a new Handle automatically appears on the left side, representing the variable. This feature adds a lot of flexibility to the Text node."

---

### **Part 4: Backend Integration**

*Camera zooms in on the `frontend/src/submit.js` file.*

**Voiceover:**

"Finally, let’s integrate the frontend with the backend. The task here is to send the nodes and edges of the pipeline to the backend when the user clicks the submit button, and then check if the pipeline forms a Directed Acyclic Graph, or DAG."

*Open `submit.js` and show the logic for sending data to the backend.*

**Voiceover:**

"In `submit.js`, we’ll add the logic to send the current nodes and edges to the backend’s `/pipelines/parse` endpoint when the user clicks submit. This will allow the backend to process the data and calculate the number of nodes and edges."

*Type code for the fetch request to the backend, sending pipeline data.*

**Voiceover:**

"Now, I’ll set up a fetch request to send this data as a JSON object to the backend endpoint."

*Switch to the backend code in `main.py`.*

**Voiceover:**

"Now, let’s go to the backend. In `main.py`, we’ll update the `/pipelines/parse` endpoint to calculate the number of nodes and edges and check if the pipeline forms a DAG."

*Show the logic for counting nodes, edges, and checking for a DAG.*

**Voiceover:**

"In this code, I’m counting the number of nodes and edges. Then, I’m using an algorithm to check if the graph is a DAG. If it is, we’ll return `true`; otherwise, we’ll return `false`."

*Switch back to the frontend and show the alert displaying the response.*

**Voiceover:**

"Once the backend responds, we’ll show an alert with the number of nodes, edges, and whether the pipeline is a DAG. Let’s check it out."

*Show the result: a user creates a pipeline, clicks submit, and sees an alert with the DAG results.*

**Voiceover:**

"As you can see, after submitting the pipeline, the alert shows the number of nodes, edges, and whether the pipeline forms a DAG, making it easy to validate the structure."

---

#### **Closing Scene: Conclusion**

*Camera shows the final working interface.*

**Voiceover:**

"That’s it! We’ve completed all four parts: node abstraction, styling, text node logic, and backend integration. This setup should make adding new nodes, styling components, and validating pipelines much easier and more efficient."

*End with the project running smoothly.*

**Voiceover:**

"Thanks for watching! I hope this walkthrough was helpful. Happy coding!"

---

*Screen fades to black.*
