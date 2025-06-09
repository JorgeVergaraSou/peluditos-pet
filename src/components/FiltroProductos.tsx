import React from 'react';

interface Props {
  onFiltroChange: (valor: string) => void;
}

const FiltroProductos: React.FC<Props> = ({ onFiltroChange }) => {
  return (
    <div className="mb-4 text-center">
      <input
        type="text"
        className="form-control w-50 mx-auto"
        placeholder="Buscar productos por nombre..."
        onChange={(e) => onFiltroChange(e.target.value)}
      />
    </div>
  );
};

export default FiltroProductos;