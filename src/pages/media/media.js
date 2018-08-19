import React, { Component } from 'react'

import PanelProfile from 'components/panel-profile'
import SupportAssets from 'components/support-assets'


export default class Media extends Component {
  render() {
    return (
      <div>
        <PanelProfile
          urlImg="http://i.pravatar.cc/150?img=11"
          profileName="Instructor Name"
          adress="Tunis, Tunisia"
          tel="00218867234"
          Email="jobran@gmail.com"
          className="media"
          colorHeader="green"
        />
        <PanelProfile
          urlImg="http://i.pravatar.cc/150?img=11"
          profileName="Instructor Name"
          className="media"
          responsive="ada-md"
          colorHeader="black"
        />
        <PanelProfile
          urlImg="http://i.pravatar.cc/150?img=11"
          profileName="Product Name"
          description="lorem lorem lorem"
          className="product"
          colorHeader="green"
          details
          handleDetails={() => null}
        />
        <SupportAssets
          type="img"
          title="Project images"
          description="Project details and information"
          url="https://via.placeholder.com/350x150"
        />
        <SupportAssets
          type="img"
          responsive="ada-md"
          title="Project images"
          description="Project details and information"
          url="https://via.placeholder.com/150x150"
        />
        <SupportAssets
          type="video"
          title="Project images"
          playlist
          url="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        />
        Media
      </div>
    )
  }
}
