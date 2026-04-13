import WeaponDetailCard  from '../features/details/WeaponDetailCard';

const CategoryPage = ({ endpoint }) => {
  if (endpoint === "/weapons") return <WeaponDetailCard />;
}
export default CategoryPage;