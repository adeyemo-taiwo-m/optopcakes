import { Button } from "react-scroll";
import Modal from "../../ui/Modal";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import useOutsideClick from "../../hooks/useOutsideClick";

function OtherServiceDetails({ serviceData = [], title }) {
  const { setOpenServiceModal } = useContext(AppContext);
  const modalRef = useOutsideClick(() => setOpenServiceModal(false));
  return (
    <Modal ref={modalRef} closeModal={() => setOpenServiceModal(false)}>
      <h2 className="text-base tab:text-lg font-semibold mb-4 text-primary-default text-center">
        {title} Menu
      </h2>

      <div className="overflow-x-auto mb-4">
        <table className="w-full border-collapse rounded-sm overflow-hidden">
          <thead>
            <tr className="bg-primary-default/10 px-4  text-gray-800 text-sm">
              <th className="text-left p-2 font-semibold">Service Type</th>
              <th className="text-right p-2 font-semibold">Price</th>
            </tr>
          </thead>
          <tbody>
            {serviceData.map((item, index) => (
              <tr
                key={index}
                className="border-b  border-gray-200 text-sm hover:bg-gray-50"
              >
                <td className="p-2  text-gray-700">{item.name}</td>
                <td className="p-2 text-right text-gray-800 font-medium">
                  ₦{item.price.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Modal>
  );
}

export default OtherServiceDetails;
