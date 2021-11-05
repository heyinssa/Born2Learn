import { useHistory } from 'react-router';

const checkId = (location) => {
  let id;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const history = useHistory();
  console.log(location.state);
  if (!location.state || !location.state.user_id) {
    history.push('/');
  } else {
    id = location.state.user_id;
  }
  return id;
};

export default checkId;
