# PAIR PROGRAMMER (MERN Application)

Documentation for Coder Academy Term 3 MERN Project


## Contributors

| [![Matthew Kelam](/docs/matthew-kelam-150px.jpg)](https://www.linkedin.com/in/maaronkel/) | 
| [![Paul Meier](/docs/paul-meier-150px.jpg)](https://linkedin.com/in/paulanthonymeier/) |
|-----------|-----------|
| Matthew Kelam | Paul Anthony Meier |

### Repositories

[Matthew Kelam](https://github.com/maaronkel/pair-programmer-mern/) | [Paul Meier](https://github.com/paulanthonymeier/pair-programmer-mern/)


## Purpose

Pair Programmer is a virtual online environment that helps facilitate the random selection of participants into workspaces of pairs and groups, providing participants and project contributors with brainstorming utilities to assist in the generation, conceptulization and development of ideas. 

Pair Programmer also aims to assist in the development of student programmers, by providing group coding challenges to workspace participants. 


## Target Audience

Pair Programmer would be best utilised by educational institutes and organisations in the Technology industry including (but not limited to) Universities, Coding Bootcamps, Hackathon Organisers and Programming Teachers / Educators. 


## Functionality / Features

### Organiser / Educator Users

_**User Onboarding**_
An Organiser/Educator user will initially be required to create an account for the Intitution / Organisation that they represent, as well as their own individual user account. An existing Organiser/Educator can then proceed to create other Organiser/Educator and Participant/Student accounts, or send invitations to join via email. 
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
Participant/Student users will initially signup via the email invitation received from their Intitution / Organisation. 
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
Organisers/Educators will be able to access their Participants/Students workspaces and particpate in group chat and workflow.

_**Notifications**_
Organisers/Educators will receive a notification when their Participants/Students perform certain key actions: 
- Participant/Student marks or flags their Workspace as 'Complete'.

Participants/Students will receive a notification when certain key actions are executed: 
- Participant/Student is assigned to a newly created Workspace.
- Participant/Student has unseen/unread comments in a Workspace group chat
- Participant/Student marks or flags a Workspace they are assigned to as 'Complete' or 'In Progress'.


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


### As a Super Administrator (Backend User), I want to ...

- 

