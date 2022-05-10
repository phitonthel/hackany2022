import './CardTemplate.css'

function CardTemplate({
  title,
  description,
  price,
  quantity,
  staffId,
  status
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
            </div>
            <hr />
            <div className="space-between">
              <div className="food-card_price">
                <span>Qty: {quantity}</span>
              </div>
              <span>
                {status == 'ORDERED' && <b style={{ color: 'orange' }}>{status}</b>}
                {status == 'ACCEPTED' && <b style={{ color: 'blue' }}>{status}</b>}
                {status == 'DELIVERED' && <b style={{ color: 'green' }}>{status}</b>}
              </span>
            </div>

            <div className='mt-2'>
              <span>Served by: {staffId}</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CardTemplate;