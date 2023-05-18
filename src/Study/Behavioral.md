## What is your greatest strength?**
Collaboration
I work hard to understand the problems that people are facing whether they are on my team or not, so we can get rid of blockers and move work forward. 

## What is your greatest weakness?**
Process management
I've worked on teams with no process management, where I've had to gather gather requirements for my team while still coding, and I find that difficult. 

## Tell me about a time you showed leadership.**
I joined TPCi as the only web developer on a server team, without any other web resources or product manager. I worked with my manager to get the resources I needed to be successful - I got part-time help from a UX designer, a dev ops engineer, a tester, and a producer. After that, I got headcount for another less senior engineer, and we were able to launch the application well ahead of the first phase of beta. 

## What would your co-workers say about you?** 
My coworkers would mention my ability to improve the stability of a codebase through refactoring and adding test coverage. I have a strong preference for simplifying code and making it easier and quicker for developers to understand. 

## Describe your most challenging project.**
The Virtual Data Rooms project I developed for ShareFile.
I was early in my career and working for a startup without much support and it had a large impact on the business, resulting in a huge new revenue stream that helped us get acquired. The projct involved writing a .Net console application that would run on AWS, pulling items from a queue and converting them from office file types to pdfs, adding watermarks, and generating thumbnails and previews for the files to be used in the browser. I've done more difficult work since then, but have been in a much better position to do the work, and have had more support as well. 

## Tell me about something you’ve accomplished that you are proud of.**
I made a web game using PhaserjS. I went through many iterations, gathered feedback from the gaming community on Reddit, and played it online with friends. 

## Tell me about a time when you had to deal with a coworker who was behind schedule on a joint project? How did you handle the situation?
I've had this situation come up occasionally. Typically, if the coworker is on my team, I try help move resources around to take the pressure off so we all get our work done. If the person is an outside dependency, I try to figure out how I can help them stay on schedule. If there's nothing I can do, I reduce the scope and move that work to a future sprint.

## Tell me about a time when you disagreed with a coworker. What did you do to resolve the situation?**
Several times I've run into situations where another developer wants to write code to be as concise as possible, which I think goes against best practices of trying to improve readability of code. Writing concise code can be uesful in particular situations, but most of the time readability should be prioritized. New eningeers will be coming and going, and anything you can do to make learning the code base easier and faster is worthwhile. 

## Describe a tough problem you faced and how you resolved it.
I had an issue at TPCi where the support vendor had intermittent issues with slowness on the web application. The vendor is external, which made it difficult to debug. 

I worked with their support team to procure an identical environment for me to do testing. I polled the clients for when they experienced the problem, what browser they were using, if there were any differences between browsers, if they could provide screenshots of the problem, etc. 

Chrome and Edge seemed to be giving people more problems than Firefox, so I tried all of them to see if I could reproduce the issue. I immediately reproduced it with all Chromium based browsers, and figured out that Chromium based browsers have fewer available web workers than Firefox. The short term solution was for the team to use Firefox to mitigate the issue. Another solution was to give their thin clients more ram (the issue only happens on thin client VMs). The last solution is to try to use fewer service workers by reducing the number of calls happening on a page. 