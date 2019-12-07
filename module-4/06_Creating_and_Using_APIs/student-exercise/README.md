# Creating APIs Exercise

In this exercise you are going to take the shopping list exercise and build your own API. In this directory you will find the folder `shopping-list` that contains the starting code for this exercise.  After you create the API you will need to update the methods in this file for each web method. 

## Building your own API

In this exercise you are going to be responsible for building an API that your front end code can use to retrieve a list of groceries. You are going to be building an API that is just like the [mockAPI](http://5c53275ea659410014eeea14.mockapi.io/api/groceries).

In this directory you will find the starting code for .NET

* .NET: `/shopping-api-dotnet`

Everything you need to build your API is in these projects. There is a data access layer that uses an in memory representation of a shopping list item. This is very similar to what you did in your tutorial and during lecture today. What you will need to do is build out the controller and that controller can use the data access layer to perform CRUD operations on the list of groceries. 

### Requirements

* The endpoint for your API should be /api/groceries
* You should have at least 10 items in your list of groceries when the application loads.
* When you click on an item it should update the status of that item to completed
* When you double click on an item that is completed it should reset it to incomplete
* When you click the X icon on a row it should delete the item
* When you click the Add Item button, fill in the form, and press enter the item should be saved to your list
    * Pressing Enter when the Item Input has focus will cause it to save the item
    * Pressing ESC when the Item Input has focus will cancel the add

## Updating the API end code

You will need to build a REST controller for the shopping lists with the following endpoints:   

1. `/api/groceries`  
    * Description: Retrieves a list of the Grocery Item objects

2. `/api/groceries`  
    * Description: Adds a grocery item to the list  

3. `/api/groceries/:id`  
    * Description: Updates an existing item using the id in the path

4. `/api/groceries/:id`  
    * Description: Deletes an item from the list

## Updating the front end code

After you complete your API you will need to update the `API_URL` variable at the top of the JavaScript file for the correct endpoint for your application.   A working MockAPI endpoint as been provided as a default.  

Methods you will need to connect the Shopping List to the API have been provided.   For each method you will need to write the appropriate fetch code.  

1. loadGroceries()

Retrieves the list of groceries.  On success the returned data should be set to the global `groceries` array and the method `displayGroceries()` should be called. 

2. updateItem(item, complete)

Updates an item.  The `completed` argument will be TRUE when the item is complete and FALSE when it is not.  The item ofject should be updated to have the correct value before calling the API.   The `item` argument will contain the item object to be updated. 

3. deleteItem(item)

Deletes an item.  The `item` argument will contain the item object to be deleted.

4. saveItem(item)

Creates a new item.  The 'item' argument will contain the item object to be saved.

## Tips

* You can updated the API_URL at the top of the file to test with other API sources.
* The provided MockAPI matches the API you will build, so you can complete the UI and API in any order.
* You do not need to change any JavaScript methods outside of the 4 listed.  All other functionality has been provided.
* It is recommended you test your API in PostMan before connecting it to the UI.  
* For the UI to connect to the API it must be running.  
* The Items are not persisted in a database, so if you restart your API the list will be reset.


## Tests

No unit tests have been provided for this exercise, and therefore will require manual testing to make sure all functionality works as expected.  