export default function WeatherStat({ label, value }) {
  return (
    <div className="bg-blue-50 rounded-xl p-4 text-sm text-gray-600">
      <p className="font-semibold">{label}</p>
      <p className="text-xl font-bold text-blue-700">{value}</p>
    </div>
  );
}
