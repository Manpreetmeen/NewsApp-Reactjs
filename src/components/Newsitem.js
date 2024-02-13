import React, { Component } from 'react'

export class Newsitem extends Component {
  
  render() {
    let {title, description, urlimage, newsUrl} = this.props;
    return (
      <div className='my-4'>
        <div className="card" style={{width: "18rem"}}>
        <img src={!urlimage?"https://www.livemint.com/lm-img/img/2024/02/02/1600x900/Stock_market_Nifty_50_Stocks_to_Buy_or_sell_1706840822393_1706840822655.jpg":urlimage} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title"> {title}...</h5>
            <p className="card-text">{description}...</p>
            <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More </a>
        </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
