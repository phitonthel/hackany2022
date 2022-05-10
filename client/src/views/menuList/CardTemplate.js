import './CardTemplate.css'

function CardTemplate({
  title,
  description,
  price,
  quantity,
  onMinusHandler,
  onPlusHandler
}) {
  return (
    <div className="col-sm-6 col-md-6 col-lg-4">
      <div className="food-card">
        <div className="food-card_img">
          <img src="https://i.imgur.com/eFWRUuR.jpg" alt="" />
          <a href="#!"><i className="far fa-heart"></i></a>
        </div>
        <div className="food-card_content">
          <div className="food-card_title-section">
            <a href="#!" className="food-card_title">{title}</a>
            <a href="#!" className="food-card_author">By Menu-nited</a>
          </div>
          <div className="food-card_bottom-section">
            <div className="space-between">
              <div>
                <span className="fa fa-fire"></span> {description}
              </div>
              {/* <div className="pull-right">
                <span className="badge badge-success">Veg</span>
              </div> */}
            </div>
            <hr />
            <div className="space-between">
              <div className="food-card_price">
                <span>IDR {price}</span>
              </div>
              <div className="food-card_order-count">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <button
                      className="btn btn-outline-secondary minus-btn"
                      type="button"
                      id="button-addon1"
                      onClick={() => onMinusHandler()}
                    >
                      <i className="fa fa-minus"></i>
                    </button>
                  </div>
                  <input type="text" className="form-control input-manulator" placeholder="" value={quantity} />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-secondary add-btn"
                      type="button"
                      id="button-addon1"
                      onClick={() => onPlusHandler()}
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardTemplate;