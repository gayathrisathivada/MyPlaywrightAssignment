// CallBack means a function that is passed as an argument to another function and is executed after some operation or event occurs. It allows for asynchronous programming and enables functions to be executed in response to certain events or conditions. Callbacks are commonly used in JavaScript for handling events, making API requests, and performing asynchronous operations.

// Example of a callback function
function fetchData(callback)    // This function simulates fetching data from an API and takes a callback function as an argument. The callback function will be executed after the data is fetched.
{
    setTimeout(() =>            // Simulating an asynchronous operation using setTimeout to mimic a delay in fetching data from an API.
    {
        const data = { id: 1, name: "John Doe" }; // Simulating fetching data from an API
        callback(data); // Calling the callback function with the fetched data
    }, 2000);                   // The setTimeout function is used to simulate a delay of 2 seconds before executing the callback function with the fetched data. This mimics the behavior of an asynchronous operation, such as fetching data from an API, where the callback function is executed after the data is retrieved.
}

// Using the callback function
fetchData((data) =>               // Calling the fetchData function and passing a callback function as an argument. The callback function will be executed after the data is fetched.
{
    console.log(`Fetched Data: ID = ${data.id}, Name = ${data.name}`); // This line states that the callback function is called with the fetched data after a delay of 2 seconds. 
                                                                       //  The fetched data is logged to the console using string interpolation to display the ID and name of the fetched data. 
                                                                       //  Output: Fetched Data: ID = 1, Name = John Doe - The callback function is called with the fetched data after a delay of 2 seconds.
}); 

// In this example, the fetchData function simulates fetching data from an API and takes a callback function as an argument. The callback function is executed after the data is fetched, allowing for asynchronous programming and enabling functions to be executed in response to certain events or conditions.
// In summary, a callback function is a function that is passed as an argument to another function and is executed after some operation or event occurs. It allows for asynchronous programming and enables functions to be executed in response to certain events or conditions. Callbacks are commonly used in JavaScript for handling events, making API requests, and performing asynchronous operations.
// In conclusion, callback functions are an essential concept in JavaScript that enable asynchronous programming and allow for functions to be executed in response to certain events or conditions. They are commonly used in JavaScript for handling events, making API requests, and performing asynchronous operations.