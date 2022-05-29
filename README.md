# Jumbo Vue technical assignment

Requirements for this assignment:

- Get the data from jsonstorage.net (see details below)
- Use an action and mutation to save the data
- Add multiple Vuex getters
- Prevent putting everything in actions by using a service
- Keep components simple and stupid (logic belongs in the store)
- Add unit testing for the store, service and components
- Replace the hardcoded cities list with a dynamic one (using the given data)
- Introduce an input field that filters the stores based on: addressName or cityname

Feel free to add anything!

## Data

You can get the data from this endpoint:
https://api.jsonstorage.net/v1/json/00000000-0000-0000-0000-000000000000/c4357a15-46e2-4542-8e93-6aa6a0c33c1e

## Bonus points

- Make it look like it's a Jumbo application (styling)
- Create a new jsonstorage.net entity and use it as your last searched for database
- Chop off the prefix `Jumbo` from the addressName
- Create a new view for stores per city
