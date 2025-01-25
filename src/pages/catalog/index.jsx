import React from 'react';
import CatalogBanner from './catalog_banner';
import CatalogProducts from './catalog_elements';
import Pagenation from '../home/pagenation';

const Catalog = () => {
  return (
    <>
    <CatalogBanner/>
    <CatalogProducts/>
    <Pagenation/>
    </>
  )
}

export default Catalog;