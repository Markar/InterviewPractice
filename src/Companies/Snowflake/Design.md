### Design an elevator system
The elevator should be able to go up and down as people request stops. The ground case only has a request for up. The top floor only has a request for down. Stops can be added at any point during the cycle from people on any floors. There's one controller for multiple elevators. 

Clarifying questions
- How many elevators are there?
- Do the elevators all access the same floors, or do they operate in banks like 1-25, 26-50?
- Are there any special elevators, like a service elevator or an elevator that prioritizes the lobby?
- Do we know the speed of the elevator and how long to expect a stop to take?
- What about the capacity limit, does this impact the search?

At the time of a request, I would iterate over the elevators and calculate which elevator should take the least time to reach that stop based on the speed and number of stops in the queue. Recalculate when the elevator doors close, in case a stop took longer than expected. 