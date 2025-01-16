import Confetti from "react-confetti";
import { useGlobalContext } from "../context";

const Modal = () => {
  const { closeModal, isModalOpen, correct, questions } = useGlobalContext();
  const score = ((correct / questions.length) * 100).toFixed(0);
  const isPass = score > 40;

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay with blur effect */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      
      {/* Confetti effect for passing score */}
      {isPass && <Confetti recycle={false} numberOfPieces={500} />}

      {/* Modal Content */}
      <div className="relative transform transition-all duration-300 ease-in-out 
                    bg-white dark:bg-gray-800 rounded-2xl shadow-2xl 
                    p-8 mx-4 max-w-md w-full">
        <h4 className="text-4xl font-bold mb-6 dark:text-white">
          Your Score:{' '}
          <span className={`${isPass ? 'text-green-500' : 'text-red-500'}`}>
            {score}%
          </span>
        </h4>

        <div className="space-y-4">
          <p className="text-lg dark:text-gray-200">
            You got <span className="font-semibold">{correct}</span> out of{' '}
            <span className="font-semibold">{questions.length}</span> questions
          </p>
          
          {isPass && (
            <p className="text-xl font-medium text-green-500 animate-bounce">
              🎉 Congratulations! 🎉
            </p>
          )}

          <button
            onClick={closeModal}
            className="w-full py-3 px-8 rounded-xl text-white font-medium
                     bg-gradient-to-r from-yellow-500 to-yellow-600
                     hover:from-yellow-600 hover:to-yellow-700
                     transform transition-all duration-200 hover:scale-105
                     focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
