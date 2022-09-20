const TopStoreDeals = ({ game }) => {
  const { title, normalPrice, dealID, salePrice } = game;
  return (
    <tr>
      <td>
        <button>More info.</button>
      </td>
      <td>{title}</td>
      <td>{normalPrice}</td>
      <td>
        <a
          rel="noreferrer"
          href={`https://www.cheapshark.com/redirect?dealID=${dealID}`}
        >
          {salePrice}
        </a>
      </td>
    </tr>
  );
};

export default TopStoreDeals;
