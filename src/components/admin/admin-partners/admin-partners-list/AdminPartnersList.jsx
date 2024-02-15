import { useSelector } from "react-redux";
import AdminPartnersListItem from "./admin-partners-list-item/AdminPartnersListItem";

const AdminPartnersList = ({ getPartnersData }) => {
  const partnersData = useSelector((state) => state.admin.partnersData);

  return (
    <div className="admin-content-partners-list">
      {partnersData &&
        partnersData.length !== 0 &&
        partnersData.map((item) => {
          return (
            <AdminPartnersListItem
              key={item.id}
              item={item}
              getPartnersData={getPartnersData}
            />
          );
        })}
    </div>
  );
};

export default AdminPartnersList;
