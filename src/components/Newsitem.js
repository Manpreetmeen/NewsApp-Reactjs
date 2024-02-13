import React, { Component } from 'react'

export class Newsitem extends Component {
  
  render() {
    let {title, description, urlimage, newsUrl, author, date, source} = this.props;
    return (
      <div  className='my-4'>
        <div id="hover" className="card"><span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left : "90%", zIndex: "1"}}> {source} </span>
        <img  src={!urlimage?"https://www.livemint.com/lm-img/img/2024/02/02/1600x900/Stock_market_Nifty_50_Stocks_to_Buy_or_sell_1706840822393_1706840822655.jpg":urlimage} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title"> {title}</h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small className='text-body-secondary'>By {author ? author: "Unknown"} updated on {new Date(date).toGMTString()}</small> </p>
            <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More </a>
        </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
