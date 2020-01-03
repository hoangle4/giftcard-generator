const Barcode = require('react-barcode');

 

export const GiftWithBarcode = () => {

	return (
		<div className="card mb-3">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    		<Barcode value="lacenails-b8MPs-gucSy-2020012" />
    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>

	);
};
