import ReactDOM from 'react-dom/client';
import './ConfirmationPromise.css';

const ConfirmationModal = ({ message, onResponse }) => {
  const onOk = () => {
    onResponse(true);
  };

  const onCancel = () => {
    onResponse(false);
  };

  return (
    <div className="confirmation-modal">
      <div className="confirmation-container">
        <h2>Confirmation</h2>

        <div>{message}</div>

        <br />

        <div className="confirmation-action">
          <button className="mr-2" onClick={onOk}>OK</button>
          <button
            className="confirmation-button-cancel"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const showConfirmation = async (message) => {
  const container = document.getElementById('portal-confirmation');
  const root = ReactDOM.createRoot(container);

  return await new Promise((resolve) => {
    const onResponse = (response) => {
      root.unmount();
      resolve(response);
    };

    ReactDOM
      .createRoot(container)
      .render(<ConfirmationModal message={message} onResponse={onResponse} />);
  });
};

export default showConfirmation;
