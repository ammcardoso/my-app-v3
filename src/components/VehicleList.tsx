import type { Vehicle } from '../types/Vehicle';
import VehicleCard from './VehicleCard';

interface VehicleListProps {
  vehicles: Vehicle[];
}

function VehicleList({ vehicles }: VehicleListProps) {
  if (vehicles.length === 0) {
    return (
      <div className="alert alert-warning text-center border-0 shadow-sm" role="alert">
        <i className="bi bi-search me-2"></i>
        Nenhum veículo encontrado para o termo pesquisado.
      </div>
    );
  }

  return (
    <div className="row">
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
}

export default VehicleList;