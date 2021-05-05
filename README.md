# SEI Project 1
# simon

<img width="953" alt="1-proj-simon screenshot" src="https://media.git.generalassemb.ly/user/35876/files/52421f80-ad31-11eb-9b4f-e4f888afec43">

# Technologies Used
- html 
- CSS
- JavaScript
- GitHub

# Installation Instructions
- None
# User Stories
## As a user, I want to... 
1. see a sequence of varying colors/shapes/other so I can attempt to memorize it. 
2. recreate that sequence quickly and easily so I can focus on the memorization part.
3. have the game evaluate the sequence I input to see if it matches the initial sequence 
4. see different sequences every time so the game is challenging. 
5. see increasingly difficult sequences as the game goes on so the game becomes more challenging. 
6. customize the appearance of the game to make it more interesting.
7. have the game show me how many sequences I've completed so I can see my progress.
8. Provide me with multiplxe tries at one sequence so I have a better shot of maintaining progress.  

## MVP
- at least two blocks on screen (user story: 1)
- blocks change from background color (user story: 1)
- color changes are in a randomized sequence (user story: 4)
- multiple color changes in one sequence (user story: 1, 4, 5)
- after a sequence runs, user can recreate the sequence while the app evaluates if the user sequence matches the initial sequence (user story: 2, 3)
- user recreates sequence simply by clicking the box (user story: 2)
- user should be able to trigger another sequence (user story: 1, 4)
- user should be informed if their sequence did/did not match the initial sequence (user story: 3)

#### Bronze 
- more than two blocks on the screen (user story: 5)
- multiple colors are used in the sequence (user story: 5, 6) 
- sequences become increasingly more difficult as the user plays (user story: 5)

#### Silver 
- a wrong sequence resets the user to lowest level of difficulty (user story: 5, 7)
- user can select different shapes (user story: 6)
- user can select color schemes (user story: 6)

#### Gold 
- more abstract block spacings (user story: 5)
- increasingly higher numbers of blocks (user story: 5)
- users get more than 1 try at a sequence (user story: 8)

# Wireframes


<img width="1022" alt="proj-1-simon-wireframe" src="https://media.git.generalassemb.ly/user/35876/files/4441ce00-ad34-11eb-9d59-0242cf36d938">

# Unsolved Problems/Major Hurdles
After adding additional blocks to the screen, I had trouble trying to figure out a way to remove them when starting a new game without disrupting any other code.  I not only had to remove the blocks from the div, but I also had to remove them from the array I was using to generate the sequences.  In addition, I had to make sure that the original block was left behind.   I tried using removeChild(), however that only removed some of the blocks, and didn't clear the array properly.  So I settled on just having the page reload when a user starts a new game.  It works, however, it forces the user to sit through the instructions each time they start over.  In addition, it limits the ability to do future improvements like maintaining a high score, keeping track of attempts, etc.

One hurdle I was able to overcome was avoiding having to write out code for each div block individually.  I was able to move those items into an array that I could then use without having to hard code the same things multiple times.  
