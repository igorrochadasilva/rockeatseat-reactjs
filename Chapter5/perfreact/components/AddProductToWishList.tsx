export interface AddProductToWishListProps {
  onAddToWishList: () => void;
  onRequestClose: () => void;
}

export default function AddProductToWishList({
  onAddToWishList,
  onRequestClose,
}: AddProductToWishListProps) {
  return (
    <span>
      Desejar adicionar aos favoritos?
      <button onClick={onAddToWishList}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  );
}
