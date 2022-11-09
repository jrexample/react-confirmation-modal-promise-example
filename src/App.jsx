import showConfirmation from './utils/ConfirmationPromise';

function App() {
  const submit = async () => {
    const response = await showConfirmation('Are you sure you want to submit?');

    alert(`Response: ${response}`);
  };

  return (
    <div>
      <button onClick={submit}>
        Show Confirmation
      </button>
    </div>
  )
}

export default App;
