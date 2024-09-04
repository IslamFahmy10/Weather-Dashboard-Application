
import { useLocation, useNavigate } from 'react-router-dom';

const withRouter = (WrappedComponent) => {
  return (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    return <WrappedComponent {...props} location={location} navigate={navigate} />;
  };
};

export default withRouter;