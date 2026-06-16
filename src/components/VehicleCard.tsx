import type { Vehicle } from "../types/Vehicle";

interface VehicleCardProps {
  vehicle: Vehicle;
}

function VehicleCard({ vehicle }: VehicleCardProps) {
  const getBadgeColor = (type: string) => {
    const t = type.toLowerCase();
    if (t.includes('carro')) return 'bg-primary';
    if (t.includes('caminhão') || t.includes('caminhao')) return 'bg-danger';
    if (t.includes('moto')) return 'bg-success';
    if (t.includes('ônibus') || t.includes('onibus')) return 'bg-warning text-dark';
    return 'bg-secondary';
  };

  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <div className="card h-100 border-0 shadow-sm p-3 bg-white">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className={`badge ${getBadgeColor(vehicle.type)}`}>
            {vehicle.type}
          </span>
          <small className="text-muted fw-bold">{vehicle.detectionTime}</small>
        </div>
        
        <h4 className="fw-bold text-center mb-3 border bg-light py-2 rounded font-monospace">
          {vehicle.plate.toUpperCase()}
        </h4>
        
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <small className="text-muted">Confiança:</small>
          <span className={`fw-bold ${vehicle.confidence >= 90 ? 'text-success' : 'text-warning'}`}>
            {vehicle.confidence}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default VehicleCard;