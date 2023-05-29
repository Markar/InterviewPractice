*** How would you design a UML software in the browser?

- How would you handle drawing to the screen?
  - I'd use a library like PhaserJS to handle drawing, which would give me back information about the coordinates and actually rendering the lines and shapes. 

- What if you had to do it from scratch, and what are the advantages of doing it from scratch?
  - I'd use the html5 Canvas tag to and dom events to handle drawing, and try to create my own coordinate system to draw to the db. The advantage would probably be if I wanted to sell the software or maintain it internally.
  
- How would you handle drawing the toolbar UI?
  - I would use React for drawing the UI elements, and save the selection to local storage. If we need to save their selections beyond local storage I'd set up Postgres and store the data associated with a user profile. 

- How would you handle sending the URL to another person? 
  - I would have to update the db schema to store more data, then pass the relevant data in the url, like user/1/drawing/10 and have that load up the existing drawing. If we need to handle more things like authentication and viewing/editing permissions, that would require additional work

- How would you handle multiple people editing the document at the same time? 
  - I think in this case we would use something like socket.io to push the changes to each other, and not have to worry about clashes because the drawings can overlap the same space, so we just need to render all parties to the screen.