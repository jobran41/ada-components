import React, { Component } from 'react'
import { Button } from "react-md"

import PanelProfile from 'components/panel-profile'
import SupportAssets from 'components/support-assets'
import ContentHeader from 'components/content-header'
import Docs from "components/docs"

import {
  docsPanelProfile,
  docsSupportAssets,
} from "pages/docs-props"

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
            <Docs
              title={"PanelProfile"}
              docsProps={docsPanelProfile}
              dataCode={`
              <PanelProfile
                urlImg="http://i.pravatar.cc/150?img=11"
                profileName="Instructor Name"
                adress="Tunis, Tunisia"
                tel="00218867234"
                Email="jobran@gmail.com"
                className="media"
                colorHeader="bleuGardian"
              />
              `}
            >
              <PanelProfile
                urlImg="http://i.pravatar.cc/150?img=11"
                profileName="Instructor Name"
                adress="Tunis, Tunisia"
                tel="00218867234"
                Email="jobran@gmail.com"
                className="media"
                colorHeader="bleuGardian"
              />
            </Docs>
            <Docs
              title={"PanelProfile"}
              docsProps={docsPanelProfile}
              dataCode={`
              <PanelProfile
                urlImg="http://i.pravatar.cc/150?img=11"
                profileName="Instructor Name"
                adress="Tunis, Tunisia"
                tel="00218867234"
                Email="jobran@gmail.com"
                className="media"
                colorHeader="bleuGardian"
              />
              `}
            >
              <PanelProfile
                urlImg="http://i.pravatar.cc/150?img=11"
                profileName="Instructor Name"
                adress="Tunis, Tunisia"
                tel="00218867234"
                Email="jobran@gmail.com"
                className="media"
                colorHeader="light"
              />
            </Docs>
            <div className="md-grid">
              <div className="mediaCell md-cell md-cell--6">
                <Docs
                  title={"PanelProfile"}
                  docsProps={docsPanelProfile}
                  dataCode={`
                  <PanelProfile
                    urlImg="http://i.pravatar.cc/150?img=11"
                    profileName="Instructor Name"
                    adress="Tunis, Tunisia"
                    tel="00218867234"
                    Email="jobran@gmail.com"
                    className="media"
                    colorHeader="bleuGardian"
                  />
                  `}
                >
                  <PanelProfile
                    urlImg="http://i.pravatar.cc/150?img=11"
                    profileName="Instructor Name"
                    className="media"
                    responsive
                    colorHeader="bleuGardian"
                  />
                </Docs>
              </div>
              <div className="mediaCell md-cell md-cell--6">
                <Docs
                  title={"PanelProfile"}
                  docsProps={docsPanelProfile}
                  dataCode={`
                  <PanelProfile
                    urlImg="http://i.pravatar.cc/150?img=11"
                    profileName="Instructor Name"
                    adress="Tunis, Tunisia"
                    tel="00218867234"
                    Email="jobran@gmail.com"
                    className="media"
                    colorHeader="bleuGardian"
                  />
                  `}
                >
                  <PanelProfile
                    urlImg="http://i.pravatar.cc/150?img=11"
                    profileName="Instructor Name"
                    className="media"
                    responsive
                    colorHeader="light"
                  />
                </Docs>
              </div>
            </div>
          </div>
          <div className="mediaCell md-cell md-cell--3">
            <div className="media">
              <Docs
                title={"SupportAssets"}
                docsProps={docsSupportAssets}
                dataCode={`
                <SupportAssets
                  type="img"
                  title="Project images"
                  description="Project details and information"
                  url="https://picsum.photos/300/200?image=0"
                  actionButton={()=> <Button icon onClick={this.plus} iconClassName="mdi mdi-plus" />}
                />
                `}
              >
                <SupportAssets
                  type="img"
                  title="Project images"
                  description="Project details and information"
                  url="https://picsum.photos/300/200?image=0"
                  actionButton={()=> <Button icon onClick={this.plus} iconClassName="mdi mdi-plus" />}
                />
              </Docs>
            </div>
            <div className="media">
              <Docs
                title={"SupportAssets"}
                docsProps={docsSupportAssets}
                dataCode={`
                <SupportAssets
                  type="img"
                  title="Project images"
                  description="Project details and information"
                  url="https://picsum.photos/300/200?image=0"
                  actionButton={()=> <Button icon onClick={this.plus} iconClassName="mdi mdi-plus" />}
                />
                `}
              >
                <SupportAssets
                  type="img"
                  responsive
                  title="Project images"
                  description="Project details and information"
                  url="https://picsum.photos/300/200?image=0"
                  actionButton={()=> <Button icon onClick={this.plus} iconClassName="mdi mdi-plus" />}
                />
              </Docs>
            </div>
            <div className="media">
              <Docs
                title={"SupportAssets"}
                docsProps={docsSupportAssets}
                dataCode={`
                <SupportAssets
                  type="img"
                  title="Project images"
                  description="Project details and information"
                  url="https://picsum.photos/300/200?image=0"
                  actionButton={()=> <Button icon onClick={this.plus} iconClassName="mdi mdi-plus" />}
                />
                `}
              >
                <SupportAssets
                  type="img"
                  responsive
                  title="Project images"
                  description="Project details and information"
                  url="https://picsum.photos/300/200?image=0"
                  className="costumColor"
                />
              </Docs>
            </div>
          </div>
          <div className="mediaCell md-cell md-cell--5">
            <div className="media">
              <Docs
                title={"SupportAssets"}
                docsProps={docsSupportAssets}
                dataCode={`
                <SupportAssets
                  type="img"
                  title="Project images"
                  description="Project details and information"
                  url="https://picsum.photos/300/200?image=0"
                  actionButton={()=> <Button icon onClick={this.plus} iconClassName="mdi mdi-plus" />}
                />
                `}
              >
                <SupportAssets
                  type="video"
                  title="Project images"
                  playlist
                  poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
                  url="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
                />
              </Docs>
            </div>
            <div className="media">
              <Docs
                title={"SupportAssets"}
                docsProps={docsSupportAssets}
                dataCode={`
                <SupportAssets
                  type="img"
                  title="Project images"
                  description="Project details and information"
                  url="https://picsum.photos/300/200?image=0"
                  actionButton={()=> <Button icon onClick={this.plus} iconClassName="mdi mdi-plus" />}
                />
                `}
              >
                <SupportAssets
                  type="img"
                  title="Project images"
                  description="Project details and information"
                  url="https://picsum.photos/500/200?image=0"
                  actionButton={()=> <Button icon onClick={this.plus} iconClassName="mdi mdi-plus" />}
                />
              </Docs>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
