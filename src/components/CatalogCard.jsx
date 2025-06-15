const CatalogCard = ({srce,name}) => {
    return (
      <div className="catalog-card">
        <img src={srce}  />
        <h3>{name}</h3>
      </div>
    )
  }
  
  export default CatalogCard