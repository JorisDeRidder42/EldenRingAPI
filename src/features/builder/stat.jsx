const Stat = ({ label, value }) => {
  return (
    <div className="row">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
};
export default Stat;