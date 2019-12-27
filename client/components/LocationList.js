import Link from 'next/link';

const LocationList = ({avatar, businessName, id, city, state }) => {
    return (
      <div className="media">
          <img src={avatar ||'https://picsum.photos/50'} className="mr-3" alt={businessName}/>
          <div className="media-body">
            <h5 className="mt-0">
              <Link href="/loc/[id]" as={`/loc/${id}`}>
			           <a>{businessName}</a>
		          </Link>
            </h5>
            <p>{city}, {state} </p>
          </div>
      </div>
    );
};

export default LocationList;
