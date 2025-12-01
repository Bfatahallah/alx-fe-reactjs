import { useImageModalStore } from '../store/imageModalStore'

export default function ImageModal() {
  const { isOpen, selectedImage, closeModal } = useImageModalStore()

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={closeModal}
    >
      <button
        aria-label="Close image"
        onClick={(e) => {
          e.stopPropagation()
          closeModal()
        }}
        className="absolute top-6 right-6 rounded-full bg-white/10 text-white p-2 transition-transform transition-colors duration-200 hover:scale-110 hover:bg-red-600"
      >
        ✕
      </button>
      <div
        className="mx-4 sm:mx-6 lg:mx-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-neutral-900/90 border border-white/20 rounded-xl shadow-xl p-4 sm:p-6">
          <div className="w-[80vw] sm:w-[75vw] md:w-[65vw] lg:w-[55vw] max-w-[1000px] h-[65vh] sm:h-[60vh] md:h-[55vh] lg:h-[50vh] flex items-center justify-center overflow-hidden">
            <img
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-full object-contain"
              loading="eager"
            />
          </div>
          <p className="mt-3 text-xs text-gray-200/90 text-center">
            All images were made by AI (OpenAI's DALL·E 2) and are for preview purposes only.
          </p>
        </div>
      </div>
    </div>
  )
}