import {connect} from 'react-redux';
import {getLocation} from '../../action/location';
import fetch from 'isomorphic-unfetch';


const Loc = ({
  id,
  businessName,
  address,
  city,
  state,
  zipcode,
  phoneNumber,
  email,
  avatar,
  admin,
  createdAt,
  updatedAt
}) => {
    return (
      <div> Location </div>
    );
};

Loc.getInitialProps = async (context) => {
    const {id} = context.query;
    const token = localStorage.getItem('token');
    const res = await fetch(`http://localhost:3001/api/location/${id}`,
      {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            't-auth-token':token
        }
      });
      const result = await res.json();
    console.log(result);

    return {result};
  };

export default connect(null, {getLocation})(Loc);
