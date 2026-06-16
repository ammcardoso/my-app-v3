interface StatCardProps {
    title: string;
    value: string;
    icon: string;
    isAlert?: boolean; 
}

function StatCard({ title, value, icon, isAlert = false }: StatCardProps) {
    return (
        <div className="col-md-4 mb-4">
            <div className={`card h-100 border-0 shadow-sm p-4 ${isAlert ? 'bg-danger bg-opacity-10 text-danger' : 'bg-white text-dark'}`}>
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <span className="text-muted d-block small text-uppercase fw-bold mb-1" style={{ fontSize: '0.75rem' }}>
                            {title}
                        </span>
                        <h4 className="fw-bold m-0">{value}</h4>
                    </div>
                    <div className={`fs-2 ${isAlert ? 'text-danger' : 'text-primary'}`}>
                        <i className={`bi ${icon}`}></i>
                    </div>
                </div>

                {isAlert && (
                    <div className="alert alert-danger mt-3 mb-0 py-2 small fw-bold text-center border-0">
                        <i className="bi bi-exclamation-triangle-fill me-1"></i> Alerta ativo
                    </div>
                )}
            </div>
        </div>
    );
}

export default StatCard;