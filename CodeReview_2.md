## Code Review Summary

### Pros:
* Two tier architecture is followed (presentation and backend layer).
* Console logging is present to help debug issues quickly.
* Some basic hygiene is followed for eg. forms field validations, etc.
* REST APIs identification is done and implementation is done.
* User session management logic is thought out and implemented.

 ### Cons:
* Modular code is needed, presently one file contains all the controller, Business logic, DAL (Data Access Layer).
* Code modularity and maintainability: long method to be avoided.
* Design principles (SOLIDs) to be followed, design patterns to be followed.
* Databases interaction could be made using ORMs, not to write too much code.
* Basic code standard such as naming etc could be better.
* Error handling is there but could be much better.
* DRY, code duplication to be avoided.
* Too much of logging.
