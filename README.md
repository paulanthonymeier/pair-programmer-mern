# PAIR PROGRAMMER (MERN Application)

Documentation for Coder Academy Term 3 MERN Project


## Contributors

| [![Matthew Kelam](/docs/matthew-kelam-150px.jpg)](https://www.linkedin.com/in/maaronkel/) | [![Paul Meier](/docs/paul-meier-150px.jpg)](https://www.linkedin.com/in/paulanthonymeier/) |
|-----------|-----------|
| [Matthew Kelam](https://www.linkedin.com/in/maaronkel/) | [Paul Anthony Meier](https://www.linkedin.com/in/paulanthonymeier/) |

### Repositories

[Matthew Kelam](https://github.com/maaronkel/pair-programmer-mern/) | [Paul Meier](https://github.com/paulanthonymeier/pair-programmer-mern/)


### Deployed Site
[pair-programmer-mern-app-front.herokuapp.com](https://pair-programmer-mern-app-front.herokuapp.com/) 


## Purpose

Pair Programmer is a virtual online environment that helps facilitate the random selection of participants into workspaces of pairs and groups, providing participants and project contributors with brainstorming utilities to assist in the generation, conceptualization and development of ideas.

Pair Programmer also aims to assist in the development of student programmers, by providing group coding challenges to workspace participants.


## Target Audience

Pair Programmer would be best utilised by educational institutes and organisations in the Technology industry including (but not limited to) Universities, Coding Bootcamps, Hackathon Organisers and Programming Teachers / Educators.


## Functionality / Features

### Organiser / Educator Users

_**User Onboarding**_
An Organiser/Educator user will initially be required to create an account for the Institution / Organisation that they represent, as well as their own individual user account. An existing Organiser/Educator can then proceed to create other Organiser/Educator and Participant/Student accounts, or send invitations to join via email.
- Signup for a user account and create the Intitution / Organisation.
- Create Intitution / Organisation locations or campuses to accomodate for organisation that have mulitple locations/campuses.
- Create other Organisers/Educators and Participants/Students user accounts, and send them an email invitation.
- Tag Organisers/Educators and Participants/Students as belonging to one or more locations/campuses.
- Tag Participants/Students as belonging to a particular 'Course' or 'Hackathon' name.

_**Intitution / Organisation Settings**_
Organisers/Educators will be able to manage various aspects of the Intitution/Organisation which they belong to.
- Manage the Intitution/Organisation Name.
- Manage locations/campuses.
- Manage Course Names and Hackathon Events (with fixed start and end dates).
- Manage the assignment of individual Organisers/Educators to specific (or all) locations/campuses.

_**Manage Users**_
Organisers/Educators will need the ability to manage other Organiser/Educator user accounts as well as Participant/Student user accounts. Initially, there will be no heirarchy of permissions for Organisers/Educators.
- Create user accounts and send user invitations.
- Manage the assignment of individual Organisers/Educators to specific (or all) locations/campuses.
- Manage the assignment of Participant/Student to specific (or all) locations/campuses.

_**Event Templates**_
Organisers/Educators will be able to create Events 'templates'. An event/template can be titled as a 'Coding Challenge', 'Hackathon' or 'Project' and given a description and/or expected outcome or requirements. Events are created as reusable templates and can be used to generate future Workspaces.
- Create a new Event Template
- Edit an existing Event Template
- Describe an Event and outline expected outcomes or requirements
- Provide time constraints, project due dates etc ...
- Set a default number of participants/students per Event Workspace
- Generate / Create Workspaces

_**Workspaces**_
Once an 'Event' is selected, an Organiser/Educator will be able to choose how many Participants/Students will be randomly selected and assigned to each Workspace, therefore also determining the number of Workspaces generated for each particular Event.
- Generate / Create Workspaces
- View / Enter Workspaces


### Participant / Student Users

_**User Onboarding**_
Participant/Student users will initially signup via the email invitation received from their Institution / Organisation.
- Complete the account creation process (via email link).

_**Workspaces**_
Participant/Student users can enter the Workspace/s they've been assigned to. Once inside a Workspace, Participants/Students can access a group chat and a drag and drop kanban-style board.
- Communication via group chat.
- Create cards on the workspace board and reorganise the cards.


### Shared User Features

_**Account Management**_
All users will be able able to manage their user account personal details.
- Manage First Name & Last Name
- Manage email address
- Manage contact number
- Manage password
- Manage profile picture
- Manage social media handles
- Manage bio

_**Workspaces**_
Organisers/Educators will be able to access their Participants/Students workspaces and participate in group chat and workflow.

_**Notifications**_
Organisers/Educators will receive a notification when their Participants/Students perform certain key actions:
- Participant/Student marks or flags their Workspace as 'Complete'.

Participants/Students will receive a notification when certain key actions are executed:
- Participant/Student is assigned to a newly created Workspace.
- Participant/Student has unseen/unread comments in a Workspace group chat
- Participant/Student marks or flags a Workspace they are assigned to as 'Complete' or 'In Progress'.

## Application Architecture Diagram

![Application Architecture Diagram](docs/apparchitecture.png "Application Architecture Diagram")

## Dataflow Diagrams

![Dataflow Diagram](docs/dfd.png "Dataflow Diagram")

## Tech stack

- ReactJS
- React Materialize - [Github](https://github.com/react-materialize/react-materialize)
- React Beautiful Drag & Drop - [Github](https://github.com/atlassian/react-beautiful-dnd)
- Node.js
- Express
- Passport.js
- MongoDB
- Mongoose


## User Stories

#### Casca is a mother of two small children who works part-time. She is very independant and prefers working by herself. With this app she wants to ...

- Have the option to work on coding challenges by herself, or with a partner of her choosing
- Communicate with her educators to receive assistance

#### Guts is a young man in his 20s who spends most of his time playing video games, and has no real motivation to study by myself, he wants to ...

- Have an educator pair him up with someone with greater skill so that he may learn from them
- Be given coding challenges and projects that he must complete in a time frame
- Work with someone who is fun and engaging, and can explain concepts that I'm not comfortable with easily, enabling me to understand the content better

#### Griffith was recently employed full-time in the same industry for over 15 years and looking for a quick career change, he wants to ...

- Have a lot of collaboration in an environment similar to some tech companies in the real world
- Work on coding projects and have the ability to plan that days structure on a kanban board
- Be able to use a Kanban style board because I find it easier to work on something when I can clearly write down each step

#### Ryan has recently completed a University degree, yet hasen't been able to find work in his field. He is interested in a coding career, and with this app wants to ...

- Be able to work in a comfortable and quiet environment that enables her to work proactively
- Work with another student on challenges, exercises and projects, who is more skilled than her so that she may learn first hand from someone else
- Be able to communicate with the Educators and ask for assistance

#### Lrac is an Educator at an online University in the software development sector, he is very lenient in allowing his students to decide who they want to work with on coding challenges. With this app he wants to...

- Allow students to decide if they want to work by themselves or pair up with a friend
- Allow students to reach out to the educators if they need assistance
- Manage his Universities' campuses, teachers and students

#### Bez is an Educator at an online Coding Bootcamp, who prefers to delegate students into pairs when working on coding challenges. With this app he wants to ...

- Be able to manage his students into pairs or groups
- Monitor each group of students in their respective workspace and give assistance if needed
- Add each of his students to his institute

### As an Organiser / Educator, I want to ...

- Signup for a user account
  - Manage my first & last name
  - Manage my email address
  - Manage my contact number
  - Manage my password
  - Manage my profile picture
  - Manage my social media handles
  - Manage my bio

- Create an Intitution or Organisation (if intitution/organisation has not yet been created)
  - Manage the Intitution/Organisation Name
  - Manage locations/campuses
  - Manage Course Names and Hackathon Events
  - Assign other organisers or educators to one (or more) locations/campuses

- Create additional Organiser/Educator user accounts
  - Assign organiser/educator to one (or more) locations/campuses

- Create Participant/Student user accounts
  - Assign participant/student to a particular 'Course' or 'Hackathon' name
  - Assign participant/student to one (or more) locations/campuses

- Create new Event Templates
  - Manage existing Event Templates
  - Manage Event Template descriptions, expected outcomes and requirements
  - Manage time constraints, project due dates
  - Set a default number of participants/students per Event Workspace

- Generate / Create Workspaces
  - Select an existing Event Template
    - Edit Event details (if required)
    - Select location/campus
    - Select how many participants/students per Workspace
    - Execute Workspace generation
  - Create a New Event
    - Enter Event details
    - Select location/campus
    - Select how many participants/students per Workspace
    - Execute Workspace generation

- View my Participant/Student Workspaces (in a list or card)
- Enter my Participant/Student Workspaces
  - Communicate via group chat
  - Participate in drag & drop kanban boards
  - Mark/Flag a Workspace as 'Complete'
  - Mark/Flag a Workspace as 'In Progress'

- View my Notifications
  - Dismiss my notifications as 'read'
  - Delete my notifications


### As an Participant / Student, I want to ...

- Create a user account (via invitation link)
  - Manage my first & last name
  - Manage my email address
  - Manage my contact number
  - Manage my password
  - Manage my profile picture
  - Manage my social media handles
  - Manage my bio

- View my Workspaces (in a list or card)
- Enter my Workspaces
  - Communicate via group chat
  - Participate in drag & drop kanban boards
  - Mark/Flag a Workspace as 'Complete'
  - Mark/Flag a Workspace as 'In Progress'

- View my Notifications
  - Dismiss my notifications as 'read'
  - Delete my notifications



## Application Wireframes

#### Dashboard

![Pair Programmer | Dashboard Wireframe](docs/wireframes/dashboard.jpg "Pair Programmer | Dashboard Wireframe")
#### Workspaces

![Pair Programmer | Workspaces Wireframe](docs/wireframes/workspaces.jpg "Pair Programmer | Workspaces Wireframe")
#### Individual Workspace

![Pair Programmer | View Workspace Wireframe](docs/wireframes/workspaces-view.jpg "Pair Programmer | View Workspace Wireframe")
#### Create Workspace

![Pair Programmer | Create Workspaces Wireframe](docs/wireframes/workspaces-create.jpg "Pair Programmer | Create Workspaces Wireframe")
#### Events

![Pair Programmer | Event Templates Wireframe](docs/wireframes/events.jpg "Pair Programmer | Event Templates Wireframe")
#### Create Event Template

![Pair Programmer | Create Event Template Wireframe](docs/wireframes/events-create.jpg "Pair Programmer | Create Event Template Wireframe")
#### Students

![Pair Programmer | Students Wireframe](docs/wireframes/students.jpg "Pair Programmer | Students Wireframe")
#### Add Student

![Pair Programmer | Create Student Wireframe](docs/wireframes/students-create.jpg "Pair Programmer | Create Student Wireframe")
#### Profile

![Pair Programmer | Profile Wireframe](docs/wireframes/profile.jpg "Pair Programmer | Profile Wireframe")
#### Notification drop-down

![Pair Programmer | Notification Panel Wireframe](docs/wireframes/notifications.jpg "Pair Programmer | Notification Panel Wireframe")
#### Settings

![Pair Programmer | Institute Settings Wireframe](docs/wireframes/settings-institute.jpg "Pair Programmer | Institute Settings Wireframe")
#### Create Institute

![Pair Programmer | Create Institute Wireframe](docs/wireframes/settings-institute-create-location.jpg "Pair Programmer | Create Institute Wireframe")
#### Educators

![Pair Programmer | Educators Wireframe](docs/wireframes/settings-educators.jpg "Pair Programmer | Educators Wireframe")
#### Add Educators

![Pair Programmer | Create Educator Wireframe](docs/wireframes/settings-educators-create.jpg "Pair Programmer | Create Educator Wireframe")



## HD Designs / Mockups

#### Sample Page Layout
![Pair Programmer | Sample Page Layout](docs/designs/hd-mockup-01-main.jpg "Pair Programmer | Sample Page Layout")

#### Main Containers Layout
![Pair Programmer | Container Layout](docs/designs/hd-mockup-02-containers.jpg "Pair Programmer | Container Layout")

#### Containers Margins & Padding
![Pair Programmer | Margins & Padding](docs/designs/hd-mockup-03-margin-padding.jpg "Pair Programmer | Margins & Padding")

#### Cards Margins & Padding
![Pair Programmer | Cards Margins & Padding](docs/designs/hd-mockup-04-cards-padding.jpg "Pair Programmer | Cards Margins & Padding")
#### Colorscheme

![Colorscheme](docs/designs/colorscheme.png)

## Trello Board / Progress

![Pair Programmer | Trello Board](docs/trello-01.png "Pair Programmer | Trello Board")

![Pair Programmer | Trello Board](docs/trello-02.png "Pair Programmer | Trello Board")

![Pair Programmer | Trello Board](docs/trello-03.png "Pair Programmer | Trello Board")

![Pair Programmer | Trello Board](docs/trello-04.png "Pair Programmer | Trello Board")

![Pair Programmer | Trello Board](docs/trello-05.png "Pair Programmer | Trello Board")

![Pair Programmer | Trello Board](docs/trello-06.png "Pair Programmer | Trello Board")

### Part B - Trello Board and Task Delegation Summary

![Pair Programmer | Trello Board](docs/trello1.png "Pair Programmer | Trello Board")

![Pair Programmer | Trello Board](docs/trello2.png "Pair Programmer | Trello Board")

![Pair Programmer | Trello Board](docs/trello3.png "Pair Programmer | Trello Board")

![Pair Programmer | Trello Board](docs/trello4.png "Pair Programmer | Trello Board")

![Pair Programmer | Trello Board](docs/trello5.png "Pair Programmer | Trello Board")

![Pair Programmer | Trello Board](docs/trello6.png "Pair Programmer | Trello Board")

We decided early on to work on Part B of the assignment - both front and back-end - together, as we both have similar strengths and weaknesses in coding. We both prefer and are more familiar with React and front-end development, and are both similarly less confident with express and mognodb, so we decided not to deligate one person coding the front, and the other the back. We thought, in doing it this way, that by the end of the assignment, we would both have a better grasp of node, express and mongodb, and how a fullstack application is structured and works.

We planned our Trello board similar to the Part A of the assignment, where each ticket in each card has a difficulty/importance level, and a category labelling what it is (testing, server, routing, models, react etc). This way, we were able to see what parts of the assignment we completed and what parts were left, each with a difficulty level that showed what we should complete first, and what category of the app we were working on.

We worked on both the front and back-end together as the assignment went on, if we had a few bugs to fix or needed to change some code, as we originally planned to, although, at the beginning, Matt, who is somewhat more familiar with express, worked more on the backend at the start of coding - connecting the routes, connecting to mongodb etc - where Paul worked on pretty much all the front end code that related to styling, structure and flow.

Ultimately I think we planned our assignment pretty well, though due to personal reasons, life or work, we weren't able to complete the project as we envisioned it in Part A. Our MVP changed along the way, so we had to update the Trello to meet our new goals, which helped us build a somewhat complete poject.

We started the Trello board the last day of term 3 before the Christmas break, as we realised we had to reconsider our Minimium Viable Product for the assignment, as at our current skill level, time frame and 3 week break, we didn't think we could create the app with all the features we listed in Part A.

### Part B - User Testing (Video)

Development Testing Video of user login and signup

[Download video here](https://github.com/paulanthonymeier/pair-programmer-mern/blob/main/docs/user-testing-local-env.mp4)

Production Testing Video of user login and signup

[Download video here](https://github.com/paulanthonymeier/pair-programmer-mern/blob/main/docs/user-testing-production-env.mp4)

