const Stat = ({ label, value, className }) => {
  return (
    <div className="statRow">
      <span>{label}</span>
      <span className={className}>{value}</span>
    </div>
  );
};
export default Stat;