import React, { useState, useEffect } from 'react';
import { Activity, Cpu, HardDrive, Wifi, Zap } from 'lucide-react';

const SystemMonitor = () => {
  const [metrics, setMetrics] = useState({
    cpu: 0,
    memory: 0,
    network: 0,
    performance: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        cpu: Math.floor(Math.random() * 30) + 70, // 70-100%
        memory: Math.floor(Math.random() * 20) + 60, // 60-80%
        network: Math.floor(Math.random() * 40) + 50, // 50-90%
        performance: Math.floor(Math.random() * 15) + 85 // 85-100%
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (value: number, type: string) => {
    if (type === 'performance') {
      return value > 90 ? 'text-green-400' : value > 80 ? 'text-yellow-400' : 'text-red-400';
    }
    return value > 80 ? 'text-red-400' : value > 60 ? 'text-yellow-400' : 'text-green-400';
  };

  const getBarColor = (value: number, type: string) => {
    if (type === 'performance') {
      return value > 90 ? 'bg-green-400' : value > 80 ? 'bg-yellow-400' : 'bg-red-400';
    }
    return value > 80 ? 'bg-red-400' : value > 60 ? 'bg-yellow-400' : 'bg-green-400';
  };

  return (
    <>
      {/* Monitor Toggle */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed top-20 right-6 z-40 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-600 hover:border-green-400 transition-all duration-300"
        title="System Monitor"
      >
        <Activity className="w-5 h-5 text-green-400" />
      </button>

      {/* System Monitor Panel */}
      {isVisible && (
        <div className="fixed top-32 right-6 z-40 w-80 bg-gray-900 border border-green-400 rounded-lg shadow-2xl p-4">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-700">
            <Activity className="w-5 h-5 text-green-400" />
            <h3 className="font-mono text-green-400 font-semibold">System Monitor</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="ml-auto text-gray-400 hover:text-white text-sm"
            >
              ✕
            </button>
          </div>

          <div className="space-y-4 font-mono text-sm">
            {/* CPU Usage */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300">CPU</span>
                </div>
                <span className={getStatusColor(metrics.cpu, 'cpu')}>{metrics.cpu}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-1000 ${getBarColor(metrics.cpu, 'cpu')}`}
                  style={{ width: `${metrics.cpu}%` }}
                ></div>
              </div>
            </div>

            {/* Memory Usage */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300">Memory</span>
                </div>
                <span className={getStatusColor(metrics.memory, 'memory')}>{metrics.memory}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-1000 ${getBarColor(metrics.memory, 'memory')}`}
                  style={{ width: `${metrics.memory}%` }}
                ></div>
              </div>
            </div>

            {/* Network */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-300">Network</span>
                </div>
                <span className={getStatusColor(metrics.network, 'network')}>{metrics.network}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-1000 ${getBarColor(metrics.network, 'network')}`}
                  style={{ width: `${metrics.network}%` }}
                ></div>
              </div>
            </div>

            {/* Performance Score */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-gray-300">Performance</span>
                </div>
                <span className={getStatusColor(metrics.performance, 'performance')}>{metrics.performance}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-1000 ${getBarColor(metrics.performance, 'performance')}`}
                  style={{ width: `${metrics.performance}%` }}
                ></div>
              </div>
            </div>

            {/* Status */}
            <div className="pt-2 border-t border-gray-700">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">Status:</span>
                <span className="text-green-400 flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Online
                </span>
              </div>
              <div className="flex items-center justify-between text-xs mt-1">
                <span className="text-gray-400">Uptime:</span>
                <span className="text-gray-300">{Math.floor(Date.now() / 1000) % 86400}s</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SystemMonitor;