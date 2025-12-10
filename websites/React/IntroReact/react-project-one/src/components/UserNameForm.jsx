import { useFormStatus } from 'react-dom';

function UserNameForm() {
  const { pending, data } = useFormStatus();

  return (
    <form>
      <h3>Request a Username: </h3>

      <input 
        type="text" 
        name="username" 
        disabled={pending} 
      />

      <button type="submit" disabled={pending}>
        Submit
      </button>

      <br />

      <p>
        {data ? `Requesting ${data.get("username")}...` : ""}
      </p>
    </form>
  );
}

export default UserNameForm;
