import React, { Component } from "react"
import PropTypes from "prop-types"
import {
  Button,
  DialogContainer,
  Toolbar,
  DataTable,
  TableHeader,
  TableRow,
  TableColumn,
  TableBody
} from "react-md"

export default class Docs extends Component {
  constructor(props) {
    super(props)
    this.state = { visible: false, pageX: null, pageY: null }
  }

  show = e => {
    let { pageX, pageY } = e
    if (e.changedTouches) {
      pageX = e.changedTouches[0].pageX
      pageY = e.changedTouches[0].pageY
    }

    this.setState({ visible: true, pageX, pageY })
  };

  hide = () => {
    this.setState({ visible: false })
  };
  renderDocsProps = () => {
    const { docsProps } = this.props
    return docsProps.map((dp, index) => (
      <TableRow key={index}>
        <TableColumn>{dp.propsName}</TableColumn>
        <TableColumn>{dp.propsDescription}</TableColumn>
      </TableRow>
    ))
  };
  render() {
    const { children, title, description } = this.props
    const { visible, pageX, pageY } = this.state
    return (
      <div className="docs">
        <Button icon primary onClick={this.show}>
          favorite
        </Button>
        {children}
        <DialogContainer
          id="simple-full-page-dialog"
          visible={visible}
          pageX={pageX}
          pageY={pageY}
          fullPage
          onHide={this.hide}
          aria-labelledby="simple-full-page-dialog-title"
        >
          <Toolbar
            fixed
            colored
            title={title}
            titleId="simple-full-page-dialog-title"
            nav={
              <Button icon onClick={this.hide}>
                close
              </Button>
            }
          />
          <section className="md-toolbar-relative">
            <div className="description">{description}</div>
            <DataTable plain>
              <TableHeader>
                <TableRow>
                  <TableColumn>Prop name</TableColumn>
                  <TableColumn>Description</TableColumn>
                </TableRow>
              </TableHeader>
              <TableBody>{this.renderDocsProps()}</TableBody>
            </DataTable>
          </section>
        </DialogContainer>
      </div>
    )
  }
}

Docs.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  docsProps: PropTypes.array
}