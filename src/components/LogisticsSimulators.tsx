import React, { useState } from 'react';
import { Calculator, PackageCheck, BarChart3, RefreshCw } from 'lucide-react';

export const EOQCalculatorSimulator: React.FC<{ lang: 'id' | 'en' }> = ({ lang }) => {
  const [annualDemand, setAnnualDemand] = useState(12000);
  const [orderCost, setOrderCost] = useState(250000); // Rp per pesanan
  const [holdingCost, setHoldingCost] = useState(15000); // Rp per unit per tahun
  const [leadTimeDays, setLeadTimeDays] = useState(7);

  // EOQ = sqrt((2 * D * S) / H)
  const eoq = Math.round(Math.sqrt((2 * annualDemand * orderCost) / holdingCost));
  const ordersPerYear = (annualDemand / (eoq || 1)).toFixed(1);
  const dailyDemand = annualDemand / 365;
  const reorderPoint = Math.round(dailyDemand * leadTimeDays);
  const totalAnnualCost = Math.round(
    (annualDemand / (eoq || 1)) * orderCost + (eoq / 2) * holdingCost
  );

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-5 mt-6">
      <div className="flex items-center gap-2 mb-3">
        <Calculator className="w-4 h-4 text-rose-500" />
        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
          {lang === 'id' ? 'Simulasi Interaktif: Economic Order Quantity (EOQ)' : 'Interactive Simulation: Economic Order Quantity (EOQ)'}
        </h4>
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
        {lang === 'id'
          ? 'Kalkulasi kuantitas pesanan optimal untuk meminimalkan total biaya pemesanan dan biaya penyimpanan inventaris gudang.'
          : 'Calculate optimal order quantity balancing inventory holding and procurement ordering costs.'}
      </p>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium">
        <div>
          <div className="flex justify-between text-slate-700 dark:text-slate-300 mb-1">
            <span>{lang === 'id' ? 'Permintaan Tahunan (D)' : 'Annual Demand (D)'}</span>
            <span className="font-bold text-rose-600 dark:text-rose-400">{annualDemand.toLocaleString()} unit</span>
          </div>
          <input
            type="range"
            min="1000"
            max="50000"
            step="500"
            value={annualDemand}
            onChange={e => setAnnualDemand(Number(e.target.value))}
            className="w-full accent-rose-500"
          />
        </div>

        <div>
          <div className="flex justify-between text-slate-700 dark:text-slate-300 mb-1">
            <span>{lang === 'id' ? 'Biaya Pemesanan / Order (S)' : 'Ordering Cost (S)'}</span>
            <span className="font-bold text-rose-600 dark:text-rose-400">Rp {orderCost.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="50000"
            max="1000000"
            step="25000"
            value={orderCost}
            onChange={e => setOrderCost(Number(e.target.value))}
            className="w-full accent-rose-500"
          />
        </div>

        <div>
          <div className="flex justify-between text-slate-700 dark:text-slate-300 mb-1">
            <span>{lang === 'id' ? 'Biaya Simpan / Unit / Tahun (H)' : 'Holding Cost / Unit / Yr (H)'}</span>
            <span className="font-bold text-rose-600 dark:text-rose-400">Rp {holdingCost.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="2000"
            max="100000"
            step="1000"
            value={holdingCost}
            onChange={e => setHoldingCost(Number(e.target.value))}
            className="w-full accent-rose-500"
          />
        </div>

        <div>
          <div className="flex justify-between text-slate-700 dark:text-slate-300 mb-1">
            <span>{lang === 'id' ? 'Lead Time Pemasok' : 'Supplier Lead Time'}</span>
            <span className="font-bold text-rose-600 dark:text-rose-400">{leadTimeDays} {lang === 'id' ? 'Hari' : 'Days'}</span>
          </div>
          <input
            type="range"
            min="1"
            max="30"
            value={leadTimeDays}
            onChange={e => setLeadTimeDays(Number(e.target.value))}
            className="w-full accent-rose-500"
          />
        </div>
      </div>

      {/* Benchmark Results */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 pt-4 border-t border-slate-200 dark:border-slate-800">
        <div className="p-3 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-center">
          <div className="text-[10px] font-semibold text-rose-700 dark:text-rose-300">
            {lang === 'id' ? 'Ukuran Lot Optimal (EOQ)' : 'Optimal EOQ Lot'}
          </div>
          <div className="text-lg font-extrabold text-rose-600 dark:text-rose-400 mt-0.5 tabular-nums">
            {eoq.toLocaleString()} unit
          </div>
          <div className="text-[10px] text-rose-600/80 dark:text-rose-400/80 mt-0.5">
            {ordersPerYear}x / {lang === 'id' ? 'tahun' : 'year'}
          </div>
        </div>

        <div className="p-3 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-[10px] font-semibold text-slate-700 dark:text-slate-300">
            {lang === 'id' ? 'Reorder Point (ROP)' : 'Reorder Point'}
          </div>
          <div className="text-lg font-bold text-slate-800 dark:text-slate-200 mt-0.5 tabular-nums">
            {reorderPoint.toLocaleString()} unit
          </div>
          <div className="text-[10px] text-slate-400 mt-0.5">
            {lang === 'id' ? 'Pemicu restock' : 'Restock trigger'}
          </div>
        </div>

        <div className="p-3 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center col-span-2">
          <div className="text-[10px] font-semibold text-slate-700 dark:text-slate-300">
            {lang === 'id' ? 'Estimasi Total Biaya Inventaris Tahunan' : 'Total Estimated Annual Inventory Cost'}
          </div>
          <div className="text-lg font-bold text-slate-800 dark:text-slate-200 mt-0.5 tabular-nums">
            Rp {totalAnnualCost.toLocaleString()}
          </div>
          <div className="text-[10px] text-slate-400 mt-0.5">
            {lang === 'id' ? 'Efisiensi biaya pemesanan + simpan' : 'Optimized holding + ordering'}
          </div>
        </div>
      </div>
    </div>
  );
};

export const HouseOfQualitySimulator: React.FC<{ lang: 'id' | 'en' }> = ({ lang }) => {
  const [prioritySpeed, setPrioritySpeed] = useState(5);
  const [priorityAccuracy, setPriorityAccuracy] = useState(5);
  const [prioritySafety, setPrioritySafety] = useState(4);

  // Correlations: 9 = strong, 3 = medium, 1 = weak
  // Technical parameters:
  // 1. Digital WMS Barcode Scanning
  // 2. Cycle Count Frequency
  // 3. Ergonomic Packaging SOP
  const scoreWms = prioritySpeed * 9 + priorityAccuracy * 9 + prioritySafety * 3;
  const scoreCycle = prioritySpeed * 3 + priorityAccuracy * 9 + prioritySafety * 1;
  const scorePackaging = prioritySpeed * 1 + priorityAccuracy * 3 + prioritySafety * 9;

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-5 mt-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <PackageCheck className="w-4 h-4 text-rose-500" />
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
            {lang === 'id' ? 'Simulasi Matriks Pembobotan House of Quality (QFD)' : 'House of Quality (QFD) Priority Matrix'}
          </h4>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 font-semibold">
          QFD Analysis
        </span>
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
        {lang === 'id'
          ? 'Sesuaikan bobot Voice of Customer (VOC) untuk melihat prioritas perbaikan teknis sistem logistik secara real-time.'
          : 'Adjust Voice of Customer (VOC) importance to recalculate technical logistics engineering priorities.'}
      </p>

      {/* Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs mb-4">
        <div>
          <div className="flex justify-between text-slate-700 dark:text-slate-300 mb-1">
            <span>{lang === 'id' ? 'Kecepatan Pengiriman' : 'Delivery Speed'}</span>
            <span className="font-bold text-rose-500">{prioritySpeed} / 5</span>
          </div>
          <input
            type="range"
            min="1"
            max="5"
            value={prioritySpeed}
            onChange={e => setPrioritySpeed(Number(e.target.value))}
            className="w-full accent-rose-500"
          />
        </div>

        <div>
          <div className="flex justify-between text-slate-700 dark:text-slate-300 mb-1">
            <span>{lang === 'id' ? 'Akurasi Stok Barang' : 'Inventory Accuracy'}</span>
            <span className="font-bold text-rose-500">{priorityAccuracy} / 5</span>
          </div>
          <input
            type="range"
            min="1"
            max="5"
            value={priorityAccuracy}
            onChange={e => setPriorityAccuracy(Number(e.target.value))}
            className="w-full accent-rose-500"
          />
        </div>

        <div>
          <div className="flex justify-between text-slate-700 dark:text-slate-300 mb-1">
            <span>{lang === 'id' ? 'Keamanan Fisik Barang' : 'Cargo Safety'}</span>
            <span className="font-bold text-rose-500">{prioritySafety} / 5</span>
          </div>
          <input
            type="range"
            min="1"
            max="5"
            value={prioritySafety}
            onChange={e => setPrioritySafety(Number(e.target.value))}
            className="w-full accent-rose-500"
          />
        </div>
      </div>

      {/* Calculated Technical Priorities */}
      <div className="space-y-2 pt-3 border-t border-slate-200 dark:border-slate-800 text-xs">
        <div className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <div>
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              1. Digital WMS & Barcode Scanning System
            </span>
            <span className="block text-[10px] text-slate-400">
              {lang === 'id' ? 'Korelasi kuat dengan kecepatan & akurasi' : 'Strong correlation with speed & precision'}
            </span>
          </div>
          <span className="text-sm font-extrabold text-rose-600 dark:text-rose-400 tabular-nums">
            Score: {scoreWms}
          </span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <div>
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              2. Frekuensi Perpetual Cycle Count / Stock Opname
            </span>
            <span className="block text-[10px] text-slate-400">
              {lang === 'id' ? 'Mencegah selisih fisik vs sistem' : 'Prevents inventory record shrinkage'}
            </span>
          </div>
          <span className="text-sm font-extrabold text-slate-800 dark:text-slate-200 tabular-nums">
            Score: {scoreCycle}
          </span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <div>
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              3. Standarisasi SOP Packaging & Handling
            </span>
            <span className="block text-[10px] text-slate-400">
              {lang === 'id' ? 'Menekan tingkat kerusakan saat transit' : 'Eliminates damages during transit'}
            </span>
          </div>
          <span className="text-sm font-extrabold text-slate-800 dark:text-slate-200 tabular-nums">
            Score: {scorePackaging}
          </span>
        </div>
      </div>
    </div>
  );
};
