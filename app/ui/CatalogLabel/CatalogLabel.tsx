import clsx from 'clsx';
import style from './CatalogLabel.module.scss';
import React from 'react';

type Props = {
  isNew?: boolean;
  isBestseller?: boolean;
};

const CatalogLabel: React.FC<Props> = (props) => {
  if (props.isNew) {
    return (
      <div className={clsx(style.catalog_label__container, style.label__new)}>
        <p className={clsx(style.catalog_label__text, style.label__new)}>
          New
          </p>
      </div>
    );
  }

  if (props.isBestseller) {
    return (
    <div className={clsx(style.catalog_label__container, style.label__bestseller)}>
      <p className={clsx(style.catalog_label__text, style.label__bestseller)}>
        Bestseller
      </p>
    </div>
    );
  }

  return null;
};

export default CatalogLabel;
