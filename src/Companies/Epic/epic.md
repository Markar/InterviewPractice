# Problem
Build an interactive web based client leaderboard that is viewed after every match. There are four game modes as well as daily, weekly, and all-time aggregations. The player should be able to view relevant information for friends, groups, recently played, and more.

# Assumptions
- Each game mode is tracking the same fields
- This version of the leaderboard is only visible to the player. 
- Filtering is not literal, as in filtering a single leaderboard. 
- There are no requirements on how the web app interacts with whatever the game is written in.

# Answer
I designed my solution with React in mind, using Node for making calls to the REST endpoints. I would also use a datagrid library like the Material UI datagrid for displaying most of the data. I chose this stack based on the idea that the player would be interacting with leaderboard while they are using it. 

The **Leaderboard** component would be the base container for the relevant logic, which should drop into whatever the overall parent container for the application is, assuming there are other common features like side navs, headers, and a theme.

The **Header** component uses tabs, assuming that we would be hitting different REST endpoints for different time groupings. This could be flipped with game modes depending on how the backend is implemented. 

Either way one of these should use tabs to group the data, with the other being icons or maybe a dropdown menu depending on how likely future additions will be. The result of the two selections allow us to query the correct endpoint and pass the JSON result to the *LeaderboardDatagrid** component. 


The **LeaderboardDatagrid** would handle the implementation of whichever datagrid library we choose with regards to look and feel, pagination options, and click handling. It should render the json for **Leaderboards** and implement click handling for a player to drive into the **PlayerView** component.


The **PlayerView** component could render many different ways since the data is not directly related and normally I would bring this up with a UX designer.

My initial thought was that it would render in place of the **LeaderboardDatagrid** in the **Leaderboard** view and share the same header component. This view would render the filter data as separate panel components, with examples provided of how this data would likely be different from [rank/name/eliminations]. 

I chose a dropdown for selecting these as the requirements hinted at there being many, or potentially a growing list of filters. The X button would return the user to the previous **Leaderboard** state, but this implementation would depend on the transition and be more likely as a popover or modal.

If we choose to render in place of the **LeaderboardDatagrid** component, we would conditionally render a back button on the **Leaderboard** component.

**Friends** and **Recent Activity** are provided as examples of more detailed information that is currently beyond the scope of the problem spec, but more as a thought experiment for what we could do with that space. 

# Durability
a. Scability for a web application like this would mostly be a collaborative effort with dev ops, focusing on hosting optimization.

b. Reliability would also be a collaboration with dev ops. Some sort of implementation with a load balancer could make sense with enough volume.

c. Resilience for an application like this could be handled by loading the UI and displaying a friendly error message over the datagrid, but allowing the users to click around the app. This would double as a form of retry logic, where if a click disables other clickable surfaces until the endpoint resolves with a timeout, the user can proceed to click another element to query again. 

d. I would be interested in collecting both performance data as well as usage data, maybe in the form of a click heat map. Heat maps would help us figure out which parts of the data players are most interested in seeing, so we can highlight those areas and remove/bury uninteresting data. Performance data could also be collected from many third party sources, but it would be good to look for data on loading times and viewing durations at least.

e. A potential bottleneck could be the rendering speed, especially on very slow connections and with larger data sets. All of the interesting data is initially loaded into a datagrid, so if that loads slowly the user has nothing to look at. A potential solution here would be to implement server side pagination and request small page sizes, allowing the user to choose a larger page size in the footer. 










# Questions
- 