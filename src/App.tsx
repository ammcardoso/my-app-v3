import StatCard from './components/StatCard';
import VehicleCatalog from './components/VehicleCatalog'; 
import cap1 from './assets/img.png';

function App() {
  const title: string = "Contagem e Classificação de Veículos";
  const subTitle: string = "Protótipo de um Sistema Web para Monitoramento de Tráfego de Veículos em Tempo Real";

  const today = new Date();
  const formattedDate = today.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
  const currentTime = today.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const topStats = [
    { id: 1, title: "Período de Análise", value: formattedDate, icon: "bi-calendar-check" },
    { id: 2, title: "Último Registro", value: currentTime, icon: "bi-clock-history" },
    { id: 3, title: "Alerta Ativo", value: "Restrição de Carga Pesada", icon: "bi-exclamation-octagon", isAlert: false }
  ];

  return (
    <div className="bg-light d-flex flex-column min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm mb-4">
        <div className="container">
          <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="#">
            Sistema de Contagem e Classificação de Veículos
          </a>
        </div>
      </nav>

      <div className="container flex-fill">
        <div className="mb-4 p-4 bg-white rounded shadow-sm">
          <h2 className="fw-bold text-dark mb-1">{title}</h2>
          <p className="text-muted m-0">{subTitle}</p>
        </div>

        <div className="row">
          {topStats.map(stat => (
            <StatCard
              key={stat.id}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              isAlert={stat.isAlert}
            />
          ))}
        </div>

        <div className="row mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="card border-0 shadow-sm p-3 bg-white h-100 d-flex flex-column justify-content-between">
              <div>
                <h6 className="text-dark fw-bold text-uppercase small mb-3">
                  Captura de Tela (Processamento)
                </h6>
                <div className="rounded overflow-hidden position-relative" style={{ height: '240px' }}>
                  <img
                    src={cap1}
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                    alt="Processamento YOLO"
                  />
                  <div className="position-absolute bottom-0 start-0 bg-dark bg-opacity-75 text-white p-2 small w-100 font-monospace" style={{ fontSize: '0.7rem' }}>
                    CAM_ID_04 // LATENCY: 14ms
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <span className="badge bg-success bg-opacity-10 text-success p-2 w-100 rounded-1 text-center">
                  Feed de Vídeo Ativo
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card border-0 shadow-sm p-3 bg-white h-100">
              <h6 className="text-dark fw-bold text-uppercase small mb-3">
                Fluxo de Veículos
              </h6>
              <div className="d-flex align-items-center h-100">
                <img
                  src="https://quickchart.io/chart?c={type:'line',data:{labels:['00:00','04:00','08:00','12:00','16:00','20:00'],datasets:[{label:'Média (Veículos/Hr)',data:[15,8,142,95,168,74],borderColor:'%23dc3545',backgroundColor:'rgba(220,53,69,0.05)',fill:true,pointRadius:3}]}}"
                  className="w-100 rounded"
                  alt="Gráfico de Linha"
                />
              </div>
            </div>
          </div>
        </div>

        <hr className="text-muted border-2 opacity-25" />
        <VehicleCatalog />

        <footer className="mt-5 pt-4 pb-4 text-center border-top border-light">
          <p className="text-muted small m-0">
            &copy; {new Date().getFullYear()} — Adriana Cardoso | Projeto TCC
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;