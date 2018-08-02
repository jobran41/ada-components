import React, { Component } from 'react'
import ContentHeader from 'components/content-header'

import './styles.scss'

export default class Colors extends Component {
  render() {
    return (
      <div className="colorsContainer">
        <ContentHeader title="ADA INTERFACES / BRAND BOOK" date="2018" subclass="gray-text" />
        <div className="colorsWapper">
          <h3><strong>COLORS GUIDELINE</strong></h3>
          <div className="colorgroup">
            <h4>GREY SCALE</h4>
            <div className="item">
              <div className="itemBox darkGreyBg1"/>
              <div className="darkGreyColor1">#202224</div>
            </div>
            <div className="item">
              <div className="itemBox darkGreyBg2"/>
              <div className="darkGreyColor2">#393c40</div>
            </div>
            <div className="item">
              <div className="itemBox greyBg"/>
              <div className="greyColor">#6f7379</div>
            </div>
            <div className="item">
              <div className="itemBox lightGreyBg1"/>
              <div className="lightGreyColor1">#aaaeb3</div>
            </div>
            <div className="item">
              <div className="itemBox lightGreyBg2"/>
              <div className="lightGreyColor2">#c6cacf</div>
            </div>
            <div className="item">
              <div className="itemBox highlightGreyBg"/>
              <div /*className="highlightGreyColor"*/>#ebebeb</div>
            </div>
            <div className="item">
              <div className="itemBox whiteBg"/>
              <div /*className="whiteColor"*/>#ffffff</div>
            </div>
          </div>

          <div className="colorgroup">
            <h4>COLORS</h4>
            <div className="item">
              <div className="itemBox bleuBg"/>
              <div className="bleuColor">#2a7bdb</div>
            </div>
            <div className="item">
              <div className="itemBox greenBg"/>
              <div className="greenColor">#1de9b6</div>
            </div>
            <div className="item">
              <div className="itemBox yellowBg"/>
              <div className="yellowColor">#f5c228</div>
            </div>
            <div className="item">
              <div className="itemBox redBg"/>
              <div className="redColor">#2a7bdb</div>
            </div>
            <div className="item">
              <div className="itemBox purpleBg"/>
              <div className="purpleColor">#a389da</div>
            </div>
          </div>

          <div className="colorgroup">
            <h4>GRADIENTS</h4>
            <div className="item">
              <div className="itemBox bleuGradientBg"/>
              <div className="bleuColor">#2a7bdb</div>
              <div className="bleuColor">#149fed</div>
            </div>
            <div className="item">
              <div className="itemBox greenGradientBg"/>
              <div className="greenColor">#1de9b6</div>
              <div className="greenColor">#00fbc8</div>
            </div>
            <div className="item">
              <div className="itemBox purpleGradientBg"/>
              <div className="purpleColor">#a389da</div>
              <div className="purpleColor">#c2a5ff</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
