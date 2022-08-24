const TopStoreDeals = ({ game }) => {
  return (
    <tr>
      <td>{game.title}</td>
      <td>{game.normalPrice}</td>
      <td>
        <button>{game.salePrice}</button>
      </td>
    </tr>
  );
};

export default TopStoreDeals;
