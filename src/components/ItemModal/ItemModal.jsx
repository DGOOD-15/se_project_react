import "./ItemModal.css";

function ItemModal({ isOpen, onClose, card, onDeleteClick }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close_preview"
        ></button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
        <button
          type="text"
          className="modal__item-delete-btn"
          onClick={() => onDeleteClick(card._id)}
        >
          Delete item
        </button>
      </div>
    </div>
  );
}

export default ItemModal;
