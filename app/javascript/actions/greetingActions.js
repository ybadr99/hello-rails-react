export const fetchGreeting = () => async (dispatch) => {
  try {
    // Assuming your Rails server is running on localhost:3000
    const response = await fetch('http://127.0.0.1:3000/random_greeting');
    console.log(response);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const greeting = await response.json();
    dispatch({
      type: 'FETCH_GREETING_SUCCESS',
      payload: greeting.greeting, // Adjust according to the structure of your API response
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_GREETING_FAILURE',
      payload: error.message,
    });
  }
};
