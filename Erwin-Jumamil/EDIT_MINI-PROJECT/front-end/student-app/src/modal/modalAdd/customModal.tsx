import { useNavigate } from "react-router-dom";

export const CustomModal = ({ closeModal, isAddstudent }: any) => {
  const navigate = useNavigate();
  const confirm = (e: any) => {
    navigate("/");
    closeModal();
  };

  return (
    <>
      <div
        className="fixed p-4 overflow-y-auto md:inset-0 h-modal md:h-full h-screen 
        flex justify-center items-center backdrop-blur-xl"
      >
        <div className="relative w-full h-full max-w-xs md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {isAddstudent
                  ? "Add Student Confirmation"
                  : "Update Student Confirmation"}
              </h3>
            </div>

            <div className="p-6 space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {isAddstudent
                  ? "Student Added to the list"
                  : "Information Update"}
              </p>
            </div>

            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="defaultModal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={confirm}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
