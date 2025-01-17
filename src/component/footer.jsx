const Footer = ({ items }) => {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentPacked = (numPacked / numItems) * 100;
  return (
    <div className="footerWrapper">
      {percentPacked === 100
        ? "Shopping completed"
        : `Total Item : ${numItems}--- Completed Items:${numPacked}--
      ${percentPacked}%`}
    </div>
  );
};

export default Footer;
