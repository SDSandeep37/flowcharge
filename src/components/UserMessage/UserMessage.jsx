const UserMessage = ({ type, message }) => {
  return <>{message && <p className={`usermessage ${type}`}>{message}</p>}</>;
};

export default UserMessage;
