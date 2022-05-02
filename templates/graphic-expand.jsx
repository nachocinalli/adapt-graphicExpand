import React from 'react';
import { classes } from 'core/js/reactHelpers';
export default function GraphicExpand(props) {

  const { _graphicExpand, onClick } = props;
  return (
    <button onClick={onClick} className="button" aria-label={_graphicExpand._button.ariaLabel}>
      <div className={classes(['icon-expand-graphic', 'icon', _graphicExpand._button.iconClass])}></div>
      {_graphicExpand._button.buttonText}
    </button>
  );

}
