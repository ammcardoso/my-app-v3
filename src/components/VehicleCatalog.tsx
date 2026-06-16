import React, { useState } from 'react';
import VehicleList from './VehicleList';
import type { Vehicle } from '../types/Vehicle';

const INITIAL_VEHICLES: Vehicle[] = [
  { id: 1, plate: 'ABC-1234', type: 'Carro', detectionTime: '15:42', confidence: 98.5 },
  { id: 2, plate: 'XYZ-9876', type: 'Caminhão', detectionTime: '15:45', confidence: 92.1 },
  { id: 3, plate: 'DEF-5678', type: 'Moto', detectionTime: '15:50', confidence: 89.4 },
  { id: 4, plate: 'GHI-9012', type: 'Ônibus', detectionTime: '16:05', confidence: 95.0 },
];

function VehicleCatalog() {
  const [vehicles, setVehicles] = useState<Vehicle[]>(INITIAL_VEHICLES);
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  const [formData, setFormData] = useState({
    plate: '',
    type: 'Carro',
    detectionTime: '',
    confidence: 90.0
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newVehicle: Vehicle = {
      id: Date.now(),
      plate: formData.plate,
      type: formData.type,
      detectionTime: formData.detectionTime,
      confidence: Number(formData.confidence)
    };

    setVehicles([newVehicle, ...vehicles]);
    setFormData({ plate: '', type: 'Carro', detectionTime: '', confidence: 90.0 });
  };

  const filteredVehicles = vehicles
    .filter(v => 
      v.plate.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.type.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => b.detectionTime.localeCompare(a.detectionTime));

  const getStatCount = (type: string) => vehicles.filter(v => v.type === type).length;

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold text-dark m-0">Catálogo de Veículos Detectados</h3>
        <span className="badge bg-dark fs-6">Exibindo: {filteredVehicles.length}</span>
      </div>

      <div className="row g-3 mb-4 align-items-center">
        <div className="col-lg-8">
          <div className="d-flex gap-2 overflow-auto py-1">
            <div className="border rounded px-3 py-2 bg-white shadow-sm flex-fill text-center">
              <span className="d-block small text-muted text-uppercase fw-bold" style={{ fontSize: '0.7rem' }}>Carros</span>
              <span className="fs-5 fw-bold text-primary">{getStatCount('Carro')}</span>
            </div>
            <div className="border rounded px-3 py-2 bg-white shadow-sm flex-fill text-center">
              <span className="d-block small text-muted text-uppercase fw-bold" style={{ fontSize: '0.7rem' }}>Motos</span>
              <span className="fs-5 fw-bold text-success">{getStatCount('Moto')}</span>
            </div>
            <div className="border rounded px-3 py-2 bg-white shadow-sm flex-fill text-center">
              <span className="d-block small text-muted text-uppercase fw-bold" style={{ fontSize: '0.7rem' }}>Caminhões</span>
              <span className="fs-5 fw-bold text-danger">{getStatCount('Caminhão')}</span>
            </div>
            <div className="border rounded px-3 py-2 bg-white shadow-sm flex-fill text-center">
              <span className="d-block small text-muted text-uppercase fw-bold" style={{ fontSize: '0.7rem' }}>Ônibus</span>
              <span className="fs-5 fw-bold text-warning">{getStatCount('Ônibus')}</span>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="position-relative">
            <span className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted">
              <i className="bi bi-search"></i>
            </span>
            <input 
              type="text" 
              className="form-control ps-5 py-2 shadow-sm border-0 bg-white" 
              placeholder="Filtrar por placa ou tipo..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-12">
          <div className="card border-0 shadow-sm p-4 bg-white">
            <h6 className="text-dark fw-bold text-uppercase small mb-3 d-flex align-items-center gap-2">
              <i className="bi bi-plus-circle-fill text-secondary"></i>
              Simulador (Registro Manual)
            </h6>
            
            <form onSubmit={handleSubmit} className="row g-3 align-items-end">
              <div className="col-sm-6 col-md-3">
                <label className="form-label small fw-bold text-muted">Placa do Veículo</label>
                <input 
                  type="text" 
                  className="form-control bg-light border-0" 
                  name="plate" 
                  value={formData.plate} 
                  onChange={handleInputChange} 
                  required 
                  placeholder="Ex: AAA-0000" 
                />
              </div>
              
              <div className="col-sm-6 col-md-2">
                <label className="form-label small fw-bold text-muted">Classificação</label>
                <select 
                  className="form-select bg-light border-0" 
                  name="type" 
                  value={formData.type} 
                  onChange={handleInputChange} 
                  required
                >
                  <option value="Carro">Carro</option>
                  <option value="Moto">Moto</option>
                  <option value="Caminhão">Caminhão</option>
                  <option value="Ônibus">Ônibus</option>
                </select>
              </div>
              
              <div className="col-sm-6 col-md-3">
                <label className="form-label small fw-bold text-muted">Horário da Detecção</label>
                <input 
                  type="time" 
                  className="form-control bg-light border-0" 
                  name="detectionTime" 
                  value={formData.detectionTime} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              
              <div className="col-sm-6 col-md-2">
                <label className="form-label small fw-bold text-muted">Confiança IA (%)</label>
                <input 
                  type="number" 
                  step="0.1" 
                  className="form-control bg-light border-0" 
                  name="confidence" 
                  value={formData.confidence} 
                  onChange={handleInputChange} 
                  min="0" 
                  max="100" 
                  required 
                />
              </div>
              
              <div className="col-12 col-md-2">
                <button type="submit" className="btn btn-dark w-100 fw-bold d-flex align-items-center justify-content-center gap-2">
                  <i className="bi bi-plus-lg"></i> Adicionar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <VehicleList vehicles={filteredVehicles} />
    </div>
  );
}

export default VehicleCatalog;