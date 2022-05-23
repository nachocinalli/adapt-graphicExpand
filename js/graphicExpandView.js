import Adapt from 'core/js/adapt';
import notify from 'core/js/notify';
import { templates } from 'core/js/reactHelpers';
import React from 'react';
import ReactDOM from 'react-dom';
class GraphicExpandView extends Backbone.View {
  className() {
    return 'graphicexpand';
  }

  attributes() {
    const attributes = { 'data-component': this.model.get('_component') };
    return attributes;
  }

  initialize() {

    this.onClick = this.onClick.bind(this);
    this.render();
  }

  render() {
    const props = { ...this.model.toJSON(), onClick: this.onClick };
    const Template = templates[this.constructor.template.replace('.jsx', '')];
    ReactDOM.render(<Template {...props} />, this.el);
  }

  onClick(event) {
    event.preventDefault();
    const $graphicexpand = $(event.currentTarget);
 
    const $img = $graphicexpand.parent().parent().find('img');
    let imgsrc = $img.attr('data-large') || $img.attr('src');
    if (imgsrc === undefined) {
      const imgsrcLottie = $graphicexpand.parent().parent().find('div[data-graphiclottie="true"]')
      if (imgsrcLottie.length > 0) {
        imgsrc = imgsrcLottie.attr('src')
      }
    };
    if(imgsrc === undefined) return;
    notify.popup({
      _type: 'popup',
      title: '',
      body: '<img src="' + imgsrc + '" />',
      _classes: 'graphicexpand-popup'
    });
  }
}
GraphicExpandView.template = 'graphic-expand';
export default GraphicExpandView;
