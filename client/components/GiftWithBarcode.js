const Barcode = require('react-barcode');

export const GiftWithBarcode = ({id, businessName, address, city, state, phone, zipcode, email, voucher, value, createdAt}) => {
console.log(id.split('-').splice(0,1).join(''))
	return (
		<div className="modal" tabIndex="-1" role="dialog" id={`lacenails${id}`} aria-labelledby="exampleModalLabel">
		  <div className="modal-dialog" role="document">
		    <div className="modal-content">
		      <div className="modal-header">
		        <h5 className="modal-title">Gift Certificate</h5>
		        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div className="modal-body">
		        <div className="card mb-3 text-center">
				    <Barcode value={voucher} width={1} height={75} className="card-img-top text-center"/>
				  <div className="card-body">
				    <h5 className="card-title">{businessName}</h5>
				    <p className="card-text">{address}</p>
				    <p className="card-text">{city}, {state} {zipcode}</p>

				    <p className="card-text">Last updated 3 mins ago</p>
				  </div>
				</div>
		      </div>
		      <div className="modal-footer">
		        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
		        <button type="button" className="btn btn-primary">Save changes</button>
		      </div>
		    </div>
		  </div>
		</div>
	);
};
