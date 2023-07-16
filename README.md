## Technical questions

### 1 - How long did you spend on the backend coding test? What would you add to your solution if you had more time? What would've been your architecture choice for this kind of application without our example?

- I spent about 4H on the back-end test. If I had had more time I would have made a manual script which is launched with a command and a file or a route which is passed as a parameter in order to determine the data on which we want it to generate the slots for us.
- I would also have set up a database and I would have stored everything in the database each time I run the script, in order to have a history and a follow-up.

### 2 - How can you handle post midnight cases to be displayed on the same day and not the next one?

- To manage cases of slots available after midnight, for example on Saturday from 10am to 3am but Sunday. I simply had to add 24 hours if the end date was less than the start date.

### 3 - How long did you spend on the frontend coding test? What were your biggest difficulties?

- I spent about 5 hours on the front-end test. I didn't have any major difficulties except to cut the code well and test that everything works well. I rendered a project similar to the mockup, however the responsive is not functional but not requested. If I had had more time I would have spent all my energy on the responsive.

### 4 - How would you track down a performance issue in production? Have you ever had to do this?

- I would test the application, including load tests that simulate a strong audience on the site and see if performance is impacted. We had already had a similar problem, I did not take care of the infrastructure but I know that to remedy it, we had to create 4 instances of our project, and from now on, as soon as we have users on the site, they are distributed equally over the 4 amazon instances so as not to overload one.

## Bonus questions

### 1 - How are you feeling about our game and locations?

- I can't wait to try the EVA room, especially the battle arena with the 400m square arena, it looks so impressive! And I'm also impressed by the number of rooms already open, more than 36 in France according to your website, it's great!

### 2 - Are you a gamer? Which games do you play?

- I was a gamer, younger, of world of warcraft and then of league of legends. I was passionate about PVP, I was top 50 europe in 3v3 on World of Warcraft with the Cataclysm extension. When I was a student I slowly stopped then I started Hearthstone until recently. I haven't been playing games frequently lately.

### 3 - Do you know livestreaming? RTMP?

- I know but not in technical detail. I imagine that you want to broadcast lives of your best battle arena games in order to advertise and thus bring in new customers! I would love to develop a feature of this caliber!
