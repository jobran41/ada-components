import React, { Component } from 'react'
import { Button } from "react-md"

import PanelProfile from 'components/panel-profile'
import SupportAssets from 'components/support-assets'
import ContentHeader from 'components/content-header'

import  './media.scss'


export default class Media extends Component {
  render() {
    return (
      <div className="mediaPage">
        <ContentHeader title="ADA INTERFACES / BRAND BOOK" date="2018" subclass="gray-text" />
        <div className="mediaheader">
          <h3><strong>Images & media placements</strong></h3>
          <h3>Booth, Horizontal & Vertical</h3>
        </div>
        <div className="mediaConatiner md-grid">
          <div className="mediaCell md-cell md-cell--4">
            <PanelProfile
              urlImg="http://i.pravatar.cc/150?img=11"
              profileName="Instructor Name"
              adress="Tunis, Tunisia"
              tel="00218867234"
              Email="jobran@gmail.com"
              className="media"
              colorHeader="bleuGardian"
            />
            <PanelProfile
              urlImg="http://i.pravatar.cc/150?img=11"
              profileName="Instructor Name"
              adress="Tunis, Tunisia"
              tel="00218867234"
              Email="jobran@gmail.com"
              className="media"
              colorHeader="light"
            />
            <div className="md-grid">
              <div className="mediaCell md-cell md-cell--6">
                <PanelProfile
                  urlImg="http://i.pravatar.cc/150?img=11"
                  profileName="Instructor Name"
                  className="media"
                  responsive
                  colorHeader="bleuGardian"
                />
              </div>
              <div className="mediaCell md-cell md-cell--6">
                <PanelProfile
                  urlImg="http://i.pravatar.cc/150?img=11"
                  profileName="Instructor Name"
                  className="media"
                  responsive
                  colorHeader="light"
                />
              </div>
            </div>
          </div>
          <div className="mediaCell md-cell md-cell--3">
            <div className="media">
              <SupportAssets
                type="img"
                title="Project images"
                description="Project details and information"
                url="https://picsum.photos/300/200?image=0"
                actionButton={()=> <Button icon onClick={this.plus} iconClassName="mdi mdi-plus" />}
              />
            </div>
            <div className="media">
              <SupportAssets
                type="img"
                responsive
                title="Project images"
                description="Project details and information"
                url="https://picsum.photos/300/200?image=0"
                actionButton={()=> <Button icon onClick={this.plus} iconClassName="mdi mdi-plus" />}
              />
            </div>
            <div className="media">
              <SupportAssets
                type="img"
                responsive
                title="Project images"
                description="Project details and information"
                url="https://picsum.photos/300/200?image=0"
                className="costumColor"
              />
            </div>
          </div>
          <div className="mediaCell md-cell md-cell--5">
            <div className="media">
              <SupportAssets
                type="video"
                title="Project images"
                playlist
                poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
                url="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
              />
            </div>
            <div className="media">
              <SupportAssets
                type="img"
                title="Project images"
                description="Project details and information"
                url="https://picsum.photos/500/200?image=0"
                actionButton={()=> <Button icon onClick={this.plus} iconClassName="mdi mdi-plus" />}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
