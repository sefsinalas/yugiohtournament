# Running the App

This project is entirely client side. Open `index.html` in a web browser to start. Participant data is stored in your browser's local storage so it stays between sessions.

## Participants

The Participants page lets you manage the list of players stored in the browser.

### Add participants
- Fill in a name in the input box.
- Optionally tick **Paid** to mark the participant as paid.
- Press **Add** to save the participant.

### Delete all and delete one
- Each participant in the list has a **Delete** button for removing just that entry.
- Use **Delete All Participants** to clear the entire list at once.

### Choose a random participant
- Click **Pick Random Player** to start a short countdown and choose someone at random from the current list.

## Tournament

The Tournament page manages pairings, results and the scoreboard.

### Steps
1. Press **Simulate** to see the number of rounds and estimated duration.
2. After simulation, click **Start a New Tournament**.
3. Use **Start Round** to generate pairings. Record results by clicking the winner (or **Draw**).
4. When all matches are recorded, the button changes to start the next round.
5. **Restart Current Round** generates new pairings for the same round if needed.
6. Use **Restart Everything** to wipe all tournament data.

### Clock
- **Start clock** begins a 45 minute round timer and shows the overall tournament time.

### In case of error
- If anything gets out of sync or you want to start over, use **Restart Everything** and reload the page.
